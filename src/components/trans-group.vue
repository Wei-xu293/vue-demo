<template>
    <div>
        <button @click="add">ADD</button>
        <button @click="pop">POP</button>
        <div class="wraps">
            <!-- can add tag="section" -->
            <transition-group leave-active-class="animate__animated animate__bounceOut"
                enter-active-class="animate__animated animate__bounceInRight">
                <div class="item" v-for="item in list" :key="item">
                    {{ item }}
                </div>
            </transition-group>
        </div>
    </div>
    <div>
        <button @click="random">shuffle</button>
        <transition-group move-class="mc" class="wraps_mat" tag="div">
            <div class="items" :key="item.id" v-for="item in matList">
                {{ item.number }}
            </div>
        </transition-group>
    </div>

    <div>
        <input step="20" v-model="num.current" type="number" />
        <div>{{ num.tweenedNumber.toFixed(0) }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import lodash from 'lodash'
import gsap from 'gsap'
import 'animate.css'

const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal
    })
    console.log(oldVal)
})

const list = reactive<number[]>([1, 2, 3, 4, 5, 6])

let matList = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))

console.log(matList.value)

const random = () => {
    matList.value = lodash.shuffle(matList.value)
}

const add = () => {
    list.push(list.length + 1)
}

const pop = () => {
    list.pop()
}

</script>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;

    .item {
        margin: 10px;
        font-size: 26px;
    }
}

.wraps_mat {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);

    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.mc {
    transition: all 1s;
}

.box {
    width: 200px;
    height: 200px;
    background: red;
}

.box2 {
    width: 200px;
    height: 200px;
    background: yellow;
}
</style>