<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <a>
          <img :src="logo" />
          handy
        </a>
      </div>
      <!-- <div class="search">
        <input placeholder="搜索组件..." ref="searchInput" />
      </div> -->
      <!-- <div class="version">
        <select v-model="value" placeholder="请选择" size="small" @change="handleVerChange">
          <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></option>
        </select>
      </div> -->
      <nav>
        <!-- <ul>
          <li><a href="https://handyui.design">首页</a></li>
          <li><a href="https://handyui.design/#/components/quick-start">React 组件</a></li>
          <li><a href="#/documents/quick-start" class="active">Vue 组件</a></li>
          <li><a href="https://handyui.design/#/design/download">设计</a></li>
          <li><a href="https://github.com/ZhonganTechENG/handy-vue" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul> -->
      </nav>
    </div>
  </header>
</template>

<script>
  import Format from '../../utils/format'
  import Demo from '../../demos'

  export default {
    data() {
      return {
        Demo,
        componentList: [],
        componentName: '',
        options: [],
        value: '',
        logo: require('../../assets/images/logo.png')
      }
    },
    created() {
      const { version, versionList } = this.$store.state
      this.initComponentList()
      this.options = versionList
      this.value = version
    },
    mounted() {
      // docsearch({
      // apiKey: '59f746e0b691342f4afaece614544e197',
      // indexName: 'handy-vue',
      // inputSelector: '.search input',
      // debug: false,
      // });
    },
    watch: {
      $route(val) {
        const { path } = this.$route
        this.activeName = path.replace('/documents/', '')
      }
    },
    methods: {
      initComponentList() {
        const { components } = this.Demo
        const List = [
          ...components.form,
          ...components.feedback,
          ...components.view,
          ...components.navigation,
          ...components.other
        ]
        this.componentList = List.map((i) => ({
          label: `${i.name} ${i.description}`,
          value: Format.camel2Dash(i.name)
        }))
      },
      handleChange(val) {
        console.log(val)
        const v = this.$store.state.version
        this.$router.push({
          path: `${Format.camel2Dash(val)}`,
          query: { v }
        })
        this.componentName = ''
      },
      handleVerChange(val) {
        window.location = this.options.find((i) => i.value === val).path
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    background-color: #24242c;

    .header-container {
      width: 100%;
      height: 100%;
    }

    .logo {
      float: left;
      width: 280px;
      height: 100%;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      img {
        height: 32px;
        margin-right: 10px;
        margin-top: -5px;
        margin-left: 50px;
      }
      a {
        display: flex;
        height: 65px;
        line-height: 65px;
        color: #fff;
        text-decoration: none;
        align-items: center;
      }
    }

    .search {
      float: left;
      margin-top: 16px;
      margin-left: 50px;
      font-size: 14px;

      input {
        display: inline-block;
        background: transparent;
        border: 0;
        outline: 0 none;
        width: 200px;
        height: 33px;
        padding: 0 8px;
      }

      .algolia-autocomplete {
        .ds-dropdown-menu {
          border: none;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);

          [class^='ds-dataset-'] {
            border: none;
          }

          &:before {
            display: none;
          }
        }

        .algolia-docsearch-suggestion--title {
          color: #464646;
        }

        .algolia-docsearch-suggestion--highlight {
          color: #1598fb;
        }
      }
    }

    .version {
      float: right;
      margin: 22px 30px 0 80px;
      width: 100px;

      .tag-input-box {
        width: 130px;
        background: #fff;

        &:hover {
          border-color: #1598fb;
        }
        &-active {
          border-color: #1598fb;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(18, 194, 135, 0.6);
        }
      }
    }

    nav {
      float: right;
      height: 65px;
      line-height: 65px;
      margin-right: 30px;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;

        li {
          float: left;
          padding: 0 30px;
          text-align: center;
          font-size: 16px;
          color: #999;

          a {
            display: block;
            color: #333;
            cursor: pointer;

            &.active,
            &:hover {
              color: #1598fb;
            }
          }

          svg {
            height: 20px;
            margin-right: 6px;
          }
        }
      }
    }
  }

  .ui-option-list {
    &:hover,
    &.checked {
      color: #333;
      background: rgba(18, 194, 135, 0.1);

      .ui-icon.theme-info {
        color: #1598fb;
      }
    }
  }

  @media only screen and (max-width: 767.99px) {
    header {
      &-container {
        margin: 0 auto;
      }
      .logo {
        width: 100%;
      }
      .search,
      .version,
      nav {
        display: none;
      }
    }
  }
</style>
