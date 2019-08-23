# 公网IP地址

## 查看

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在列出的所有服务器实例中，我们会看到 **主IP地址（公）** 
   ![查看公网IP](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-getpublicip-websoft9.png)
3. 若实例没有公网IP地址项（或为空），需挂载一个公网IP（[参考文档](https://help.aliyun.com/document_detail/72125.html)）

## 绑定

如果云服务器没有公网IP，需要绑定弹性IP，具体操作步骤如下：

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 点击服务器名称，进入服务器详情页面。
3. 找到【弹性网卡】标签，找到“绑定”操作
   ![绑定操作](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-bindeip-websoft9.png)
4. 根据提示完成后续操作

> 如果没有可用的弹性公网IP，需要实现购买弹性公网IP

## 更换

公网IP地址是可以更换的，更换后原公网 IP 将被释放

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
2. 在实例的管理页面，选择待转换 IP 的云服务器行，单击【更多】>【IP/网卡】>【更换公网IP】，如下图所示：
   ![更换操作](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-changepip-websoft9.png)