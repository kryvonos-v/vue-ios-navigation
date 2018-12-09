<template>
  <div>
    <h1>{{ id }} user</h1>
    <a @click="$router.go(-1)">Go Back</a>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
