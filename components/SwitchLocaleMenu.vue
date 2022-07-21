<template>
<ui-menu-anchor>

    <ui-icon-button @click="switchLocaleStore.open" icon="translate"></ui-icon-button>
    <ui-menu
        v-model="switchLocaleStore.isOpen" 
        @selected="onSelected"
        @cancel="switchLocaleStore.close" 
    >
        <ui-menuitem v-for="locale in localeLabels" :key="locale.text">
            <ui-menuitem-text>
                {{locale.text}}
            </ui-menuitem-text>
            <ui-menuitem-icon>
                <ui-icon v-if="locale.code == localStore.locale">done</ui-icon>
            </ui-menuitem-icon>
        </ui-menuitem>    
    </ui-menu>
</ui-menu-anchor>
    
</template>

<script lang="ts" setup>
import { useSwitchLocaleStore, useLocaleStore } from '~/store';

const switchLocaleStore = useSwitchLocaleStore();
const localStore = useLocaleStore();

interface LocaleLable {
    code: string
    text: string
}

const localeLabels: LocaleLable[] = [
    {
        code: 'en',
        text: 'English',
    },
    {
        code: 'zh-Hans',
        text: '简体中文',
    }
]

function onSelected(code: any)  {
    localStore.setLocale(localeLabels[code.index as number].code)
    switchLocaleStore.close()
}



</script>

<style scoped>

</style>