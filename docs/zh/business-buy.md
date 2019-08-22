# 购买

下面简单的对腾讯云云市场镜像类商品的购买（订阅）做一个说明：

## 方式

购买=订阅，具体的表现形式就是 [部署镜像](/zh/stack-deployment.md)

腾讯云平台中，由于实例采用的是按小时计费、包周包月包年等模式，镜像作为云服务器的一个组件，计费模型是一模一样的

* 镜像部署到实例后，实例用多长时间=镜像购买多长时间
* 需要取消镜像订阅，就需要通过[重装系统](/zh/stack-deployment.html#重装系统部署)将镜像替换掉

## 费用

腾讯云云市场中，目前只支持免费镜像产品

Websoft9公司在腾讯云平台中**即将提供收费镜像**，因为我们的盈利模式就是通过收费，为有意愿付费的客户提供企业级开源镜像以及技术支持服务。

> 如果您希望免费使用我们的产品，请部署我们的Ansible自动化脚本（[Github上的主页](https://github.com/websoft9)）

未来计费方式为：

``` text
按小时：0.09/小时
按月：20元/小时
按年：200元/年
```

系统会根据服务器的付费模式选择对应的镜像计费模式

## 查看

1. 登录[云市场控制台](https://console.cloud.tencent.com/servicemarket/services)
2. 系统默认显示所有【已购产品和服务】
   ![订单列表](https://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-odlists2-websoft9.png)
3. 点击详情，可以看到付费方式、服务商、联系方式、商品链接等信息

## 用户许可协议

最终用户许可协议（End User Licence Agreement，EULA），指的是一家公司的软件与软件的使用者所达成的协议，此协议一般出现在软件安装时。如果使用者拒绝接受这家公司的EULA，那么便不能安装此软件。

一旦您同意在腾讯云上使用Websoft9的镜像，即表示您已经接受了我们的[《用户许可协议》](https://support.websoft9.com/docs/legal/zh/eula)