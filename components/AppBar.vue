<template>
    <ui-top-app-bar
    content-selector="#content-main"
    type="1"
  >
    <template default>
        <h3 class="logo" :class="$tt('headline3')">Flink Skin</h3>
    </template>
    <template #nav-icon>
        <div></div>
    </template>
    <template #toolbar>
        <switch-locale-menu></switch-locale-menu>
        <ui-icon-button icon="storage"></ui-icon-button>
    </template>
  </ui-top-app-bar>
</template>

<script setup lang="ts">
</script>

<style>

</style>