# Videojs

> 当前 [videojs](https://github.com/videojs/video.js) 版本为 `v7.4.2`。

## 初始化

> 可以提供多个 `source` 标签，无法播放时候会自动播放下一个视频。

``` html
<!-- 或者使用 div 标签 -->
<video 
  id="example_video" 
  class="video-js">
  <source 
    src="path_to_your/video.mp4" 
    type="video/mp4" 
  />
  <!-- 无js提示 -->
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>
```

### 通过 `data-setup` 初始化

``` html
<video 
  id="example_video" 
  class="video-js" 
  data-setup="{}">
  <source 
    src="path_to_your/video.mp4" 
    type="video/mp4" 
  />
</video>
```

### 通过 js **videojs** 函数初始化

``` js
videojs('example_video', {}, function () {
  console.log('>>> videojs initialized successful!');

  this.load(); // 重新加载
  this.src = 'path_to_your/video2.mp4'; // 切换地址
  this.play(); // 播放
  this.pause(); // 暂停
})
```

第二个参数为配置对象，第三个参数为成功初始化的回调函数。

## 配置

[**详细配置信息**](https://docs.videojs.com/tutorial-options.html)

``` js
poster: 'path_to_your/img.ext', // 海报图
preload: 'auto', // 预加载 'none' | metadata | auto
fluid: true,  // 是否自适应尺寸
controls: true, // 是否显示播放控件
autoplay: true, // 是否自动播放
loop: true, // 是否循环播放
muted: false, // 是否静音
width: 640 // 视频宽度
height: 360 // 视频高度
```

## 解决方案

### 播放按钮居中

在 video 标签上添加

``` html
<video 
  id="video_player" 
  class="video-js vjs-big-play-centered">
  <source 
    src="./video/portrait.mp4" 
    type="video/mp4" 
  />
</video>
```

### 播放按钮居中

``` css
.vjs-big-play-centered .vjs-big-play-button {
  margin-top: -1.5em;
}
```

### 播放器自适应尺寸

在播放器元素上添加 `vjs-fluid` 或者 `vjs-16-9` 或者 `vjs-4-3`类。

js等方案查看 [videojs-docs Layout](https://docs.videojs.com/tutorial-layout.html)

### 海报图铺满

``` css
.vjs-poster {
  background-size: cover;
}
```

### 修改播放按钮为圆形

``` css
.video-js .vjs-icon-placeholder:before {
  height: 3em !important;
  line-height: 1.5em;
  font-size: 2em;
}
```

### 移动端不自动全屏

``` html
<video 
  playsinline="true" 
  webkit-playsinline="true" 
  x5-video-player-type="h5" 
  x5-video-player-fullscreen="false" 
  x5-video-orientation="portrait">
</video>
```

### 暂停时显示点击播放按钮

> 默认播放按钮只在首次未播放时候显示。

``` css
.vjs-paused .vjs-big-play-button, 
.vjs-paused.vjs-has-started .vjs-big-play-button { 
  display: block; 
}
```

### 去掉按钮点击outline

``` css
.video-js button:focus {
  outline: none;
}
```

## 事件

Videojs 支持以下事件监听。

```
durationchange
ended
canplay
firstplay
fullscreenchange
loadedalldata
loadeddata
loadedmetadata
loadstart
pause
play
progress
seeked
seeking
timeupdate
volumechange
waiting
resize inherited
```

## vue-video-player动态修改视频源

``` vue
<template>
  <vue-video-player ref="videoPlayer" />
</template>

<script>
export default {
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },

  methods: {
    toggle () {
      const newVideo = 'https://video.com/video.mp4'

      this.player.src(newVideo)
    }
  }
}
</script>
```

### 参考资料

[vue-video-player 更改视频源](https://segmentfault.com/a/1190000014738331)

## 打包体积过大

``` js
// 无字幕
import videojs from 'dist/alt/videojs.novtt.js'

// 无 hls
import videojs from 'dist/alt/video.core.js'

// 无字幕与 hls
import videojs from 'video.js/dist/alt/videojs.core.novtt.js'
```

### 参考资料

- [Large bundle size (900KB)](https://github.com/videojs/video.js/issues/6166#issuecomment-520539730)
