<template lang="html">
    <label class="radio">
        <input class="radio__input" type="radio" :name="name" :value="value"/>
        <span class="radio__inner"></span>
        <span class="radio__label" @click="action">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'radio',
    props: {
        name: { type: String },
        text: { type: String, default: '' },
        value: { type: String, default: '' },
        action: { type: Function, default: () => {} }
    },
    data () {
        return {
            description: 'Радиокнопка обычная'
        }
    }
}
</script>

<style lang="scss" src="./radio.scss" scoped></style>
