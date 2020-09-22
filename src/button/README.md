# Button 按钮

常用的操作按钮。

## 基础用法

:::snippet 通过`type`定义按钮的基础样式。

```vue
<template>
  <div class="vsc-button">
    <v-button>Default</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="danger">Danger</v-button>
  </div>
</template>
```

:::

## 按钮形状

:::snippet 通过`shape`设置按钮形状，可选值为`circle`、`round`或者不设置。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary">Default</v-button>
    <v-button type="primary" shape="round">Round</v-button>
    <v-button type="primary" shape="circle">C</v-button>
    <v-button>Default</v-button>
    <v-button shape="round">Round</v-button>
    <v-button shape="circle">C</v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::

## 按钮图标

:::snippet 通过`shape`设置按钮形状，可选值为`circle`、`round`或者不设置。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary" icon="v-icon-search">Search</v-button>
    <v-button type="primary" icon="v-icon-search" shape="round"
      >Search</v-button
    >
    <v-button type="primary" icon="v-icon-search" shape="circle"></v-button>
    <v-button icon="v-icon-search">Search</v-button>
    <v-button icon="v-icon-search" shape="round">Search</v-button>
    <v-button icon="v-icon-search" shape="circle"></v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::

## 虚线边框

:::snippet 通过`dashed`将边框设置为虚线。

```vue
<template>
  <div class="vsc-button">
    <v-button dashed>Dashed</v-button>
    <v-button dashed shape="round">Dashed</v-button>
    <v-button dashed shape="circle">D</v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::

## 简洁按钮

:::snippet 通过`plain`设置简洁显示模式。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary" plain>Primary</v-button>
    <v-button type="success" plain>Success</v-button>
    <v-button type="danger" plain>Danger</v-button>
    <v-button type="warning" plain>Warning</v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::

## 链接按钮

:::snippet 通过`link`设置链接模式。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary" link>Primary</v-button>
    <v-button type="success" link>Success</v-button>
    <v-button type="danger" link>Danger</v-button>
    <v-button type="warning" link>Warning</v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::

## 禁用状态

:::snippet 通过`disabled`禁用按钮。

```vue
<template>
  <div class="vsc-button">
    <v-button disabled>Default</v-button>
    <v-button type="primary" disabled>Primary</v-button>
    <v-button type="primary" disabled plain>Plain</v-button>
    <v-button type="primary" disabled dashed>Dashed</v-button>
    <v-button type="primary" disabled link>Link</v-button>
  </div>
</template>
```

:::

## 按钮大小

:::snippet 通过属性`size`设置按钮大小，可选值`large`、`default`、`small`。

```vue
<template>
  <div class="vsc-button">
    <div>
      <v-button type="primary" size="large">Large</v-button>
      <v-button type="primary" shape="round" size="large">Large</v-button>
      <v-button type="primary" shape="circle" size="large">L</v-button>
    </div>
    <div>
      <v-button type="primary">Default</v-button>
      <v-button type="primary" shape="round">Ddefault</v-button>
      <v-button type="primary" shape="circle">D</v-button>
    </div>
    <div>
      <v-button type="primary" size="small">Small</v-button>
      <v-button type="primary" shape="round" size="small">Small</v-button>
      <v-button type="primary" shape="circle" size="small">S</v-button>
    </div>
  </div>
</template>
```

:::

## 加载中

:::snippet 通过`loading`属性设置按钮处于加载中状态。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary" loading>Loading</v-button>
    <v-button type="primary" shape="circle" loading>L</v-button>
    <v-button type="primary" icon="v-icon-search" shape="circle" loading />
    <v-button type="primary" :loading="loading" @click="onClickLoading"
      >Click Me!</v-button
    >
    <v-button
      type="primary"
      icon="v-icon-poweroff"
      shape="circle"
      :loading="loading"
      @click="onClickLoading"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const onClickLoading = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    return {
      loading,
      onClickLoading,
    };
  },
});
</script>
```

:::

## 路由跳转

:::snippet 设置`to`对应的`vue-router`配置项，进行路由跳转。

```vue
<template>
  <div class="vsc-button">
    <v-button type="primary" to="/">Route Link</v-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const onClickLoading = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    return {
      loading,
      onClickLoading,
    };
  },
});
</script>
```

:::

[button-type] = _default \| primary \| success \| warning \| danger_
[button-size] = _large \| default \| small_
[button-shape] = _circle \| round_

## Button Props

| 属性     | 说明     | 类型               | 可选值           | 默认值    |
| -------- | -------- | ------------------ | ---------------- | --------- |
| type     | 类型     | _String_           | [[button-type]]  | `default` |
| size     | 尺寸     | _String_           | [[button-size]]  | `default` |
| shape    | 形状     | _String_           | [[button-shape]] | —         |
| icon     | 图标     | _String_           | —                | —         |
| dashed   | 虚线边框 | _Boolean_          | —                | `false`   |
| plain    | 简洁模式 | _Boolean_          | —                | `false`   |
| link     | 链接模式 | _Boolean_          | —                | `false`   |
| disabled | 禁用状态 | _Boolean_          | —                | `false`   |
| loading  | 加载中   | _Boolean_          | —                | `false`   |
| to       | 路由     | _RouteLocationRaw_ | —                | —         |

## Button Events

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| click    | 单击触发 | _event:Event_ |

## Button Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 按钮内容 |
