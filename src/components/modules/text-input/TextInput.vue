<template lang="html">
    <label class="text-input">
        <input class="text-input__input" 
            type="text" 
            :placeholder="placeholder" 
            :value="value"/>        
        <span class="text-input__label">
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

<style lang="scss" src="./text-input.scss" scoped></style>
