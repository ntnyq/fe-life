# 常用模块

导出类 `class` 需要使用如下方式：

``` js
class Student {}
class Teacher {}

// right
export default Student
export {
	Student,
  Teacher
}

// wrong
export default {
  Student,
  Teacher
}
```



