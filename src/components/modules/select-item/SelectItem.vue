<template>
    <div class="select-item" v-on-clickaway="away">
        <input
            type="text"
            :placeholder="placeholder"
            v-model="inputSelect"
            class="select-item__input"
            @keyup.46="inputSelect = ''"
            @keyup="newInput()"/>
        <div class="select-item__label">{{title}}</div>
        <div v-show="loading" class="select-item__icon-spin4 icon-spin4 animate-spin"></div>
        <div :class="[ 'select-item__arrow', {'select-item__arrow--select': selected && inputSelect.length > 2} ]" 
            @click="componentClick">
        </div>
        <transition name="select-item__fade">
            <ul class="select-item__list" v-show="inputSelect.length > 2 && selected === true">
                <li class="select-item__option" 
                    v-for="item in items"
                    :key="item.id"
                    @click="selectItem(item)">
                    {{getTextInfo(item.info)}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import _ from 'lodash'

export default {
    mixins: [clickaway],
    name: 'select-item',
    props: {
        placeholder: { type: String, default: 'Placeholder не задан' },
        title: { type: String, default: 'Title не задан' },
        selectedItem: { type: Object, default: () => {} },
        items: { type: Array, default: () => [] },
        save: { type: Function, default: () => {} },
        preload: { type: Function, default: () => {} },
        loading: { type: Boolean, default: false },
        isRequired: { type: Boolean, default: false }
    },
    data () {
        return {
            selected: false,
            inputSelect: '',
            description: 'Селект с фильтром. начинает поиск после ввода 3х символов'
        }
    },
    created () {
        this.preload(this.inputSelect)
    },
    computed: {
        focus () {
            return this.isRequired && this.inputSelect === ''
        }
    },
    watch: {
        selectedItem () {
            if (_.isEqual(this.selectedItem, {})) {
                this.inputSelect = ''
                this.preload(this.inputSelect)
            }
        }
    },
    methods: {
        away () {
            if (_.isEqual(this.selectedItem, {})) {
                this.inputSelect = ''
            } else if (this.inputSelect === '') {
                this.save({})
            } else if (this.inputSelect !== this.selectedItem.info.name) {
                this.inputSelect = this.selectedItem.info.name
            }

            this.selected = false
        },

        getTextInfo (info) {
            let text = ''
            for (const props in info) {
                text += info[props] + ' '
            }
            return text
        },

        selectItem (item) {
            this.save(item)
            this.selected = false
            this.inputSelect = item.info.name
            setTimeout(() => { this.preload(this.inputSelect) }, 500)
        },

        componentClick () {
            this.selected = !this.selected
        },

        newInput () {
            this.preload(this.inputSelect)
            this.selected = true
        }
    }
}
</script>

<style lang="scss" src="./select-item.scss"></style>
