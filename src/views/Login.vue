<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import {onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const password = ref('');
const router = useRouter();
const errorMessage = ref('');
const isAuthenticated = ref(false);
const isRegister = ref(false)




const login = async () => {
  try {
    const response = await axios.post('/api/login', {
      username: username.value,
      password: password.value
    });
    //200?400?
    if (response.data.success) {
      isAuthenticated.value = true; // Set isAuthenticated to true
      await router.push('/app/dashboard'); // Navigate to dashboard
    } else {
      isAuthenticated.value = false;
      errorMessage.value = 'Login failed. Please check your credentials and try again.';
    }
  } catch (error) {
    errorMessage.value = error.response ? error.response.data.message : 'Login failed due to server error';
  }




};
</script>

<template>
  <el-row class="login-page">
    <el-col :span="6" :offset="9" class="form">
      <!-- 注册表单 -->
      <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
        <el-form-item>
          <h1>Register</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="Please enter username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" type="password" placeholder="Please enter username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" type="password" placeholder="Please re-enter password"></el-input>
        </el-form-item>

        <!-- 注册按钮 -->
        <el-form-item>
          <el-button class="button" type="primary" @click="login" auto-insert-space>
            Register
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← Back
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 登录表单 -->
      <el-form ref="form" size="large" autocomplete="off" v-else>
        <el-form-item>
          <h1>Login</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" v-model="username" placeholder="Please enter username"></el-input>
        </el-form-item>
        <el-form-item>
          <!--          name属性是否需要补全-->
          <el-input name="password" :prefix-icon="Lock" v-model="password" type="password" placeholder="Please enter password"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>Remember Me</el-checkbox>
            <el-link type="primary" :underline="false">Forgot password?</el-link>
          </div>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="button" type="primary" @click="login" auto-insert-space>
            Login
          </el-button>
          <el-form-item class="flex">
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </el-form-item>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            Register →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
  height: 100vh;
  background-color: #fff;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
