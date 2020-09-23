<template>
  <div  class="ha-button">
    {{ count }} 
    <button @click="handleClick()">点击+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive} from 'vue'
export default defineComponent({
    setup() {
      const state = reactive({
        count: 0
      })

      const handleClick = () => {
        state.count++
      }

      return {  ...toRefs(state), handleClick }
    }
  })
</script>
