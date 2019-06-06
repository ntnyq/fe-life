# HTTP

## 常用HTTP状态码

### 1XX 消息

- __100__ Continue 已收到请求头，继续发送请求体。
- __101__ Switching Protocals 切换更好的协议。

### 2XX 成功

- __200__ OK 请求已成功，结果与此状态一同返回。

### 3XX 重定向

- __301__ Moved Permanently 该资源已被永久移动至新位置，响应中带有新位置。
- __302__ Moved Temporarily(Found) 要求客户端执行临时重定向
- __304__ Not Modified 资源与请求头中的If-Modified-Since或If-None-Match为参照，未修改。
- __307__ Temporary Redirect 请求应该与另一个URI重复，但后续的请求应仍使用原始的URI
- __308__ Permanent Redirect 请求和所有将来的请求应该使用另一个URI重复。

> 307与308重复301和302的行为，但是不允许修改HTTP请求方法。

### 4XX 客户端错误

- __401__ Unauthorized 缺少授权，当前请求需要用户验证
- __403__ Forbidden 服务器已经理解请求，但是拒绝执行它。
- __404__ Not Found 请求的资源不存在。
- __405__ Method Not Allowed 请求行中指定的请求方法不能被用于请求相应的资源。
- __408__ Request Timeout 请求超时。
- __418__ [I'm a teapot](https://www.google.com/teapot)

### 5XX 服务器错误

- __500__ Internal Server Error 通用错误消息，无具体错误信息。
- __502__ Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应

## 参考资料

- [HTTP状态码](https://zh.wikipedia.org/wiki/HTTP状态码)
