# Gulp

使用Gulp中遇到的坑。

## gulp-sass报错

``` bash
[17:49:39] Starting 'scss'...
[17:49:39] Finished 'scss' after 3.85 ms
Error in plugin "sass"
Message:
    src\scss\style.scss
Error: File to import not found or unreadable: ./_utils/_style.
        on line 3 of src/scss/style.scss
>> @import "./_utils/_style";
```

解决：

1. 在sublime的配置项中增加`"atomic_save": true `。
2. 使用`gulp-wait`。

[Github Issue](https://github.com/olefredrik/FoundationPress/issues/731)