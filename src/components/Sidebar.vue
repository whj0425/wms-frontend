<script setup>
import {  } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
import { House, ShoppingCart, Van, User } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();

// Helper to determine if the route is active to apply active class styling
const isActive = (path) => {
  return route.path.includes(path);
};

const navigate = (index) => {
  router.push(index);
};
</script>

<template>
  <el-aside class="sidebar" width="200px">
    <el-scrollbar>
      <el-menu class="el-menu-vertical-demo" default-active="route.path" @select="navigate">
        <el-sub-menu index="/app/dashboard">
          <template #title>
            <el-icon><house /></el-icon>
            Dashboard
          </template>
          <el-menu-item index="/app/dashboard" :class="{ active: isActive('/app/dashboard') }">Overview</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/app/inventory">
          <template #title>
            <el-icon><van /></el-icon>
            Inventory
          </template>
          <el-menu-item index="/app/inventory" :class="{ active: isActive('/app/inventory') }">In and Out</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/app/orders">
          <template #title>
            <el-icon><shopping-cart /></el-icon>
            Orders
          </template>
          <el-menu-item index="/app/orders" :class="{ active: isActive('/app/orders') }">Order List</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/app/user-mgt">
          <template #title>
            <el-icon><User /></el-icon>
            User Mgt
          </template>
          <el-menu-item index="/app/user-mgt" :class="{ active: isActive('/app/user-mgt') }">User Management</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  min-height: 100vh;
  background-color: #2c3e50;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.active {
  color: #409EFF;
  background-color: #eef1f6;
}
</style>

