<template>
  <div class="forms-container">
      <ul class="form__list">

          <li class="row">
              <div class="column component">
                  <text-input>Введите текст</text-input>  
              </div>
              <div class="column component-decs">Поле для текстового ввода</div>
          </li>

          <li class="row">
              <div class="column component">
                  <select-item></select-item>  
              </div>
              <div class="column component-decs">Селект с фильтром. начинает поиск после ввода 3х символов</div>
          </li>

          <li class="row">
              <div class="column component">
                  <check-box name="checkbox" value="0">Чекбокс</check-box>
                  <check-box name="checkbox" value="1">Чекбокс</check-box>
                  <check-box name="checkbox" value="2">Чекбокс</check-box>
              </div>
              <div class="column component-decs">Чекбокс</div>              
          </li>

          <li class="row">
              <div class="column component">
                  <radio name="radio" value="0">Радио 1</radio>
                  <radio name="radio" value="1">Радио 2</radio>
                  <radio name="radio" value="2">Радио 3</radio>
              </div>
              <div class="column component-decs">Радио-кнопка</div>              
          </li>
      </ul>
  </div>
</template>

<script>
import TextInput from '../../modules/text-input'
import SelectItem from '../../modules/select-item'
import CheckBox from '../../modules/check-box'
import Radio from '../../modules/radio'

export default {
    name: 'form-wrap',
    data () {
        return {
            elements: this.$children
        }
    },
    computed: {
        // elementsObj () {
        //     return this.$children( item => {
        //         return {
        //             name: item._vnode.tag,
        //             desc: item.description
        //         }
        //     })
        // }
    },
    created () {
        console.log(this)
    },
    components: {
        TextInput,
        SelectItem,
        CheckBox,
        Radio
    }
}
</script>

<style src="./forms.scss" lang="scss"></style>
