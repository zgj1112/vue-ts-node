// app.js

// 引入express框架
import express from "express";
import axios from "axios";
import cors from "cors";  // 添加 cors 导入

const app = express();
const port = 3000;

// 启用 CORS
app.use(cors());

// 设置路由，这里只是一个简单的示例
app.get("/", (req, res) => {
  res.send("欢迎访问微后台！");
});

app.get("/steam-games", async (req, res) => {
  try {
    const response = await axios.get(
      "https://steamcommunity.com/profiles/76561198240851868/games/?tab=all"
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("请求失败: " + error.message);
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`微后台应用运行在 http://localhost:${port}`);
});
