import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // 修改为后端服务器地址
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送之前做一些处理，例如添加 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 处理请求错误
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    
    // 这里可以根据后端返回的状态码做相应的处理
    if (res.code === 200) {
      return res.data
    } else {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message || '请求失败'))
    }
  },
  (error) => {
    console.error('响应错误：', error)
    ElMessage.error(error.message || '请求失败')
    return Promise.reject(error)
  }
)

// 封装 GET 请求
export function get<T>(url: string, params?: any): Promise<T> {
  return service.get(url, { params })
}

// 封装 POST 请求
export function post<T>(url: string, data?: any): Promise<T> {
  return service.post(url, data)
}

// 封装 PUT 请求
export function put<T>(url: string, data?: any): Promise<T> {
  return service.put(url, data)
}

// 封装 DELETE 请求
export function del<T>(url: string): Promise<T> {
  return service.delete(url)
}

export default service 