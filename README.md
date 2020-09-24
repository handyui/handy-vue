# vue3 UI 组件框架

### 计划

- [x] 开发环境搭建
  - [x] vue3 + webpack 开发环境搭建
  - [x] Markdown 解析为 vue 组件
  - [x] 基础的示例环境构建
  - [x] 解析 Markdown 示例和代码块
- [x] Typescript 支持
- [x] Jest 单元测试
- [ ] 自动化部署和发布
- [ ] 组件开发
  - [x] button
  - [x] icon
  - [x] loading

```js
// 安装
npm install

// 启动预览
npm run dev
```

<!--
### 使用 npm 或 yarn 安装（推荐）
```js
# npm
npm install @handyui/vue --save

# yarn
yarn add @handyui/vue --save


### Import 引入
#### 全组件引入
```js
import Vue from 'vue';
import handyVue from '@handyui/vue';
// 引入全局样式
import '@handyui/vue/handy-vue.default.css';
Vue.use(handyVue);
```

#### 按需引入
```js
import { Button, Alert } from '@handyui/vue'
Vue.use(Button)
Vue.use(Alert)
```


 ```js
const markdownIt = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (content, language) {
      language = language && hljs.getLanguage(language) ? language : "html";
      const formatCode = hljs.highlight(language, content, true).value;
      return `<pre><code class="language-${language}">${formatCode}</code></pre>`;
    },
  });
``` -->
