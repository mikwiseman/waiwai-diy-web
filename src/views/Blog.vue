<template>
  <div class="blog-page">
    <div class="blog-container">
      <h1 class="blog-title">
        {{ t('blog.title') }}
      </h1>
      <div
        v-if="blogLoading"
        class="blog-status"
      >
        {{ t('blog.loading') }}
      </div>
      <div
        v-else-if="blogLoadFailed"
        class="blog-status blog-status--error"
      >
        {{ t('blog.error') }}
      </div>
      <div
        v-else-if="blogInitialized && formattedPosts.length === 0"
        class="blog-status"
      >
        {{ t('blog.empty') }}
      </div>
      <div
        v-else
        class="blog-cards"
      >
        <component
          :is="item.type === 'post' ? 'article' : 'section'"
          v-for="item in cardsWithChat"
          :key="item.key"
          :class="['blog-card', item.type === 'chat' ? 'blog-chat-card' : '']"
        >
          <template v-if="item.type === 'post'">
            <time class="blog-card-date">
              {{ item.post.formattedDate }}
            </time>
            <h2 class="blog-card-title">
              <a
                class="blog-card-link blog-card-title-link"
                :href="item.post.path"
              >
                {{ item.post.title }}
              </a>
            </h2>
            <p
              v-if="item.post.description"
              class="blog-card-description"
            >
              {{ item.post.description }}
            </p>
            <a
              class="blog-card-link blog-card-read-more"
              :href="item.post.path"
            >
              {{ t('blog.readMore') }}
            </a>
          </template>
          <template v-else>
            <h2 class="blog-chat-title">
              {{ t('blog.chat.title') }}
            </h2>
            <p class="blog-chat-description">
              {{ t('blog.chat.subtitle') }}
            </p>
            <div
              ref="chatMessagesContainer"
              class="blog-chat-messages"
            >
              <div
                v-if="chatHistoryLoading"
                class="blog-chat-status"
              >
                {{ t('blog.chat.loadingHistory') }}
              </div>
              <div
                v-else-if="chatMessages.length === 0"
                class="blog-chat-status"
              >
                {{ t('blog.chat.emptyState') }}
              </div>
              <ul
                v-else
                class="blog-chat-message-list"
              >
                <li
                  v-for="message in chatMessages"
                  :key="message.id"
                  class="blog-chat-message"
                  :class="message.role === 'assistant' ? 'blog-chat-message--assistant' : 'blog-chat-message--user'"
                >
                  {{ message.content }}
                </li>
              </ul>
            </div>
            <form
              class="blog-chat-form"
              @submit.prevent="handleChatSubmit"
            >
              <textarea
                v-model="chatInput"
                class="blog-chat-input"
                :placeholder="t('blog.chat.inputPlaceholder')"
                :disabled="chatSending"
              />
              <div class="blog-chat-actions">
                <button
                  class="blog-chat-submit"
                  type="submit"
                  :disabled="isChatSubmitDisabled"
                >
                  <span v-if="chatSending">
                    {{ t('blog.chat.sending') }}
                  </span>
                  <span v-else>
                    {{ t('blog.chat.send') }}
                  </span>
                </button>
                <div
                  v-if="chatError"
                  class="blog-chat-error"
                  role="alert"
                >
                  {{ chatError }}
                </div>
              </div>
            </form>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchBlogPosts, formatBlogDate } from '@/utils/blogPosts'

const CHAT_STORAGE_KEY = 'waiwaiBlogConversationId'
const CHAT_API_BASE_URL = 'https://content.getwaiwai.com'
const isBrowser = typeof window !== 'undefined'

