<template>
  <div class="bg-green-400 flex w-full grid grid-cols-6 gap-x-4 items-center p-4 m-2">
    <div>{{ contact.name }}</div>
    <div>{{ contact.email }}</div>
    <div>{{ contact.phone }}</div>
    <div>{{ contact.designation }}</div>
    <router-link
      :to="{
        name: 'EditContact',
        params: {
          id: contact._id,
        },
      }"
      class="bg-gray-200 rounded-lg py-2 px-8"
      >Edit</router-link
    >
    <button @click="deleteContact(contact._id)" class="bg-red-900 rounded-lg py-2 px-8 text-white">
      Delete
    </button>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import axios from 'axios'
const toast = useToast()

const deleteContact = async (id) => {
  try {
    const url = `http://localhost:3000/api/contacts/${id}`
    if (confirm('Are you sure about that?')) {
      const response = await axios.delete(url)
      console.log(response)
      if (response.status == 200) {
        toast.success('Successfully deleted contact.')
        location.reload()
      } else {
        toast.error('Could not delete contact...')
      }
    }
  } catch (error) {
    console.log(error)
  }
}
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>
