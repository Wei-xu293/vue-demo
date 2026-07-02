<template>
    <div v-if="isShow" class="loading">
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref<boolean>(false)

const show = () => isShow.value = true;

const hide = () => isShow.value = false;

defineExpose({
    show,
    hide,
})

</script>

<style scoped>
.loading {
    background: black;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    color: white;
}
</style>