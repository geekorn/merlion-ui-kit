<template>
    <div :class="['tabs__item', {'tabs__item--active': active}]">
        <slot></slot>
    </div>
</template>

<script>
// import NotStudy from "not-study"

export default {
    name: 'tab',
    props: {
        tabId: [Number, String],
        tabLabel: [Number, String],
        isActive: { type: Boolean, default: false }
    },
    data () {
        return {
            active: this.isActive
        }
    },
    computed: {
        // active () {
        //     return this.isActive
        // }
    },
    methods: {
        // getTabData () {
        //     return {
        //         id: this.tabId,
        //         label: this.tabLabel,
        //         active: this.isActive,
        //         // icon: this.mdIcon,
        //         // iconset: this.mdIconset,
        //         // iconSrc: this.mdIconSrc,
        //         // options: this.mdOptions,
        //         // disabled: this.mdDisabled,
        //         // tooltip: this.mdTooltip,
        //         // tooltipDelay: this.mdTooltipDelay,
        //         // tooltipDirection: this.mdTooltipDirection,
        //         ref: this
        //     }
        // }
    },
    created () {
        // this.active = this.isActive
    },
    mounted () {
        this.$parent.addTab(this)
    }
}
</script>

<style></style>