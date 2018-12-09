<template>
  <div class="page" style="background-color: #f0f0f0;">
    <div class="page__main">
      <h1>Messages</h1>
      <router-link to="/test">Test page</router-link><br>
      <router-link to="/messages/new">New message</router-link><br>
      <a @click="$router.go(-1)">Go Back</a>
    </div>
    <div class="main-nav page__bottom">
      <router-link to="/feed" class="main-nav__link">Camera</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
