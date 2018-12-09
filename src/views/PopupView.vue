<template>
  <transition name="popup-slide" :css="true">
    <div class="popup-page">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
.popup-page {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFF;
}

.popup-slide-enter-active,
.popup-slide-leave-active {
  transition: transform 200ms ease-out;
}

.popup-slide-enter,
.popup-slide-leave-to {
  transform: translateY(100%);
}
</style>
