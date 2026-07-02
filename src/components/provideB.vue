<template>
    <h1>provideB.vue (孙子级别)</h1>
    <div>
        <button @click="change">Change provide value yellow</button>
    </div>
    <div class="box"></div>
    <hr>
</template>

<script lang="ts" setup>
import {inject} from 'vue'
import type {Ref} from 'vue'
const color = inject<Ref<string>>('color')

const change = () => {
    color!.value = 'yellow'
}

</script>

<style scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}


</style>