<template>
  <div>
    <PageHeader title="图标 Icon" />
    <ha-icon name="chat-o" color="#1989fa" size="40" dot />
    <ha-icon name="chat-o" color="#1989fa" size="40" dot />
    <ha-icon disabled name="chat-o" color="#1989fa" size="40" badge="99+" @click="handleClick1" />
    <ha-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" @click="handleClick" />
  </div>
</template>

<script>
  import Container from '../common/Container.vue'
  import PageHeader from '../common/PageHeader.vue'
  import HaIcon from '../../src/icon'
  // import Demo from "@/button/README.md";
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      PageHeader,
      Container,
      HaIcon
      // Demo
    },
    setup() {
      const handleClick = () => {
        console.log('2222')
      }
      const handleClick1 = () => {
        console.log('1111111')
      }
      return { handleClick, handleClick1 }
    }
  })
</script>
