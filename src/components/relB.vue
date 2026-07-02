<template>
    <div class="B">
        {{ Flag }}
    </div>
</template>

<script lang="ts" setup>
import Bus from '../Bus'
import {ref} from 'vue'
let Flag = ref(false)
Bus.on('on-click', (flag:boolean) => {
    Flag.value=flag
})
</script>

<style scoped>
.B {
  width: 200px;
  height: 200px;
  color: #fff;
  background: red; 
}
</style>