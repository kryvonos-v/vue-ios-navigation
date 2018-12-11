<template>
  <div class="page">
    <action-bar class="page__top" :show-back-button="true">
      <span class="mx-auto">{{ id }}</span>
    </action-bar>
    <div class="page__main">
      <h1>User info</h1>
      <a @click="$router.go(-1)">Go Back</a>
      <button type="button" @click="showPopup = true">Settings</button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facere, itaque non unde dolore explicabo recusandae asperiores quas, quidem tempora natus. Dolorum laboriosam nam aliquam provident vitae delectus nostrum beatae!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem recusandae optio magnam inventore dolorum necessitatibus tempora, magni consequatur iure eligendi doloremque sequi eius vero, eum, quasi quod dignissimos error ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam reiciendis beatae cum cumque autem animi aspernatur perspiciatis cupiditate repellendus ipsum officia aut, sed aliquid architecto distinctio itaque ipsam doloribus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis cupiditate animi cumque ullam nostrum officiis dolor in sint nulla? Odit accusantium illum veniam, dolores aperiam sapiente earum sequi voluptatibus!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam reiciendis beatae cum cumque autem animi aspernatur perspiciatis cupiditate repellendus ipsum officia aut, sed aliquid architecto distinctio itaque ipsam doloribus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis cupiditate animi cumque ullam nostrum officiis dolor in sint nulla? Odit accusantium illum veniam, dolores aperiam sapiente earum sequi voluptatibus!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam reiciendis beatae cum cumque autem animi aspernatur perspiciatis cupiditate repellendus ipsum officia aut, sed aliquid architecto distinctio itaque ipsam doloribus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis cupiditate animi cumque ullam nostrum officiis dolor in sint nulla? Odit accusantium illum veniam, dolores aperiam sapiente earum sequi voluptatibus!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam reiciendis beatae cum cumque autem animi aspernatur perspiciatis cupiditate repellendus ipsum officia aut, sed aliquid architecto distinctio itaque ipsam doloribus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis cupiditate animi cumque ullam nostrum officiis dolor in sint nulla? Odit accusantium illum veniam, dolores aperiam sapiente earum sequi voluptatibus!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam reiciendis beatae cum cumque autem animi aspernatur perspiciatis cupiditate repellendus ipsum officia aut, sed aliquid architecto distinctio itaque ipsam doloribus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis cupiditate animi cumque ullam nostrum officiis dolor in sint nulla? Odit accusantium illum veniam, dolores aperiam sapiente earum sequi voluptatibus!
    </div>

    <popup-view v-if="showPopup">
      <h2>User settings</h2>
      <button @click="showPopup = false">Close</button>
    </popup-view>
  </div>
</template>

<script>
import ActionBar from '@/components/ActionBar.vue'
import PopupView from '@/views/PopupView.vue'

export default {
  components: {
    ActionBar,
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
