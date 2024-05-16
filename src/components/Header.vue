<script setup>
import { Setting } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();



const logout = () => {
  // Here you would typically clear user's session/storage and redirect to login
  console.log('Logging out...');
  // Assuming a logout path is set up in your routes
  router.push('/login');
};
</script>

<template>
  <el-header style="text-align: right; font-size: 12px; padding-top: 10px;">
    <div class="toolbar">
      <!-- Welcome message with larger font size -->
      <span class="welcome-message">Welcome, whj</span>
      <!-- Title for the Warehouse Management System -->
      <h1 class="header-title">Warehouse Management System</h1>
      <!-- Settings dropdown with uniform icon and text size -->
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
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header-title {
  flex-grow: 1;
  text-align: center;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px; /* Uniform font size for settings text */
}

/* Adjusting Welcome message font size */
.welcome-message {
  font-size: 16px; /* Larger font size for better visibility */
}

/* Icon size adjustment */
.el-icon {
  font-size: 14px; /* Matching the size of the text in dropdown */
}

/* Additional padding to the top of the header for spacing */
.el-header {
  padding-top: 10px; /* Adds space above the header content */
}
</style>