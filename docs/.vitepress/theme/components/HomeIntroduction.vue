<template>
  <div class="VPHomeIntroduction">
    <div class="container">
      <a
        href="https://vitepress.vuejs.org/"
        target="_blank"
      >
        <img
          src="https://img.shields.io/badge/powered--by-vitepress-green.svg"
          alt="vitepress"
        />
      </a>
      <a
        href="https://github.com/ntnyq/fe-life"
        target="_blank"
      >
        <img
          src="https://img.shields.io/github/last-commit/ntnyq/fe-life.svg"
          alt="ntnyq/fe-life"
        />
      </a>
      <p>
        作为一名 <del>前端小白</del>，在开发过程中难免遇到各种 <b>*</b> 蛋的问题，心中难免要说一声
        <b>fuck</b> 🐶。
      </p>
      <p>
        本着 <b>DRY</b> 的原则，避免重复踩坑，所以开一个
        <a
          href="https://github.com/ntnyq/fe-life"
          target="_blank"
          >Repo</a
        >
        记录我的前端人生。
      </p>
    </div>
  </div>
</template>

<style scoped>
.VPHomeIntroduction {
  border-top: 1px solid var(--vp-c-divider-light);
  padding: 88px 24px 96px;
  background-color: var(--vp-c-bg);
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.container img {
  display: inline-block;
  margin: 0 10px 10px 0;
}

.container p {
  position: relative;
  line-height: 2;
}
</style>
