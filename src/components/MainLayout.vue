<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <div>
    <Header/>
    <div class="main-content">
      <Sidebar/>
      <MainContent>
        <router-view/>
      </MainContent>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
}
</style>
