<script setup lang="ts">
import { markRaw, reactive, shallowRef } from 'vue'
import type { Component } from 'vue'

import ComponentA from './a.vue'
import ComponentB from './b.vue'
import ComponentC from './c.vue'

interface TabItem {
    name: string
    com: Component
}

let componentId = shallowRef<Component>(ComponentA)

const dataTabs = reactive<TabItem[]>([
    {
        name: 'news',
        com: markRaw(ComponentA)
    },
    {
        name: 'music',
        com: markRaw(ComponentB)
    },
    {
        name: 'education',
        com: markRaw(ComponentC)
    }
])

const changeTab = (item: TabItem) => {
    componentId.value = item.com
}
</script>

<template>
    <div>
        <div class="tab-container">
            <div class="tab-item" :class="{ 'active': item.com === componentId }" v-for="(item, index) in dataTabs"
                :key="index" @click="changeTab(item)">
                {{ item.name }}
            </div>
        </div>

        <component :is="componentId"></component>
    </div>
</template>

<style scoped>
.tab-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.tab-item {
    padding: 8px 16px;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 4px;
}

.tab-item.active {
    background-color: #42b883;
    color: white;
    border-color: #42b883;
}
</style>