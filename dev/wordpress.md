# WordPress

## 安装

新增 `docker-compose.yaml`

```yaml
version: '3'

services:
  db:
    image: mysql/mysql-server
    command: mysqld --max_allowed_packet=20M
    volumes:
      - ./mysql:/var/lib/mysql
    ports:
      - '13306:3306'
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: YOUR_PASSWORD#
      MYSQL_DATABASE: db_wp
      MYSQL_USER: db_user
      MYSQL_PASSWORD: YOUR_PASSWORD
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - ./config/uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
      - ./html:/var/www/html
    ports:
      - '8000:80'
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: db_user
      WORDPRESS_DB_PASSWORD: YOUR_PASSWORD
      WORDPRESS_DB_NAME: db_wp
```

新增 `config/uploads.ini`

```ini
file_uploads = On
memory_limit = 1024M
upload_max_filesize = 2048M
post_max_size = 2048M
max_execution_time = 600
```

## 后台管理页面地址

默认为 `/wp-admin/`

## 本地开发无法安装插件主题

在 `html/wp-includes/http.php` 文件内搜索 `$args['reject_unsafe_urls'] = true;`，全部修改为 `false`。
