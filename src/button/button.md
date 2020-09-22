# 按钮 Button

### demo 基本

```html
<ha-button ghost>default</ha-button>
<ha-button theme="primary">primary</ha-button>
```



### demo 块级按钮

```html
<ha-button block ghost @click="handleClick">default</ha-button>
<ha-button block ghost disabled @click="handleClick">default disabled</ha-button>
<ha-button theme="primary" block>primary</ha-button>
<ha-button theme="primary" block disabled>primary disabled</ha-button>
```

### demo 按钮主题

```html
<ha-button ghost>default</ha-button>
<ha-button theme="primary">primary</ha-button>
<ha-button theme="danger">danger</ha-button>
```

### demo 按钮大小

```html
<ha-button ghost size="lg">lg</ha-button>
<ha-button ghost>md</ha-button>
<ha-button ghost size="sm">sm</ha-button>
<ha-button ghost size="xs">xs</ha-button>
```

### demo 按钮形状

```html
<ha-panel-body>
  <ha-button theme="primary">rect</ha-button>
  <ha-button theme="primary" shape="radius">radius</ha-button>
  <ha-button theme="primary" shape="round">round</ha-button>
  <ha-button theme="primary" shape="circle">circle</ha-button>
  <ha-button shape="circle" ghost>
    <ha-icon type="right" slot="icon"></ha-icon>
  </ha-button>
</ha-panel-body>
```

### demo 带 icon 的按钮

```html
<ha-button ghost shape="radius">
  <ha-icon type="right-round" theme="success" slot="icon"></ha-icon>
  正确
</ha-button>
<ha-button ghost shape="radius">
  <ha-icon type="wrong-round" theme="error" slot="icon"></ha-icon>
  错误
</ha-button>
<ha-button ghost loading shape="radius">
  加载中
</ha-button>
```

### demo 幽灵按钮

```html
<ha-button block ghost>default ghost</ha-button>
<ha-button theme="primary" block ghost>primary ghost</ha-button>
<ha-button theme="danger" block ghost>danger ghost</ha-button>
```

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

| 属性      | 类型   | 默认值    | 可选值／参数                   | 说明           |
| :-------- | :----- | :-------- | :----------------------------- | :------------- |
| theme     | string | 'default' | 'default', 'primary', 'danger' | 主题           |
| size      | string |           | 'xl', 'lg', 'sm', 'xs'         | 大小           |
| shape     | string |           | 'radius', 'round', 'circle'    | 形状           |
| block     | boolean   | false     |                                | 是否为块级元素 |
| ghost     | boolean   | false     |                                | 是否是幽灵按钮 |
| disabled  | boolean   | false     |                                | 是否禁用       |
| loading   | boolean   | false     |                                | 是否显示加载中 |

#### Button Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
