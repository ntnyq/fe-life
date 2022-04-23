# HTTP

## 状态码

### 1XX 消息

-   **100** Continue 已收到请求头，继续发送请求体。
-   **101** Switching Protocols 切换更好的协议。

### 2XX 成功

-   **200** OK 请求已成功，结果与此状态一同返回。

### 3XX 重定向

-   **301** Moved Permanently 该资源已被永久移动至新位置，响应中带有新位置。
-   **302** Moved Temporarily(Found) 要求客户端执行临时重定向
-   **304** Not Modified 资源与请求头中的 If-Modified-Since 或 If-None-Match 为参照，未修改。
-   **307** Temporary Redirect 请求应该与另一个 URI 重复，但后续的请求应仍使用原始的 URI
-   **308** Permanent Redirect 请求和所有将来的请求应该使用另一个 URI 重复。

> 307 与 308 重复 301 和 302 的行为，但是不允许修改 HTTP 请求方法。

### 4XX 客户端错误

-   **401** Unauthorized 缺少授权，当前请求需要用户验证
-   **403** Forbidden 服务器已经理解请求，但是拒绝执行它。
-   **404** Not Found 请求的资源不存在。
-   **405** Method Not Allowed 请求行中指定的请求方法不能被用于请求相应的资源。
-   **408** Request Timeout 请求超时。
-   **418** [I'm a teapot](https://www.google.com/teapot)

### 5XX 服务器错误

-   **500** Internal Server Error 通用错误消息，无具体错误信息。
-   **502** Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应

## 参考资料

-   [HTTP 状态码](https://zh.wikipedia.org/wiki/HTTP状态码)
