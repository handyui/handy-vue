<template>
  <div :class="['ha-doc-simulator', { 'ha-doc-simulator-fixed': isFixed }]">
    <iframe :src="componentPath" :style="simulatorStyle" frameBorder="0" style="height: 640px" />
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
    data() {
      return {
        scrollTop: window.scrollY,
        windowHeight: window.innerHeight
      }
    },
    computed: {
      isFixed() {
        return this.scrollTop > 60
      },

      simulatorStyle() {
        const height = Math.min(640, this.windowHeight - 90)
        return {
          height: height + 'px'
        }
      },
      componentPath() {
        return `${window.CONFIG.pathname}demo.html#/${this.url}`
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY
      })
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/var';

  .ha-doc-simulator {
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    overflow: hidden;
    background: #fafafa;
    border-radius: 12px;
    box-shadow: #ebedf0 0 4px 12px;

    @media (max-width: 1100px) {
      right: auto;
      left: 750px;
    }

    @media (min-width: $ha-doc-row-max-width) {
      right: 50%;
      margin-right: -$ha-doc-row-max-width / 2 + 40px;
    }

    &-fixed {
      position: fixed;
      top: 30px;
    }

    iframe {
      display: block;
      width: 100%;
    }
  }
</style>
