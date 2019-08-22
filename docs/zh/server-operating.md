# 操作

下面是一些常见的CVM操作

## 启动、停止和终止

在CVM控制台可以对实例状态进行修改，包括：

- 开机
- 关机
- 重启
- 销毁/退还
- 按量转包年包月

销毁适用于按量购买的服务器  


## 重置实例密码

如果您遗忘了密码，您可以在控制台上重新设置实例的登录密码。

> 只有处于关机状态的实例才允许执行重置密码操作。为了避免数据丢失，请提前规划好操作时间，建议在业务低谷时操作，将影响降到最低。

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在实例的管理页面，选择需要重置密码的云服务器行，单击【更多】>【密码/密钥】>【重置密码】。如下图所示：
   ![调整配置](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-resetpw-websoft9.png)
3. 重新开机，方可生效

## 调整配置

CVM的配置可以[调整](https://cloud.tencent.com/document/product/213/2178)，具体操作如下：

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在需要调整的实例右侧操作栏，单击【更多】>【资源调整】>【调整配置】。如下图所示：
   ![调整配置](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-changeecsconfigure-websoft9.png)
3. 依据操作向导完成调整

## 重装系统

如果你想将服务器恢复至刚启动的初始状态，就需要用到[**重装系统**](https://cloud.tencent.com/document/product/213/4933)操作。  

重装系统之前务必进行完成[服务器备份](/zh/server-backup.md)，然后关闭服务器后方可开始重装：

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在需要重装系统的实例行中，单击【更多】>【重装系统】。如下图所示：
3. 依次打开：更多->重装系统  
   ![重装系统](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-iniecs-websoft9.png)
4. 在弹出的 “重装系统” 窗口中，选择使用当前机器使用镜像或其他镜像，调整磁盘大小，输入密码，单击【开始重装】。
   ![重装系统详情](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-iniecsdetail-websoft9.png)