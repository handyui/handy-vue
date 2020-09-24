## 按钮 Button

:::demo 基本

```html
<ha-button type="primary">主要按钮</ha-button>
<ha-button type="info">信息按钮</ha-button>
<ha-button type="default">默认按钮</ha-button>
<ha-button type="warning">警告按钮</ha-button>
<ha-button type="danger">危险按钮</ha-button>

<ha-button plain type="primary">朴素按钮</ha-button>
<ha-button plain type="info">朴素按钮</ha-button>

<ha-button plain hairline type="primary">细边框按钮</ha-button>
<ha-button plain hairline type="info">细边框按钮</ha-button>

<ha-button disabled type="primary">禁用状态</ha-button>
<ha-button disabled type="info">禁用状态</ha-button>

<ha-button loading type="primary"></ha-button>
<ha-button loading type="primary" loading-type="spinner"></ha-button>
<ha-button loading type="info" loading-text="加载中..."></ha-button>

<ha-button square type="primary">方形按钮</ha-button>
<ha-button round type="info">圆形按钮</ha-button>

<ha-button icon="plus" type="primary"></ha-button>
<ha-button icon="plus" type="primary">按钮</ha-button>
<ha-button plain icon="https://b.yzcdn.cn/hat/icon-demo-1126.png" type="info"> 按钮 </ha-button>

<ha-button type="primary" size="large">大号按钮</ha-button>
<ha-button type="primary" size="normal">普通按钮</ha-button>
<ha-button type="primary" size="small">小型按钮</ha-button>
<ha-button type="primary" size="mini">迷你按钮</ha-button>

<ha-button type="primary" url="/hat/mobile.html">URL 跳转</ha-button>
<ha-button type="primary" to="index">路由跳转</ha-button>

<ha-button color="#7232dd">单色按钮</ha-button>
<ha-button color="#7232dd" plain>单色按钮</ha-button>
<ha-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </ha-button>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  methods: {
    handleClick(n){
      console.log(n);
      alert('点击了我...');
    },
  },
};
</script>
```

### API

#### Button Attributes

| 属性     | 类型    | 默认值    | 可选值／参数                   | 说明           |
| :------- | :------ | :-------- | :----------------------------- | :------------- |
| theme    | string  | 'default' | 'default', 'primary', 'danger' | 主题           |
| size     | string  |           | 'xl', 'lg', 'sm', 'xs'         | 大小           |
| shape    | string  |           | 'radius', 'round', 'circle'    | 形状           |
| block    | boolean | false     |                                | 是否为块级元素 |
| ghost    | boolean | false     |                                | 是否是幽灵按钮 |
| disabled | boolean | false     |                                | 是否禁用       |
| loading  | boolean | false     |                                | 是否显示加载中 |

#### Button Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
