<template>
  <transition :name="transitionName" :mode="transitionMode" :css="true">
    <slot />
  </transition>
</template>

<script>
import * as TransitionName from '@/shared/enums/TransitionName'

function routeNavigationTransitionValue (route) {
  return typeof route.meta.navigationTransition === 'function'
    ? route.meta.navigationTransition()
    : route.meta.navigationTransition
}

export default {
  data () {
    return {
      transitionName: TransitionName.NONE,
      navigatingBack: false
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
      let noTransition = (
        routeNavigationTransitionValue(to) === false &&
        routeNavigationTransitionValue(from) === false
      )

      if (noTransition) {
        this.transitionName = TransitionName.NONE
      } else if (!this.navigatingBack) {
        this.transitionName = TransitionName.SOFT_SLIDE_LEFT
      }

      this.navigatingBack = false
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
      this.navigatingBack = true
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
