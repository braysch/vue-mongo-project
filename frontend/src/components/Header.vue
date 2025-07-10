<template>
  <div class="myDiv bg-blue-900 p-4 text-gray-400 flex justify-start gap-x-8">
    <div class="font-bold text-white">{{ title }}</div>
    <router-link to="/" class="hover:text-white hover:cursor-pointer">Home</router-link>
    <router-link to="/contact/" class="hover:text-white hover:cursor-pointer"
      >Create Contact</router-link
    >
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  required: true,
})
</script>
