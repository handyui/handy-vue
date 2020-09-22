<template>
  <main>
    <div class="righter">
      <div class="banner">
        <img :src="banner" alt="" />
      </div>
    </div>
    <div class="introduce">
      <div class="title"><span>HANDY</span> DESIGN</div>
      <div class="description">UI Components Library based on Vue</div>
      <div class="navigation">
        <button @click="doStart">开始使用</button>
        <button class="ghost" @click="goToGit">
          <span>扫码查看</span>
          <div >
          </div>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      banner:require('../assets/images/banner.png')
    };
  },
  components: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    doStart() {
      window.location.href = '#/documents/quick-start';
    },
    goToGit() {
      // window.location.href = 'https://github.com/handyui/handy-vue';
    }
  }
};
</script>

<style scoped lang="scss">
</style>
