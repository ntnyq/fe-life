# Flutter

> Flutter 踩坑记录.

## FormzStatus 无类型提示

BlocListener 和 BlocBuilder 内无法访问如下值:

-   `state.status.isValidated`
-   `state.status.isSubmissionSuccess`
-   `state.status.isSubmissionInProgress`

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

-   [Disable drag down to close showModalBottomSheet](https://stackoverflow.com/questions/54743566/disable-drag-down-to-close-showmodalbottomsheet)