export default defineComponent({
  name: 'BlogPage',
  setup() {
    const { t, locale } = useI18n()
    const blogPosts = ref([])
    const blogLoading = ref(true)
    const blogLoadFailed = ref(false)
    const blogInitialized = ref(false)
    const chatMessages = ref([])
    const chatHistoryLoading = ref(false)
    const chatSending = ref(false)
    const chatInput = ref('')
    const chatError = ref('')
    const conversationId = ref('')
    const chatMessagesContainer = ref(null)

    const loadPosts = async () => {
      blogLoading.value = true
      blogLoadFailed.value = false

      try {
        blogPosts.value = await fetchBlogPosts()
      } catch (error) {
        console.error('Failed to load blog posts', error)
        blogLoadFailed.value = true
      } finally {
        blogLoading.value = false
        blogInitialized.value = true
      }
    }

    const scrollChatToBottom = () => {
      nextTick(() => {
        if (chatMessagesContainer.value) {
          chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight
        }
      })
    }

    const hydrateChatMessages = async (existingConversationId) => {
      if (!existingConversationId) {
        return
      }

      chatHistoryLoading.value = true
      chatError.value = ''

      try {
        const response = await fetch(`${CHAT_API_BASE_URL}/api/chat/conversations/${existingConversationId}/messages`)

        if (response.status === 404) {
          conversationId.value = ''
          chatMessages.value = []
          return
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch messages: ${response.status}`)
        }

        const data = await response.json()

        if (Array.isArray(data?.messages)) {
          chatMessages.value = data.messages.map((message, index) => ({
            id: String(message?.id ?? `remote-${index}`),
            role: message?.role || 'assistant',
            content: message?.content || ''
          }))
          scrollChatToBottom()
        }
      } catch (error) {
        chatError.value = t('blog.chat.historyError')
        console.error('Failed to load chat history', error)
      } finally {
        chatHistoryLoading.value = false
      }
    }

    const handleChatSubmit = async () => {
      const messageToSend = chatInput.value.trim()

      if (!messageToSend || chatSending.value) {
        return
      }

      chatError.value = ''
      chatSending.value = true

      const optimisticMessageId = `local-${Date.now()}`
      const optimisticMessage = {
        id: optimisticMessageId,
        role: 'user',
        content: messageToSend
      }

      chatMessages.value = [...chatMessages.value, optimisticMessage]
      chatInput.value = ''
      scrollChatToBottom()

      try {
        const payload = JSON.stringify({ message: messageToSend })
        let response

        if (!conversationId.value) {
          response = await fetch(`${CHAT_API_BASE_URL}/api/chat/conversations`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: payload
          })
        } else {
          response = await fetch(`${CHAT_API_BASE_URL}/api/chat/conversations/${conversationId.value}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: payload
          })
        }

        if (!response.ok) {
          throw new Error(`Chat request failed with status ${response.status}`)
        }

        const data = await response.json()

        if (data?.conversationId) {
          conversationId.value = data.conversationId
        }

        if (data?.reply) {
          chatMessages.value = [...chatMessages.value, {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: data.reply
          }]
          scrollChatToBottom()
        }
      } catch (error) {
        chatMessages.value = chatMessages.value.filter((message) => message.id !== optimisticMessageId)
        chatError.value = t('blog.chat.sendError')
        console.error('Failed to send chat message', error)
      } finally {
        chatSending.value = false
      }
    }

    onMounted(async () => {
      loadPosts()

      if (isBrowser) {
        const storedConversationId = window.localStorage.getItem(CHAT_STORAGE_KEY)

        if (storedConversationId) {
          conversationId.value = storedConversationId
          await hydrateChatMessages(storedConversationId)
        }
      }
    })

    const formattedPosts = computed(() =>
      blogPosts.value.map((post) => ({
        ...post,
        formattedDate: formatBlogDate(post?.date, locale.value)
      }))
    )

    const cardsWithChat = computed(() => {
      const posts = formattedPosts.value
      const items = []
      let chatInserted = false

      posts.forEach((post, index) => {
        items.push({
          type: 'post',
          key: `post-${post.path}`,
          post
        })

        if (!chatInserted && index === 4) {
          items.push({
            type: 'chat',
            key: 'blog-chat-card'
          })
          chatInserted = true
        }
      })

      if (!chatInserted) {
        items.push({
          type: 'chat',
          key: 'blog-chat-card'
        })
      }

      return items
    })

    const isChatSubmitDisabled = computed(() => chatSending.value || chatInput.value.trim().length === 0)

    watch(conversationId, (newId) => {
      if (!isBrowser) {
        return
      }

      if (newId) {
        window.localStorage.setItem(CHAT_STORAGE_KEY, newId)
      } else {
        window.localStorage.removeItem(CHAT_STORAGE_KEY)
      }
    })

    return {
      t,
      blogLoading,
      blogLoadFailed,
      blogInitialized,
      formattedPosts,
      cardsWithChat,
      chatMessages,
      chatHistoryLoading,
      chatSending,
      chatInput,
      chatError,
      isChatSubmitDisabled,
      handleChatSubmit,
      chatMessagesContainer
    }
  }
})
</script>

