<template>
  <div id="content-main">
      <h1 class="logo title" :class="$tt('headline1')">Flink Skin</h1>
      <h4 class="subtitle" :class="$tt('headline4')">基于Nuxt的开源Minecraft皮肤站</h4>
      <ui-fab icon="login" extended>
        <h6 :class="$tt('headline6')">
          <nuxt-link class="link" to="/console">即刻使用！</nuxt-link>
        </h6>
      </ui-fab>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

#content-main {
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  color: white;

  text-align: center;
  justify-content: flex-start;
  align-items: center;
  justify-items: center;
}

body {
  overflow: hidden;
}

.title {
  margin-top: 25vh;
  margin-bottom: 8px;
}
.subtitle {
  margin-top: 8px;
}

</style>
