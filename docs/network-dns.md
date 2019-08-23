# 域名

域名的目的是通过一段容易识别的文字段来指向服务器上的网站。如果没有域名，网站就只能通过IP地址访问，这样不便于记忆和识别。

为了使网站可以通过域名访问，有三个工作：

## 域名解析

1. 购买域名(也称之为注册域名)，并完成实名制认证
   ![域名购买](http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-buydomain-websoft9.png)
2. 登录腾讯[域名控制台](https://console.cloud.tencent.com/cns)
3. 在 “域名解析列表” 中，选择需要进行 A 记录转发的域名，进入域名详情页面。
4. 增加一个A记录：将域名（或子域名）指向IP的操作(下图示例)
   ![A记录解析](http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-dnsreva-websoft9.png)
5. 保存并等待生效

## 域名绑定

域名绑定指一台服务器在多网站部署的时候，通过**虚拟主机配置文件**，将每个域名绑定到其对应的网站目录，从而达到每个网站都可以通过域名访问且相会不会干扰的效果。

下面是一个虚拟配置文件范例（LAMP环境）：

   ~~~ 
<VirtualHost *:80>
ServerName www.mydomain.com
ServerAlias other.mydomain.com
DocumentRoot "/data/wwwroot/default/mysite2"
ErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"
CustomLog "/var/log/httpd/www.mydomain.com_apache.log" common
<Directory "/data/wwwroot/default/mysite1">
Options Indexes FollowSymlinks
AllowOverride All
Require all granted
</Directory>
</VirtualHost>
   ~~~

通过**登录云服务器**，然后修改配置文件中域名相关的值（ServerName,ServerAlias等）实现绑定域名

> 配置文件主要包括域名与网站的对应的关系，即某个域名应该对应访问哪个目录。如果服务器上有多个网站，就必须对应多个配置文件。

## 域名备案

腾讯云的备案政策简述：

- 购买服务器满足腾讯云的免费备案要求，就可以由腾讯云供备案服务。  
- 备案过程请通过[腾讯云备案系统](https://cloud.tencent.com/product/ba)全程操作
- 备案是纯粹的商务流程活动，没有任何技术门槛，建议用户自行完成
- 服务器地区在中国大陆的对应的域名需要备案
- 腾讯云提供 7*24域名备案[咨询服务](https://console.cloud.tencent.com/smarty?from=beian-offical)

