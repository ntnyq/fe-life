# MongoDB

> 使用**Mongoose**驱动的 MongoDB。

## 踩坑记录

### This 为空的问题

在 schema 中定义如下的**hook**函数，实际使用时却获取不到 this 的值。

```js
const schema = new mongoose.Schema({
  password: String,
})

schema.pre('save', next => {
  console.log(this)
  next()
})

const Model = mongoose.model('Test', schema)

const test = new Model({
  password: 'testpass',
})

test.save()
```

解析：箭头函数会维持 this 的指向，而这里我们需要的是`model`的实例。改成如下形式，即可正常：

```js
schema.pre('save', function (next) {
  console.log(this)
  next()
})
```

参考链接：[The “this” object is empty in pre('save')](https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave)
