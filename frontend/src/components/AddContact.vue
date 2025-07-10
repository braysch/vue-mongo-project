<template>
  <div class="flex w-full justify-center flex-col">
    <form @submit.prevent="saveContact">
      <div class="flex flex-col w-full">
        <input
          v-model="contact.name"
          class="mx-2 mt-2 p-4 bg-blue-100"
          type="text"
          placeholder="Enter name"
        />
        <input
          v-model="contact.email"
          class="mx-2 mt-2 p-4 bg-blue-100"
          type="text"
          placeholder="Enter email"
        />
        <input
          v-model="contact.phone"
          class="mx-2 mt-2 p-4 bg-blue-100"
          type="text"
          placeholder="Enter phone"
        />
        <input
          v-model="contact.designation"
          class="mx-2 my-2 p-4 bg-blue-100"
          type="text"
          placeholder="Enter designation"
        />
      </div>
      <button type="submit" class="bg-black text-white rounded-lg w-1/2 m-4 py-4 self-center">
        {{ edit ? 'Update Contact' : 'Add Contact' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const contact = ref({
  name: '',
  email: '',
  phone: '',
  designation: '',
})
const toast = useToast()

const edit = route.params.id != null

const getContactById = async () => {
  try {
    const url = `http://localhost:3000/api/contacts/${route.params.id}`
    const response = await axios.get(url)
    contact.value = response.data
  } catch (error) {
    console.log(error)
  }
}

const saveContact = async () => {
  console.log('save contact.')
  if (
    !contact.value.name ||
    !contact.value.email ||
    !contact.value.phone ||
    !contact.value.designation
  ) {
    toast.error('All fields are reuqired!')
  } else {
    try {
      const apiUrl = `http://localhost:3000/api/contacts/${edit ? route.params.id : ''}`
      const response = edit
        ? await axios.put(apiUrl, contact.value)
        : await axios.post(apiUrl, contact.value)
      console.log('CONTACT:')
      console.log(contact.value)
      if (response.status == 201) {
        toast.success('Contact added to database!')
      } else if (response.status == 200) {
        toast.success('Contact successfully updated!')
        router.push({ name: 'ContactList' })
      }
    } catch (error) {
      toast.error('Oh, shit! Something went wrong!')
      console.log(error)
    }
  }
}
onMounted(() => {
  if (edit) {
    getContactById()
  }
})
</script>
