# CoolPotOS 基本使用

> 这同时也是所有版本的 CPOS 标准的用户交互接口规范

## Shell

非桌面版本的CPOS默认会提供一个基础的shell。该shell的类型会根据当前版本的开发进度为正常的应用程序shell或内核内置shell。

启动原理则是, `CP_Kernel` 初始化完成后会率先查找应用程序shell并启动, 如果找不到应用程序shell 或者在应用程序shell运行中发生崩溃, 则会启动内核shell作为缓冲措施。

::: tip 小贴士

* 内核内置的shell是运行在内核态的, 其所有命令都是内置实现. 所以一般查看有关于系统的信息和文件操作自由度会非常大。
* 内核内置shell不具备启动外部应用程序的能力

:::

## Command

CPOS提供了部分内置或者外置的命令供使用。

|命令|参数|说明 - 标签为命令适用范围|
|:---|---|:---|
| `help` `?` `h`| empty | 获取命令帮助信息 <Badge type="info" text="通用" />|
| `ls` | [path] | 列出当前工作目录(或指定目录)下的所有文件 <Badge type="info" text="通用" /> |
| `cd` | \<path\> | 切换当前的工作目录 <Badge type="info" text="通用" />  | 
| `mkdir` | \<name\> | 创建一个文件夹 <Badge type="info" text="通用" /> |
| `lspci` | empty | 列出所有加载的PCI设备信息 <Badge type="danger" text="内核" /> |
| `shutdown` | empty | 关机 <Badge type="danger" text="内核" /> |
| `exit` | empty | 退出shell <Badge type="info" text="通用" /> |
| `reboot` | empty | 重启 <Badge type="danger" text="内核" /> |
| `pkill` | \<pid\> | 终止指定PID的进程 <Badge type="danger" text="内核" /> |
| `ps` | empty | 列出所有在CPOS上运行的进程 <Badge type="info" text="通用" /> |
| `clear` | empty | 清屏 <Badge type="info" text="通用" /> |
| `sysinfo` | empty | 列出当前系统信息 <Badge type="info" text="通用" /> |
| exec - elf | [argument] | 运行一个外部应用程序 <Badge type="tip" text="应用" /> |
| `echo` | \<message\> | 向屏幕输出一段信息 <Badge type="info" text="通用" /> |

* `exit` 命令在内核shell中的行为与 `shutdown` 命令一致
* `echo` 命令在 x86_64 架构的内核中为测试TTY流设备所用