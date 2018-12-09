<template>
  <div class="page">
    <nested-navigation-transition>
      <router-view class="page__main" />
    </nested-navigation-transition>
    <div class="main-nav page__bottom">
      <router-link to="/feed" class="main-nav__link">Home</router-link>
      <router-link to="/about" class="main-nav__link">About</router-link>
    </div>
  </div>
</template>

<script>
import NestedNavigationTransition from '@/components/NestedNavigationTransition.vue'

export default {
  components: {
    NestedNavigationTransition
  }
}
</script>

<style>
</style>
