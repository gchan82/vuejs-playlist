import showBlogs from './src/Component/showBlogs.vue'
import addBlog from './src/Component/addBlog.vue'

export default [
  {path: '/', component: showBlogs},
  {path: '/add', component: addBlog}
]