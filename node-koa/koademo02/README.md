# demo2

## 项目结构

1. src/app ---业务
2. src/main ---入口,http接口
3. src/config --- 配置
4. src/controller --- 控制器 处理不同的业务
5. src/router --- 路由 解析url,分布给控制器对应的方法
6. src/.env --- 环境配置
7. src/service -- 数据库处理
8. src/model --- 接口模型、同步数据表
9. src/db --- 实例数据库

## 数据库操作

- sequelize ORM数据库对象
- ORM：对象关系映射
  - 数据表映射一个类
  - 数据表中的数据行（记录）对应一个对象
  - 数据表字段对应对象的属性
  - 数据表的操作对应对象的方法

## 需要了解的知识点

[sequelize](https://www.bookstack.cn/read/sequelize-orm-v6-zh/README.md)  
[b站](https://www.bilibili.com/video/BV13A411w79h?p=8)
