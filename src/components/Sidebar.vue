<script setup>
import { House, ShoppingCart, Van, User } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

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

        <el-sub-menu index="/app/supplier-mgt">
          <template #title>
            <el-icon><User /></el-icon>
            Supplier Mgt
          </template>
          <el-menu-item index="/app/supplier-mgt" :class="{ active: isActive('/app/supplier-mgt') }">Sup Management</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>
.sidebar {
  height: calc(100vh - 64px); /* 减去头部的高度 */
  background-color: #ffffff; /* 修改为白色背景 */
  border-right: 1px solid #ddd; /* 添加右边框 */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}

.active {
  color: #409EFF;
  background-color: #eef1f6;
}
</style>
