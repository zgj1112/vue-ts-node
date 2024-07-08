const { spawn } = require('child_process');

// 替换为你的 .exe 文件路径
const exePath = './path/to/your/exe/file.exe';

// 使用 spawn 方法启动一个子进程来运行 .exe 文件
const child = spawn(exePath, [], { detached: true, stdio: 'ignore' });

// 监听子进程的关闭事件
child.on('close', (code) => {
  if (code !== 0) {
    console.error('Failed to start .exe file.');
  }
});
