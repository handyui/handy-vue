<template lang="html">
  <Container class="document-quick-start">
    待续...
    <!-- <div v-for="(item,index) in changeLogs" :key="index">
      <div class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item['tag_name']}}</span>
          <button style="float: right; padding: 3px 0" type="text">{{getFormatDate(item['published_at'])}}</button>
        </div>
        <div v-html="marked(item.body)" class="text item">
        </div>
      </div>
    </div> -->
  </Container>
</template>

<script>
import marked from 'marked';
import Container from '../../components/Container';
export default {
  components: {
    Container
  },
  data() {
    return {
      marked,
      changeLogs: []
    }
  },
  created() {
    const self = this;
  },
  methods: {
  }
};
</script>

<style scoped lang='scss'>
 .box-card {
   margin-bottom: 20px;
 }
</style>
