- 游戏框架 迎击 可以帮助快速开发游戏

- 精灵 Sprite

- es6 语法点
  es5 js 定义变量 var

  es6 let 定义变量 
    const 定义常量
    如果是简单数据类型，const 值不能改变(数值，字符串，布尔值，null，undefined)
    如果是复杂数据类型，{},[] 值可以改，不能把它重新整体赋值


    let ？  变量 有块级作用域的限制 { }
    - 变量的类型由值决定  let a = 1;
    - 变量一定有作用域 window 全局， { 块级作用域 }
    局部作用域 function jing() { let a = 1;}

- 2D游戏开发，网易大厂h5
  网页2D游戏  canvas
  - Game 对象，总管
  new Phaser.Game(参数)  Phaser{} 回调的方式来设置
  - 预加载资源 create 创建场景 update  更新 每秒60帧