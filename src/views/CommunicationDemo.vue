<template>
    <div>
        <h2>Component Communication</h2>

        <el-card class="demo-section">
            <template #header>
                <h3>Provide / Inject (Grandparent to Child)</h3>
            </template>
            <label>
                <input v-model="colorVal" value="red" name="color" type="radio"> 红色 (Red)
            </label>
            <label>
                <input v-model="colorVal" value="pink" name="color" type="radio"> 粉色 (Pink)
            </label>
            <label>
                <input v-model="colorVal" value="yellow" name="color" type="radio"> 黄色 (Yellow)
            </label>
            <div class="box"></div>
            <provideAVue></provideAVue>

        </el-card>

        <el-card class="demo-section">
            <h3>Mitt Event Bus</h3>
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <AMitt></AMitt>
                <BMitt></BMitt>
            </div>
        </el-card>

        <el-card class="demo-section">
            <h3>Rel Components</h3>
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <RelA></RelA>
                <RelB></RelB>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, readonly, provide } from 'vue'
import provideAVue from '@/components/provideA.vue'
import AMitt from '@/components/a_mitt.vue'
import BMitt from '@/components/b_mitt.vue'
import RelA from '@/components/relA.vue'
import RelB from '@/components/relB.vue'

const colorVal = ref<string>('red')
// readonly prevents child components to mutate values
provide('color', readonly(colorVal))
</script>

<style scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background-color: v-bind(colorVal);
    margin-top: 10px;
}
</style>