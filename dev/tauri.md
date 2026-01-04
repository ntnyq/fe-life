# Tauri

## `productName` 不支持中文

```shell
    Finished `release` profile [optimized] target(s) in 8m 19s
       Built application at: D:\a\my-app\my-app\src-tauri\target\release\my-app.exe
        Info Patching binary "D:\\a\\my-app\\my-app\\src-tauri\\target\\release\\my-app.exe" for type msi
        Info Verifying wix package
 Downloading https://github.com/wixtoolset/wix3/releases/download/wix3141rtm/wix314-binaries.zip
        Info validating hash
        Info extracting WIX
        Info Target: x64
     Running candle for "D:\\a\\my-app\\my-app\\src-tauri\\target\\release\\wix\\x64\\main.wxs"
     Running light to produce D:\a\my-app\my-app\src-tauri\target\release\bundle\msi\中文名称应用_0.0.1_x64_en-US.msi
failed to bundle project `failed to run C:\Users\runneradmin\AppData\Local\tauri\WixTools314\light.exe`
       Error failed to bundle project `failed to run C:\Users\runneradmin\AppData\Local\tauri\WixTools314\light.exe`
```

解决方案:

修改 `tauri.config.json`

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": "zh-CN"
        }
      }
    }
  }
}
```

参考地址:

- [[bug] build fail with Chinese productName in tauri.conf.json failed to bundle project: error running light.exe](https://github.com/tauri-apps/tauri/issues/8363#issuecomment-1852517736)
