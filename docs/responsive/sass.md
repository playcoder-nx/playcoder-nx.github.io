背景
以往写媒体查询可能是这样的：

``````css
.header {
    display: flex;
    width: 100%;
}

@media (width >= 320px) and (width <= 480px) {
    .header {
        height: 50px;
    }
}

@media (width > 480px) and (width <= 768px) {
    .header {
        height: 60px;
    }
}

@media (width > 768px) and (width <= 1024px) {
    .header {
        height: 70px;
    }
}

@media (width > 1024px) and (width <= 1200) {
    .header {
        height: 80px;
    }
}

@media (width > 1200) {
    .header {
        height: 100px;
    }
}

``````


以上写法可以看到写起来非常不方便，可读性也很差。因此希望用 sass 优化一下写法。

目标
希望可以这样写媒体查询：



```css
.header {
    display: flex;
    width: 100%;
}
手机: {
 	height: 50px;
}
  
平板: {
  	height: 60px;
}
...
```
### sass 混合功能

sass/scss 快速入门

```scss
/* 定义混合函数 */
@mixin flexCenter($jus_c: center, $ali_i: center) {
  display: flex;
  justify-content: $jus_c;
  align-items: $ali_i;
}

/* 使用混合函数 */
.header {
    width: 100%;
    @include flexCenter(space-between, flex-end);
}


```



### sass if 判断和插槽

混合函数中使用 @if判断区分不同设备，@content类似于 vue 插槽接收使用者在方法体中插入的内容。

```scss
@mixin respond-to($breakpoint) {
    @if $breakpoint == mobile {
        @media screen and (width <= 767px) {
            @content;
        }
    } @else if $breakpoint == tablet {
        @media screen and (width >= 768px) and (width <= 1023px) {
            @content;
        }
    } @else if $breakpoint == desktop {
        @media screen and (width >= 1024px) {
            @content;
        }
    } @else if $breakpoint == wide {
        @media screen and (width >= 1200px) {
            @content;
        }
    }
}

```


使用：



```scss
.header {
    width: 100%;
    height: 100vh;

    @include respond-to(mobile) {
        height: 100px;
    }

    @include respond-to(tablet) {
        height: 200px;
    }

    ...

    background-color: rgb(139 133 133);
}

```

上面代码已经基本达到书写媒体查询的目标。但是 if else 太多了，不好看。还可以用策略模式优化一下。

进阶：sass 定义对象优化代码结构
用 hash 映射优化 if，也就是定义一个对象。sass 中可以定义对象。
注意：sass 中()括号就代表 js 的花括号{}和方括号[]。

以下就是一个对象，这 5 个属性设置 5 个断点，除最后一个大屏外，其他断点属性值为数组。
之前的代码设置了 4 个断点，区别不大。

```scss
/* 定义断点对象 */
$breakpoints: (
    phone: (320px,480px),
    pad: (481px,768px),
    notebook: (769px,1024px),
    desktop: (1025px,1280px),
    tv: 1281px
);
```

sass 读取对象中的值：

map-get(obj, prop)：获取对象的属性值
sass 判断数据类型：

- ```scss
  type-of($var)
  ```

  - 数组类型：list
  - 数值类型：number

```scss
@mixin respond-to($breakname) {
    /* 1. 读取断点对象属性值 */
    $bp: map-get($breakpoints, $breakname);

    /* 2. 类型判断是否为数组 */
    @if type-of($bp) == "list" {
        /* 3. 取出数组中的数据 */
        $min: nth($bp, 1);
        $max: nth($bp, 2);

        @media screen and (min-width: $min) and (max-width: $max) {
            @content;
        }

        /* 4. tv 大屏 */
    } @else if type-of($bp) == "number" {
        @media screen and (min-width: $bp) {
            @content;
        }
    } @else {
        @warn "`$breakname` is not a valid breakpoint name.";
    }
}

```



vite 配置全局使用
直接在组件中 @include 使用混合函数，可能会报错：

[vite] Internal server error: [sass] Undefined mixin.


这是因为 minix 需要预编译，在 vite 中配置：
Vite

```js
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: `@use "@/styles/minix.scss" as *;`
            }
        }
    }
});

```



组件中使用：

```scss
.header {
    width: 100%;
    height: 100vh;

    @include respond-to(phone) {
        height: 100px;
    }

    @include respond-to(tv) {
        height: 200px;
    }

    background-color: rgb(139 133 133);
}

```


完整代码


```scss
$breakpoints: (
    phone: (
        320px,
        480px
    ),
    pad: (
        481px,
        768px
    ),
    notebook: (
        769px,
        1024px
    ),
    desktop: (
        1025px,
        1280px
    ),
    tv: 1281px
);

@mixin respond-to($breakname) {
    /* 1. 读取断点对象属性值 */
    $bp: map-get($breakpoints, $breakname);

    /* 2. 类型判断是否为数组 */
    @if type-of($bp) == "list" {
        /* 3. 取出数组中的数据 */
        $min: nth($bp, 1);
        $max: nth($bp, 2);

        @media screen and (min-width: $min) and (max-width: $max) {
            @content;
        }

        /* 4. tv 大屏 */
    } @else if type-of($bp) == "number" {
        @media screen and (min-width: $bp) {
            @content;
        }
    } @else {
        @warn "`$breakname` is not a valid breakpoint name.";
    }
}

```
