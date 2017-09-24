<template>
    <div class="wrapper">
        <div class="container">
            <tabs>
                <tab tabId="forms" tab-label="Формы" :is-active="true">
                    <forms></forms>
                </tab>
                <tab tabId="buttons" tab-label="Ссылки и кнопки">
                    <p>Вкладка 2</p>
                </tab>
                <tab tabId="buttons" tab-label="Типографика">
                    <p>Вкладка 3</p>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
import { Tab, Tabs } from 'tabs'
import Forms from './components/layouts/forms'
// import btn from "custom-button"

export default {
    name: 'app',
    components: {
        Tabs,
        Tab,
        Forms
    },
    created () {
        // console.log(Tabs)
        // console.log(Tab)
    }
}
</script>

<style type="text/css" src="./styles/icons/css/merlion-fonts.css"></style>
<style type="text/css" src="./styles/icons/css/animation.css"></style>
<style type="text/css" src="./styles/normalize.css"></style>
<style type="text/css" src="./styles/common.scss" lang="scss"></style>
