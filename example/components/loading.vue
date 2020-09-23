<template>
  <div>
    <PageHeader title="Loading" />

    <ha-loading color="#1989fa" />
    <ha-loading type="spinner" size="24px" />
    <ha-loading size="24px">加载中...</ha-loading>
    <ha-loading size="24px" vertical>加载中...</ha-loading>
  </div>
</template>

<script>
  import Container from '../common/Container.vue'
  import PageHeader from '../common/PageHeader.vue'
  import HaLoading from '../../src/loading'

  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      PageHeader,
      Container,
      HaLoading
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

<style lang="scss" scoped></style>
