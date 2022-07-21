import { defineStore } from "pinia";

const useLocaleStore = defineStore('locale', {
    state() {
        return {
            locale: 'en', 
        }
    },
    actions: {
       setLocale(locale: string) {
        this.locale = locale
       } 
    }
}) 

const useSwitchLocaleStore = defineStore('switch-locale', {
    
    state() {
        return {
            isOpen: false,
        }
    },
    actions: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        }
    }
})

export {
    useLocaleStore,
    useSwitchLocaleStore,
}