<template lang="html">
  <div class='app-container' :style='{minHeight: windowHeight + "px"}'>
    sssssssssssss
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: window.innerHeight
    }
  }
}
</script>
