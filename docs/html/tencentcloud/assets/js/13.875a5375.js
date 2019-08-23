(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(t,e,r){"use strict";r.r(e);var a=r(0),o=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"域名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),r("p",[t._v("域名的目的是通过一段容易识别的文字段来指向服务器上的网站。如果没有域名，网站就只能通过IP地址访问，这样不便于记忆和识别。")]),t._v(" "),r("p",[t._v("为了使网站可以通过域名访问，有三个工作：")]),t._v(" "),r("h2",{attrs:{id:"域名解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),r("ol",[r("li",[t._v("购买域名(也称之为注册域名)，并完成实名制认证\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-buydomain-websoft9.png",alt:"域名购买"}})]),t._v(" "),r("li",[t._v("登录腾讯"),r("a",{attrs:{href:"https://console.cloud.tencent.com/cns",target:"_blank",rel:"noopener noreferrer"}},[t._v("域名控制台"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("在 “域名解析列表” 中，选择需要进行 A 记录转发的域名，进入域名详情页面。")]),t._v(" "),r("li",[t._v("增加一个A记录：将域名（或子域名）指向IP的操作(下图示例)\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/qcloud/qcloud-dnsreva-websoft9.png",alt:"A记录解析"}})]),t._v(" "),r("li",[t._v("保存并等待生效")])]),t._v(" "),r("h2",{attrs:{id:"域名绑定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),r("p",[t._v("域名绑定指一台服务器在多网站部署的时候，通过"),r("strong",[t._v("虚拟主机配置文件")]),t._v("，将每个域名绑定到其对应的网站目录，从而达到每个网站都可以通过域名访问且相会不会干扰的效果。")]),t._v(" "),r("p",[t._v("下面是一个虚拟配置文件范例（LAMP环境）：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('<VirtualHost *:80>\nServerName www.mydomain.com\nServerAlias other.mydomain.com\nDocumentRoot "/data/wwwroot/default/mysite2"\nErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"\nCustomLog "/var/log/httpd/www.mydomain.com_apache.log" common\n<Directory "/data/wwwroot/default/mysite1">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\n</VirtualHost>\n')])])]),r("p",[t._v("通过"),r("strong",[t._v("登录云服务器")]),t._v("，然后修改配置文件中域名相关的值（ServerName,ServerAlias等）实现绑定域名")]),t._v(" "),r("blockquote",[r("p",[t._v("配置文件主要包括域名与网站的对应的关系，即某个域名应该对应访问哪个目录。如果服务器上有多个网站，就必须对应多个配置文件。")])]),t._v(" "),r("h2",{attrs:{id:"域名备案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名备案","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名备案")]),t._v(" "),r("p",[t._v("腾讯云的备案政策简述：")]),t._v(" "),r("ul",[r("li",[t._v("购买服务器满足腾讯云的免费备案要求，就可以由腾讯云供备案服务。")]),t._v(" "),r("li",[t._v("备案过程请通过"),r("a",{attrs:{href:"https://cloud.tencent.com/product/ba",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云备案系统"),r("OutboundLink")],1),t._v("全程操作")]),t._v(" "),r("li",[t._v("备案是纯粹的商务流程活动，没有任何技术门槛，建议用户自行完成")]),t._v(" "),r("li",[t._v("服务器地区在中国大陆的对应的域名需要备案")]),t._v(" "),r("li",[t._v("腾讯云提供 7*24域名备案"),r("a",{attrs:{href:"https://console.cloud.tencent.com/smarty?from=beian-offical",target:"_blank",rel:"noopener noreferrer"}},[t._v("咨询服务"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=o.exports}}]);