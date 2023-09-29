var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            //此处修改字体颜色,最后的 0 和 1 不要改
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "|"; // 此处是末尾字符,如果想用光标样式可以改为"|"
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    //此处改成你自己的诗词
    wordList = [ 
            "且乐生前一杯酒，何须身后千载名？",
            "金樽清酒斗十千，玉盘珍羞直万钱。",
            "一曲新词酒一杯，去年天气旧亭台。",
            "对酒当歌，人生几何！",
            "醉翁之意不在酒，在乎山水之间也。",
            "为君持酒劝斜阳，且向花间留晚照。",
            "尘世难逢一笑，况有紫萸黄菊，堪插满头归。",
            "携壶酌流霞，搴菊泛寒荣。",
            "黄花本是无情物，也共先生晚节香。",
            "西风酒旗市，细雨菊花天。",
            "若对黄花孤负酒，怕黄花、也笑人岑寂。",
            "吾生如寄，尚想三径菊花丛。",
            "绮席象床寒玉枕，美人何处醉黄花。",
            "朗月清风，浓烟暗雨，天教憔悴度芳姿。",
            "黄菊开时伤聚散。曾记花前，共说深深愿。",
            "天若不爱酒，酒星不在天。",
            "愁肠已断无由醉，酒未到，先成泪。",
            "两人对酌山花开，一杯一杯复一杯。",
            "痛饮狂歌空度日，飞扬跋扈为谁雄。",
            "遥知湖上一樽酒，能忆天涯万里人。",
            "新丰美酒斗十千，咸阳游侠多少年。",
            "春日宴，绿酒一杯歌一遍。",
            "一壶酒，一竿身，快活如侬有几人。",
            "兰陵美酒郁金香，玉碗盛来琥珀光。",
            "葡萄美酒夜光杯，欲饮琵琶马上催。",
            "绿蚁新醅酒，红泥小火炉。",
            "松花酿酒，春水煎茶。",
            "遇酒且呵呵，人生能几何！",
            "把酒祝东风。且共从容。",
            "翠葆参差竹径成。新荷跳雨泪珠倾。",
            "西风稍急喧窗竹，停又续，腻脸悬双玉。",
            "凭栏久，黄芦苦竹，拟泛九江船。",
            "迸箨分苦节，轻筠抱虚心。",
            "先生名利比尘灰，绿竹青松手自栽。",
            "枝上柳绵吹又少。天涯何处无芳草。",
            "求得人间成小会，试把金尊傍菊丛。",
            "虽惭老圃秋容淡，且看黄花晚节香。",
            "菊花信待重阳久，桂子香闻上界留。",
            "头上尽教添白发，鬓边不可无黄菊。",
            "离愁不管人飘泊。年年孤负黄花约。",
            "故乡篱下菊，今日几花开。",
            "秋菊有佳色，裛露掇其英。",
            "竹叶于人既无分，菊花从此不须开。",
            "菊暗荷枯一夜霜。新苞绿叶照林光。",
            "今日暂同芳菊酒，明朝应作断蓬飞。",
            "更待菊黄家酝熟，共君一醉一陶然。",
            "遥怜故园菊，应傍战场开。",
            "山远翠眉长。高处凄凉。菊花清瘦杜秋娘。",
            "飒飒西风满院栽，蕊寒香冷蝶难来。",
            "黄菊枝头生晓寒。人生莫放酒杯干。",
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));