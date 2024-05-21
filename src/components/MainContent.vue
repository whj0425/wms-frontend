<script setup>
</script>

<template>
  <main class="main-content-area">
    <slot></slot>
  </main>
</template>

<style scoped>
.main-content-area {
  flex-grow: 1;
  padding: 20px;
  background-color: #ecf0f1;
  min-height: calc(100vh - 64px); /* 减去头部的高度 */
}
</style>


