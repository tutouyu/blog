import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue')
const About = () => import('../views/about/about.vue')
const Message = () => import('../views/message/message.vue')
const Anime = () => import('../views/list/anime/anime.vue')
const Book = () => import('../views/list/book/book.vue')
const Music = () => import('../views/list/music/music.vue')
const Game = () => import('../views/list/game/game.vue')
const TimeLine = () => import('../views/time/timeLine.vue')
const Article = () => import('../views/article/article.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
},
{
    path:'/home',
    component: Home
},
{
  path:'/about',
  component: About
},
{
  path:'/message',
  component: Message
},
{
  path:'/timeLine',
  component: TimeLine
},
{
  path:'/music',
  component: Music
},
{
  path:'/game',
  component: Game
},
{
  path:'/book',
  component: Book
},
{
  path:'/anime',
  component: Anime
},
{
  path:'/article',
  component: Article
},
]

const router = new VueRouter({
  routes
})
export default router
