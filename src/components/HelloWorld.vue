<template>
  <div class="home">
    <el-row>
      <el-col :span="4">
        <router-link to="/home">
          <el-button type="primary">store</el-button>
        </router-link>\
        
      </el-col>
      <el-col :span="4">
        <router-link to="/home">
          <el-button type="primary">store</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// import firstVue from "./first.vue";

</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  /* margin: 20px; */
  padding: 20px;
  box-sizing: border-box;
  background: url('src/assets/bcc.jpg') no-repeat center center / cover fixed;
  /* border: 1px solid red; */
}

.buttons {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}
</style>
