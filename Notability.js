/******************************

脚本功能：Notability — 解锁订阅
下载地址：https://t.cn/A6Cgjtei
特别说明：老版本解锁，然后同步新版本，
软件版本：14.0.2
脚本作者：彭于晏💞
更新时间：2023-7-31
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Notability.js

^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/Notability.js


[mitm] 

hostname = notability.com

*******************************/
