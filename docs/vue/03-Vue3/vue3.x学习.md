## vue3.x 语法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!--  引入 vue.js  3.x -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>

  <body>
    <!-- 实例容器 -->
    <div id="root">
      <h1>{{ title }}</h1>
      {{ message }}
    </div>

    <!-- vue 3.x 语法：-->
    <script>
      const { createApp } = Vue;
      createApp({
        data() {
          return {
            message: "Hello Vue!",
            title: "这个是标题！！",
          };
        },
      }).mount("#root");
    </script>
  </body>
</html>
```

### vue3.x html 创建组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue3的组件，以及组件生命周期函数</title>
    <style>
      #app {
        border: 1px solid blue;
      }
      .item {
        border: 1px solid red;
        padding: 10px;
      }
      .content {
        margin: 20px;
      }
    </style>
    <!-- 引入vue3 -->
    <script src="https://unpkg.com/vue@3.5.13/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <div class="content">
        <h1>根组件</h1>
        {{ num}} {{content}}
        <button @click="num++">修改数据</button>
        <button @click="visible=!visible">显示及隐藏子组件</button>
        <h2>子组件</h2>
        <my-component v-if="visible" class="item"></my-component>
      </div>
    </div>
    <script>
      /* 组件的名字：组件名必须以大写字母开头 */
      const MyComponent = {
        template: `<div>
            {{content}}  -- {{num}}
            <button @click="num--">修改数据</button>
            </div>`,
        data() {
          return {
            content: "我是子组件",
            num: 100,
          };
        },
        setup() {},
      };
      /* 解构 createApp */
      const { createApp } = Vue;
      createApp({
        data() {
          return {
            content: "我是根组件",
            num: 0,
            visible: true,
          };
        },
        components: {
          MyComponent,
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

### vue3.x html 生命周期函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue3的组件，以及组件生命周期函数</title>
    <style>
      #app {
        border: 1px solid blue;
      }
      .item {
        border: 1px solid red;
        padding: 10px;
      }
      .content {
        margin: 20px;
      }
    </style>
    <!-- 引入vue3 -->
    <script src="https://unpkg.com/vue@3.5.13/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <div class="content">
        <h1>根组件</h1>
        {{ num}} {{content}}
        <button @click="num++">修改数据</button>
        <button @click="visible=!visible">显示及隐藏子组件</button>
        <h2>子组件</h2>
        <my-component v-if="visible" class="item"></my-component>
      </div>
    </div>
    <script>
      /* 组件的名字：组件名必须以大写字母开头 */
      const MyComponent = {
        template: `<div>
            {{content}}  -- {{num}}
            <button @click="num--">修改数据</button>
            </div>`,
        data() {
          return {
            content: "我是子组件",
            num: 100,
          };
        },
        /* 子组件的生命周期函数 */
        setup() {
          console.log("选项式API 中，在created函数中 子组件创建完成");
          console.log("组合式API 中，在setup函数中 子组件创建完成");

          onBeforeMount(() => {
            console.log("onBeforeMount:子组件挂载前");
          });
          onMounted(() => {
            console.log("onMounted:子组件挂载完成");
          });
          onBeforeUpdate(() => {
            console.log("onBeforeUpdate:子组件更新前");
          });
          onUpdated(() => {
            console.log("onUpdated:子组件更新完成");
          });
          onBeforeUnmount(() => {
            console.log("onBeforeUnmount:子组件销毁前");
          });
          onUnmounted(() => {
            console.log("onUnmounted:子组件销毁完成");
          });
        },
      };
      /* 解构 createApp */
      const {
        createApp,
        beforeCreate,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
      } = Vue;
      createApp({
        data() {
          return {
            content: "我是根组件",
            num: 0,
            visible: true,
          };
        },
        components: {
          MyComponent,
        },
        setup() {
          console.log("组合式API 中，在setup函数中 根组件创建完成");
          onBeforeMount(() => {
            console.log("onBeforeMount:根组件挂载前");
          });
          onMounted(() => {
            console.log("onMounted:根组件挂载完成");
          });
          onBeforeUpdate(() => {
            console.log("onBeforeUpdate:根组件更新前");
          });
          onUpdated(() => {
            console.log("onUpdated:根组件更新完成");
          });
          onBeforeUnmount(() => {
            console.log("onBeforeUnmount:根组件销毁前");
          });
          onUnmounted(() => {
            console.log("onUnmounted:根组件销毁完成");
          });
        },
      }).mount("#app");
    </script>
  </body>
</html>
```
