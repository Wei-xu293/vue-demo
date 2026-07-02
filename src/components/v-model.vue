<template>
    <div v-if="modelValue" class="model">
        <div class="close"><button @click="close">close</button></div>
        <h3>我是v-model子组件</h3>
        <div>内容： <input @input="change" :value="textVal" type="text"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    modelValue: boolean
    textVal: string
    textValModifiers?: {
        isBt: boolean
    }
}>()

const emit = defineEmits(['update:modelValue', 'update:textVal'])

const close = () => {
    emit('update:modelValue', false)
}

const change = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:textVal', props?.textValModifiers?.isBt ? target.value + 'bt' : target.value)
}

</script>

<style scoped>
.model {
    width: 500px;
    border: 5px, solid #ccc;
    padding: 10px;
}
</style>