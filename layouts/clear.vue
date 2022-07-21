<template>
    <div id="wrapper">
      <AppBar></AppBar>
      <slot/>
    </div>
</template>

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
}


body {
  overflow: hidden;
}

.title {
  margin: 16px;
}
</style>