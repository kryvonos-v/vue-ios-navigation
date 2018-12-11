<template>
  <div class="page">
    <action-bar>About</action-bar>
    <div class="page__main">
      <h1>This is an about page</h1>
      <router-link to="/messages">Messages</router-link><br>
      <router-link to="/user/rock">User: rock</router-link>
    </div>
  </div>
</template>

<script>
import ActionBar from '@/components/ActionBar.vue'

export default {
  components: {
    ActionBar
  }
}
</script>
