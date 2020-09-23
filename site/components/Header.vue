<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <a href="javascript:void();">
          <img :src="logo" />
          handy
        </a>
      </div>
      <div class="search">
      </div>
      <nav>
        <ul>
          <li><a href="#/documents/quick-start">文档</a></li>
          <li><a href="https://github.com/handyui/handy-vue" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li>
            <select v-model="value" placeholder="请选择" size="small">
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: '',
      logo: require('../assets/images/logo.png')
    }
  },
  created() {
    const { version, versionList } = this.$store.state;
    this.options = versionList;
    this.value = version;
  }
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 65px;
  background-color: #fff;
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
    }
    a {
      display: flex;
      height: 65px;
      line-height: 65px;
      color: #333;
      text-decoration: none;
      align-items: center;
    }
  }

.search {
  float: left;
  margin-top: 19px;
  margin-left: 20px;

  .tag-input-box {
    width: 260px;
    border: 0;

    &-active {
      box-shadow: none;
    }

    > .ui-icon {
      display: none;
    }

    > .input-div-placeholder,
    > .value-text {
      font-size: 14px;
    }
  }
}

.lang {
  float: right;
  margin: 19px 125px 0 125px;
}

nav {
  float: right;
  height: 65px;
  line-height: 65px;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;

    li {
      float: left;
      width: 120px;
      text-align: center;
      font-size: 16px;
      color: #333;

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
</style>
