'use strict'
{
  //
  ////    ↓オブジェクト↓    /////
  //オブジェクト内のキーデータオブジェクト
  const keyObj = {
    names: "値段のキーオブジェクトと祝呪判定後の文字列",
    Skai:  "、祝福。"   , kai:  "。"     , Nkai:  "、封印。" , Suri:  "、祝福。"   , uri:  "。"     , Nuri:  "、封印。" , 
    Skai7: "、[7]祝福。", kai7: "、[7]。", Nkai7: "、[7]封印", Suri7: "、[7]祝福。", uri7: "、[7]。", Nuri7: "、[7]封印",
    Skai6: "、[6]祝福。", kai6: "、[6]。", Nkai6: "、[6]封印", Suri6: "、[6]祝福。", uri6: "、[6]。", Nuri6: "、[6]封印",
    Skai5: "、[5]祝福。", kai5: "、[5]。", Nkai5: "、[5]封印", Suri5: "、[5]祝福。", uri5: "、[5]。", Nuri5: "、[5]封印",
    Skai4: "、[4]祝福。", kai4: "、[4]。", Nkai4: "、[4]封印", Suri4: "、[4]祝福。", uri4: "、[4]。", Nuri4: "、[4]封印",
    Skai3: "、[3]祝福。", kai3: "、[3]。", Nkai3: "、[3]封印", Suri3: "、[3]祝福。", uri3: "、[3]。", Nuri3: "、[3]封印",
    Skai2: "、[2]祝福。", kai2: "、[2]。", Nkai2: "、[2]封印", Suri2: "、[2]祝福。", uri2: "、[2]。", Nuri2: "、[2]封印",
    Skai1: "、[1]祝福。", kai1: "、[1]。", Nkai1: "、[1]封印", Suri1: "、[1]祝福。", uri1: "、[1]。", Nuri1: "、[1]封印",
    Skai0: "、[0]祝福。", kai0: "、[0]。", Nkai0: "、[0]封印", Suri0: "、[0]祝福。", uri0: "、[0]。", Nuri0: "、[0]封印",
  };
  //腕輪データ
  const udewa = {
    udewa1: {
      names: "VIP腕輪",
      Skai: 55000, kai: 50000, Nkai: 40000, Suri: 19250, uri: 17500, Nuri: 14000,
    },
    udewa2: {
      names: "鑑定師の腕輪、透視の腕輪、マタギの腕輪、無心の腕輪",
      Skai: 33000, kai: 30000, Nkai: 24000, Suri: 11550, uri: 10500, Nuri: 8400,
    },
    udewa3: {
      names: "しあわせの腕輪、時たたずの腕輪、弾きよけの腕輪、浮遊の腕輪",
      Skai: 11000, kai: 10000, Nkai: 8000, Suri: 3850, uri: 3500, Nuri: 2800,
    },
    udewa4: {
      names: "裏道、回復、壁抜け、気配察知、気配察血、高飛び、道具感知、道具感血、ノナリー、爆発、水グモの腕輪",
      Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
    },
    udewa5: {
      names: "混乱よけ、睡眠よけ、痛恨、透ネ見、毒消し、呪いよけ、保持、呪い師、魔物呼び、ワナの腕輪",
      Skai: 3300, kai: 3000, Nkai: 2400, Suri: 1155, uri: 1050, Nuri: 840,
    },
    udewa6: {
      names: "遠投の腕輪、ちからの腕輪、武器束ねの腕輪、ヘタ投げの腕輪",
      Skai: 2200, kai: 2000, Nkai: 1600, Suri: 770, uri: 700, Nuri: 560,
    },
  };
  //草データ
  const kusa = {
    kusa1: {
      names: "超不幸の種、天使の種",
      Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
    },
    kusa2: {
      names: "忌火起草、しあわせ草、不幸の種、無敵草、物忘れの草",
      Skai: 2200, kai: 2000, Nkai: 1600, Suri: 770, uri: 700, Nuri: 560,
    },
    kusa3: {
      names: "やりなおし草、やりなおせ草",
      Skai: 1650, kai: 1500, Nkai: 1200, Suri: 577, uri: 525, Nuri: 420,
    },
    kusa4: {
      names: "腹活の草、復活の草",
      Skai: 1100, kai: 1000, Nkai: 800, Suri: 385, uri: 350, Nuri: 280,
    },
    kusa5: {
      names: "命の草、狂戦士の種、睡眠草、ちからの草、ドラコン草、ドラゴン草",
      Skai: 550, kai: 500, Nkai: 400, Suri: 192, uri: 175, Nuri: 140,
    },
    kusa6: {
      names: "胃拡張の種、胃縮小の種、混乱草、すばやさ草、成長の種、ぬぐすり草、パワーアップ草、めぐすり草、目つぶし草",
      Skai: 330, kai: 300, Nkai: 240, Suri: 115, uri: 105, Nuri: 84,
    },
    kusa7: {
      names: "いやし草",
      Skai: 220, kai: 200, Nkai: 160, Suri: 77, uri: 70, Nuri: 56,
    },
    kusa8: {
      names: "弟切草、高飛び草、毒消し草、毒草",
      Skai: 110, kai: 100, Nkai: 80, Suri: 38, uri: 35, Nuri: 28,
    },
    kusa9: {
      names: "薬草、楽草",
      Skai: 55, kai: 50, Nkai: 40, Suri: 18, uri: 17, Nuri: 14,
    },
    kusa10: {
      names: "雑草",
      Skai: 11, kai: 10, Nkai: 8, Suri: 3, uri: 3, Nuri: 2,
    },
  };
  //巻物データ
  const makimono = {
    makimono1: {
      names: "ねだやしの巻物",
      Skai: 11000, kai: 10000, Nkai: 8000, Suri: 3850, uri: 3500, Nuri: 2800,
    },
    makimono2: {
      names: "白紙の巻物",
      Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
    },
    makimono3: {
      names: "金滅の巻物、聖域の巻物、全滅の巻物、迷子の巻物",
      Skai: 3300, kai: 3000, Nkai: 2400, Suri: 1155, uri: 1050, Nuri: 840,
    },
    makimono4: {
      names: "枝回復、オーラ消し、国った時、困った時、混乱、真空斬り、昼夜、敵加速、バクスイ、バクチ、魔物部屋、予防、技回復の巻物",
      Skai: 1100, kai: 1000, Nkai: 800, Suri: 385, uri: 350, Nuri: 280,
    },
    makimono5: {
      names: "くちなし、ゾワゾワ、ひきよせ、拾えず、水がれ、ワナ消し、ワナの巻物",
      Skai: 880, kai: 800, Nkai: 640, Suri: 308, uri: 280, Nuri: 224,
    },
    makimono6: {
      names: "夫の恵み、おにぎり、おはらい、換金、祝福、吸い出し、タグ、たたり、タダ、他の恵み、地の恵み、壺増犬、壺増大、天の恵み、メッキの巻物",
      Skai: 550, kai: 500, Nkai: 400, Suri: 192, uri: 175, Nuri: 140,
    },
    makimono7: {
      names: "いかすしの巻物、集合の巻物、道具寄せの巻物",
      Skai: 330, kai: 300, Nkai: 240, Suri: 115, uri: 105, Nuri: 84,
    },
    makimono8: {
      names: "識別の巻物",
      Skai: 220, kai: 200, Nkai: 160, Suri: 77, uri: 70, Nuri: 56,
    },
    makimono9: {
      names: "あかりの巻物、オイルの巻物、紹介状、召介状、脱出の巻物、光の巻物",
      Skai: 110, kai: 100, Nkai: 80, Suri: 38, uri: 35, Nuri: 28,
    },
    makimono10: {
      names: "あかりの巻物、オイルの巻物、紹介状、召介状、脱出の巻物、光の巻物",
      Skai: 11, kai: 10, Nkai: 8, Suri: 3, uri: 3, Nuri: 2,
    },
    ...kusa,
  };
  //杖データ
  const tue = {
    tue1: {
      names: "しあわせの杖、しわよせの杖、土塊の杖、トンネルの杖、不幸の杖", 
      Skai6: 2574, kai6: 2340, Nkai6: 1872, Suri6: 900, uri6: 819, Nuri6: 655,
      Skai5: 2475, kai5: 2250, Nkai5: 1800, Suri5: 865, uri5: 787, Nuri5: 629,
      Skai4: 2376, kai4: 2160, Nkai4: 1728, Suri4: 831, uri4: 756, Nuri4: 604,
    },
    tue2: {
      names: "身伐わりの杖、封印の杖、身代わりの杖", 
      Skai6: 2145, kai6: 1950, Nkai6: 1560, Suri6: 750, uri6: 682, Nuri6: 545,
      Skai5: 2062, kai5: 1875, Nkai5: 1500, Suri5: 721, uri5: 656, Nuri5: 524,
      Skai4: 1980, kai4: 1800, Nkai4: 1440, Suri4: 693, uri4: 630, Nuri4: 504,
    },
    tue3: {
      names: "感電の杖、盛電の杖", 
      Skai6: 1716, kai6: 1560, Nkai6: 1248, Suri6: 600, uri6: 546, Nuri6: 436,
      Skai5: 1650, kai5: 1500, Nkai5: 1200, Suri5: 577, uri5: 525, Nuri5: 420,
      Skai4: 1584, kai4: 1440, Nkai4: 1152, Suri4: 554, uri4: 504, Nuri4: 403,
    },
    tue4: {
      names: "痛み分けの杖、転ばぬ先の杖、ただの杖、ワナ消しの杖", 
      Skai7: 1336, kai7: 1215, Nkai7: 972, Suri7: 467, uri7: 425, Nuri7: 340,
      Skai6: 1287, kai6: 1170, Nkai6: 936, Suri6: 449, uri6: 409, Nuri6: 327,
      Skai5: 1237, kai5: 1125, Nkai5: 900, Suri5: 432, uri5: 393, Nuri5: 314,
    },
    tue5: {
      names: "一時しのぎの杖、かなしばいの杖、かなしばりの杖、転ばぬ先生の杖", 
      Skai6: 1287, kai6: 1170, Nkai6: 936, Suri6: 449, uri6: 409, Nuri6: 327,
      Skai5: 1237, kai5: 1125, Nkai5: 900, Suri5: 432, uri5: 393, Nuri5: 314,
      Skai4: 1188, kai4: 1080, Nkai4: 864, Suri4: 415, uri4: 378, Nuri4: 302,
    },
    tue6: {
      names: "飛びつきの杖、場所がえの杖、吹き飛ばしの杖、魔道の杖", 
      Skai7: 891, kai7: 810, Nkai7: 648, Suri7: 311, uri7: 283, Nuri7: 226,
      Skai6: 858, kai6: 780, Nkai6: 624, Suri6: 300, uri6: 273, Nuri6: 218,
      Skai5: 825, kai5: 750, Nkai5: 600, Suri5: 288, uri5: 262, Nuri5: 209,
    },
    tue7: {
      names: "加速の杖、鈍足の杖", 
      Skai6: 858, kai6: 780, Nkai6: 624, Suri6: 300, uri6: 273, Nuri6: 218,
      Skai5: 825, kai5: 750, Nkai5: 600, Suri5: 288, uri5: 262, Nuri5: 209,
      Skai4: 792, kai4: 720, Nkai4: 576, Suri4: 277, uri4: 252, Nuri4: 201,
    },
  };

  //壺データ
  const tubo = {
    tubo1: {
      names: "強イヒの壺、福寄せの壺、厄寄せの壺", 
      Skai5: 13750, kai5: 12500, Nkai5: 10000, Suri5: 4812, uri5: 4375, Nuri5: 3500,
      Skai4: 13200, kai4: 12000, Nkai4: 9600, Suri4: 4620, uri4: 4200, Nuri4: 3360,
      Skai3: 12650, kai3: 11500, Nkai3: 9200, Suri3: 4427, uri3: 4025, Nuri3: 3220,
    },
    tubo2: {
      names: "強化の壺、弱化の壺", 
      Skai3: 12650, kai3: 11500, Nkai3: 9200, Suri3: 4427, uri3: 4025, Nuri3: 3220,
      Skai2: 12150, kai2: 11000, Nkai2: 8800, Suri2: 4235, uri2: 3850, Nuri2: 3080,
    },
    tubo3: {
      names: "合成の壺", 
      Skai5: 8250, kai5: 7500, Nkai5: 6000, Suri5: 2887, uri5: 2625, Nuri5: 2100,
    },
    tubo4: {
      names: "クラインの壺、背中の壺、トドの壺、魔物の壺", 
      Skai5: 4812, kai5: 4375, Nkai5: 3500, Suri5: 1684, uri5: 1531, Nuri5: 1224,
      Skai4: 4620, kai4: 4200, Nkai4: 3360, Suri4: 1617, uri4: 1470, Nuri4: 1176,
      Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
    },
    tubo5: {
      names: "笑いの壺", 
      Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
      Skai2: 4235, kai2: 3850, Nkai2: 3080, Suri2: 1481, uri2: 1347, Nuri2: 1077,
    },
    tubo6: {
      names: "乙女の祈りの壺", 
      Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
    },
    tubo7: {
      names: "冷えびえ香の壺、身かわし香の壺、目配り香の壺、山彦香の壺", 
      Skai4: 3300, kai4: 3000, Nkai4: 2400, Suri4: 1155, uri4: 1050, Nuri4: 840,
      Skai3: 3162, kai3: 2875, Nkai3: 2300, Suri3: 1106, uri3: 1006, Nuri3: 804,
      Skai2: 3025, kai2: 2750, Nkai2: 2200, Suri2: 1058, uri2: 962,  Nuri2: 769,
    },
    tubo8: {
      names: "水がめ", 
      Skai5: 2750, kai5: 2500, Nkai5: 2000, Suri5: 962, uri5: 875, Nuri5: 700,
      Skai4: 2640, kai4: 2400, Nkai4: 1920, Suri4: 924, uri4: 840, Nuri4: 672,
      Skai3: 2530, kai3: 2300, Nkai3: 1840, Suri3: 885, uri3: 805, Nuri3: 644,
    },
    tubo9: {
      names: "乙女の祈りの壺", 
      Skai3: 2530, kai3: 2300, Nkai3: 1840, Suri3: 885, uri3: 805, Nuri3: 644,
    },
    tubo10: {
      names: "おはらいの壺、祝福の壺、たたりの壺", 
      Skai4: 2112, kai4: 1920, Nkai4: 1536, Suri4: 739, uri4: 672, Nuri4: 537,
      Skai3: 2024, kai3: 1840, Nkai3: 1472, Suri3: 708, uri3: 644, Nuri3: 515,
      Skai2: 1936, kai2: 1760, Nkai2: 1408, Suri2: 677, uri2: 616, Nuri2: 492,
    },
    tubo11: {
      names: "換金の壺、手封じの壺、フィーバーの壺、変化の壺、変花の壺、割れない壺", 
      Skai5: 1375, kai5: 1250, Nkai5: 1000, Suri5: 480, uri5: 437, Nuri5: 349,
      Skai4: 1320, kai4: 1200, Nkai4: 960,  Suri4: 462, uri4: 420, Nuri4: 336,
      Skai3: 1265, kai3: 1150, Nkai3: 920,  Suri3: 442, uri3: 402, Nuri3: 321,
    },
    tubo12: {
      names: "底抜けの壺", 
      Skai4: 1320, kai4: 1200, Nkai4: 960, Suri4: 462, uri4: 420, Nuri4: 336,
      Skai3: 1265, kai3: 1150, Nkai3: 920, Suri3: 442, uri3: 402, Nuri3: 321,
      Skai2: 1210, kai2: 1100, Nkai2: 880, Suri2: 423, uri2: 385, Nuri2: 308,
    },
    tubo13: {
      names: "識別の壺、ただの壺、保存の壺、やりすごしの壺、四二鉢", 
      Skai5: 825, kai5: 750, Nkai5: 600, Suri5: 288, uri5: 262, Nuri5: 209,
      Skai4: 792, kai4: 720, Nkai4: 576, Suri4: 277, uri4: 252, Nuri4: 201,
      Skai3: 759, kai3: 690, Nkai3: 552, Suri3: 265, uri3: 241, Nuri3: 192,
    },
    
  };
  //合成データ
  const iteme = {
    ...udewa,
    // ...kusa,
    ...makimono,
    ...tue,
    ...tubo,
  };
  //
  //////    ↓定数宣言↓    /////
  //
  const next = document.getElementById("next"); //carousel要素取得
  const prev = document.getElementById("prev");
  const ul = document.querySelector("ul");
  const slides = ul.children;
  let currentIdx = 0;
  const dots = [];                              //carousel要素取得

  const keys0 = Object.keys(iteme);             //オブジェクトキーを配列に変換
  const keys = Object.keys(udewa);
  const keys2 = Object.keys(makimono);
  const keys3 = Object.keys(tubo);
  const tueOb = Object.keys(tue);
  const keysObj = Object.keys(keyObj);          //オブジェクトキーを配列に変換

  const p = [];                                 //<p>生成
  for (let i = 0;i <= 6;i++) {
    p[i] = document.createElement("p");
  };                                            //<p>生成

  const text = [];                                    //text[]取得（入力数値etc...）
  for (let i = 0;i <= 5;i++) {
    text[i] = document.getElementById(`number${i}`);
  };                                                  //text[]取得（入力数値etc...）

  const outdate = [];                             //テンキーボタン取得
  for (let i = 0;i <= 11;i++) {
  outdate[i] = document.getElementById(`d${i}`);
  };                                              //テンキーボタン取得

  const bottton = [];                                   //ボタン取得
  for (let i = 0;i <= 5; i++){
    bottton[i] = document.getElementById(`button${i}`);
  }                                                     //ボタン取得

  const divid0 = document.getElementById("div0");       //出力位置取得
  const divid1 = document.getElementById("div1");
  const divid2 = document.getElementById("div2");
  const divid3 = document.getElementById("div3");
  const divid4 = document.getElementById("div4");       //出力位置取得
  //
  //////    ↓メソッド関数宣言↓    /////
  //
  //繰り返し処理の関数
  function SNurikai(keysss,i){//祝福封印判定メソッド
    keysObj.forEach(key1s =>{
        if(key1s === keysss){
          p[i].textContent += keyObj[key1s]; 
        }
    });
  }
  function tuekei(e) {
    p[4].textContent = "";
    tueOb.forEach(key1 => {
      keysObj.forEach(key2 => {
        e.preventDefault();
        if (text[4].value === `${tue[key1][key2]}`) {
          p[4].textContent += tue[key1].names;
          SNurikai(key2, 4);
        }
      });
    });
  }
  function udewakei(e) {
    p[1].textContent = "";
    keys.forEach(key1 => {
      keysObj.forEach(key2 => {
        e.preventDefault();
        if (text[1].value === `${udewa[key1][key2]}`) {
          p[1].textContent += udewa[key1].names;
          SNurikai(key2, 1);
        }
      });
    });
  }
  function makimonokei(e) {
    p[2].textContent = "";
    keys2.forEach(key1 => {
      keysObj.forEach(key2 => {
        e.preventDefault();
        if (text[2].value === `${makimono[key1][key2]}`) {
          p[2].textContent += makimono[key1].names;
          SNurikai(key2, 2);
        }
      });
    });
  }
  function tubokei(e) {
    p[3].textContent = "";
    keys3.forEach(key1 => {
      keysObj.forEach(key2 => {
        e.preventDefault();
        if (text[3].value === `${tubo[key1][key2]}`) {
          p[3].textContent += tubo[key1].names;
          SNurikai(key2, 3);
        }
      });
    });
  }
  function itemekei(e) {
    p[0].textContent = "";
    keys0.forEach(key1 => {
      keysObj.forEach(key2 => {
        e.preventDefault();
        if (text[0].value === `${iteme[key1][key2]}`) {
          p[0].textContent += iteme[key1].names;
          SNurikai(key2, 0);
        }
      });
    });
  }
  function Enterd(e){
    itemekei(e);
    udewakei(e);
    makimonokei(e);
    tubokei(e);
    tuekei(e);
  }
  //carouselメソッド
  function updateButtons(){
    prev.classList.remove("hidden");
    next.classList.remove("hidden");
    if (currentIdx === 0){
      prev.classList.add("hidden");
    }
    if (currentIdx === slides.length - 1){
      next.classList.add("hidden");
    }
  }
  function moveSlides(){
    const slideWidht = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidht * currentIdx}px)`;
  }
  function setupDots(){
    for (let i = 0; i < slides.length; i++){
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        currentIdx = i;
        updateDBmS();
      });
      dots.push(button);
      document.querySelector("nav").appendChild(button);
    }
    dots[0].classList.add("current");
  }
  function updateDots(){
    dots.forEach(dot => {
      dot.classList.remove("current");
    });
    dots[currentIdx].classList.add("current");
  }
  function updateDBmS(){
    updateDots();
    updateButtons();
    moveSlides();
  }
  //
  //////    ↑メソッド関数宣言↑    /////
  //
  //
  /////    ↓イベント↓    /////
  //
  updateButtons();
  //////    ↓carouselイベント↓    /////
  setupDots();
  next.addEventListener("click", () => {
    currentIdx++;
    updateDBmS();
  });
  prev.addEventListener("click", () => {
    currentIdx--;
    updateDBmS();
  });
  //////    ↑carouselイベント↑    /////

  ////
  /////     ↓メインクリックイベント↓      /////
  ////
  bottton[0].addEventListener("click", e => itemekei(e));
  bottton[1].addEventListener("click", e => udewakei(e));
  bottton[2].addEventListener("click", e => makimonokei(e));
  bottton[3].addEventListener("click", e => tubokei(e));
  bottton[4].addEventListener("click", e => tuekei(e));

  ///
  /////    ↑メインクリックイベント↑      /////
  ///
  /////   ↓入力ボタンのクリックイベント   /////
  for(let ie=0; ie <= 4 ; ie++){
    for(let i=0; i <= 11 ; i++){
      if(i === 10){
        outdate[i].addEventListener("click", () => {
          text[ie].value = "";
          p[ie].textContent =""; });
      }else if(i === 11){
        outdate[i].addEventListener("click", (e) => {Enterd(e);});          //メインクリックイベント全てクリックボタンイベント
      }else{
        outdate[i].addEventListener("click", () => {text[ie].value += i;}); //入力ボタンイベント
      }
    }
  }
 
  ///
  ////    ↓メイン↓      /////
  divid0.appendChild(p[0]);
  divid1.appendChild(p[1]);
  divid2.appendChild(p[2]);
  divid3.appendChild(p[3]);
  divid4.appendChild(p[4]);
  ////      window.       ////
  window.addEventListener("resize", () => {
    moveSlides();
  });
  ////    ↑イベント↑    ////




  


}