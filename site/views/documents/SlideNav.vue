<template>
  <div class="ha-doc-nav">
    <div class="ha-doc-nav__group">
      <div  :class="['ha-doc-nav__title', this.activeName == Format.camel2Dash(doc.name)? 'active':'']" :index="Format.camel2Dash(doc.name)" v-for="(doc, index) in docNav" :key="index" @click="handleOpen(doc)">
        <a :href="getLinkPath(doc)">{{doc.description}}</a>
      </div> 
      <!-- <div class="ha-doc-nav__title" style="margin-top:10px">组件</div> -->
      <div class="ha-doc-nav__group">
        <div class="ha-doc-nav__title">数据录入</div>
        <div :class="['ha-doc-nav__item', this.activeName == Format.camel2Dash(component.name)? 'active':'']" :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.form" :key="index" @click="handleOpen(component)">
          <a :href="getLinkPath(component)">{{component.name}}<span class="chinese">{{component.description}}</span></a>
        </div>
      </div>
      <div class="ha-doc-nav__group">
        <div class="ha-doc-nav__title">操作反馈</div>
        <div :class="['ha-doc-nav__item', this.activeName == Format.camel2Dash(component.name)? 'active':'']"  :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.feedback" :key="index" @click="handleOpen(component)">
          <a  :href="getLinkPath(component)">{{component.name}}<span class="chinese">{{component.description}}</span></a>
        </div>
      </div>
      <div class="ha-doc-nav__group">
        <div class="ha-doc-nav__title">数据展示</div>
        <div :class="['ha-doc-nav__item', this.activeName == Format.camel2Dash(component.name)? 'active':'']" :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.view" :key="index" @click="handleOpen(component)">
          <a :href="getLinkPath(component)">{{component.name}}<span class="chinese">{{component.description}}</span></a>
        </div>
      </div>
      <div class="ha-doc-nav__group">
        <div class="ha-doc-nav__title">导航</div>
        <div :class="['ha-doc-nav__item', this.activeName == Format.camel2Dash(component.name)? 'active':'']" :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.navigation" :key="index" @click="handleOpen(component)">
          <a :href="getLinkPath(component)">{{component.name}}<span class="chinese">{{component.description}}</span></a>
        </div>
      </div>
      <div class="ha-doc-nav__group">
        <div class="ha-doc-nav__title">其他</div>
        <div :class="['ha-doc-nav__item', this.activeName == Format.camel2Dash(component.name)? 'active':'']" :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.other" :key="index" @click="handleOpen(component)">
          <a :href="getLinkPath(component)">{{component.name}}<span class="chinese">{{component.description}}</span></a>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Format from '../../utils/format';
import Demo from '../../demos';
import Utils from 'site/utils';
export default {
  data() {
    return {
      Demo,
      Format,
      activeName: 'quick-start',
      docNav: [],
      componentNav: {}
    };
  },
  created() {
    const { documents, components } = this.Demo;
    const { path } = this.$route;
    this.activeName = path.replace('/documents/', '')
    console.log(this.activeName)
    this.docNav = documents;
    this.componentNav = components;
  },
  watch: {
    "$route"(val) {
      const { path } = this.$route;
      this.activeName = path.replace('/documents/', '')
    }
  },
  methods: {
    getLinkPath(node) {
      return `#/documents/${Format.camel2Dash(node.name)}`
    },
    handleOpen(node) {
      const v = this.$store.state.version;
      this.$router.push({
        path: `${Format.camel2Dash(node.name)}`
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/var';

.ha-doc-nav {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 1;
  min-width: $ha-doc-nav-width;
  max-width: $ha-doc-nav-width;
  padding: 24px 0 72px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;

  @media (min-width: $ha-doc-row-max-width) {
    left: 50%;
    margin-left: -($ha-doc-row-max-width / 2);
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__group {
    margin-bottom: 16px;
  }

  &__title {
    padding: 8px 0 8px $ha-doc-padding;
    color: #455a64;
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
    a{
      color: #455a64;
      &:hover{
         color: $ha-doc-green;
      }
    }
    &.active {
      -webkit-font-smoothing: auto;
      background: $ha-doc-light-green;
      a {
          color: $ha-doc-green;
      }
    }
    &:nth-child(3){
      margin-bottom: 16px;
    }
  }

  &__item {
    a {
      display: block;
      margin: 0;
      padding: 8px 0 8px $ha-doc-padding;
      color: #455a64;
      font-size: 14px;
      line-height: 28px;
      transition: color 0.2s;

      &:hover{
         color: $ha-doc-green;
      }
      span {
        font-size: 13px;
      }
    }
    &.active {
      -webkit-font-smoothing: auto;
      background: $ha-doc-light-green;
      a {
          color: $ha-doc-green;
      }
    }
  }

  @media (max-width: 1300px) {
    &__item {
      a {
        font-size: 13px;
      }

      &:active {
        font-size: 14px;
      }
    }
  }
}
</style>
