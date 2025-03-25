## 2. 宽高

### 2.1 宽度高度

1. 预定义数值类（`w-数值`、`h-数值`）

通过 `w-数值` 和 `h-数值` 就能分别设定宽度和高度，例如：

```html
<div class="w-20 h-20 bg-blue-500">width and height</div>
```

`w-1` 的 1 表示 0.25 rem，即 4 px，以此类推，`w-20` 表示 5 rem，即 `width: 80px;`。同理，`h-20` 表示 `height: 80px;` 。

`bg-blue-500` 很好理解，就是 `background-color` 为蓝色，其中 500 表示某种饱和度的蓝色：数值越大颜色越深。

![数值类.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ec75b0812b34dd18a5d8d181e5bbd45~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=78&h=80&s=3149&e=png&b=397aeb)

1. 手动书写任意值（`w-[]`、`h-[]`）

```html
<div class="w-[80px] h-20 bg-blue-500">width and height</div>
<div class="w-[5rem] h-20 bg-blue-500">width and height</div>
<div class="w-[5em] h-20 bg-blue-500">width and height</div>
```

想要更加直观可控，以 width 为例，`w-20` 实际上等价于：`w-[80px]` 、`w-[5rem]`、`w-[5em]`。

1. 百分比（`w-分子/分母`、`h-分子/分母`）

```tsx
<div class="w-1/2 h-20 bg-blue-300">w-1/2</div>
<div class="w-1/3 h-20 bg-blue-300">w-1/3</div>
<div class="w-1/4 h-20 bg-blue-300">w-1/4</div>
```

百分比的有效范围为：1/2, 1/3, 2/3, 1/4, 2/4, …, 11/12，整数不在此范围，例如 2/2, 3/3 等。

- w-1/2 👉 `width: 50%;`
- w-1/3 👉 `width: 33.333333%;`
- w-1/4 👉 `width: 25%;`

![百分比.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c960f27f0e0641adbfe9406a43ca5bf3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=623&h=241&s=7127&e=png&b=ffffff)

1. `w-full`、`w-screen`

一般来说，占满宽度有两种情况。一个是占据容器的 100% 宽度，一个是占据设备屏幕的 100% 宽度。（另外还有 `w-svw`、`w-lvw`、`w-dvw`）

```tsx
<div class="w-[500px] border">
	<div class="w-full h-20 bg-blue-100">w-full</div>
	<div class="w-screen h-20 bg-blue-100">w-screen</div>
</div>
```

- w-full 👉 `width: 100%;`
- w-screen 👉 `width: 100vw;`

![100%.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ca86a8d471545bbb14284eedacd43a4~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=610&h=163&s=8738&e=png&b=d7e7fc)

1. `h-svh`、`h-lvh`、`h-dvh`

在高度方面也是类似，也有 `h-full` 和 `h-screen`。由于设备的不同，考虑到手机 h5 之类的情况，使用以下更为灵活的发高度值：

h-svh 👉 `height: 100svh;`

![h-svh.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9eb4791caf334277aa2ed455a913b4f7~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=614&h=498&s=52401&e=png&b=9357ed)

h-lvh 👉 `height: 100lvh;`

![h-lvh.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/206ee641c5dc411d8280bf2177f76f36~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=611&h=529&s=36292&e=png&b=6368f1)

h-dvh 👉 `height: 100dvh;`

![h-dvh.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b65f21e735f42388a22ce92c3a757e1~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=614&h=495&s=36286&e=png&b=ec489a)

在实际使用中，用起来第三种 h-dvh 会更加灵活。

### 2.2 最小/大宽度高度

1. `min-w-[]`、`max-w-[]`
2. `min-h-[]`、`max-h-[]`

这些一般用于响应式设计或防止溢出。下面是一个按钮文本防止宽度溢出的设计：

```html
<div class="inline-block min-w-20 h-10 leading-10 bg-green-200 text-center">
  btn
</div>
<br />
<div class="inline-block min-w-20 h-10 leading-10 bg-green-400 text-center">
  button
</div>
<br />
<div class="inline-block min-w-20 h-10 leading-10 bg-green-600 text-center">
  my long text button
</div>
```

- min-w-20 👉 `min-width: 5rem; /* 80px */`
- inline-block 👉 `display: inline-block;`
- leading-10 👉 `line-height: 2.5rem; /* 40px */`
- text-center 👉 `text-align: center;`

