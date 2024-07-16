<template>
  <div class="home">
    <el-row >
      <!-- <el-col :span="24"> <h1>欢迎来到我的世界</h1></el-col> -->
    </el-row>

    <el-row>
      <el-col :span="8"
        ><div class="" />
        <router-link to="/home">
          <el-button>我是 ElButton</el-button>
        </router-link>
      </el-col>
      <el-col :span="16">
        <firstVue />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import firstVue from "./first.vue";

</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
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
