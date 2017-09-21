<template>
  <div class="forms-container">
      <select-item></select-item>
      <check-box></check-box>
  </div>
</template>

<script>
import selectItem from '../../modules/select-item'
import checkBox from '../../modules/check-box'

export default {
    name: 'form-wrap',
    components: {
        selectItem,
        checkBox
    }
}
</script>
