import { createApp } from 'vue'
import App from './App.vue'
import jsonData from '../data.json';

createApp(App).mount('#app')

export default {
    data() {
        return {
            jsonData: jsonData
        }
    }
}