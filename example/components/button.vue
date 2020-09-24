<template lang="html">
  <Container class="button-page">
    <PageHeader title="按钮 Button" />
    <Demo></Demo>
  </Container>
</template>

<script>
  import Container from '../common/Container.vue'
  import PageHeader from '../common/PageHeader.vue'
  import Demo from '../../src/button/demo.md'
  import '../../src/button/style/index.scss'

  export default {
    components: {
      Container,
      PageHeader,
      Demo
    }
  }
</script>
