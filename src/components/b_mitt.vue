<template>
    <div>
        <h1>我是B</h1>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('on-a-mitt', (str: string) => {
    console.log(str, '=======> B')
})
</script>

<style scoped></style>