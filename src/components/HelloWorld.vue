<!--
 * @Author: zgj888 [2369394195@qq.com]
 * @Date: 2024-09-15 23:44:46
 * @LastEditors: zgj888 [2369394195@qq.com]
 * @LastEditTime: 2025-03-22 14:33:12
 * @FilePath: \vue-ts-node\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <el-row>
      <el-col :span="4">
        <router-link to="/home">
          <el-button type="primary">store</el-button> </router-link
        >\
      </el-col>
      <el-col :span="4">
        <router-link to="/home">
          <el-button type="primary">store</el-button>
        </router-link>
      </el-col>
      <el-button type="primary" @click="getData">测试接口</el-button>
    </el-row>
    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { get } from "src/utils/request";

const message = ref("");

async function getData() {
  try {
    const data = await get<string>("/");
    message.value = data;
  } catch (error) {
    console.error("获取数据失败：", error);
    message.value = "获取数据失败";
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  /* margin: 20px; */
  padding: 20px;
  box-sizing: border-box;
  background: url("src/assets/bcc.jpg") no-repeat center center / cover fixed;
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

.message {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #333;
}
</style>
