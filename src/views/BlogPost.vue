<template>
  <div class="blog-post-container">
    <div class="blog-post-header">
      <img :src="post.image" :alt="post.title" class="blog-post-image">
    </div>
    <div class="blog-post-content">
      <h1 class="blog-post-title">{{ post.title }}</h1>
      <div class="project-chips-container">
        <div v-for="(tag, index) in post.tags" :key="index" class="chip on-color dark">
          {{ tag }}
        </div>
      </div>
      <div class="blog-post-text" v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      post: {
        title: '',
        image: '',
        tags: [],
        content: ''
      }
    }
  },
  created() {
    // Here we would normally fetch the blog post data based on the route parameter
    // For now, we'll use hardcoded data for the example post
    if (this.$route.params.id === 'poisk-klientov') {
      this.post = {
        title: this.$t('blog.post1.title'),
        image: require('@/assets/images/poisk-klientov.jpg'),
        tags: ['AI', 'B2B', 'Sales'],
        content: `
          <h2>Что такое AI-агенты?</h2>
          <p>AI-агенты – программы на базе искусственного интеллекта, способные самостоятельно выполнять широкий спектр задач. Главная их особенность — они могут выполнять самостоятельные действия.</p>
          
          <p>Подробнее, почему это один из главных трендов среди новых технологий и почему AI-агенты скоро появятся в самых разных отраслях экономики — можете прочитать в нашей статье для проекта Sostav.ru Aitoolz.</p>
          
          <h2>Как AI-агенты ищут клиентов?</h2>
          <p>Продажи сложная ниша с большим количеством рутины. Поэтому мы разработали AI-агента — систему WaiWai, которая автоматизирует поиск клиентов в b2b секторе. Ориентируясь по заданному портрету клиента, она находит подобных в открытых источниках данных и ведет с ними переписку. Инструмент создан упростить процесс лидогенерации, экономя время и ресурсы бизнеса.</p>
          
          <h2>Какие лиды может найти система?</h2>
          <p>Наша система способна находить потенциальных клиентов по широкому спектру параметров. Основная возможность – поиск по профессиональным характеристикам потенциального клиента.</p>
          
          <p>Гибкость системы позволяет формировать как очень широкие запросы, например, «IT-специалисты в России», так и узкоспециализированные, например «брокеры в Нью-Йорке со знанием русского языка».</p>
          
          <p>Например, мы можем искать:</p>
          <ul>
            <li>Представителей определенных должностей: директора технические (CTO), по маркетингу (CMO), финансовые, по продукту и владельцы бизнеса по различным отраслям.</li>
            <li>Специалистов конкретных профессий: разработчики на C или Python, дантисты, организаторы мероприятий, логисты, брокеры, юристы — список можно продолжать до бесконечности.</li>
            <li>Людей по дополнительным критериям. Например, сотрудников компаний определенного размера или специалистов, интересующихся edtech, участвовавших в профильных мероприятиях.</li>
          </ul>
          
          <h2>Ограничения системы: что AI-агент не может найти?</h2>
          <p>Несмотря на высокую эффективность, наша система имеет определенные ограничения:</p>
          <ul>
            <li>Данные из закрытых источников</li>
            <li>Технически невозможные запросы</li>
          </ul>
          
          <h2>Заключение</h2>
          <p>AI-агент по поиску клиентов для B2B – мощный инструмент для целевого поиска потенциальных клиентов. Он позволяет быстро и эффективно находить лидов по широкому спектру параметров, при этом работая исключительно с легальными открытыми источниками данных.</p>
          
          <p>Система отлично справляется с типовыми запросами по должности, локации и отрасли, а для особо сложных кейсов предлагает кастомные решения.</p>
        `
      }
    }
  }
}
</script>

<style>
.blog-post-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.blog-post-header {
  margin-bottom: 2rem;
}

.blog-post-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.blog-post-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 1rem;
}

.blog-post-text {
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #000000;
  margin-top: 2rem;
}

.blog-post-text h2 {
  font-family: Inter Tight, sans-serif;
  font-size: 1.75rem;
  line-height: 2rem;
  margin: 2rem 0 1rem;
}

.blog-post-text p {
  margin-bottom: 1rem;
}

.blog-post-text ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.blog-post-text li {
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 767px) {
  .blog-post-container {
    margin: 1rem auto;
  }

  .blog-post-title {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .blog-post-text {
    font-size: 1rem;
  }

  .blog-post-text h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
}
</style> 