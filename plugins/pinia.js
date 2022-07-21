import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import Vue from 'vue';


export default defineNuxtPlugin((app) => {
    app.vueApp.use(createPinia())
})