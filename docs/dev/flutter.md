# Flutter

> Flutter 踩坑记录.

## FormzStatus 无类型提示

BlocListener 和 BlocBuilder 内无法访问如下值:

- `state.status.isValidated`
- `state.status.isSubmissionSuccess`
- `state.status.isSubmissionInProgress`

**解决方案**: 页面引入 `import 'package:formz/formz.dart';`

## BottomSheet 禁用滑动关闭

BottomSheet Widget 设置 `enableDrag: false` 无法禁用滑动关闭。

```dart
Widget CustomBottomSheet extends StatelessWidget {
  @override
  Widget build (BuildContext context) {
    return BottomSheet(
      enableDrag: false, // does not work as expected
      onClosing: () {},
      builder: (_) => {
        return Container(
          height: 200,
        );
      }
    );
  }
}
```

**解决方案**: 调用 showBottomSheet 设置参数:

```dart
class CustomPage extends StatelessWidget {
  @override
  Widget build (BuildContext context) {
    return MaterialButton(
      onPressed: () {
        Scaffold.of(context).showBottomSheet(
          (_) => CustomBottomSheet(),
          enableDrag: false,
          isScrollControlled: true,
        )
      }
    );
  }
}
```

**参考资料**:

- [Disable drag down to close showModalBottomSheet](https://stackoverflow.com/questions/54743566/disable-drag-down-to-close-showmodalbottomsheet)

## iOS 真机调试

### 需求

1. 一台 iPhone
2. 一条 USB 线

### 步骤

使用 USB 线将手机和 Mac 链接，并在手机弹窗选择信任电脑。

1. 打开 XCode -> 账号 -> 新增 Apple ID

### 打包遇到 cocopods 错误

M1 芯片 Mac。

```shell
sudo arch -x86_64 gem install ffi

arch -x86_64 pod install

sudo gem uninstall ffi && sudo gem install ffi -- --enable-libffi-alloc
```

### 打开 APP 提示不受信任的开发者

手机 `设置 - 通用 - VPN 与设备管理` 选择信用该 APP。

### iOS 图标更换

替换 `ios/Runner/Assets.xcassets/AppIcon.appiconset`

### 打包 ipa 及安装

执行以下命令打包 iOS APP。打包结果生成在 `build/ios/iphoneos/Runner.app`。

拷贝 `Runner.app` 至文件夹 `Payload` 文件夹并使用 zip 压缩，再修改后缀为 `.ipa` 即可获取 ipa。

安装 ipa，在 iphone 链接 Mac 的情况下，打开 xcode，选择菜单 `Window -> devices and simulators`。

选择 `Installed App` 下面的加号，选择生成的 ipa 包，即可安装。

其他安装方式可参考[iOS 手机安装 ipa 包的几种方式](https://www.jianshu.com/p/da38b578d2d4)。

```shell
$ flutter build ios --release
```

## MaterialApp 初始化多个 builder

例如 EasyLoading 等库需要在 MaterialAPP 中进行实例初始化:

```dart
class MyAPP extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter EasyLoading',
      home: const HomePage,
      builder: EasyLoading.init(),
    );
  }
}
```

如果有多个库需要初始化，可以使用如下方式:

```dart
class MyAPP extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter EasyLoading',
      home: const HomePage,
      builder: (BuildContext context, Widget? child) {
        child = EasyLoading.init()(context, child);
        child = OtherLib.init()(context, child);
        return child;
      },
    );
  }
}
```
