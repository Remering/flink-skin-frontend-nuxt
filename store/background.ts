import { defineStore } from "pinia"

const useBackgroundStore = defineStore('switch-locale', {
    
    state() {
        return {
            showImage: false,
        }
    },
    actions: {
        show() {
            this.showImage = true
        },
        hide() {
            this.showImage = false
        }
    }
})

export {
    useBackgroundStore
}