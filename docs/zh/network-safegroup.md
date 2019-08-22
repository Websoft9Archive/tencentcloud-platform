# 安全组

安全组是管理云服务器端口的功能，端口是服务器上应用程序与外部访问出入访问的通道。下面以**开启80端口为例**，为您介绍安全组的使用

1. 登录到[云服务器控制台](https://console.cloud.tencent.com/cvm/index)
3. 在实例的管理页面，选择需要一台重新分配至新的安全组的云服务器，单击【更多】>【安全组】>【配置安全组】。如下图所示：
   ![CVM更改安全组](http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-safegroup001-websoft9.png)
3. 在入站规则中，点击【添加规则】按钮
   ![CVM更改安全组入](http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-safegroup002-websoft9.png)
4. 以增加80和8888端口为范例
5. 80端口可以通过下拉箭头直接软件，8888端口可以通过自定义增加
   ![CVM更改安全组入](http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-safegroup003-websoft9.png)

> 以上设置方法是最为简单的一种，更多请参考[腾讯云官方安全组教程](https://cloud.tencent.com/document/product/213/16564)进行更为安全、精准的设置。