<style scoped>
.blog-page {
  padding: 4rem 2rem;
  background-color: #fff;
  min-height: 100vh;
}

.blog-container {
  max-width: 1280px;
  margin: 0 auto;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 auto 3rem;
  max-width: 1280px;
  color: #000;
}

.blog-status {
  font-family: Inter Tight, sans-serif;
  font-size: 1rem;
  color: #475569;
}

.blog-status--error {
  color: #dc2626;
}

.blog-cards {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.blog-card {
  background: #fff;
  border-radius: 1.75rem;
  padding: 2.5rem;
  box-shadow: 0 24px 48px rgba(0, 39, 19, 0.12);
  border: 1px solid rgba(0, 27, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  color: #000;
}

.blog-card-date {
  font-size: 0.95rem;
  color: #000;
  opacity: 0.8;
}

.blog-card-title {
  font-family: inherit;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  color: #000;
}

.blog-card-title-link {
  text-decoration: none;
  color: inherit;
}

.blog-card-title-link:hover {
  color: #2563eb;
}

.blog-card-description {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6rem;
  color: #000;
}

.blog-card-link {
  font-weight: 600;
  text-decoration: none;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
}

.blog-card-link::after {
  content: '→';
  font-size: 1rem;
}

.blog-card-link:hover {
  color: #2563eb;
}

.blog-card-read-more {
  font-size: 1rem;
}

.blog-chat-card {
  gap: 1.5rem;
}

.blog-chat-title {
  font-family: inherit;
  font-size: 1.65rem;
  font-weight: 500;
  margin: 0;
  color: #000;
}

.blog-chat-description {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6rem;
  color: #1f2937;
}

.blog-chat-messages {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(0, 27, 15, 0.08);
  background: rgba(37, 99, 235, 0.04);
  max-height: 320px;
  overflow-y: auto;
}

.blog-chat-message-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.blog-chat-message {
  padding: 0.75rem 1rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(0, 27, 15, 0.08);
  background: #fff;
  font-size: 0.95rem;
  line-height: 1.5rem;
  max-width: 80%;
  align-self: flex-start;
}

.blog-chat-message--user {
  align-self: flex-end;
  background: #2563eb;
  color: #fff;
  border-color: rgba(37, 99, 235, 0.35);
}

.blog-chat-message--assistant {
  background: #f8fafc;
}

.blog-chat-status {
  font-size: 0.95rem;
  color: #475569;
}

.blog-chat-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-chat-input {
  width: 100%;
  min-height: 120px;
  border-radius: 1.25rem;
  border: 1px solid rgba(0, 27, 15, 0.1);
  padding: 1rem 1.25rem;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6rem;
  background: #f8fafc;
  resize: vertical;
}

.blog-chat-input:focus {
  outline: none;
  border-color: #2563eb;
  background: #fff;
}

.blog-chat-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.blog-chat-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.blog-chat-submit {
  border: none;
  border-radius: 999px;
  padding: 0.65rem 1.6rem;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;
}

.blog-chat-submit:hover:not(:disabled) {
  background: #1d4ed8;
}

.blog-chat-submit:disabled {
  background: rgba(37, 99, 235, 0.5);
  cursor: not-allowed;
}

.blog-chat-error {
  font-size: 0.9rem;
  color: #dc2626;
}

@media screen and (max-width: 991px) {
  .blog-title {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  .blog-card {
    padding: 2.1rem;
    gap: 1.1rem;
  }

  .blog-card-title {
    font-size: 1.65rem;
  }

  .blog-chat-title {
    font-size: 1.5rem;
  }

  .blog-chat-messages {
    max-height: 260px;
  }

  .blog-chat-input {
    min-height: 110px;
  }
}

@media screen and (max-width: 767px) {
  .blog-page {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  .blog-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .blog-card-title {
    font-size: 1.45rem;
  }

  .blog-chat-title {
    font-size: 1.35rem;
  }

  .blog-chat-description {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  .blog-chat-messages {
    padding: 1rem;
    max-height: 220px;
  }

  .blog-chat-message {
    font-size: 0.9rem;
    line-height: 1.35rem;
  }

  .blog-chat-input {
    min-height: 100px;
  }

  .blog-chat-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .blog-chat-submit {
    width: 100%;
    text-align: center;
  }
}
</style> 
