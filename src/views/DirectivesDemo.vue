<template>
    <div>
        <h2>Custom Directives Demo</h2>

        <el-card class="demo-section">
            <template #header>
                <h3>Base64</h3>
            </template>
            <img id="img" width="300" height="300" src="../assets/hero.png">
        </el-card>
        <el-card class="demo-section">
            <template #header>
                <h3>Lazy loading images with IntersectionObserver</h3>
            </template>
            <div>
                <img width="360" height="500" v-lazy="item" :key="index" v-for="(item, index) in imagesArr" alt="">
            </div>
        </el-card>


        <el-card class="demo-section">
            <template #header>
                <h3>Drag box</h3>
            </template>
            <div v-move class="drag_box">
                <div class="header">Drag Me</div>
                <div>Content</div>
            </div>

        </el-card>

        <el-card class="demo-section">
            <template #header>
                <h3>Permission showing with localStorage</h3>
            </template>
        <div class="btns">
            <el-button v-has-show="'shop:create'">创建 (Create)</el-button>
            <el-button v-has-show="'shop:edit'">编辑 (Edit)</el-button>
            <el-button v-has-show="'shop:delete'">删除 (Delete)</el-button>
        </div>
        </el-card>

        <el-card class="demo-section">
            <template #header>
                <h3>Global properties</h3>
            </template>
            <div>Format string: {{ $filters.format('vue') }}</div> 
        </el-card>
    </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue'
import useBase64 from '@/hooks'

// Hook logic
useBase64({ el: '#img' }).then(res => {
    console.log(res.baseUrl);
})

// Images logic
let imageList: Record<string, { default: string }> = import.meta.glob('../assets/images/*.*', { eager: true })
let imagesArr = Object.values(imageList).map(v => v.default)

// v-lazy Directive
let vLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
    const def = await import('../assets/vue.svg')
    el.src = def.default
    const observer = new IntersectionObserver((entry) => {
        if (entry[0].intersectionRatio > 0) {
            el.src = binding.value
            observer.unobserve(el)
        }
    })
    observer.observe(el)
}

// v-move Directive
const vMove: Directive<HTMLElement, void> = (el: HTMLElement) => {
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    const mouseDown = (e: MouseEvent) => {
        let X = e.clientX - el.offsetLeft
        let Y = e.clientY - el.offsetTop
        const move = (e: MouseEvent) => {
            el.style.left = e.clientX - X + 'px'
            el.style.top = e.clientY - Y + 'px'
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}

// v-has-show Directive
localStorage.setItem('userId', 'ahehe')
const permission = [
    'ahehe:shop:create',
    //'ahehe:shop:edit',
    'ahehe:shop:delete',
]
const userId = localStorage.getItem('userId') as string

const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(userId + ':' + binding.value)) {
        el.style.display = 'none'
    }
}
</script>

<style scoped lang="less">
.drag_box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 3px solid black;
    z-index: 1000;
    background: white;

    .header {
        height: 20px;
        background: black;
        color: white;
        cursor: move;
    }
}
</style>