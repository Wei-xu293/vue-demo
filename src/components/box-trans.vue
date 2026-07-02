<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
            :duration="{ enter: 50, leave: 500 }" leave-active-class="animate__animated animate__fadeOut"
            enter-active-class="animate__animated animate__fadeIn"
            appear
            appear-active-class="animate__animated animate__bounceIn">
            <div v-if="flag" class="box"></div>
        </transition>
        <hr>
        <button @click="flag2 = !flag2">switch</button>
        <transition @before-enter="beforeEnter" @enter="enterActive" @leave="Leave">
            <div v-if="flag2" class="box2"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">

/*
lifetimes and hooks
@before-enter="beforeEnter" //对应enter-from
  @enter="enter"//对应enter-active
  @after-enter="afterEnter"//对应enter-to
  @enter-cancelled="enterCancelled"//显示过度打断
  @before-leave="beforeLeave"//对应leave-from
  @leave="leave"//对应enter-active
  @after-leave="afterLeave"//对应leave-to
  @leave-cancelled="leaveCancelled"//离开过度打断
————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/123000653
*/

import { ref } from 'vue'
import gsap from 'gsap'
import 'animate.css'

const flag = ref<boolean>(true)
const flag2 = ref<boolean>(true)
const EnterFrom = (el: Element) => {
    console.log('进入之前')
}
const EnterActive = (el: Element, done: Function) => {
    console.log('during transition')
    setTimeout(() => {
        done()
    }, 3000);
}
const EnterTo = (el: Element) => {
    console.log('transition finished')
}
const EnterCancel = (el: Element) => {
    console.log('transition cancelled')
}

// using gsap

const beforeEnter = (el: Element) => {
    gsap.set(el, {
        width: 0,
        height: 0
    })
}

const enterActive = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done
    })
}

const Leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done
    })
}


</script>

<style lang="less" scoped>
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