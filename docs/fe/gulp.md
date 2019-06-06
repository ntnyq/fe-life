# Gulp

> Gulp是一款基于流的自动化构建工具。与Webpack不同，它是一款**Task Runner**。


## 踩坑记录

## gulp-sass报错

``` bash
[17:49:39] Starting 'scss'...
[17:49:39] Finished 'scss' after 3.85 ms
Error in plugin "sass"
Message:
    src\scss\style.scss
Error: File to import not found or unreadable: ./_utils/_style.
        on line 3 of src/scss/style.scss
>> @import "./_utils/_style";
```

解决：

1. 在sublime的配置项中增加`"atomic_save": true `。
2. 使用`gulp-wait`。

[Github Issue](https://github.com/olefredrik/FoundationPress/issues/731)

## 常用插件列表

[Gulp](https://gulpjs.com/) **框架本体**

### Gulp插件

> 以`gulp-*`为规则命名的插件。

#### 样式处理

- [gulp-sass](https://github.com/dlmanning/gulp-sass) **SASS && SCSS预编译**
- [gulp-less](https://github.com/gulp-community/gulp-less) **Less预编译**
- [gulp-postcss](https://github.com/postcss/gulp-postcss) **Postcss后处理**
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) **浏览器私有前缀、兼容样式补全等**

#### ES6编译

- [gulp-babel](https://github.com/babel/gulp-babel) **ES6及以后版本编译为ES5**

  需要搭配`babel-core`与`babel-preset-env`使用

#### 模板引擎

- [gulp-pug](https://github.com/gulp-community/gulp-pug) **Pug，原名Jade的Gulp插件，使用模板引擎编写静态页面**
- [gulp-ejs](https://www.npmjs.com/package/gulp-ejs) **Ejs模板引擎的Gulp插件**
- [gulp-data](https://www.npmjs.com/package/gulp-data) **通过读取json文件为模板引擎注入数据**

#### 代码美化

- [gulp-html-beautify](https://www.npmjs.com/package/gulp-html-beautify) **HTML代码格式美化，代码强迫症的选择**
- [gulp-prettier](https://www.npmjs.com/package/gulp-prettier) **Prettier工具的Gulp插件，JS等代码美化，可使用插件支持别的语言**

#### 性能优化

- [gulp-base64](https://www.npmjs.com/package/gulp-base64) **将样式表中的背景图转化为base64格式的dataURL**
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) **CSS文件压缩，移除注释等**
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) **JS文件压缩，UglifyJS的Gulp插件**

#### 文档目录

- [gulp-rename](https://www.npmjs.com/package/gulp-rename) **文件名修改，如增加前缀、后缀、修改路径等**
- [gulp-size](https://www.npmjs.com/package/gulp-size) **输出文件的大小**
- [gulp-clean](https://www.npmjs.com/package/gulp-clean) **迭代清空指定目录及其下所有文件**
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) **多文件合并**
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) **SourceMap文件生成**

#### 其他插件

- [gulp-load-plugins ](https://www.npmjs.com/package/gulp-load-plugins) **自动挂载所有Gulp插件，强烈推荐使用**
- [gulp-sequence](https://www.npmjs.com/package/gulp-sequence) **同步顺序执行Gulp Task**
- [gulp-wait](https://www.npmjs.com/package/gulp-wait) **在Gulp的管道流中加入延迟事件，阻塞任务**
- [gulp-header](https://www.npmjs.com/package/gulp-header) **文件元信息添加，如版本、作者、说明文档、开源协议等**
- [gulp-if](https://www.npmjs.com/package/gulp-if) **流程控制**

### NPM插件

- [browser-sync](https://github.com/BrowserSync/browser-sync) **基于WebSocket的浏览器自动刷新**
- [mkdirp](https://www.npmjs.com/package/mkdirp) **迭代创建目录**
