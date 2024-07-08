// app.js

// 引入express框架
import express from 'express';
const app = express();
const port = 3000;

// 设置路由，这里只是一个简单的示例
app.get('/', (req, res) => {
  res.send('欢迎访问微后台！');
});

// 启动服务器
app.listen(port, () => {
  console.log(`微后台应用运行在 http://localhost:${port}`);
});
