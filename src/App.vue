<template>
  <div id="app" class="page">
    <navigation-transition>
      <router-view class="page__main"></router-view>
    </navigation-transition>
  </div>
</template>

<script>
import NavigationTransition from './components/NavigationTransition.vue'

export default {
  components: {
    NavigationTransition
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  margin: 0;
  padding: 0;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.page__main {
  flex-shrink: 1;
  flex-grow: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #FFF;
}

.page__bottom {
  position: relative;
  z-index: 10;
  flex-shrink: 0;
}

.main-nav {
  display: flex;
  margin: 0;
  border-top: 1px solid #CCC;
  padding: 15px 10px;
  background-color: rgb(240, 240, 240);
}

.main-nav__link {
  flex-basis: 0;
  flex-grow: 1;
  text-decoration: none;
  color: #000;
}

.main-nav__link.router-link-exact-active {
  color: #007AFF;
}
</style>
