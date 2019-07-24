let messages = {};

$(document).ready(function() {
    do_term();
});

function do_term(){
    const term = new TypeIt('#cli', {
        waitUntilVisible: true
    })
        .options({speed: 1, deletespeed: 1})
        .delete()
        .type("<p class='r'>⚠警告：NIA CN内部资料，泄密者将被组织监控、定位并清除。</p><br>")
        .pause(1500)
        .options({speed: 50, deletespeed: 25})
        .type("这世界并非如你所见。我们的未来岌岌可危，你必须选择为谁而战。")
        .break()
        .type("The world around you is not what it seems. Our future is at stake. and you must choose a side.<br><br>")
        .type("Ingress是一款基于地理位置的大型多人侵入式虚拟现实游戏。")
        .pause(1500)
        .options({speed: 1, deletespeed: 1})
        .delete(31)
        .type("<s>Ingress是一款基于地理位置的大型多人侵入式虚拟现实游戏。</s><br><br>")
        .options({speed: 50, deletespeed: 25})
        .pause(1000)
        .type("你好，探员，我是ADA，A Detection Algorithm，尼安提克研究所智能侦测算法。<br>")
        .break()
        .pause(800)
        .type("Ingress并不是如你所见的那样——一个游戏，事实上，与它相关的组织——尼安提克计划正深刻地影响着全球的政治、经济、文化。<br>")
        .break()
        .pause(800)
        .type("201▉年，CERN的科学家偶然发现某种神秘的能量XM（Exotic Matter），这一能量的来源和用途无人知晓，研究人员认为可以开发并善用这能量，但另一方面却担心这样的能量会影响人们的思考甚至被能量本身奴役。")
        .break()
        .pause(800)
        .type("2016年，UESTC的XM研究机构NIA CN成立了前台组织——Ingress社团，旨在招募潜在的“XM敏感者”，并协助其成为独当一面的探员（Agent）。")
        .break()
        .pause(800)
        .type("全世界的人们都参与了这场拯救地球的战斗。所谓“滴水不成海，独木难成林”。要赢得最终的胜利，所有社区、城市乃至国家/地区都要齐心协作，共御外敌。")
        .break()
        .pause(800)
        .type("<br><br>")
        .type("他们并非将要前来。他们已然降临此地。此时即为出征之刻。")
        .break()
        .type("They aren't coming. They are already here. IT's time to move.")
        .break()
        .pause(800)
        .type("<br>")
        .type("<a href='https://nia.ac.cn'>加入我们！</a>")
        .go();
}

function do_normal(){
    const term = new TypeIt('#cli', {
        waitUntilVisible: true
    })
        .options({speed: 1, deletespeed: 1})
        .delete()
        .options({speed: 50, deletespeed: 25})
        .type("《Ingress》是Niantic工作室于2013年推出的基于位置服务（LBS）的增强虚拟现实（AR）游戏，载体为移动终端（手机、平板电脑等）。<br>")
        .break()
        .pause(800)
        .type("玩家在游戏中扮演一名特工（Agent），选择加入相互对抗的两个阵营之一，为了地球的未来而战斗。")
        .break()
        .pause(800)
        .type("由于玩家需要频繁在户外活动并经常与其他玩家交互，可以实现强身健体并结识更多朋友的目的。绝大多数玩家表示借助Ingress认识到了许多前所未见的新风景。<br>")
        .break()
        .pause(800)
        .type("电子科技大学Ingress社团，本着“淬炼身心，追寻旅程”的精神，为Ingress玩家提供开饭聚餐、周边创作、活动组织、对外联络等便利。<br>")
        .break()
        .pause(800)
        .type("<a href='https://baike.baidu.com/item/Ingress/9710706'>关于Ingress</a> <a href='https://github.com/UESTC-Ingress/constitution'>社团章程</a><br>")
        .break()
        .pause(800)
        .type("<small>* 游戏需要虚拟砖混结构建筑物逾越技术，详情请咨询本地老玩家</small>")
        .break()
        .type("<small>** 看不懂游戏内容的可以继续看这几篇：</small>")
        .break()
        .type("** - <a href='https://www.chuapp.com/article/284921.html' class='asm'>在《Ingress》里打开另一张北京地图</a>")
        .break()
        .type("** - <a href='https://www.ifanr.com/684250' class='asm'>中国抓不到皮卡丘？你应该试试这款成就了 Pokemon GO 的前作！</a>")
        .break()
        .type("<small>*** 本社Q群362632196</small> <br>")
        .break()
        .type("等待您的加入！")
        .go();
}