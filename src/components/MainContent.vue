<script setup>
</script>

<template>
  <main class="main-content-area">
    <slot></slot>  <!-- Here we use a slot to inject any child content from the router view. -->
  </main>
</template>

<style scoped>
.main-content-area {
  flex-grow: 1;
  padding: 20px;
  background-color: #ecf0f1;
}
</style>

