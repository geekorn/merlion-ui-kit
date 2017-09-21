import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    // store,
    render: h => h(App)
})
