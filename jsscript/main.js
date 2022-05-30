'use strict'
{
  //
  ////    ↓オブジェクト↓    /////
  //オブジェクト内のキーデータオブジェクト
  const keyObj = {
    names: "値段のキーオブジェクトと祝呪判定後の文字列",
    Skai:  "祝福"   , kai:  ""     , Nkai:  "封印" , Suri:  "祝福"   , uri:  ""     , Nuri:  "封印" , 
    Skai7: "[7]祝福", kai7: "[7]", Nkai7: "[7]封印", Suri7: "[7]祝福", uri7: "[7]", Nuri7: "[7]封印",
    Skai6: "[6]祝福", kai6: "[6]", Nkai6: "[6]封印", Suri6: "[6]祝福", uri6: "[6]", Nuri6: "[6]封印",
    Skai5: "[5]祝福", kai5: "[5]", Nkai5: "[5]封印", Suri5: "[5]祝福", uri5: "[5]", Nuri5: "[5]封印",
    Skai4: "[4]祝福", kai4: "[4]", Nkai4: "[4]封印", Suri4: "[4]祝福", uri4: "[4]", Nuri4: "[4]封印",
    Skai3: "[3]祝福", kai3: "[3]", Nkai3: "[3]封印", Suri3: "[3]祝福", uri3: "[3]", Nuri3: "[3]封印",
    Skai2: "[2]祝福", kai2: "[2]", Nkai2: "[2]封印", Suri2: "[2]祝福", uri2: "[2]", Nuri2: "[2]封印",
    Skai1: "[1]祝福", kai1: "[1]", Nkai1: "[1]封印", Suri1: "[1]祝福", uri1: "[1]", Nuri1: "[1]封印",
    Skai0: "[0]祝福", kai0: "[0]", Nkai0: "[0]封印", Suri0: "[0]祝福", uri0: "[0]", Nuri0: "[0]封印",
  };
  const keyObjName = {
    names0: 0, names1: 1, names2: 2, names3: 3, names4: 4, names5: 5, names6: 6, names7: 7, names8: 8, names9: 9, names10: 10, names11: 11, names12: 12, names13: 13, names14: 14, names15: 15, 
  };
    //腕輪データ
    const udewa = {
      udewa1: {
        names0: "VIP腕輪",
        Skai: 55000, kai: 50000, Nkai: 40000, Suri: 19250, uri: 17500, Nuri: 14000,
      },
      udewa2: {
        names0: "鑑定師の腕輪", names1:"透視の腕輪", names2:"マタギの腕輪", names3:"無心の腕輪",
        Skai: 33000, kai: 30000, Nkai: 24000, Suri: 11550, uri: 10500, Nuri: 8400,
      },
      udewa3: {
        names0: "しあわせの腕輪", names1:"時たたずの腕輪", names2:"弾きよけの腕輪", names3:"浮遊の腕輪",
        Skai: 11000, kai: 10000, Nkai: 8000, Suri: 3850, uri: 3500, Nuri: 2800,
      },
      udewa4: {
        names0: "裏道の腕輪", names1:"回復の腕輪", names2:"壁抜けの腕輪", names3:"気配察知の腕輪", names4:"気配察血の腕輪", names5:"高飛びの腕輪", names6:"道具感知の腕輪", names7:"道具感血の腕輪", names8:"ノナリーの腕輪", names9:"爆発の腕輪", names10:"水グモの腕輪",
        Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
      },
      udewa5: {
        names0: "混乱よけの腕輪",names1: "睡眠よけの腕輪",names2: "痛恨の腕輪",names3: "透ネ見の腕輪",names4: "毒消しの腕輪",names5: "呪いよけの腕輪",names6: "保持の腕輪",names7: "呪い師の腕輪",names8: "魔物呼びの腕輪",names9: "ワナの腕輪",
        Skai: 3300, kai: 3000, Nkai: 2400, Suri: 1155, uri: 1050, Nuri: 840,
      },
      udewa6: {
        names0: "遠投の腕輪", names1: "ちからの腕輪", names2: "武器束ねの腕輪", names3: "ヘタ投げの腕輪",
        Skai: 2200, kai: 2000, Nkai: 1600, Suri: 770, uri: 700, Nuri: 560,
      },
    };
    //草データ
    const kusa = {
      kusa1: {
        names0: "超不幸の種", names1: "天使の種",
        Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
      },
      kusa2: {
        names0: "忌火起草", names1: "しあわせ草", names2: "不幸の種", names3: "無敵草", names4: "物忘れの草",
        Skai: 2200, kai: 2000, Nkai: 1600, Suri: 770, uri: 700, Nuri: 560,
      },
      kusa3: {
        names0: "やりなおし草", names1: "やりなおせ草",
        Skai: 1650, kai: 1500, Nkai: 1200, Suri: 577, uri: 525, Nuri: 420,
      },
      kusa4: {
        names0: "腹活の草", names1: "復活の草",
        Skai: 1100, kai: 1000, Nkai: 800, Suri: 385, uri: 350, Nuri: 280,
      },
      kusa5: {
        names0: "命の草", names1: "狂戦士の種", names2: "睡眠草", names3: "ちからの草", names4: "ドラコン草", names5: "ドラゴン草",
        Skai: 550, kai: 500, Nkai: 400, Suri: 192, uri: 175, Nuri: 140,
      },
      kusa6: {
        names0: "胃拡張の種", names1: "胃縮小の種", names2: "混乱草", names3: "すばやさ草", names4: "成長の種", names5: "ぬぐすり草", names6: "パワーアップ草", names7: "めぐすり草", names8: "目つぶし草",
        Skai: 330, kai: 300, Nkai: 240, Suri: 115, uri: 105, Nuri: 84,
      },
      kusa7: {
        names0: "いやし草",
        Skai: 220, kai: 200, Nkai: 160, Suri: 77, uri: 70, Nuri: 56,
      },
      kusa8: {
        names0: "弟切草", names1: "高飛び草", names2: "毒消し草", names3: "毒草",
        Skai: 110, kai: 100, Nkai: 80, Suri: 38, uri: 35, Nuri: 28,
      },
      kusa9: {
        names0: "薬草", names1: "楽草",
        Skai: 55, kai: 50, Nkai: 40, Suri: 18, uri: 17, Nuri: 14,
      },
      kusa10: {
        names0: "雑草",
        Skai: 11, kai: 10, Nkai: 8, Suri: 3, uri: 3, Nuri: 2,
      },
    };
    //巻物データ
    const makimono = {
      makimono1: {
        names0: "ねだやしの巻物",
        Skai: 11000, kai: 10000, Nkai: 8000, Suri: 3850, uri: 3500, Nuri: 2800,
      },
      makimono2: {
        names0: "白紙の巻物",
        Skai: 5500, kai: 5000, Nkai: 4000, Suri: 1925, uri: 1750, Nuri: 1400,
      },
      makimono3: {
        names0: "金滅の巻物", names1: "聖域の巻物", names2: "全滅の巻物", names3: "迷子の巻物",
        Skai: 3300, kai: 3000, Nkai: 2400, Suri: 1155, uri: 1050, Nuri: 840,
      },
      makimono4: {
        names0: "枝回復の巻物", names1: "オーラ消しの巻物", names2: "国った時の巻物", names3: "困った時の巻物", names4: "混乱の巻物", names5: "真空斬りの巻物", names6: "昼夜の巻物", names7: "敵加速の巻物", names8: "バクスイの巻物", names9: "バクチの巻物", names10: "魔物部屋の巻物", names11: "予防の巻物", names12: "技回復の巻物",
        Skai: 1100, kai: 1000, Nkai: 800, Suri: 385, uri: 350, Nuri: 280,
      },
      makimono5: {
        names0: "くちなしの巻物", names1: "ゾワゾワの巻物", names2: "ひきよせの巻物", names3: "拾えずの巻物", names4: "水がれの巻物", names5: "ワナ消しの巻物", names6: "ワナの巻物",
        Skai: 880, kai: 800, Nkai: 640, Suri: 308, uri: 280, Nuri: 224,
      },
      makimono6: {
        names0: "夫の恵みの巻物", names1: "おにぎりの巻物", names2: "おはらいの巻物", names3: "換金の巻物", names4: "祝福の巻物", names5: "吸い出しの巻物", names6: "タグの巻物", names7: "たたりの巻物", names8: "タダの巻物", names9: "他の恵みの巻物", names10: "地の恵みの巻物", names11: "壺増犬の巻物", names12: "壺増大の巻物", names13: "天の恵みの巻物", names14: "メッキの巻物",
        Skai: 550, kai: 500, Nkai: 400, Suri: 192, uri: 175, Nuri: 140,
      },
      makimono7: {
        names0: "いかすしの巻物", names1: "集合の巻物", names2: "道具寄せの巻物",
        Skai: 330, kai: 300, Nkai: 240, Suri: 115, uri: 105, Nuri: 84,
      },
      makimono8: {
        names0: "識別の巻物",
        Skai: 220, kai: 200, Nkai: 160, Suri: 77, uri: 70, Nuri: 56,
      },
      makimono9: {
        names0: "あかりの巻物", names1: "オイルの巻物", names2: "紹介状", names3: "召介状", names4: "脱出の巻物", names5: "光の巻物",
        Skai: 110, kai: 100, Nkai: 80, Suri: 38, uri: 35, Nuri: 28,
      },
      makimono10: {
        names0: "ただの紙切れ", names1: "ぬれた巻物",
        Skai: 11, kai: 10, Nkai: 8, Suri: 3, uri: 3, Nuri: 2,
      },
      ...kusa,
    };
    //杖データ
    const tue = {
      tue1: {
        names0: "しあわせの杖", names1: "しわよせの杖", names2: "土塊の杖", names3: "トンネルの杖", names4: "不幸の杖", 
        Skai6: 2574, kai6: 2340, Nkai6: 1872, Suri6: 900, uri6: 819, Nuri6: 655,
        Skai5: 2475, kai5: 2250, Nkai5: 1800, Suri5: 865, uri5: 787, Nuri5: 629,
        Skai4: 2376, kai4: 2160, Nkai4: 1728, Suri4: 831, uri4: 756, Nuri4: 604,
      },
      tue2: {
        names0: "身伐わりの杖", names1: "封印の杖", names2: "身代わりの杖", 
        Skai6: 2145, kai6: 1950, Nkai6: 1560, Suri6: 750, uri6: 682, Nuri6: 545,
        Skai5: 2062, kai5: 1875, Nkai5: 1500, Suri5: 721, uri5: 656, Nuri5: 524,
        Skai4: 1980, kai4: 1800, Nkai4: 1440, Suri4: 693, uri4: 630, Nuri4: 504,
      },
      tue3: {
        names0: "感電の杖", names1: "盛電の杖", 
        Skai6: 1716, kai6: 1560, Nkai6: 1248, Suri6: 600, uri6: 546, Nuri6: 436,
        Skai5: 1650, kai5: 1500, Nkai5: 1200, Suri5: 577, uri5: 525, Nuri5: 420,
        Skai4: 1584, kai4: 1440, Nkai4: 1152, Suri4: 554, uri4: 504, Nuri4: 403,
      },
      tue4: {
        names0: "痛み分けの杖", names1: "転ばぬ先の杖", names2: "ただの杖", names3: "ワナ消しの杖", 
        Skai7: 1336, kai7: 1215, Nkai7: 972, Suri7: 467, uri7: 425, Nuri7: 340,
        Skai6: 1287, kai6: 1170, Nkai6: 936, Suri6: 449, uri6: 409, Nuri6: 327,
        Skai5: 1237, kai5: 1125, Nkai5: 900, Suri5: 432, uri5: 393, Nuri5: 314,
      },
      tue5: {
        names0: "一時しのぎの杖", names1: "かなしばいの杖", names2: "かなしばりの杖", names3: "転ばぬ先生の杖", 
        Skai6: 1287, kai6: 1170, Nkai6: 936, Suri6: 449, uri6: 409, Nuri6: 327,
        Skai5: 1237, kai5: 1125, Nkai5: 900, Suri5: 432, uri5: 393, Nuri5: 314,
        Skai4: 1188, kai4: 1080, Nkai4: 864, Suri4: 415, uri4: 378, Nuri4: 302,
      },
      tue6: {
        names0: "飛びつきの杖", names1: "場所がえの杖", names2: "吹き飛ばしの杖", names3: "魔道の杖", 
        Skai7: 891, kai7: 810, Nkai7: 648, Suri7: 311, uri7: 283, Nuri7: 226,
        Skai6: 858, kai6: 780, Nkai6: 624, Suri6: 300, uri6: 273, Nuri6: 218,
        Skai5: 825, kai5: 750, Nkai5: 600, Suri5: 288, uri5: 262, Nuri5: 209,
      },
      tue7: {
        names0: "加速の杖", names1: "鈍足の杖", 
        Skai6: 858, kai6: 780, Nkai6: 624, Suri6: 300, uri6: 273, Nuri6: 218,
        Skai5: 825, kai5: 750, Nkai5: 600, Suri5: 288, uri5: 262, Nuri5: 209,
        Skai4: 792, kai4: 720, Nkai4: 576, Suri4: 277, uri4: 252, Nuri4: 201,
      },
    };
  
    //壺データ
    const tubo = {
      tubo1: {
        names0: "強イヒの壺", names1: "福寄せの壺", names2: "厄寄せの壺", 
        Skai5: 13750, kai5: 12500, Nkai5: 10000, Suri5: 4812, uri5: 4375, Nuri5: 3500,
        Skai4: 13200, kai4: 12000, Nkai4: 9600, Suri4: 4620, uri4: 4200, Nuri4: 3360,
        Skai3: 12650, kai3: 11500, Nkai3: 9200, Suri3: 4427, uri3: 4025, Nuri3: 3220,
      },
      tubo2: {
        names0: "強化の壺", names1: "弱化の壺", 
        Skai3: 12650, kai3: 11500, Nkai3: 9200, Suri3: 4427, uri3: 4025, Nuri3: 3220,
        Skai2: 12150, kai2: 11000, Nkai2: 8800, Suri2: 4235, uri2: 3850, Nuri2: 3080,
      },
      tubo3: {
        names0: "合成の壺", 
        Skai5: 8250, kai5: 7500, Nkai5: 6000, Suri5: 2887, uri5: 2625, Nuri5: 2100,
      },
      tubo4: {
        names0: "クラインの壺", names1: "背中の壺", names2: "トドの壺", names3: "魔物の壺", 
        Skai5: 4812, kai5: 4375, Nkai5: 3500, Suri5: 1684, uri5: 1531, Nuri5: 1224,
        Skai4: 4620, kai4: 4200, Nkai4: 3360, Suri4: 1617, uri4: 1470, Nuri4: 1176,
        Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
      },
      tubo5: {
        names0: "笑いの壺", 
        Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
        Skai2: 4235, kai2: 3850, Nkai2: 3080, Suri2: 1481, uri2: 1347, Nuri2: 1077,
      },
      tubo6: {
        names0: "乙女の祈りの壺", 
        Skai3: 4427, kai3: 4025, Nkai3: 3220, Suri3: 1548, uri3: 1408, Nuri3: 1126,
      },
      tubo7: {
        names0: "冷えびえ香の壺", names1: "身かわし香の壺", names2: "目配り香の壺", names3: "山彦香の壺", 
        Skai4: 3300, kai4: 3000, Nkai4: 2400, Suri4: 1155, uri4: 1050, Nuri4: 840,
        Skai3: 3162, kai3: 2875, Nkai3: 2300, Suri3: 1106, uri3: 1006, Nuri3: 804,
        Skai2: 3025, kai2: 2750, Nkai2: 2200, Suri2: 1058, uri2: 962,  Nuri2: 769,
      },
      tubo8: {
        names0: "水がめ", 
        Skai5: 2750, kai5: 2500, Nkai5: 2000, Suri5: 962, uri5: 875, Nuri5: 700,
        Skai4: 2640, kai4: 2400, Nkai4: 1920, Suri4: 924, uri4: 840, Nuri4: 672,
        Skai3: 2530, kai3: 2300, Nkai3: 1840, Suri3: 885, uri3: 805, Nuri3: 644,
      },
      tubo9: {
        names0: "乙女の祈りの壺", 
        Skai3: 2530, kai3: 2300, Nkai3: 1840, Suri3: 885, uri3: 805, Nuri3: 644,
      },
      tubo10: {
        names0: "おはらいの壺", names1: "祝福の壺", names2: "たたりの壺", 
        Skai4: 2112, kai4: 1920, Nkai4: 1536, Suri4: 739, uri4: 672, Nuri4: 537,
        Skai3: 2024, kai3: 1840, Nkai3: 1472, Suri3: 708, uri3: 644, Nuri3: 515,
        Skai2: 1936, kai2: 1760, Nkai2: 1408, Suri2: 677, uri2: 616, Nuri2: 492,
      },
      tubo11: {
        names0: "換金の壺", names1: "手封じの壺", names2: "フィーバーの壺", names3: "変化の壺", names4: "変花の壺", names5: "割れない壺", 
        Skai5: 1375, kai5: 1250, Nkai5: 1000, Suri5: 480, uri5: 437, Nuri5: 349,
        Skai4: 1320, kai4: 1200, Nkai4: 960,  Suri4: 462, uri4: 420, Nuri4: 336,
        Skai3: 1265, kai3: 1150, Nkai3: 920,  Suri3: 442, uri3: 402, Nuri3: 321,
      },
      tubo12: {
        names0: "底抜けの壺", 
        Skai4: 1320, kai4: 1200, Nkai4: 960, Suri4: 462, uri4: 420, Nuri4: 336,
        Skai3: 1265, kai3: 1150, Nkai3: 920, Suri3: 442, uri3: 402, Nuri3: 321,
        Skai2: 1210, kai2: 1100, Nkai2: 880, Suri2: 423, uri2: 385, Nuri2: 308,
      },
      tubo13: {
        names0: "識別の壺", names1: "ただの壺", names2: "保存の壺", names3: "やりすごしの壺", names4: "四二鉢", 
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

  const keysObj = Object.keys(keyObj);          //オブジェクトキーを配列に変換
  const keysObjName = Object.keys(keyObjName)   //オブジェクトキーを配列に変換

  const p = [];                                 //<p>生成
  let ide = 0;                                  //初期化フラグ用変数

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

  const tyeck = [];                                  //chekboxの取得
  for (let i = 0; i <= 173; i++){
    tyeck[i] = document.getElementById(`tyeck${i}`);       //
  }                                                        //chekboxの取得 


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
  function Datakeysan(e, data, Obj, Objchek){//{e イベント} {data p[]、text[]のナンバー} {Obj オブジェクト名} {Objchek 表示チェック}
    e.preventDefault();
    const Objs = Object.keys(Obj);    //アイテムのオブジェクトを配列に変換
    if(ide > 0){
      for (let i = 1; i <= ide; i++){
        console.log(ide);
        p[i].remove();       //ｐタグ初期化
      }
    }
    ide = 0;           //初期化フラグ用変数
    Objs.forEach(key1 => {            //アイテムそれぞれの繰り返し
      keysObj.forEach(key2 => {       //アイテム内の祝福封印の繰り返し
        if (text[data].value === `${Obj[key1][key2]}`) {    //値段判定
            keysObjName.forEach(key3 => {                     //アイテム名前の繰り返し
              if(Obj[key1][key3] === undefined){} else {        //ナンバー無の振り落とし
                ide++;
                p[ide] = document.createElement("p");        //pタグ生成
                for (let i = 0; i <= 173; i++){
                  if(tyeck[i].checked){
                  }else if(Obj[key1][key3] === tyeck[i].value){
                    p[ide].textContent += Obj[key1][key3];       //アイテム名格納 Obj[][]でアイテム名指定
                    p[ide].textContent += keyObj[key2];          //祝福、封印、回数の格納
                    Objchek.appendChild(p[ide]);                 //ｐタグ出力場所指定
                    console.log(`${ide}`);
                  }
                }
              }
            });
        }
      });
    });
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

  bottton[0].addEventListener("click", e => Datakeysan(e, 0, iteme, divid0));
  bottton[1].addEventListener("click", e => Datakeysan(e, 1, udewa, divid1));
  bottton[2].addEventListener("click", e => Datakeysan(e, 2, makimono, divid2));
  bottton[3].addEventListener("click", e => Datakeysan(e, 3, tubo, divid3));
  bottton[4].addEventListener("click", e => Datakeysan(e, 4, tue, divid4));
  

  ///
  /////    ↑メインクリックイベント↑      /////
  ///
  /////   ↓入力ボタンのクリックイベント   /////
  for(let ie=0; ie <= 4 ; ie++){
    for(let i=0; i <= 11 ; i++){
      if(i === 10){
        outdate[i].addEventListener("click", () => {
          text[ie].value = "";
        });
      }else if(i === 11){
        outdate[i].addEventListener("click", (e) => Datakeysan(e, 0, iteme, divid0));          //メインクリックイベント全てクリックボタンイベント
      }else{
        outdate[i].addEventListener("click", () => {text[ie].value += i;}); //入力ボタンイベント
      }
    }
  }

  ///
  ////    ↓pの出力場所指定↓      /////
  // divid0.appendChild(p[0]);
  // divid1.appendChild(p[1]);
  // divid2.appendChild(p[2]);
  // divid3.appendChild(p[3]);
  // divid4.appendChild(p[4]);
  ////      window.       ////
  window.addEventListener("resize", () => {
    moveSlides();
  });
  ////    ↑イベント↑    ////


////
// チェックボックス
////
// console.log(tyeck[0].value);
// console.log(tyeck[0].checked);



////
// タブメニュー
////
  const mentItems = document.querySelectorAll(".ment li a");
  const contents = document.querySelectorAll(".contentg");
  mentItems.forEach(clickedItem => {
    clickedItem.addEventListener("click", ei =>{
      ei.preventDefault();

      mentItems.forEach(item => {
        item.classList.remove("act");
      });
      clickedItem.classList.add("act");
      contents.forEach(contentg => {
        contentg.classList.remove("act");
      });
      document.getElementById(clickedItem.dataset.id).classList.add("act");

    });



  });



}