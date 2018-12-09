<template>
  <div class="page">
    <transition :name="transitionName" :mode="transitionMode" :css="true">
      <router-view class="page__main" />
    </transition>
    <div class="main-nav page__bottom">
      <router-link to="/feed" class="main-nav__link">Home</router-link>
      <router-link to="/about" class="main-nav__link">About</router-link>
    </div>
  </div>
</template>

<script>
import * as TransitionName from '@/shared/enums/TransitionName'

export default {
  data () {
    return {
      transitionName: TransitionName.NONE,
      startedNavigationBack: false
    }
  },
  computed: {
    transitionDisabled () {
      return this.transitionName === TransitionName.NONE
    },
    transitionMode () {
      return this.transitionDisabled
        ? 'out-in'
        : undefined
    }
  },
  watch: {
    '$route' (to, from) {
      let useTransition = to.meta.transition || (this.startedNavigationBack && from.meta.transition)

      if (!useTransition) {
        this.transitionName = TransitionName.NONE
      } else if (!this.startedNavigationBack) {
        this.transitionName = TransitionName.SOFT_SLIDE_LEFT
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
      this.transitionName = TransitionName.SOFT_SLIDE_RIGHT
    }
  }
}
</script>

<style>
.soft-slide-left-enter-active,
.soft-slide-left-leave-active,
.soft-slide-right-enter-active,
.soft-slide-right-leave-active {
  transition: all 200ms ease-in-out;
}

.soft-slide-left-enter-active,
.soft-slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.soft-slide-right-leave-active {
  position: relative;
  z-index: 1;
}

.soft-slide-left-leave-to {
  transform: translateX(-20%);
}

.soft-slide-left-enter {
  transform: translateX(100%);
}

.soft-slide-right-leave-to {
  transform: translateX(100%);
}

.soft-slide-right-enter {
  transform: translateX(-20%);
}
</style>
