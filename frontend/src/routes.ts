import { createRouter, createWebHistory } from 'vue-router'
import ContactList from './components/ContactList.vue'
import AddContact from './components/AddContact.vue'
import EditContact from './components/EditContact.vue'

const routes = [
  {
    name: 'ContactList',
    path: '/',
    component: ContactList,
  },
  {
    name: 'AddContact',
    path: '/contact/',
    component: AddContact,
  },
  {
    name: 'EditContact',
    path: '/contact/:id?',
    component: AddContact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
