# 前端路由

## 懒加载

> 环境： webpack4且安装`@babel/plugin-syntax-dynamic-import`依赖.

``` js
// routes.js
import Index = () => import(/* webpackChunkName: "index" */ '@/views/Index');
import About = () => import(/* webpackChunkName: "about" */ '@/views/About');

const routes = [
  {
  	path: '/index',
  	name: 'index',
  	component: Index
  },

  {
  	path: '/about',
  	name: 'about',
  	component: About
  }
];

export default routes;
```

## 面包屑导航

当应用存在多级菜单时，使用面包屑导航可以明确地让用户了解自己当前的位置。
在Vue中，可以轻松获取到用户当前位置的层级信息。

假设有如下面包屑导航组件

``` vue
// Breadcrum.vue
export default {
  data () {
    return {
      levelList: []
    }
  },

  methods () {
    genBreadcrum () {
      const matched = this.$route.matched.filter(item => item.name)

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false) // routes里配置了meta.breadcrumb: false的路由将不会被渲染到面包屑导航
    }
  },

  watch: {
    $route: {
      handler () {
        this.genBreadcrum()
      },

      immediate: true
    }
  }
}
```
