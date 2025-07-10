<template>
  <Header title="Contact Applicaiton"></Header>
  <router-view></router-view>
  <div class="bg-red-500">Hello</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>
