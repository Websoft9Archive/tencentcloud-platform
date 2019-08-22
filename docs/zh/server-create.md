# 创建

下面介绍腾讯云上创建服务器实例的说明。

创建实例最基本的条件是需要给服务器准备一个系统盘的启动模板文件，这个模板最常见的表现形式就是镜像文件

下面介绍基于镜像创建云服务器的操作步骤：

## 创建弹性云服务器

1. 登录腾讯云控制台->云服务器，点击“新建”，
   ![进入ecs控制台购买服务器](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-buyecs-websoft9.png)

2. 首先，选择地域与机型
   ![选择CVM规格](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-guige-websoft9.png)
   - 包年包月：一口价对所选的时间区间的包干预付费制
   - 按量计费：按小时后付费，用一小时给一小时的钱

3. 接下来，选择一个你所需的镜像
   ![进入ecs控制台购买服务器](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-selectmkimage-websoft9.png)

   - 公共镜像：腾讯云官方提供的操作系统镜像
   - 自定义镜像：用户自己的镜像
   - 共享镜像：其他人共享给用户的镜像
   - 镜像市场：提供预装操作系统、应用环境和各类软件的优质第三方镜像。无需配置，可一键部署，满足建站、应用开发、可视化管理等个性化需求。

4. 如果选择镜像市场，可以通过搜索关键件词“websoft9”，列出我们相关镜像
   ![选择Websoft9镜像](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-selectimage-websoft9.png)

5. 后续动作基本都会要求用户完成：存储、安全组、密码、公网带宽等设置，带宽建议按流量计费
![选择带宽](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-netwithpayasgo-websoft9.png)
6. 等待几分钟，弹性云服务器创建完成后，镜像会作为服务器的系统盘启动，即镜像自动部署到实例中

## 秘钥对

在创建弹性云服务器时，如果采用秘钥对作为登录凭证，需要提前创建秘钥对

登录 云服务器控制台 。
单击左侧导航窗格中的【SSH 密钥】。
单击【创建密钥】



1. 登录云服务器控制台，
2. 单击左侧导航窗格中的【SSH 密钥】，然后点击【创建秘钥】按钮
   ![创建秘钥对](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-createkeys-websoft9.png)
3. 选择方式
   * 若创建方式选择 "创建新密钥对" ，输入密钥名称，单击【确定】；
   * 若创建方式选择 "使用已有公钥" ，输入密钥名称，并输入原有的公钥信息，然后单击【确定】。
3. 弹出提示框，单击【下载】（用户需要在 10 分钟内下载私钥）。