![min-w-20.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/460860348c75467bbd6be9a16b6375d0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=146&h=119&s=5391&e=png&b=ffffff)

### 2.3 size

`size-*` 可以快速创建出一个正方形。注意，低版本的 Tailwind CSS 可能没有这个特性。

```html
<div class="w-20 h-20 bg-blue-500">width and height</div>
```

等价于：

```html
<div class="size-20 bg-blue-500">width and height</div>
```

## 3. 边距

外边距、内边距、空间间隔。

### 3.1 margin

```tsx
<div class="mr-2 inline bg-red-200">inline1</div>
<div class="mr-2 inline bg-red-300">inline2</div>
<div class="mr-2 inline bg-red-400">inline3</div>
```

以 `mr-*` 为例，表示右侧的外边距。

![mr-2.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2beaf72bc6124f3d9f0d120ce69afc83~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=161&h=20&s=2986&e=png&b=f2b0ae)

其他方位：

- mt-* 👉 `margin-top: _;`
- mb-* 👉 `margin-bottom: _;`
- ml-* 👉 `margin-left: _;`
- mx-* 👉  `margin-left: _; margin-right: _;`
- my-* 👉  `margin-top: _; margin-bottom: _;`

内容区块水平方向居中：

```html
<main class="w-[1280px] mx-auto h-screen bg-sky-200">
  ...
</main>
```

mx-auto  👉  `margin: 0 auto;`

![内容区块水平方向居中.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bed0dc2bfb404a99b64dffe2a9a032da~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1612&h=781&s=25423&e=png&b=b7e2fa)

### 3.2 padding

```html
<p class="py-5 px-10 bg-yellow-300">#p1</p>
<p class="py-5 px-10 bg-yellow-400">#p2</p>
<p class="py-5 px-10 bg-yellow-500">#p3</p>
```

padding 部分和 margin 类似。

![px-10 py-5.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3c2d84c4d4444feb5a1504d67d21a37~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=496&h=191&s=5668&e=png&b=f1c343)

### 3.3 space

将 `space-x-*` 或 `space-y-*` 写在容器上，用来控制子元素之间的间距。

1. 水平方向排列

```html
<div class="space-x-4">
  <div class="inline-block bg-slate-400">01</div>
  <div class="inline-block bg-slate-500">02</div>
  <div class="inline-block bg-slate-600">03</div>
</div>
```

1. 垂直方向排列

```html
<div class="space-y-4">
  <div class="bg-emerald-300">01</div>
  <div class="bg-emerald-400">02</div>
  <div class="bg-emerald-500">03</div>
</div>
```

![space-x-4 以及 space-y-4 的间距效果.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c204621fe4394a5d923198a48ecf88a8~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=500&h=128&s=5888&e=png&b=58c693)

## 4. 边框

线宽、线类型、弧度。

### 4.1 线宽 + 颜色

```html
<div class="border border-sky-500 size-10"></div>
<div class="border-2 border-sky-500 size-10"></div>
<div class="border-4 border-sky-500 size-10"></div>
```

通过 `border-*` 设定线宽，颜色的设置也很简单：`border-颜色-数值`。

![线宽+颜色.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8b2929ee43e40e6ac74b122126d84f0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=39&h=122&s=827&e=png&b=ffffff)

如果想要设定某一方向的边框：`border-*-数值`

- border-t-数值 👉 `border-top-width: _;`
- border-r-数值 👉 `border-right-width: _;`
- border-b-数值 👉 `border-bottom-width: _;`
- border-l-数值 👉 `border-left-width: _;`
- border-x-数值 👉 `border-left-width: _; border-right-width: _;`
- border-y-数值 👉 `border-top-width: _; border-right-width: _;`

注意 ⚠️：如果不加数值（例如：`border-t`），表示特定方向上的线宽为 1px。`border-0` 就是 `border-width: 0px;`。

### 4.2 线类型

border-solid 👉 `border-style: solid;`

border-dashed 👉 `border-style: dashed;`

border-dotted 👉 `border-style: dotted;`

border-double 👉 `border-style: double;`

![border-style.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7679d4a691e14f88a18070737462ab02~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=714&h=121&s=14648&e=png&b=171e2d)

### 4.3 弧度

rounded 👉 `border-radius: 0.25rem; /* 4px */`

rounded-md 👉 `border-radius: 0.375rem; /* 6px */`

