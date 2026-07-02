<template>
  <div class="sk">
    <div class="sk-2">
      <div class="circle"></div>
      <div class="bar"></div>
    </div>
    <hr>
    <div class="sk-3"></div>
    <div class="sk-3"></div>
  </div>
</template>

<style scoped>
.sk {
  padding: 20px;
}

.circle {
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin-bottom: 10px;
}

.bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  margin-bottom: 10px;
}

.sk-3 {
  width: 80%;
  height: 15px;
  background-color: #e0e0e0;
  margin: 10px 0;
}

.circle, .bar, .sk-3 {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}
</style>