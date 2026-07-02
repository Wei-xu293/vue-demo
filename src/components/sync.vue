<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url"></div>
            <div class="sync-pop">
                <div>{{ data.name }}</div>
                <div>&nbsp; {{ data.age }}</div>
            </div>
        </div>
        <hr>
        <div>{{ data.desc }}</div>
    </div>
</template>

<script setup lang="ts">
import { axios } from '@/server/axios'

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}
const { data } = await axios.get<Data>('./data.json')

</script>

<style scoped>
.sync {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sync-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.sync-content img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #f0f0f0;
}

.sync-pop {
    display: flex;
    flex-direction: column;
}

.sync-pop div:first-child {
    font-weight: bold;
    font-size: 1.2rem;
}

hr {
    margin: 15px 0;
    border: 0;
    border-top: 1px solid #eee;
}
</style>