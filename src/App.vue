<template>

  <div class="app-wrapper">
    <el-container>
      <el-header class="app-header">Vue 3</el-header>
      <el-container>
        <el-aside width="200px" class="app-sidebar">
          <el-menu router default-active="/directives" class="app-menu">

            <el-menu-item index="/directives">
              <span>Custom Directives</span>
            </el-menu-item>

            <el-menu-item index="/components">
              <span>Dynamic Components</span>
            </el-menu-item>

            <el-menu-item index="/communication">
              <span>Provide / Inject / Mitt</span>
            </el-menu-item>

            <el-menu-item index="/animations">
              <span>Transitions & Animations</span>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.app-wrapper {
  height: 100vh;
}

.app-header {
  background-color: var(--el-color-primary);
  color: white;
  display: flex;
  align-items: center;
}

.app-sidebar {
  background-color: var(--el-bg-color-page);
}

.app-menu {
  height: 100%;
  border-right: none;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}

.demo-section {
  margin-bottom: 20px;
}
</style>