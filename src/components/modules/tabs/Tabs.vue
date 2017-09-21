<template>
    <div class="tabs">
        <nav class="tabs__menu">
            <button v-for="tab in tabs" 
                :key="tab.id"
                :class="['tabs__link', {'tabs__link--active': tab.active}]"
                @click="changeTab(tab)">
                {{tab.tabLabel}}
            </button>
        </nav>
        <div class="tabs__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        // className: Array
    },
    data () {
        return {
            tabs: [],
            current: null
        }
    },

    methods: {
        addTab (tab) {
            this.tabs.push(tab)
            if (tab.active === true) {
                this.current = tab
            }
        },
        changeTab (tab) {
            console.log(tab)
            this.current = tab
            this.tabs.forEach((value) => {
                if (value === tab) {
                    value.active = true
                } else {
                    value.active = false
                }
            })
        }
    },
    created () {
        console.log(this)
    },
    components: {
        // empty
    }
}
</script>

<style lang="scss" src="./tabs.scss"></style>
