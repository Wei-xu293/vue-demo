<template>
    <h2>Transitions and Animations Demo</h2>
    <el-card class="demo-section">
      <template #header><h3>Transition Group (List Animations)</h3></template>
      <transGroup></transGroup>
    </el-card>

    <el-card class="demo-section">
      <template #header><h3>Single Element Transition</h3></template>
      <transBox></transBox>
    </el-card>
</template>

<script setup lang="ts">
import transBox from '@/components/box-trans.vue'
import transGroup from '@/components/trans-group.vue'
</script>

<style scoped>
.animations-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}
</style>