<template>
    <div>
        <h1>我是A</h1>
        <button @click="emit">emit</button>
    </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance} from 'vue'

const instance = getCurrentInstance()


const emit = () => {
    instance?.proxy?.$Bus.emit('on-a-mitt', 'mitt')
}

</script>

<style scoped>
</style>