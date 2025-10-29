<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="blog-card blog-chat-card">
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
          v-for="message in renderedChatMessages"
          :key="message.id"
          class="blog-chat-message"
          :class="message.role === 'assistant' ? 'blog-chat-message--assistant' : 'blog-chat-message--user'"
        >
          <div
            class="blog-chat-message-content"
            v-html="message.renderedContent"
          />
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
  </section>
</template>

<script>
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

const CHAT_STORAGE_KEY = 'waiwaiBlogConversationId'
const CHAT_API_BASE_URL = 'https://content.getwaiwai.com'
const isBrowser = typeof window !== 'undefined'

export default defineComponent({
  name: 'BlogChat',
  setup() {
    const { t } = useI18n()
    const chatMessages = ref([])
    const chatHistoryLoading = ref(false)
    const chatSending = ref(false)
    const chatInput = ref('')
    const chatError = ref('')
    const conversationId = ref('')
    const chatMessagesContainer = ref(null)
    const markdown = new MarkdownIt({
      linkify: true,
      breaks: true
    })

    const scrollChatToBottom = () => {
      nextTick(() => {
        if (chatMessagesContainer.value) {
          chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight
        }
      })
    }

    const renderMarkdown = (content) => {
      const rawHtml = markdown.render(content || '')

      if (!isBrowser) {
        return rawHtml
      }

      return DOMPurify.sanitize(rawHtml)
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

    const isChatSubmitDisabled = computed(() => chatSending.value || chatInput.value.trim().length === 0)

    const renderedChatMessages = computed(() =>
      chatMessages.value.map((message) => ({
        ...message,
        renderedContent: renderMarkdown(message.content)
      }))
    )

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

    onMounted(async () => {
      if (!isBrowser) {
        return
      }

      const storedConversationId = window.localStorage.getItem(CHAT_STORAGE_KEY)

      if (storedConversationId) {
        conversationId.value = storedConversationId
        await hydrateChatMessages(storedConversationId)
      }
    })

    return {
      t,
      chatMessages,
      renderedChatMessages,
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
.blog-chat-card {
  border-radius: 1.75rem;
  padding: 2.25rem;
  box-shadow: 0 20px 40px rgba(0, 39, 19, 0.08);
  border: 1px solid rgba(0, 27, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  color: #000;
  background: #fff;
}

.blog-chat-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.blog-chat-description {
  font-size: 1rem;
  color: #475569;
  margin: 0;
  line-height: 1.5;
}

.blog-chat-messages {
  border: 1px solid rgba(15, 118, 110, 0.1);
  border-radius: 1.25rem;
  background: rgba(15, 118, 110, 0.04);
  max-height: 320px;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
}

.blog-chat-message-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.blog-chat-message {
  background: #fff;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  box-shadow: 0 10px 25px rgba(15, 118, 110, 0.08);
  border: 1px solid rgba(15, 118, 110, 0.1);
}

.blog-chat-message-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.blog-chat-message-content p {
  margin: 0;
}

.blog-chat-message-content ul {
  margin: 0.25rem 0 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.blog-chat-message-content li {
  font-size: 0.95rem;
  line-height: 1.5;
}

.blog-chat-message-content a {
  color: rgba(20, 83, 45, 0.95);
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.blog-chat-message-content a:hover {
  text-decoration-color: rgba(20, 83, 45, 0.6);
}

.blog-chat-message--user {
  align-self: flex-end;
  background: rgba(20, 83, 45, 0.95);
  color: #fff;
  border-color: rgba(20, 83, 45, 0.95);
}

.blog-chat-message--assistant {
  align-self: flex-start;
  background: #fff;
}

.blog-chat-status {
  text-align: center;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.4;
}

.blog-chat-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-chat-input {
  width: 100%;
  min-height: 140px;
  border-radius: 1.25rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(15, 118, 110, 0.14);
  background: rgba(248, 250, 252, 0.9);
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  resize: vertical;
  line-height: 1.5;
  color: #0f172a;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.blog-chat-input:focus {
  outline: none;
  border-color: rgba(20, 83, 45, 0.95);
  box-shadow: 0 0 0 4px rgba(20, 83, 45, 0.14);
}

.blog-chat-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.blog-chat-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.blog-chat-submit {
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  font-family: 'Roboto Mono', monospace;
  background: rgba(20, 83, 45, 0.95);
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.blog-chat-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(20, 83, 45, 0.18);
}

.blog-chat-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.blog-chat-error {
  color: #b91c1c;
  font-size: 0.9rem;
}

@media (max-width: 991px) {
  .blog-chat-title {
    font-size: 1.35rem;
  }

  .blog-chat-messages {
    max-height: 280px;
  }

  .blog-chat-input {
    min-height: 120px;
  }
}

@media (max-width: 767px) {
  .blog-chat-title {
    font-size: 1.25rem;
  }

  .blog-chat-description {
    font-size: 0.95rem;
  }

  .blog-chat-messages {
    max-height: 240px;
  }

  .blog-chat-message {
    font-size: 0.95rem;
  }

  .blog-chat-input {
    min-height: 110px;
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
