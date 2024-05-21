<script setup>
import { Setting } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  console.log('Logging out...');
  router.push('/login');
};
</script>

<template>
  <el-header class="custom-header">
    <div class="toolbar">
      <span class="welcome-message">Welcome, whj</span>
      <h1 class="header-title">Warehouse Management System</h1>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon style="margin-right: 8px;">
            <setting />
          </el-icon>
          Settings
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>User Profile</el-dropdown-item>
            <el-dropdown-item>System Settings</el-dropdown-item>
            <el-dropdown-item @click="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped>
.custom-header {
  text-align: right;
  font-size: 12px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 90px; /* 设置头部高度 */
}

.toolbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.header-title {
  flex-grow: 1;
  text-align: center;
  font-size: 24px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
}

.welcome-message {
  font-size: 16px;
}

.el-icon {
  font-size: 14px;
}
</style>

