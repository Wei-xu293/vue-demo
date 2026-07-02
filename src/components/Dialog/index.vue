<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in data" :key="index">
                <slot name="item" :data="item"></slot>
            </div>

            <slot name="tabs"></slot>

            
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'


type Person = {
    name: string,
    age: number
}

const data = reactive<Person[]>([
    { name: "adfs1", age: 201 }, 
    { name: "adfs2", age: 202 }, 
    { name: "adfs3", age: 203 }, 
    { name: "adfs4", age: 204 }
])
</script>

<style scoped lang="less">
.header {
    height: 200px;
    background: red;
    color: #fff;
}

.main {
    height: 300px;
    background: rgb(44, 61, 44);
    color: #fff;
}

.footer {
    height: 200px;
    background: blue;
    color: #fff;
}
</style>