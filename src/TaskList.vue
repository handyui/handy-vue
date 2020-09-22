<template>
  <div>
    <button class="ha-button">{{msg}}</button>
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      msg: String
    }
  }
</script>

<style lang="scss" scoped>

</style>