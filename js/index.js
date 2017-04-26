/**
 * Created by lupan on 2017/1/22.
 */
$(function () {
    navShow();// 导航栏显示详情和下滑线特效
    bannerSlide();// banner切换部分
    createBannerBottom();// 动态生成bannerBottom代码
    createProductCard();// 动态生成产品信息
    productCardCut(".product-card");// 卡片切换
    createProductother();// 动态生成其他产品信息
    createMarket();// 动态生成市场部分信息
    createAliyun();// 动态生成阿里云部分信息

    showContentAnimation();// 向下滚动显示元素时的动态效果
});

/**
 * 导航栏显示详情和下滑线特效
 */
function navShow() {
    // 获取line元素
    var line = $("#nav-list ul .line");

    // 获取导航列表的li，注册鼠标移入事件
    $("#nav-list ul li").on("mouseenter", function () {
        // 获取当前选中li的宽度和left位置
        var liWidth = $(this).width();
        var liLeft = $(this).position().left;

        // 设置line的位置和宽度
        line.css({"width": liWidth + "px", "left": liLeft + "px"});
    }).on("mouseleave", function () {
        // 设置line的宽度为0
        line.css({"width": "0px"});
    });
}

/**
 * banner切换部分
 */
function bannerSlide() {
    var json = [{
        "text_btn": "",
        "full": "true",
        "p": "",
        "link": "https://promotion.aliyun.com/ntms/act/carnival.html?spm=5176.8142029.418686.2.iy0GtC",
        "layer": [{
            "img": "images/banner1.jpg",
            "zindex": "50"
        }],
        "bannertype": "dark",
        "h1": ""
    }, {
        "text_btn": "查看详情",
        "full": "false",
        "p": "从春运抢票到集五福抢红包，春节其实大有学问",
        "link": "https://yq.aliyun.com/activity/148?spm=5176.8142029.418686.2.GocSuo",
        "layer": [{
            "img": "images/banner2-1.png",
            "zindex": "50"
        }, {
            "img": "images/banner2-2.png",
            "zindex": "100"
        }, {
            "img": "images/banner2-3.png",
            "zindex": "150"
        }],
        "bannertype": "dark",
        "h1": "新春黑科技大赏"
    }, {
        "text_btn": "立即查看",
        "full": "false",
        "p": "覆盖五大行业 一对一提供解决方案",
        "link": "https://www.aliyun.com/solution/scene/new.html?spm=5176.8142029.418686.4.GocSuo",
        "layer": [{
            "img": "images/banner3-1.png",
            "zindex": "50"
        }, {
            "img": "images/banner3-2.png",
            "zindex": "100"
        }, {
            "img": "images/banner3-3.png",
            "zindex": "150"
        }],
        "bannertype": "dark",
        "h1": "热门业务场景深度剖析"
    }, {
        "text_btn": "查看详情",
        "full": "false",
        "p": "DataV数据可视化入门教程",
        "link": "https://promotion.aliyun.com/ntms/act/datavcase.html?spm=5176.8142029.418686.10.GocSuo",
        "layer": [{
            "img": "images/banner4-1.png",
            "zindex": "50"
        }, {
            "img": "images/banner4-2.png",
            "zindex": "100"
        }, {
            "img": "images/banner4-3.png",
            "zindex": "150"
        }],
        "bannertype": "dark",
        "h1": "全球象牙贸易黑幕揭秘"
    }, {
        "text_btn": "立即体验",
        "full": "false",
        "p": "业界首例 帮您轻松玩转DT时代",
        "link": "https://data.aliyun.com/experience?spm=5176.8142029.418686.8.GocSuo",
        "layer": [{
            "img": "images/banner5-1.png",
            "zindex": "50"
        }, {
            "img": "images/banner5-2.png",
            "zindex": "100"
        }, {
            "img": "images/banner5-3.png",
            "zindex": "150"
        }],
        "bannertype": "dark",
        "h1": "大数据体验馆全新亮相"
    }];

    // 定义计时器id
    var setId = null;
    // 定义当前显示的位置
    var num = -1;

    // 循环json数据，动态生成html代码
    // 生成图片和信息部分
    var arrHtml = [];
    for (var i = 0; i < json.length; i++) {
        var data = json[i];
        arrHtml.push('<div class="banner-item bottom" data-groupindex="' + i + '">');
        // <!--文字描述部分-->
        arrHtml.push('<div class="banner-item-desc-wrap w">');
        arrHtml.push('<div class="banner-item-desc">');
        arrHtml.push('<a href="javascript:;">');
        arrHtml.push('<h1>' + data.h1 + '</h1>');
        arrHtml.push('<p>' + data.p + '</p>');
        // 判断如果有btn按钮则添加，没有则不添加
        if (data.text_btn) {
            arrHtml.push('<button>' + data.text_btn + '</button>');
        }
        arrHtml.push('</a>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        // <!--图片部分-->
        arrHtml.push('<a href=' + data.link + ' target="_blank">');
        // 判断是否为全屏的图片，如果是则添加full样式，并且添加data-full="true"自定义属性
        if (data.full == "true") {
            arrHtml.push('<div class="banner-item-row full" data-full="true">');
        } else {
            arrHtml.push('<div class="banner-item-row">');
        }
        arrHtml.push('<div class="banner-item-row-mid w">');
        // 获取图片数组
        var imgs = data.layer;
        // 循环所有图片生成代码
        for (var j = 0; j < imgs.length; j++) {
            arrHtml.push('<div class="right-img" style="transform: translateZ(' + imgs[j].zindex + 'px)"><img src=' + imgs[j].img + ' alt=""></div>');
        }
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</a>');
        arrHtml.push('</div>');
    }
    $(".banner-items").append(arrHtml.join(""));
    // 生成ul代码
    var arrHtmlUl = [];
    arrHtmlUl.push('<ul class="banner-lists clearfix">');
    for (var i = 0; i < json.length; i++) {
        arrHtmlUl.push('<li class="banner-list" data-index=' + i + '></li>');
    }
    arrHtmlUl.push('</ul>');
    $(".banner-items").after(arrHtmlUl.join(""));

    // 获取所有切换栏的li,注册点击事件
    $(".banner-lists .banner-list").on("click", function () {
        // 使当前的li有active属性,并且使其他的li移除active属性
        $(this).addClass("active").siblings(".banner-list").removeClass("active");

        // 获取当前li的索引值
        num = $(this).attr("data-index");
        // 根据索引获取对应要显示的图片
        var bannerImg = $(".banner-item[data-groupindex=" + num + "]");
        // 为该元素添加居中显示和动画的样式，移除隐藏样式
        bannerImg.removeClass("bottom").addClass("center banner-animating");
        // 为该元素的兄弟元素移除显示和动画的样式,添加隐藏样式
        bannerImg.siblings(".banner-item").removeClass("center banner-animating").addClass("bottom");
        // 初始化图片所在div的旋转样式为0
        bannerImg.find(".banner-item-row").css({"transform": "rotateX(0deg) rotateY(0deg)"});
    });

    // 获取banner图片所在的div,注册鼠标移动事件
    $(".banner-item-row[data-full!='true']").on("mousemove", function (e) {
        // 获取div的宽高一半值
        var w = parseInt($(this).width() / 2);
        var h = parseInt($(this).height() / 2);

        // 设置偏移角度
        // 以div的中心点为标准，鼠标在中心点下边与左侧则旋转为正值，鼠标在中心点上边与右侧则旋转为负值
        var rotatex = (e.clientY - h) / 30;
        var rotatey = -(e.clientX - w) / 50;

        // 设置div的偏移
        $(this).css({"transform": "rotateX(" + rotatex + "deg) rotateY(" + rotatey + "deg)"});
    });

    // 获取banner注册鼠标移入和移出事件
    $(".banner").on("mouseenter", function () {
        // 暂停计时器
        clearInterval(setId);
    }).on("mouseleave", function () {
        // 开始计时器
        setId = setInterval(bannerCut, 2000);
    });

    // 为button注册点击事件
    $(".banner-item-desc button").on("click", function () {
        // 获取a标签的链接
        window.open($(this).parents(".banner-item-desc-wrap").next().attr("href"));
    });

    // banner自动循环 -开启定时器
    setId = setInterval(bannerCut, 2000);
    function bannerCut() {
        num++;
        // 如果num的数量与count相同后则重新将num定义为0
        if (num == json.length) {
            num = 0;
        }
        $(".banner-lists .banner-list[data-index=" + num + "]").click();
    }

    // 触发第一个li的点击事件
    $(".banner-lists .banner-list[data-index=0]").click();
}

/**
 * 动态生成bannerBottom代码
 */
function createBannerBottom() {
    var json = [
        {"title": "选择阿里云", "desc": "全面了解阿里云", "link": "javascript:;", "image": "images/banner-bottom1.png"},
        {"title": "免费套餐", "desc": "30+产品免费使用", "link": "javascript:;", "image": "images/banner-bottom2.png"},
        {"title": "10分钟入门", "desc": "快速上云指南", "link": "javascript:;", "image": "images/banner-bottom3.png"},
        {"title": "人工智能", "desc": "大数据黑科技", "link": "javascript:;", "image": "images/banner-bottom4.png"},
        {"title": "云盾", "desc": "安全防护坚如磐石", "link": "javascript:;", "image": "images/banner-bottom5.png"}
    ];

    // 生成html
    var arrHtml = [];
    for (var i = 0; i < json.length; i++) {
        // 判断i的奇偶，如果为偶数则显示的顺序为奇数
        if (i % 2 == 0) {
            arrHtml.push('<li class="special-list' + (i + 1) + ' con-odd' + '">');
        }
        else {
            arrHtml.push('<li class="special-list' + (i + 1) + ' con-even' + '">');
        }
        arrHtml.push('<a href=' + json[i].link + '>');
        arrHtml.push('<div class="special-text">');
        arrHtml.push('<h2 class="title">' + json[i].title + '</h2>');
        arrHtml.push('<p class="desc">' + json[i].desc + '</p>');
        arrHtml.push('</div>');
        arrHtml.push('<div class="special-img" style="background-image:url(' + json[i].image + ')"></div>');
        arrHtml.push('</a>');
        arrHtml.push('</li>');
    }

    // 添加到ul中
    $(".banner-bottom-content").append(arrHtml.join(""));
}

/**
 * 动态生成产品信息
 */
function createProductCard() {
    var json = [{
        "title": "云计算基础服务",
        "desc": "专业领先、高性能、高可用",
        "img1": "images/product1-gray.png",
        "img2": "images/product1-blue.png",
        "products": [
            {
                "proName": "云服务器 ECS",
                "proDesc": "可弹性伸缩、安全稳定、简单易用的计算服务 <br>包年包月<i class='price'>￥40.8</i> /月起 了解<a href='javascript:;' target='_blank'>常用配置</a>",
                "proButton": "立即购买"
            },
            {"proName": "内容分发网络 CDN", "proDesc": "全球加速、按量付费", "proButton": "立即开通"},
            {"proName": "云数据库 RDS", "proDesc": "稳定可靠、可弹性伸缩", "proButton": "立即购买"},
            {"proName": "对象存储 OSS", "proDesc": "高并发无存储上限", "proButton": "立即开通"},
            {"proName": "负载均衡 SLB", "proDesc": "多台云服务器间流量分发", "proButton": "立即开通"}]
    }, {
        "title": "域名与网站（万网）",
        "desc": "国内域名市场NO.1",
        "img1": "images/product2-gray.png",
        "img2": "images/product2-blue.png",
        "products": [
            {
                "proName": "域名注册",
                "proDesc": "超过1000万个域名在万网注册，安全易用，高性价比<br> 域名新注册仅<i class='price'>4</i>元起，<a href='javascript:;'>查看详情</a>",
                "proButton": "立即注册"
            },
            {"proName": "域名交易", "proDesc": "买卖域名，像淘宝一样简单", "proButton": "立即搜索"},
            {"proName": "云解析DNS", "proDesc": "国内解析量第一，18元/年起", "proButton": "立即购买"},
            {"proName": "云虚拟主机", "proDesc": "20年专业品质，送备案时长", "proButton": "立即购买"},
            {"proName": "企业邮箱", "proDesc": "无限容量，50万企业信任之选", "proButton": "立即购买"}]
    }, {
        "title": "域名与网站（万网）",
        "desc": "国内域名市场NO.1",
        "img1": "images/product2-gray.png",
        "img2": "images/product2-blue.png",
        "products": [
            {
                "proName": "域名注册",
                "proDesc": "超过1000万个域名在万网注册，安全易用，高性价比<br> 域名新注册仅<i class='price'>4</i>元起，<a href='javascript:;'>查看详情</a>",
                "proButton": "立即注册"
            },
            {"proName": "域名交易", "proDesc": "买卖域名，像淘宝一样简单", "proButton": "立即搜索"},
            {"proName": "云解析DNS", "proDesc": "国内解析量第一，18元/年起", "proButton": "立即购买"},
            {"proName": "云虚拟主机", "proDesc": "20年专业品质，送备案时长", "proButton": "立即购买"},
            {"proName": "企业邮箱", "proDesc": "无限容量，50万企业信任之选", "proButton": "立即购买"}]
    }, {
        "title": "域名与网站（万网）",
        "desc": "国内域名市场NO.1",
        "img1": "images/product2-gray.png",
        "img2": "images/product2-blue.png",
        "products": [
            {
                "proName": "域名注册",
                "proDesc": "超过1000万个域名在万网注册，安全易用，高性价比<br> 域名新注册仅<i class='price'>4</i>元起，<a href='javascript:;'>查看详情</a>",
                "proButton": "立即注册"
            },
            {"proName": "域名交易", "proDesc": "买卖域名，像淘宝一样简单", "proButton": "立即搜索"},
            {"proName": "云解析DNS", "proDesc": "国内解析量第一，18元/年起", "proButton": "立即购买"},
            {"proName": "云虚拟主机", "proDesc": "20年专业品质，送备案时长", "proButton": "立即购买"},
            {"proName": "企业邮箱", "proDesc": "无限容量，50万企业信任之选", "proButton": "立即购买"}]
    }];

    // 生成html代码
    var arrHtml = [];
    for (var i = 0; i < json.length; i++) {
        var data = json[i];

        // 判断如果为第一个则加上active
        if (i == 0) {
            arrHtml.push('<li class="product-card active">');
        }
        else {
            arrHtml.push('<li class="product-card">');

        }
        // <!--标题-->
        // 判断奇偶
        if (i % 2 == 0) {
            arrHtml.push('<div class="card-title card-title-odd">');
        }
        else {
            arrHtml.push('<div class="card-title card-title-even">');
        }
        arrHtml.push('<div class="content">');
        arrHtml.push('<div class="title-img">');
        arrHtml.push('<img src=' + data.img1 + ' alt="" class="un-hover">');
        arrHtml.push('<img src=' + data.img2 + ' alt="" class="with-hover">');
        arrHtml.push('</div>');
        arrHtml.push('<h1>' + data.title + '</h1>');
        arrHtml.push('<p class="title-info">' + data.desc + '</p>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        // <!--简版内容-->
        arrHtml.push('<div class="card-content-first">');
        arrHtml.push('<ul class="content-first-list">');
        // 生成显示的简版内容
        for (var j = 0; j < data.products.length; j++) {
            arrHtml.push('<li>' + data.products[j].proName + '</li>');
        }
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
        // <!--详细内容-->
        arrHtml.push('<div class="card-content-second">');
        arrHtml.push('<div class="content-info">');
        arrHtml.push('<div class="main-info">');
        arrHtml.push('<a class="main-info-title" href="javascript:;">' + data.products[0].proName + '</a>');
        arrHtml.push('<p class="main-info-desc">');
        arrHtml.push(data.products[0].proDesc);
        arrHtml.push('</p>');
        arrHtml.push('<a class="main-info-button" href="javascript:;">' + data.products[0].proButton + '</a>');
        arrHtml.push('</div>');
        arrHtml.push('<div class="other-info">');
        arrHtml.push('<ul>');
        // 生成详细内容的列表
        for (var j = 1; j < data.products.length; j++) {
            arrHtml.push('<li>');
            arrHtml.push('<a class="other-info-title" href="javascript:;">' + data.products[j].proName + '</a>');
            arrHtml.push('<p class="other-info-desc">' + data.products[j].proDesc + '</p>');
            arrHtml.push('<a class="other-info-button" href="javascript:;">' + data.products[j].proButton + '</a>');
            arrHtml.push('</li>');
        }
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</li>');
    }

    // 添加到ul中
    $(".product-list").append(arrHtml.join(""));

    // var json1 = {
    //     "title": "", "desc": "", "img1": "images/product4-gray", "img2": "images/product4-blue", "products": [
    //         {"proName": "", "proDesc": "", "proButton": ""},
    //         {"proName": "", "proDesc": "", "proButton": ""},
    //         {"proName": "", "proDesc": "", "proButton": ""},
    //         {"proName": "", "proDesc": "", "proButton": ""},
    //         {"proName": "", "proDesc": "", "proButton": ""}]
    // }
}

/**
 * 卡片切换 可以公共使用
 */
function productCardCut(elementName) {
    var setId = null;
    $(elementName).on("mouseenter", function () {
        clearTimeout(setId);
        var ele = this;
        setId = setTimeout(function () {
            // 为当前元素添加active样式，并且去掉兄弟元素的active样式
            $(ele).addClass("active").siblings(elementName).removeClass("active");
        }, 150);
    });

}

/**
 * 动态生成其他产品信息
 */
function createProductother() {
    var json = [{
        "title": "网络服务",
        "content": "提供自定义云资源网络拓扑结构的能力，<br>帮您解决IP规划、负载均衡、<br> VPC互通、专线接入等网络问题",
        "img": "images/productother1.png",
        "products": [
            {"proName": "负载均衡"},
            {"proName": "专有网络VPC"},
            {"proName": "高速通道"}]
    }, {
        "title": "企业级互联网中间件",
        "content": "快速复制阿里巴巴互联网架构，一站式<br>提供分布式管理应用、服务化框架、消息通信、 <br>分布式数据库等服务",
        "img": "images/productother2.png",
        "products": [
            {"proName": "企业级分布式应用服务 EDAS"},
            {"proName": "消息队列"},
            {"proName": "分布式关系型数据库服务 DRDS"}]
    }, {
        "title": "视频服务",
        "content": "借助灵活、可伸缩的存储、处理及分发<br>服务，帮助企业和开发者快速搭建安全、弹性、<br>高可定制的视频应用",
        "img": "images/productother3.png",
        "products": [
            {"proName": "媒体转码"},
            {"proName": "视频点播"},
            {"proName": "视频直播"}]
    }];

    // 生成其他产品的代码
    var arrHtml = [];
    for (var i = 0; i < json.length; i++) {
        var data = json[i];
        arrHtml.push('<div class="productother-cell">');
        arrHtml.push('<div class="productother-cell-img">');
        arrHtml.push('<img src=' + data.img + ' alt="">');
        arrHtml.push('</div>');
        arrHtml.push('<h2 class="productother-cell-title">' + data.title + '</h2>');
        arrHtml.push('<p class="productother-cell-desc">');
        arrHtml.push(data.content);
        arrHtml.push('</p>');
        arrHtml.push('<ul class="productother-cell-list">');
        for (var j = 0; j < data.products.length; j++) {
            arrHtml.push('<li><a href="javascript:;">○ ' + data.products[j].proName + '</a></li>');
        }
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
    }
    $(".productother-cell-info").append(arrHtml.join(""))
}

/**
 * 动态生成市场部分信息
 */
function createMarket() {
    var json = [{
        "title": "基础软件",
        "img": "images/market1.jpg",
        "markets": [
            {"marketName": "预装PHP"},
            {"marketName": "预装JAVA"},
            {"marketName": "预装ASP/.NET"},
            {"marketName": "预装建站系统"},
            {"marketName": "服务器软件"}]
    }, {
        "title": "网站建设",
        "img": "images/market2.jpg",
        "markets": [
            {"marketName": "网站模板"},
            {"marketName": "企业官网"},
            {"marketName": "电子商务"},
            {"marketName": "定制化服务"},
            {"marketName": "LOGO设计"},
            {"marketName": "手机网站"}]
    }, {
        "title": "服务与培训",
        "img": "images/market3.jpg",
        "markets": [
            {"marketName": "故障排查"},
            {"marketName": "数据迁移"},
            {"marketName": "环境配置"},
            {"marketName": "云培训与认证"}]
    }, {
        "title": "企业应用",
        "img": "images/market4.jpg",
        "markets": [
            {"marketName": "阿里云办公"},
            {"marketName": "销售管理"},
            {"marketName": "企业服务"},
            {"marketName": "人事管理"},
            {"marketName": "财务管理"}]
    }, {
        "title": "安全市场",
        "img": "images/market5.jpg",
        "markets": [
            {"marketName": "网络安全"},
            {"marketName": "主机安全"},
            {"marketName": "应用安全"},
            {"marketName": "数据安全"},
            {"marketName": "安全管理"},
            {"marketName": "安全服务"}]
    }, {
        "title": "数据市场",
        "img": "images/market6.jpg",
        "markets": [
            {"marketName": "数据API"},
            {"marketName": "电子商务"},
            {"marketName": "金融理财"},
            {"marketName": "企业管理"},
            {"marketName": "交通地理"},
            {"marketName": "气象水利"}]
    }];

    var arrHtml = [];
    for (var i = 0; i < json.length; i++) {
        var data = json[i];
        arrHtml.push('<div class="market-cell">');
        arrHtml.push('<a href="javascript:;" class="market-cell-link">');
        arrHtml.push('<div class="market-cell-img"');
        arrHtml.push('style="background-image:url(' + data.img + ');"></div>');
        arrHtml.push('<h2 class="market-cell-title">' + data.title + '</h2>');
        arrHtml.push('</a>');
        arrHtml.push('<ul class="market-cell-list clearfix">');
        for (var j = 0; j < data.markets.length; j++) {
            arrHtml.push('<li><a href="javascript:;">' + data.markets[j].marketName + '</a></li>');
            if (j == 2) {
                arrHtml.push('<br/>');
            }
            else if (j == data.markets.length - 1) {
                arrHtml.push('');
            }
            else {
                arrHtml.push('<li class="line">&nbsp;|&nbsp;</li>');
            }
        }
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
    }
    $(".market-cell-info").append(arrHtml.join(""));
}

/**
 * 市场部分的图片移动
 */
function marketImgMove() {
    // 获取图片的高度, 移动的高度
    var imgHeight = $(".market-cell-img").height();
    var setId = null;

    // 获取链接注册鼠标移入和移除事件
    $(".market-cell-link").on("mouseenter", function () {
        // 设置图片的移动位置
        // 开启定时器
        setId = setInterval(function () {

        }, 10);

    });
    $(".market-cell-link").on("mouseleave", function () {
        // 设置图片的移动位置
    });

    /**
     * 背景图片的移动
     * @param ele 图片元素
     * @param step 每次移动的距离
     * @param targetTop 目标位置
     */
    function imgMove(ele, step, targetTop) {
        clearInterval(ele.setid);

        // 获取图片的当前位置
        var positionTop = ele.css("background-position");
        positionTop = parseInt(positionTop.split(" ")[1]);
        console.log(positionTop);
        // 判断目标位置大于当前位置，则正走，否则走负数
        // step = targetTop > positionTop ? step : -step;


        ele.setid = setInterval(function () {
            // 计算每次移动的位置
            positionTop += step;
            // 判断如果到达目标位置则停止
            if (Math.abs(targetTop - positionTop) < Math.abs(step)) {
                clearInterval(ele.setid);
            }

            // 设置图片的位置
            ele.css("background-position", "0px " + positionTop + "px");
        }, 20);
    }
}

/**
 * 动态生成阿里云部分信息
 */
function createAliyun() {
    var json = [
        {"title": "机器学习为您解密雾霾形成原因", "hot": "热点", "img": "images/aliyun1.jpg", "link": "javascript:;"},
        {"title": "阿里移动开源框架Weex的技术核心及双11应用经验", "hot": "专题", "img": "", "link": "javascript:;"},
        {"title": "使用API网关建立多场景测试环境", "hot": "热点", "img": "", "link": "javascript:;"},
        {"title": "从抢票难，聊春运数据库设计难点", "hot": "聚能聊", "img": "images/aliyun2.jpg", "link": "javascript:;"},
        {"title": "从RocketMQ捐赠给Apache聊开源", "hot": "聚能聊", "img": "", "link": "javascript:;"},
        {"title": "防止网约车司机绕路的技术手段", "hot": "聚能聊", "img": "", "link": "javascript:;"},
        {"title": "利用阿里云容器服务实现高可用抢红包应用", "hot": "精选", "img": "images/aliyun3.jpg", "link": "javascript:;"},
        {"title": "这几首宋词，你能看出来是出自计算机之手吗？", "hot": "分享", "img": "", "link": "javascript:;"},
        {"title": "在阿里云HPC和容器服务上，像梵高一样作画", "hot": "聚焦", "img": "", "link": "javascript:;"},
    ];

    var arrHtml = [];
    for (var i = 0; i < json.length; i += 3) {
        arrHtml.push('<div class="aliyun-cell">');
        <!--详细信息部分-->
        // 判断如果有图片则为详细部分
        // if (data.img != "") {
        arrHtml.push('<a href=' + json[i].link + '>');
        arrHtml.push('<div class="aliyun-cell-box">');
        arrHtml.push('<div class="aliyun-cell-box-img">');
        arrHtml.push('<img src=' + json[i].img + ' alt="">');
        arrHtml.push('</div>');
        arrHtml.push('<div class="aliyun-cell-box-header">');
        arrHtml.push('<p>【' + json[i].hot + '】' + json[i].title + '</p>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</a>');
        // }
        <!--列表部分-->
        arrHtml.push('<div class="aliyun-cell-list">');
        arrHtml.push('<ul>');
        // 判断如果没有图片则为列表部分
        arrHtml.push('<li><a href=' + json[i + 1].link + '>【' + json[i + 1].hot + '】' + json[i + 1].title + '</a></li>');
        arrHtml.push('<li><a href=' + json[i + 2].link + '>【' + json[i + 2].hot + '】' + json[i + 2].title + '</a></li>');
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
    }

    $(".aliyun-cell-info").append(arrHtml.join(""));
}

/**
 * 向下滚动显示元素时的动态效果
 */
function showContentAnimation() {

    // 获取其他产品内容所在div的所在位置
    var topProductother = $(".productother-cell-info").offset().top;
    // 获取产品内容所在div的位置
    var topMarket = $(".market-cell-info").offset().top;

    // 注册滚动事件
    $(window).scroll(function () {
        if ($(document).scrollTop() > topProductother - $(window).height()) {
            $(".productother-cell-img").addClass("slide-product20");
            $(".productother-cell-title").addClass("slide-product30");
            $(".productother-cell-desc").addClass("slide-product40");
            $(".productother-cell-list").addClass("slide-product50");
        }

        if ($(document).scrollTop() > topMarket - $(window).height()) {
            $(".market-cell-img").addClass("slide-product20");
            $(".market-cell-title").addClass("slide-product30");
            $(".market-cell-list").addClass("slide-product50");
        }
    });
}