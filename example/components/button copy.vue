<template>
  <div>
    <PageHeader title="按钮 Button" />
    <ha-button type="primary">主要按钮</ha-button>
    <ha-button type="info">信息按钮</ha-button>
    <ha-button type="default">默认按钮</ha-button>
    <ha-button type="warning">警告按钮</ha-button>
    <ha-button type="danger">危险按钮</ha-button>
    <p></p>
    <ha-button plain type="primary">朴素按钮</ha-button>
    <ha-button plain type="info">朴素按钮</ha-button>
    <p></p>
    <ha-button plain hairline type="primary">细边框按钮</ha-button>
    <ha-button plain hairline type="info">细边框按钮</ha-button>
    <p></p>
    <ha-button disabled type="primary">禁用状态</ha-button>
    <ha-button disabled type="info">禁用状态</ha-button>
    <p></p>
    <ha-button loading type="primary" />
    <ha-button loading type="primary" loading-type="spinner" />
    <ha-button loading type="info" loading-text="加载中..." />
    <p></p>
    <ha-button square type="primary">方形按钮</ha-button>
    <ha-button round type="info">圆形按钮</ha-button>
    <p></p>
    <ha-button icon="plus" type="primary" />
    <ha-button icon="plus" type="primary">按钮</ha-button>
    <ha-button plain icon="https://b.yzcdn.cn/hat/icon-demo-1126.png" type="info"> 按钮 </ha-button>
    <p></p>
    <ha-button type="primary" size="large">大号按钮</ha-button>
    <ha-button type="primary" size="normal">普通按钮</ha-button>
    <ha-button type="primary" size="small">小型按钮</ha-button>
    <ha-button type="primary" size="mini">迷你按钮</ha-button>
    <p></p>
    <ha-button type="primary" url="/hat/mobile.html">URL 跳转</ha-button>
    <ha-button type="primary" to="index">路由跳转</ha-button>
    <p></p>
    <ha-button color="#7232dd">单色按钮</ha-button>
    <ha-button color="#7232dd" plain>单色按钮</ha-button>
    <ha-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </ha-button>
  </div>
</template>

<script>
  import Container from '../common/Container.vue'
  import PageHeader from '../common/PageHeader.vue'
  import HaButton from '../../src/button'
  export default {
    components: {
      PageHeader,
      Container,
      HaButton
    }
  }
</script>
