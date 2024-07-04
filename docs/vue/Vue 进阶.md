<a name="TeXAM"></a>
# 脚手架构建 Vue + Vite 项目
[Vite](https://vitejs.cn/vite3-cn/guide/#scaffolding-your-first-vite-project)
```javascript
npm create vite my-vue-app --template vue-ts
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/35083209/1719234644766-e8b33963-ee02-413c-8190-ac82e986022b.png#averageHue=%23151728&clientId=ue33db6ac-c5a4-4&from=paste&height=317&id=u79435555&originHeight=634&originWidth=1702&originalType=binary&ratio=2&rotation=0&showTitle=false&size=161377&status=done&style=none&taskId=u0e8859b6-1964-45ba-a315-176b9a6339f&title=&width=851)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/35083209/1719234832790-31210304-ddef-4f78-af65-d9ebb6d7684b.png#averageHue=%23fefefe&clientId=ue33db6ac-c5a4-4&from=paste&height=673&id=ubf66a816&originHeight=1346&originWidth=1612&originalType=binary&ratio=2&rotation=0&showTitle=false&size=139077&status=done&style=none&taskId=uc7fe2d4d-3539-47b7-b030-5313542ccda&title=&width=806)
<a name="BbV5z"></a>
# 文件结构简介
<a name="Bs9lV"></a>
### 文件夹

1. **.vscode**
   - 存储 Visual Studio Code 编辑器的配置文件，例如启动配置和调试配置。
2. **node_modules**
   - 存放通过 npm 安装的项目依赖包，自动生成和管理，不需要手动修改。
3. **public**
   - 用于存放静态资源，如图片、图标等，这些资源不会经过 Vite 的处理，直接被复制到最终构建输出的目录中。
4. **src**
   - 项目的源代码目录，主要的开发内容都在这个文件夹中。
<a name="BJDyh"></a>
### 文件和子文件夹

- **src/assets**
   - 用于存放项目的静态资源，例如图片、SVG 文件等。
   - **vue.svg**
      - 一个 SVG 文件，可以用于图标或其他图形元素。
- **src/components**
   - 用于存放 Vue 组件，组件是 Vue 项目中的基本构建块，可以在不同的页面和模块中复用。
   - **HelloWorld.vue**
      - 一个示例 Vue 组件，通常包含基础的 Vue 代码，用于展示如何创建和使用 Vue 组件。
- **src/App.vue**
   - 主应用组件，是 Vue 应用的根组件，所有其他组件都是从这个组件开始的。
- **src/main.ts**
   - 项目的入口文件，初始化 Vue 应用并挂载到 DOM 中。
<a name="C9z6N"></a>
### 根目录文件

- **.gitignore**
   - 指定哪些文件和目录应该被 Git 忽略，不纳入版本控制，例如 node_modules。
- **index.html**
   - 项目的入口 HTML 文件，包含一个 id 为 app 的元素，Vue 应用将会挂载在这里。
- **package-lock.json**
   - 锁定项目的依赖版本，确保每次安装依赖时版本一致。
- **package.json**
   - 项目的配置文件，包含项目的基本信息、依赖、脚本等。
- **README.md**
   - 项目的说明文档，通常包含项目的介绍、安装步骤、使用方法等。
- **tsconfig.app.json**
   - TypeScript 配置文件，指定 TypeScript 编译器的配置选项。
- **tsconfig.json**
   - TypeScript 项目的全局配置文件，定义 TypeScript 编译的行为。
- **tsconfig.node.json**
   - 为 Node.js 环境配置的 TypeScript 配置文件。
- **vite.config.ts**
   - Vite 的配置文件，包含项目的构建和开发服务器配置。
<a name="gjHGZ"></a>
# 路由的基础配置
<a name="UNrKv"></a>
## 新建两个页面模板
```javascript
<template>
    <h1>这是关于页面</h1>
</template>

...
<template>
    <h1>这是首页</h1>
</template>
```
<a name="W0PbI"></a>
## 新建 route/index.ts配置路由
```javascript
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/about',
        name: 'Home',
        component: About 
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
```
<a name="Kra5n"></a>
## 添加 router 到 main.ts
```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./route";

createApp(App).use(router).mount('#app')
```
<a name="bH6La"></a>
## 修改App.vue
```javascript
<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于我的</router-link>
  </div>

  <router-view></router-view>
</template>
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/35083209/1719238149829-0c036ac4-6d02-4869-955f-e86aecaa5c73.png#averageHue=%23fefefe&clientId=ue33db6ac-c5a4-4&from=paste&height=394&id=u3fad90d5&originHeight=788&originWidth=1276&originalType=binary&ratio=2&rotation=0&showTitle=false&size=39703&status=done&style=none&taskId=u729270e3-5a5b-4b7f-8892-8f450b6ba30&title=&width=638)

