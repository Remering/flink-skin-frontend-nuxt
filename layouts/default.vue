<template>
    <div id="wrapper">
      <AppBar></AppBar>
      <Nuxt/>
    </div>

</template>
<script lang="ts">
</script>

<style scoped>
#wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  background-image: url(@/assets/images/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}


body {
  overflow: hidden;
}

.title {
  margin: 16px;
}
</style>