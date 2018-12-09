<template>
  <div class="page">
    <nested-navigation-transition>
      <router-view class="page__main" />
    </nested-navigation-transition>
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