rounded-lg 👉 `border-radius: 0.5rem; /* 8px */`

rounded-full 👉 `border-start-start-radius: 9999px; border-end-start-radius: 9999px;`

![border-radius.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f1cf63d8d044a98abc3207568e85f5b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=671&h=132&s=11106&e=png&b=141a28)

## 5. 文本

字体（大小、对齐方式、加粗……）

### 5.1 字体大小

和前述章节类似，有关字体大小的相关使用也可以通过 `text-数值`、`text-[]` 的方式进行：

```html
<p class="text-sm">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
<p class="text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
<p class="text-md">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
<p class="text-[16px]">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
<p class="text-lg">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
<p class="text-xl">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia.
</p>
```

其中，`text-base`、`text-md`、`text-[16px]` 都是一样的，取浏览器的字体默认值 16px。

![字体大小.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/844fffedc06e4c5a9e7008cff798aa72~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=656&h=149&s=46528&e=png&b=fcfcfc)

### 5.2 文本对齐方式

```tsx
<p class="text-left">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  adipisci minima dolore sit quas officiis velit sint! Dicta ad ea
  quaerat, sapiente provident et nihil cupiditate est, vero quo soluta.
</p>
<p class="text-center">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  adipisci minima dolore sit quas officiis velit sint! Dicta ad ea
  quaerat, sapiente provident et nihil cupiditate est, vero quo soluta.
</p>
<p class="text-right">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  adipisci minima dolore sit quas officiis velit sint! Dicta ad ea
  quaerat, sapiente provident et nihil cupiditate est, vero quo soluta.
</p>
<p class="text-justify">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  adipisci minima dolore sit quas officiis velit sint! Dicta ad ea
  quaerat, sapiente provident et nihil cupiditate est, vero quo soluta.
</p>
```

![文本对其方式.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fede044a4f4040739b1e89e9cfec1082~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1121&h=192&s=68840&e=png&b=fdfdfd)

### 5.3 字体斜体与加粗

```tsx
<p class="italic">Lorem ipsum! -- italic</p>
<p class="font-thin">Lorem ipsum! -- font-weight: 100;</p>
<p class="font-light">Lorem ipsum! -- font-weight: 300;</p>
<p class="font-normal">Lorem ipsum! -- font-weight: 400;</p>
<p class="font-bold">Lorem ipsum! -- font-weight: 700;</p>
<p class="font-black">Lorem ipsum! -- font-weight: 900;</p>
```

![斜体与加粗.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce20a43509644d14afd216845fe58583~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=279&h=143&s=18341&e=png&b=fcfcfc)

## 6. 颜色

颜色在之前的案例中都有接触，主要为：字体颜色、边框颜色、背景颜色、背景渐变色图像。

```tsx
<p class="text-red-500">Lorem ipsum! -- 文本颜色</p>
<p class="border-2 border-sky-500">Lorem ipsum! -- 边框颜色</p>
<p class="bg-orange-500">Lorem ipsum! -- 背景颜色</p>
<p class="bg-orange-500/75">Lorem ipsum! -- 背景颜色（75% 透明度）</p>
<p class="bg-orange-500/50">Lorem ipsum! -- 背景颜色（50% 透明度）</p>
<div class="bg-gradient-to-r from-purple-500 to-pink-500">
  向右渐变（purple-500 👉 pink-500）
</div>
<div class="bg-gradient-to-l from-transparent to-sky-500">
  向左渐变（sky-500 👈 transparent）
</div>
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  向右渐变（indigo-500 👉 purple-500 👉 pink-500）
</div>
```

字体、边框、背景、不同透明度的背景颜色都很容易理解。需要提一点的是渐变色，这里需要用 `from-颜色A`、`via-颜色B`、`to-颜色C` 来表示从颜色 A 经过 B，最后过渡到 C 的颜色变化。

![各种颜色.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf1edba869154cab97fcfc6abfec635a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1122&h=195&s=110009&e=png&b=ee8049)

## 7. 总结

基础上篇从宽度高度开始逐步展现 Tailwind CSS 基本的使用规则，包括边距、边框、文本、颜色等常用的样式属性。从行文也可以看出，有了上面的铺垫，到了颜色部分其实就可以依靠以往的开发经验猜出对应的属性使用了。下篇将介绍伪类、伪元素、布局、定位等常用属性。

作者：菠萝的蜜
链接：https://juejin.cn/post/7363534953651257353
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。