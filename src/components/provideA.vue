<template>
    <h1>provideA.vue (父亲级别)</h1>
    <div class="box"></div>
    <hr>
    <ProvideB></ProvideB>
</template>

<script lang="ts" setup>
import {inject} from 'vue'
import type {Ref} from 'vue'
import ProvideB from './provideB.vue'

const color = inject<Ref<string>>('color')

</script>

<style scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}


</style>