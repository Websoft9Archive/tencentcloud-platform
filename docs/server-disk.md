# 云硬盘

对于腾讯云平台来说，云硬盘（磁盘）可以是单独的一种计算资源（单独创建、单独计费、单独管理等），同时也可以被集成到服务器实例，作为其中的一个组件。

## 增加云硬盘

1. 登录到[云硬盘控制台](https://console.cloud.tencent.com/cvm/cbs)
2. 点击【创建】按钮
   ![购买磁盘](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-createdisk-websoft9.png)
3. 设置磁盘类型，大小等，确认无误后开始创建
4. 在云硬盘列表页，单击云硬盘所在行的【更多】>【挂载】。
   ![挂载磁盘](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-attachdisk-websoft9.png)
5. “磁盘挂载”执行成功后，需登录本实例对挂载的磁盘进行“初始化数据盘”的操作：
    - Windows, 请参考腾讯云官方文档 [Windows初始化数据盘](https://cloud.tencent.com/document/product/213/3857)
    - Linux，请参考腾讯云官方文档 [Linux初始化数据盘](https://cloud.tencent.com/document/product/213/17487) 
6. 以上所有设置后方可使用磁盘

## 卸载云硬盘

将磁盘从云服务器中解除绑定关系(卸载)，操作如下

1. 登录到[云硬盘控制台](https://console.cloud.tencent.com/cvm/cbs)
2. 找到所需卸载的磁盘，依次打开：更多->卸载
   ![卸载磁盘](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-ditachdisk-websoft9.png)
3. 根据提示完成后续操作

> 磁盘卸载后，会保留，不会被删除，可以被其他服务器挂载

## 数据盘扩容

腾讯云支持在线扩容***数据盘**，即无需重启CVM实例便可以完成扩容。

1. 登录 [云硬盘控制台](https://console.cloud.tencent.com/cvm/cbs)。
2. 选择目标云硬盘的【更多】>【扩容】。
   ![扩容](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-changedisks-websoft9.png)
3. 选择需要的新容量大小（必须大于或等于当前大小）。
4. 完成支付。
5. 根据目标云服务的操作系统类型，您需要执行 [扩展分区及文件系统（Windows）](https://cloud.tencent.com/document/product/362/6737)或 [扩展分区及文件系统（Linux）](https://cloud.tencent.com/document/product/362/6738)将扩容部分的容量划分至已有分区内，或者将扩容部分的容量格式化成新的独立分区。

> 磁盘只支持扩容，不支持减容。

## 系统盘扩容

系统盘类型为云硬盘时，支持扩容系统盘，但仅允许通过对云服务器执行 [重装系统](/zh/stack-deployment.html#重装系统部署) 操作来实现。