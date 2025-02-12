# 输出

CP_Kernel 内部实现了诸如 `printk` `kinfo` `logk` 等函数用于输出内核各个模块运行中产生的信息

|函数名|说明|适用版本|
|:---|:---|:---|
| printk   | 向终端打印一条信息,一般用于内核信息输出 | <Badge type="info" text="通用" /> |
| logkf    | 向串口打印调试信息,用于输出不受终端影响的信息 | <Badge type="info" text="通用" /> |
| klogf    | 驱动或某功能模块的加载状态信息输出 | <Badge type="tip" text="i386" /> |
| dlogf    | 驱动加载信息输出, 一般具有时间性 | <Badge type="tip" text="i386" /> |
| kinfo    | 向终端发送一条 `INFO` 级别的日志 | <Badge type="warning" text="x64" /> |
| kerror   | 向终端发送一条 `ERROR` 级别的日志 | <Badge type="warning" text="x64" /> |
| kwarn    | 向终端发送一条 `WARN` 级别的日志 | <Badge type="warning" text="x64" /> |
| ksuccess | 发送模块或驱动加载成功的信息 | <Badge type="warning" text="x64" /> |
| kdebug   | 向终端发送一条 `DEBUG` 级别的日志 | <Badge type="warning" text="x64" /> |

* 所有发送至终端的输出都会经过TTY设备驱动
* 串口打印调试不会经过TTY设备驱动, 而是直接发送到串口I/O