<template>
  <div class="components-demo">
    <h2>Advanced Components Demo</h2>

    <el-card class="demo-section">
      <template #header><h3>Loading</h3></template>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>Suspense & Async Loading</h3></template>
      <Suspense>
        <template #default>
          <SyncVue />
        </template>
        <template #fallback>
          <Skeleton />
        </template>
      </Suspense>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>Keep-Alive Components</h3></template>
      <el-button type="primary" @click="flag = !flag">切换组件 (Toggle Component)</el-button>
      <div style="margin-top: 15px;">
        <keep-alive :include="['form']">
          <formElem v-if="flag"></formElem>
          <Tabs v-else></Tabs>
        </keep-alive>
      </div>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>Custom v-model</h3></template>
      <div>isShow: {{ isShow }}</div>
      <div>text: {{ text }}</div>
      <el-button style="margin-top: 10px;" @click="isShow = !isShow">Toggle isShow</el-button>
      
      <hr style="margin: 15px 0;" />
      
      <vModelVue v-model:textVal.isBt="text" v-model="isShow"></vModelVue>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>TSX / External App Component</h3></template>
      <Xman name="cnt_props"></Xman>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>Slots (Named, Scoped, Dynamic)</h3></template>
      
      <Dialog>
        <template v-slot:header>
          <div>charu (Header Slot)</div>
        </template>
        
        <template #item="{ data }">
          <div>Name: {{ data.name }} | Age: {{ data.age }}</div>
        </template>
        
        <template #tabs>
          <Tabs></Tabs>
        </template>
        
        <template v-slot:footer>
          <div>charu (Footer Slot)</div>
        </template>
      </Dialog>

      <Dialog style="margin-top: 20px;">
        <template #[pos]>
          <div>wozaina (I am in a dynamically named slot: '{{ pos }}')</div>
        </template>
      </Dialog>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, getCurrentInstance } from 'vue'

// Import all your custom components
import Skeleton from '@/components/skeleton.vue'
import formElem from '@/components/form.vue'
import Tabs from '@/components/tabs.vue'
import vModelVue from '@/components/v-model.vue'
import Xman from '@/App'
import Dialog from '@/components/Dialog/index.vue'

const instance = getCurrentInstance()
instance?.proxy?.$loading.show()
setTimeout(()=>{
  instance?.proxy?.$loading.hide()
},1000)

// Define the async component for Suspense
const SyncVue = defineAsyncComponent(() => import('@/components/sync.vue'))

// State for Keep-Alive toggle
const flag = ref<boolean>(true)

// State for Custom v-model
const isShow = ref<boolean>(true)
const text = ref<string>('aaa')

// State for Dynamic Slot
const pos = ref('header')
</script>

<style scoped>
.components-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}
</style>