<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
const newUser = ref({ name: '', password: '', roles: '', phone: '', email: '' });
const editUser = ref({});
const dialogVisible = ref(false);

onMounted(async () => {
  await fetchUsers();
});

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://775efbe1.r23.cpolar.top/api/user/all');
    console.log('Fetched users:', response.data.content);
    tableData.value = response.data.content;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

const addUser = async () => {
  try {
    newUser.value.roles = newUser.value.roles.split(',').map(role => role.trim());
    if (!newUser.value.password) {
      ElMessage.error('Password is required');
      return;
    }
    await axios.post('https://775efbe1.r23.cpolar.top/api/user', newUser.value, {
      headers: { 'Content-Type': 'application/json' }
    });
    ElMessage.success('User added successfully');
    await fetchUsers();
  } catch (error) {
    ElMessage.error('Failed to add user');
    console.error('Failed to add user:', error);
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete('https://775efbe1.r23.cpolar.top/api/user', { params: { id } });
    ElMessage.success('User deleted successfully');
    await fetchUsers();
  } catch (error) {
    ElMessage.error('Failed to delete user');
    console.error('Failed to delete user:', error);
  }
};

const updateUser = async (user) => {
  try {
    console.log("Updating user: ", user);
    if (user.roles && typeof user.roles === 'string') {
      user.roles = user.roles.split(',').map(role => role.trim());
    } else if (!user.roles) {
      user.roles = [];
    }
    await axios.put('https://775efbe1.r23.cpolar.top/api/user', user, {
      headers: { 'Content-Type': 'application/json' }
    });
    ElMessage.success('User updated successfully');
    await fetchUsers();
    dialogVisible.value = false;
  } catch (error) {
    ElMessage.error('Failed to update user');
    console.error('Failed to update user:', error);
  }
};

const handleEdit = (user) => {
  console.log("Edit button clicked for user: ", user);
  editUser.value = { ...user, roles: Array.isArray(user.roles) ? user.roles.join(', ') : user.roles };
  dialogVisible.value = true;
  console.log("Dialog visibility set to: ", dialogVisible.value);
  console.log("Edit user data set to: ", editUser.value);
};
</script>

<template>
  <el-main>
    <el-scrollbar>
      <el-table :data="tableData">
        <el-table-column prop="id" label="ID" width="50" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="roles" label="Roles" width="120" />
        <el-table-column prop="phone" label="Phone" width="120" />
        <el-table-column prop="email" label="Email" width="180" />
        <el-table-column label="Actions" width="180">
          <template #default="scope">
            <el-button type="primary" @click="handleEdit(scope.row)">Update</el-button>
            <el-button type="danger" @click="deleteUser(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>

    <el-form :model="newUser" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="newUser.name"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="newUser.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="Roles">
        <el-input v-model="newUser.roles" placeholder="Enter roles separated by commas"></el-input>
      </el-form-item>
      <el-form-item label="Phone">
        <el-input v-model="newUser.phone"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="newUser.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser">Add User</el-button>
      </el-form-item>
    </el-form>

    <el-dialog v-model="dialogVisible" title="Edit User">
      <el-form :model="editUser" label-width="80px">
        <el-form-item label="Name">
          <el-input v-model="editUser.name"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="editUser.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Roles">
          <el-input v-model="editUser.roles" placeholder="Enter roles separated by commas"></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="editUser.phone"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="editUser.email"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateUser(editUser.value)">Save</el-button>
      </template>
    </el-dialog>
  </el-main>
</template>

<style scoped>
.el-main {
  padding: 20px;
}
</style>

