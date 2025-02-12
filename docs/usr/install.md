# CoolPotOS

## About

CoolPotOS是一个适用于 x86 平台的宏内核操作系统, 使用MIT开源协议。\
开源链接: [github.com/plos-clan/CoolPotOS](https://github.com/plos-clan/CoolPotOS) \
目前拥有三个版本:

* CoolPotOS i386 - 32位版本,是第一个版本也是目前功能最完善，贡献者最多的版本
* CoolPotOS x86_64 - 64位版本,是目前主要开发的版本, 也是相对来说最符合现代操作系统的
* CoolPotOS Vlang Edition - 由Vlang语言编写的64位版本, 由 `wenxuanjun` 负责主要开发


## Download

CoolPotOS目前仅提供可引导光盘映像文件,接下来让我们了解如何下载 CoolPotOS 的光盘映像文件

* [GitHub/Release](https://github.com/plos-clan/CoolPotOS/releases) GitHub 存储库的发行版列表, 一般是比较稳定的版本

* [GitHub/Actions](https://github.com/plos-clan/CoolPotOS/actions) GitHub 工作流构建后提供的可引导光盘映像, 一般针对于该递交的构建

## Boot on virtual machine

在x86仿真模拟的一些虚拟机上, 您可以直接指定CoolPotOS的光盘映像来引导

* `qemu` 使用 `-cdrom` 可以指定
* `VMware` 可以在 `编辑虚拟机设置` 指定 CD/DVD 设备

## Boot on physical machines

如果想要在真机启动CoolPotOS, 首先要确保您的CPU支持x86指令集。\
然后我们可以找一块闲置的U盘, 刷入 `Ventory`后将CoolPotOS的映像放入该U盘中即可引导。

::: warning 不要做傻事

CoolPotOS 性质即仅作交流学习使用, 不要作死将CoolPotOS刷进主盘当作主力操作系统。 \
由此行为引发的一些列诸如数据丢失的后果我们概不负责。

:::
