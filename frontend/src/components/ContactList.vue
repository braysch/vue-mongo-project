<template>
  <div>
    <clip-loader v-if="loading"></clip-loader>
    <div v-else>
      <div v-for="contact in contacts" v-bind:key="contact.id">
        <ContactItem :contact="contact"></ContactItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: ContactItem,
}
</script>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ContactItem from './ContactItem.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const apiUrl = 'http://localhost:3000/api/contacts'
const contacts = ref([])
const loading = ref(true)
const getContacts = async () => {
  try {
    const response = await axios.get(apiUrl)
    contacts.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  getContacts()
})
</script>
