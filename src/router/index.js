import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue')
const About = () => import('../views/about/about.vue')
const Message = () => import('../views/message/message.vue')
const Anime = () => import('../views/list/anime/anime.vue')
const Music = () => import('../views/list/music/music.vue')
const Game = () => import('../views/list/game/game.vue')
const TimeLine = () => import('../views/time/timeLine.vue')
const Article = () => import('../views/article/article.vue')
const Login = () => import('../views/admin/login.vue')
const Admin = () => import('../views/admin/admin.vue')
const AddAnime = () => import('../views/admin/addAnime.vue')
const AddGame = () => import('../views/admin/addGame.vue')
const AddMusic = () => import('../views/admin/addMusic.vue')
const Type = () => import('../views/admin/type.vue')
const Edite = () => import('../views/admin/edite.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/timeLine',
    component: TimeLine
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/anime',
    component: Anime
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/addMusic',
    component: AddMusic
  },
  {
    path: '/addAnime',
    component: AddAnime
  },
  {
    path: '/addGame',
    component: AddGame
  },
  {
    path: '/edite',
    component: Edite
  },
  {
    path: '/type',
    component: Type
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('token')) {
    next()
  } else {
    if (to.fullPath == "/admin" || to.fullPath == "/addAnime" || to.fullPath == "/addMusic" || to.fullPath == "/addGame" || to.fullPath == "/edite" || to.fullPath == "/type") {
      next(false)
    } else {
      next();
    }
  }
});
export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
