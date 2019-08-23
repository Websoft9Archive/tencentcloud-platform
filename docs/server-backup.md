# 备份

我们知道任何人（组织）都无法保证**云服务器**永远正常运行状态。假如云服务器出现无法启动或无法连接的故障，若没有备份会是什么样的后果？这样的教训是否值得尝试？

如果有备份，就能够恢复到备份之时的状态，大大降低损失。

腾讯云上有**基于快照的自动备份**和**基于镜像的手动备份**两种云端备份方案


## 快照备份

腾讯云可以基于云硬盘直接创建快照 或 设置自动快照策略

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在左侧栏中，单击【快照】>【自定义快照策略】，然后【创建】策略
    ![创建快照策略](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-snapshotpl-websoft9.png)
3. 在已创建的策略上，【关联云硬盘】
    ![创建快照](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-snapshotpldisk-websoft9.png)
4. 根据提示完成后续操作

> 如果你使用的不是云硬盘，是无法创建快照的

## 镜像备份

腾讯云可以基于服务器直接创建自定义镜像，创建新的自定义镜像后，您可以使用该镜像启动更多与原实例具有相同自定义项的新实例。

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 找到所需操作的服务器，关机
3. 待实例关机后，在该台实例行中，单击【更多】>【制作镜像】。如下图所示：
   ![创建自定义镜像](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-createimage-websoft9.png)
4. 根据提示完成后续操作

> 创建自定义镜像的同时系统默认会创建相关快照，删除此快照之前需要先删除关联的镜像。