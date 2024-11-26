import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import MyPageView from '@/views/MyPageView.vue'
import SignUpView from '@/views/SignUpView.vue'
import MovieListView from '@/views/MovieListView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import TheaterListView from '@/views/TheaterListView.vue'
import TheaterMapView from '@/views/TheaterMapView.vue'
import SearchResultsView from '@/views/SearchResultsView.vue'
// import TheaterUnityView from '@/views/TheaterUnityView.vue'
import SurveyView from '@/views/SurveyView.vue'
import RecommendationsView from '@/views/RecommendationsView.vue'
import { useMovieStore } from '@/stores/movie'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component : SignUpView
  },
  {
    path: '/login',
    name: 'LogInView',
    component : LogInView
  },
  {
    path: '/:username/mypage',
    name: 'MyPageView',
    component : MyPageView
  },
  {
    path: '/movie',
    name: 'MovieListView',
    component : MovieListView
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetailView',
    component : MovieDetailView
  },
  {
    path: '/theaters',
    name: 'TheaterListView',
    component: TheaterListView
  },
  {
    path: '/theaters/:movieId/map',
    name: 'TheaterMapView',
    component: TheaterMapView
  },
  // {
  //   path: '/theaters/:movieId/map/unity',
  //   name: 'TheaterUnityView',
  //   component: TheaterUnityView,
  //   props: true
  // },
  {
    path: '/search',
    name: 'SearchResultsView',
    component: SearchResultsView
  },
  {
    path: '/survey',
    name: 'SurveyView',
    component: SurveyView,
    meta: { requiresAuth: true }
  },
  {
    path: '/recommendations',
    name: 'RecommendationsView',
    component: RecommendationsView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 네비게이션 가드 추가
router.beforeEach((to, from, next) => {
  const store = useMovieStore()
  
  // 인증이 필요한 페이지이고 로그인되지 않은 경우
  if (to.matched.some(record => record.meta.requiresAuth) && !store.token) {
    next({ name: 'LogInView' })
  } else {
    next()
  }
})

export default router
