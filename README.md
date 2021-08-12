# san-cli-test

 ##### 介绍
san-cli-test是一个专门为san-cli 4.0项目打造的测试插件

 ##### 安装
```
npm install san-cli-test
```
 ##### 使用
```
{
  "scripts": {
    "test": "san test"
  }
}
```

  基于[mochapack](https://github.com/sysgears/mochapack) + [expect](https://github.com/facebook/jest#readme)运行单元测试

  ```
  Usage: san test [options] [...files]

  Options:

    --watch, -w   run in watch mode
    --grep, -g    only run tests matching <pattern>
    --slow, -s    "slow" test threshold in milliseconds
    --timeout, -t timeout threshold in milliseconds
    --bail, -b    bail after first test failure
    --require, -r require the given module before running tests
    --include     include the given module into test bundle
  ```

  默认匹配文件是：任何在`test/`文件目录下，并且以`.spec.js`结尾的文件

  所有的 [mochapack命令行参数](https://sysgears.github.io/mochapack/docs/installation/cli-usage.html)也都是支持的。
