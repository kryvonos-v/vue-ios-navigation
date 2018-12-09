<template>
  <div id="app" class="page">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import * as TransitionName from './shared/enums/TransitionName'

export default {
  data () {
    return {
      transitionName: TransitionName.SLIDE_LEFT,
      startedNavigationBack: false
    }
  },
  watch: {
    '$route' () {
      if (!this.startedNavigationBack) {
        this.transitionName = TransitionName.SLIDE_LEFT
      }

      this.startedNavigationBack = false
    }
  },
  created () {
    window.addEventListener('before-vue-router-popstate', this.handleUserNavigatesBack)
  },
  beforeDestroy () {
    window.removeEventListener('before-vue-router-popstate', this.handleUserNavigatesBack)
  },
  methods: {
    handleUserNavigatesBack () {
      this.startedNavigationBack = true
      this.transitionName = TransitionName.SLIDE_RIGHT
    }
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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 200ms ease-in-out;
}

.slide-left-enter-active,
.slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}
</style>
