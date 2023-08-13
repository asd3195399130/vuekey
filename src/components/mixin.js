export default {
  data() {
    return {
      match: [
        {
          name: "我的订阅",
        },
        {
          name: "全部",
        },
        {
          name: "综合",
        },
        {
          name: "科技",
        },

        {
          name: "娱乐",
        },
      ],
      math: [
        {
          url: "https://files.codelife.cc/topsearch/KqndgxeLl9.png",
          name: "微博",
        },
        {
          url: "https://files.codelife.cc/topsearch/mproPpoq6O.png",
          name: "知乎",
        },
        {
          url: "https://files.codelife.cc/topsearch/WnBe01o371.png",
          name: "微信",
        },
      ],
      titimg: [
        {
          id: 1,
          title:
            "号称【亚洲最大肿瘤精神分院】的河北一医院，其总投资达94.6亿，哪些信息值得关...",
          number: "2828万热度",
        },
        {
          id: 2,
          title:
            "1000万买3000万房子，结果房子被银行转给开发商，谁该赔？谁该担责？",
          number: "2785万热度",
        },
        {
          id: 3,
          title:
            "离职已经两年了,今天接到原单位的电话给了处分还要求返回绩效工资，合理吗？",
          number: "545万热度",
        },
        {
          id: 4,
          title:
            "久违的商战开打，盒马移山价内涵山姆，任何商品比对方低一元，如何从商业角度解读？",
          number: "456万热度",
        },
        {
          id: 5,
          title:
            "缅甸旅游业苦等复苏，有酒店价格直降六成，期待中国游客重返，缅甸旅游业恢复缓慢有哪些原因？",
          number: "374万热度",
        },
        {
          id: 6,
          title:
            "湖北民营公交公司因电池质量问题引关注，车子还剩75%电量就瘫了，夏天不敢开空调，哪些信息...",
          number: "318万热度",
        },
        {
          id: 7,
          title: "“小丑竟是我自己”的周鸿祎，如何评价他？",
          number: "297万热度",
        },
        {
          id: 8,
          title:
            "李嘉诚【7折】楼盘开卖，626套引三万人争抢，成香港史上认购最多的新盘，那些信息值得关...？",
          number: "195万热度",
        },
        {
          id: 9,
          title:
            "医药反腐风暴已经席卷20省份，纪检委部门出手配合,多地公布举报电话，将对医药行业带来哪些影响？",
          number: "142万热度",
        },
        {
          id: 10,
          title:
            "梅西评价中国草坪499元一块，专家称【从球迷的角度，他们认为这有一定价值】，如何看待此事",
          number: "110万热度",
        },
        {
          id: 11,
          title: "为何UPS（不间断电源）的电池还是铅酸蓄电池而不是锂电池？",
          number: "92万热度",
        },
        {
          id: 12,
          title: "“中国版GPT-3”来了，百度DuBrain 2.0发布，哪些信息值得关注？",
          number: "81万热度",
        },
        {
          id: 13,
          titel: "中国驻伦敦大使馆新建计划造英方无理阻绕，英方此举有哪些意图",
          number: "65万热度",
        },
        {
          id: 14,
          title:
            "清洁工躺车库午睡被碾身亡，司机被拘押366天判无罪，获赔21万，具体情况如何,如何看待此判决",
          number: "62万热度",
        },
      ],
      meth: [
        {
          id: 1,
          title: "刘天池爆料质子团选拔",
          num: "100.3万",
        },
        {
          id: 2,
          title: "59岁法医因抑郁症女孩一句话哭了",
          num: "94.2万",
        },
        {
          id: 3,
          title: "致青春最美的样子",
          num: "68.2万",
        },
        {
          id: 4,
          title: "乐夏3最不假妆的是TA",
          num: "68.1万",
        },
        {
          id: 5,
          title: "缅甸旅游业苦等中国游客重返",
          num: "68.1万",
        },
        {
          id: 6,
          title: "2018年12月18日，中国“天眼”正式发射升空",
          num: "67.1万",
        },
        {
          id: 7,
          title: "网友评程潇喂许光汉吃东西想扔厨余垃圾",
          num: "62.2万",
        },
        {
          id: 8,
          title: "全家22人从云南送小伙到国防科大报到",
          num: "58.6万",
        },
        {
          id: 9,
          title: "张艺兴突然哭了",
          num: "57.2万",
        },
        {
          id: 10,
          title: "杨紫选剧本",
          num: "53.4",
        },
        {
          id: 11,
          title: "医疗反腐 改革医务人员薪酬体系",
          num: "40.1万",
        },
        {
          id: 12,
          title: "警方回应水果捞纠纷案件调查处理结果",
          num: "38.2万",
        },
        {
          id: 13,
          title: "男子用1000元买1000个假币，结果",
          num: "37.2万",
        },
      ],
      weixin: [
        {
          id: 1,
          title: "【人民日报】人美心善!16岁姑娘马悦，点名表扬",
          number: "10W+阅读，3831",
        },
        {
          id: 2,
          title:
            "【洞见】看了暑假带孩子见世面的父母，我才明白什么是教育最大的陷阱",
          number: "10W+阅读,3602",
        },
        {
          id: 3,
          title: "【人民日报】【夜读】有这4个习惯的人，进步最快",
          number: "10W+阅读,3565",
        },
        {
          id: 4,
          title: "【人民日报】来了！新闻早班车",
          number: "10W+阅读,3552",
        },
        {
          id: 5,
          title: "【人民日报】“小丑”的“丑”，是“丑”在“笑”",
          number: "10W+阅读,3545",
        },
        {
          id: 6,
          title: "【人民日报】民警打开调解室的门，惊呆了......",
          number: "10W+阅读,3538",
        },
        {
          id: 7,
          title: "【人民日报】“小丑”的“丑”，是“丑”在“笑”",
          number: "10W+阅读,3545",
        },
        {
          id: 8,
          title: "【夜听】【夜听】愿有一人，懂你所有",
          number: "10W+阅读，2478",
        },
        {
          id: 9,
          title: "【一个坏土豆】深度|聊聊这医疗反腐",
          number: "10W+阅读,2031",
        },
        {
          id: 10,
          title: "【人民日报】下班后'微信办公'算加班吗?法院判了",
          number: "10W+阅读,1982",
        },
        {
          id: 11,
          title:
            "【冯站长之家】【冯站长之家】2023年8月12日（周六）三分钟新闻早餐",
          number: "10W+阅读,1975",
        },
      ],
      comp: [
        {
          url: "https://files.codelife.cc/topsearch/KqndgxeLl9.png",
          name: "微博",
        },
        {
          url: "https://files.codelife.cc/topsearch/mproPpoq6O.png",
          name: "知乎",
        },
        {
          url: "https://files.codelife.cc/topsearch/WnBe01o371.png",
          name: "微信",
        },
        {
          url: "https://files.codelife.cc/topsearch/Jb0vmloB1G.png",
          name: "百度",
        },
        {
          url: "https://files.codelife.cc/topsearch/Q1Vd5Ko85R.png",
          name: "36氪",
        },
        {
          url: "https://files.codelife.cc/topsearch/Y2KeDGQdNP.png",
          name: "少数派",
        },
        {
          url: "https://files.codelife.cc/topsearch/5VaobgvAj1.png",
          name: "虎嗅网",
        },
        {
          url: "https://files.codelife.cc/topsearch/74Kvx59dkx.png",
          name: "IT之家",
        },
      ],
      baidu: [
        {
          id: 1,
          title: "践行低碳生活新时尚",
          number: "491.0万",
        },
        {
          id: 2,
          title: "央视公开霹雳15生产车间秀肌肉",
          number: "496.4万",
        },
        {
          id: 3,
          title: "家长吐槽暑假40天孩子开销五六万",
          number: "482.1万",
        },
        {
          id: 4,
          title: "这个夏日 消费活力激荡",
          number: "474.4万",
        },
        {
          id: 5,
          title: "高铁站近9成是按摩椅？工作人员回应",
          number: "463.4万",
        },
        {
          id: 6,
          title: "宝宝参加婚礼被亲一脸口红印",
          number: "450.4万",
        },
        {
          id: 7,
          title: "植物人父亲用尽全力给儿子盖被子",
          number: "441.1万",
        },
        {
          id: 8,
          title: "女生餐馆吃饭一抬头发现店家全午睡",
          number: "439.2万",
        },
        {
          id: 9,
          title: "山东一门店爆炸相邻银行损毁严重",
          number: "429.3万",
        },
        {
          id: 10,
          title: "男子游泳时徒手抓到1米大鱼",
          number: "411.6万",
        },
        {
          id: 11,
          title: "双预警！十余省份将有大暴雨",
          number: "408.1万",
        },
        {
          id: 12,
          title: "女子在海边被男孩袭胸",
          number: "385.2万",
        },
        {
          id: 13,
          title: "中药价格持续上涨 喝一天要100元",
          number: "380.3万",
        },
      ],
      qingqi: [
        {
          id: 1,
          title: "一家造车独角兽宣布破产",
          number: "",
        },
        {
          id: 2,
          title: "IPhone 15就这？我劝你还是别等了",
          number: "",
        },
        {
          id: 3,
          title: "以阿里CEO的名义，张勇交出在位最后一份财报",
          number: "",
        },
        {
          id: 4,
          title: "月薪3万，撑不起孩子的暑假",
          number: "",
        },
        {
          id: 5,
          title: "30岁后重读本科，花光嫁妆，没后悔过",
          number: "",
        },
        {
          id: 6,
          title: "45岁王小川，再造一个'搜狗'",
          number: "",
        },
        {
          id: 7,
          title: "40天开销五六万，家长的暑假'烧钱'大战还没结束",
          number: "",
        },
        {
          id: 8,
          title: "《乐队的夏天》不在的三年里，一个能打的都没有",
          number: "",
        },
      ],
      pai: [
        {
          id: 1,
          title: "一句话完成繁琐操作：你可以实时的8个",
          number: "科学心情下2",
        },
        {
          id: 2,
          title: "书到用时方恨少？书写笔记时如何做到旁证博引",
          number: "雯子",
        },
        {
          id: 3,
          title: "社区速递007|买过的【洋垃圾】、平板的代码合作者的新玩意",
          number: "Matrix机器人",
        },
        {
          id: 4,
          title: "派评 | 近期值得关注的App",
          number: "少数派编辑部",
        },
        {
          id: 5,
          title: "一入直列深似海，旁人不会用磁盘：Planck配列键盘使用心得",
          number: "炜智能",
        },
        {
          id: 6,
          title: "我为了重拾对生活的【掌控感】，我做了一款iOS应用",
          number: "Ankisan",
        },
        {
          id: 7,
          title: "本周看什么|最近值得一看的9部作品",
          number: "少数派编辑部",
        },
        {
          id: 8,
          title: "AI降临————个人笔记的黄昏？",
          number: "人性睿",
        },
        {
          id: 9,
          title: "小风扇常见，但可以降温的【高速吹风机】你不妨一试",
          number: "Microhoo",
        },
        {
          id: 10,
          title: "新玩意156 | 少数派的的编辑们最近买了啥？",
          number: "少数派编辑部",
        },
        {
          id: 11,
          title: "硬件有价数据无价，从零搭建NAS数据备份系统",
          number: "千里之家",
        },
        {
          id: 12,
          title: "社区速递006| 拟物设计的剪辑应用，Arc之魅力以及散步路线",
          number: "Matrix机器人",
        },
        {
          id: 13,
          title: "Apple那些经典的【One More Thing】现在怎样了",
          number: "Voyager_1",
        },
      ],
      hu: [
        {
          id: 1,
          title: "是什么拖垮了碧桂园",
          number: "55.2万",
        },
        {
          id: 2,
          title: "小龙虾“刺客”救不了预制菜",
          number: "26.9万",
        },
        {
          id: 3,
          title: "东北洪灾太惨了，可能还没完",
          number: "87.8万",
        },
        {
          id: 4,
          title: "数字游民：那一线城市工资，我在老家嘎嘎乱杀",
          number: "23.1万",
        },
        {
          id: 5,
          title: "多少人在过着二手化的生活？",
          number: "19.1万",
        },
        {
          id: 6,
          title: "实探雅安“致命”鱼鳞坝：7条生命是如何被夺走的",
          number: "172万",
        },
        {
          id: 7,
          title: "年轻人的婚姻止于备婚期",
          number: "16.8万",
        },
        {
          id: 8,
          title: "数学不好，别买中国车",
          number: "57.3万",
        },
        {
          id: 9,
          title: "户籍门槛，正在'消失'？",
          number: "50.7万",
        },
        {
          id: 10,
          title: "'拉闸'新东方：互联网机会主义者狂欢",
          number: "16.2万",
        },
        {
          id: 11,
          title: "在真正的东南亚，钱不值钱，命也不值钱",
          number: "14.1万",
        },
        {
          id: 12,
          title: "电信诈骗，怎样骗走我100万",
          number: "13.7万",
        },
        {
          id: 13,
          title: "吴京也救不了《巨齿鲨2》",
          number: "",
        },
      ],
      Itzhijia: [
        {
          id: 1,
          title: "小米高管：小米平板6Man'PC级'灯芯特性无法'下放'至旧机型",
          number: "548评",
        },
        {
          id: 2,
          title: "苹果iPhone 15机模上手：收窄边框，改用Action按钮和User-c端口",
          number: "232评",
        },
        {
          id: 3,
          title: "电影《孤注一掷》上映5天，总票房破15亿",
          number: "180评",
        },
        {
          id: 4,
          title: "华为声明：不对外经营房地产业务",
          number: "255评",
        },
        {
          id: 5,
          title: "小米手环8Pro预热：续航最长14天，升级'双通道检测模组'",
          number: "157评",
        },
        {
          id: 6,
          title:
            "中国铁路回应'高铁短途票难买'：短途票敞开出售会挤占长途旅客票额",
          number: "157评",
        },
        {
          id: 7,
          title: "在国外被吹上天的游戏，在国内确实反向平平，什么原因",
          number: "88评",
        },
        {
          id: 8,
          title: "小米MI Fold 3手机拥有双长焦：3.2X人像镜头+5X潜望式长焦",
          number: "152评",
        },
        {
          id: 9,
          title: "全球变暖时代已经结束，现在时全球沸腾时代，有这么夸张吗",
          number: "163评",
        },
        {
          id: 10,
          title: "苹果A17仿生处理器跑分曝光：但和成绩相较A16提升高达31%",
          number: "129评",
        },
        {
          id: 11,
          title: "开启预售3天后，领克08新车订单突破1万台：9月8日上市",
          number: "113评",
        },
        {
          id: 12,
          title: "消息称王军已回归华为车BU：负责战略规划，年初曾被停职",
          number: "55评",
        },
      ],
      mathc: [
        {
          url: "https://files.codelife.cc/topsearch/KqndgxeLl9.png",
          name: "微博",
        },
        {
          url: "https://files.codelife.cc/topsearch/mproPpoq6O.png",
          name: "知乎",
        },
        {
          url: "https://files.codelife.cc/topsearch/WnBe01o371.png",
          name: "微信",
        },
        {
          url: "https://files.codelife.cc/topsearch/Jb0vmloB1G.png",
          name: "百度",
        },
        {
          url: "https://files.codelife.cc/topsearch/DpQvNABoNE.png",
          name: "抖音",
        },
      ],
      dou: [
        {
          id: 1,
          title: "孙杨妈妈说儿子演的太坏了",
          number: "959.6万",
        },
        {
          id: 2,
          title: "贵州村超vs香港明星足球对",
          number: "944.6万",
        },
        {
          id: 3,
          title: "暑假国内旅游人数将超过13亿人次",
          number: "944.3万",
        },
        {
          id: 4,
          title: "孤注一掷诈骗工程选址原型",
          number: "913.9万",
        },
        {
          id: 5,
          title: "吴艳妮回应被质疑当网红",
          number: "911.0万",
        },
        {
          id: 6,
          title: "第8号台风多啦生成",
          number: "900.7万",
        },
        {
          id: 7,
          title: "摄影师拍到红色精灵闪电",
          number: "844.6万",
        },
        {
          id: 8,
          title: "孤注一掷解密高薪骗局",
          number: "822.1万",
        },
        {
          id: 9,
          title: "祝绪丹迷糊得像吃了毒蘑菇",
          number: "880.6万",
        },
        {
          id: 10,
          title: "被查医院书记院长已有176位",
          number: "869.5挖宝",
        },
        {
          id: 11,
          title: "中国男篮49分惨败德国",
          number: "859.6万",
        },
      ],
    };
  },
};
