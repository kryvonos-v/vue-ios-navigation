<template>
  <div class="action-bar">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.action-bar {
  border-bottom: 1px solid rgb(200, 200, 200);
  padding: 15px 8px;
  font-size: 18px;
  font-weight: 500;
  background-color: rgb(244, 244, 244);
}
</style>
