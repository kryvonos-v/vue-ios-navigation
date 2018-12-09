<template>
  <div style="background-color: #f0f0f0">
    <h1>{{ id }} user</h1>
    <a @click="$router.go(-1)">Go Back</a>
    <button type="button" @click="showPopup = true">Settings</button>

    <popup-view v-if="showPopup">
      <h2>User settings</h2>
      <button @click="showPopup = false">Close</button>
    </popup-view>
  </div>
</template>

<script>
import PopupView from '@/views/PopupView.vue'

export default {
  components: {
    PopupView
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showPopup: false
    }
  }
}
</script>

<style>

</style>
