<template>
  <navigation-transition>
    <router-view class="app"></router-view>
  </navigation-transition>
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
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  will-change: transform;
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
  align-items: baseline;
  margin: 0;
  border-top: 1px solid rgb(189, 189, 189);
  padding-top: 11px;
  padding-bottom: 13px;
  background-color: #FFF;
}

.main-nav__link {
  flex-basis: 0;
  flex-grow: 1;
  border: 0;
  padding: 0 10px;
  text-decoration: none;
  color: #000;
  background-color: transparent;
}

.main-nav__svg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.main-nav__active-book-svg,
.main-nav__active-notification-svg {
  display: none;
}

.main-nav__home-shape {
  fill: transparent;
  transition: fill 150ms ease-out;
}

.main-nav__home-link.router-link-exact-active .main-nav__home-shape {
  fill: #000;
}

.main-nav__subscriptions-link.router-link-exact-active .main-nav__book-svg,
.main-nav__notifications-link.router-link-exact-active .main-nav__notification-svg {
  display: none;
}

.main-nav__subscriptions-link.router-link-exact-active .main-nav__active-book-svg,
.main-nav__notifications-link.router-link-exact-active .main-nav__active-notification-svg {
  display: block;
}

.main-nav__user-box {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  width: 26px;
  height: 26px;
  border-radius: 100px;
  overflow: hidden;
}

.main-nav__user-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-nav__user-link.router-link-exact-active .main-nav__user-box {
  background-color: #000;
}

.main-nav__link.router-link-exact-active {
  color: #007AFF;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
