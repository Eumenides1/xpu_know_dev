<a name="L3qIU"></a>
# 安装
[Install Tailwind CSS with Vue 3 and Vite - Tailwind CSS](https://v2.tailwindcss.com/docs/guides/vue-3-vite)<br />[安装 - Tailwind CSS 中文网](https://tailwind.nodejs.cn/docs/installation)
<a name="EBBNQ"></a>
# 基础
<a name="m9qng"></a>
### 长宽
```html
<div class=" w-1/2 h-20 bg-blue-200">w-1/2</div>
  <div class=" w-1/3 h-20 bg-blue-200">w-1/2</div>
  <div class=" w-1/4 h-20 bg-blue-200">w-1/2</div>
```
```html
<div class="w-[500px] border">
    <div class="w-full h-20 bg-blue-300">w-full</div>
    <div class="w-screen h-20 bg-blue-300">w-screen</div>
  </div>
```
<a name="gSRtf"></a>
### 边距
```html
 <div class="mr-4 inline bg-red-200">首页</div>
  <div class="mr-2 inline bg-red-200">关于我的</div>
  <div class="mr-2 inline bg-red-200">友情链接</div>
```
```html
<p class="py-5 px-10 bg-yellow-300">#p1</p>
  <p class="py-5 px-10 bg-yellow-400">#p2</p>
  <p class="py-5 px-10 bg-yellow-500">#p3</p>
```
```html
<div class="space-y-4">
    <div class=" bg-slate-400">01</div>
    <div class=" bg-slate-500">02</div>
    <div class=" bg-slate-600">03</div>
    <div class=" bg-slate-700">04</div>
  </div>
```
<a name="rJ9SJ"></a>
### 边框
```html
  <div class=" border border-red-500 size-10 rounded-full"></div>
  <div class=" border-2 border-sky-500 size-10"></div>
  <div class=" border-4 border-sky-500 size-10"></div>
```
<a name="sDNX9"></a>
## 进阶
<a name="QbsDb"></a>
### 伪类
<a name="botvA"></a>
#### hover
```html
  <button class="border-2 bg-black text-white hover:bg-white hover:text-black">
    Button
  </button>
```
<a name="H4sTJ"></a>
#### focus
```html
<div class="bg-sky-600 h-screen w-screen">
    <input type="text" class="px-2 outline focus:outline-2 focus:outline-sky-400" placeholder="请输入用户名"/>
  </div>
```
<a name="XOZsj"></a>
#### active
```html
<button class="bg-sky-500 active:bg-pink-400">
    button
  </button>
```
<a name="vrbgN"></a>
### Flex 布局
<a name="MGOJW"></a>
### 动画
```html
<div class="animate-ping bg-teal-400 size-10 rounded-full text-center leading-[40px]">❤️</div>
```
```html
<div class="animate-spin bg-orange-400 size-10 rounded-full">...</div>
```
```html
<div class="animate-pulse bg-gray-500 w-48 h-10 text-center leading-[40px] rounded-2xl">
  Loading
</div>
```
```html
<div class="animate-bounce bg-black/50 size-10 text-center leading-[40px] rounded-full">
  👇
</div>
```
👇
