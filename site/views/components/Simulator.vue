<template>
  <div class="ha-doc-simulator">
    <iframe :src="componentPath" title="simulator" frameBorder="0" style="width: 360px; height: 640px;" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentPath() {
      return `${window.CONFIG.pathname}demo.html#/${this.url}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/var';

.ha-doc-simulator {
  position: fixed;
  top: 80px;
  right: 0;
  width: 390px;
  z-index: 10;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
  @media (min-width: $ha-doc-row-max-width) {
    right: 50%;
    margin-right: -($ha-doc-row-max-width / 2);
  }
  iframe {
    box-sizing: content-box;
    // border: 1px solid #eaeefb;
  }
}
</style>
