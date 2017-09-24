<template lang="html">
    <label class="checkbox">
        <input class="checkbox__input" type="checkbox" :name="name" :value="value"/>
        <span class="checkbox__inner"></span>
        <span class="checkbox__label" @click="action">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'checkbox',
    props: {
        name: { type: String },
        text: { type: String, default: '' },
        value: { type: String, default: '' },
        action: { type: Function, default: () => {} }
    },
    data () {
        return {
            description: 'Описание компонента'
        }
    }
}
</script>

<style lang="scss" src="./_component_name.scss" scoped></style>
