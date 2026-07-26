import workDailySoyPrep from '../assets/work-daily-soy-prep.jpg';
import workDailyStubbleCultch from '../assets/work-daily-stubble-cultch.jpg';
import workDailyPowerHarrow from '../assets/work-daily-power-harrow.jpg';
import workDailyVideo from '../assets/IMG_daizu_topcon.mov';
import newVideo from '../assets/IMG_202507190849460.MOV';
import workDailyDoronn from '../assets/work-daily-doronn.jpg';
import workDailyDaizuhasyu from '../assets/work-daily-daizuhasyu.jpg';
import workDailyDroneAerial from '../assets/work-daily-drone-aerial.mp4';
import workDailyInekariFields from '../assets/work-daily-inekari-fields.jpg';
import workDailyInekariCombine from '../assets/work-daily-inekari-combine.jpg';
import workDailyFleconShipping from '../assets/work-daily-flecon-shipping.jpg';
import workDailyWaterSupply from '../assets/work-daily-water-supply.mp4';
import workDailyTillingCab from '../assets/work-daily-tilling-cab.jpg';
import workDailyDiscHarrow from '../assets/work-daily-disc-harrow.jpg';
import workDailySprayerField from '../assets/work-daily-sprayer-field.jpg';
import workDailyRobotMower from '../assets/work-daily-robot-mower.mp4';

export const dailyEntries = [
  {
    type: 'video',
    src: workDailyDroneAerial,
    alt: '夕暮れの圃場の空撮',
    caption: 'ドローンで撮った夕暮れの吉良町。この広い景色ぜんぶが、私たちの仕事場です。'
  },
  {
    type: 'video',
    src: workDailyWaterSupply,
    orientation: 'portrait',
    alt: '除草剤散布の給水作業',
    caption:
      '除草剤の散布は2人ひと組。タンク1000Lでちょうど1ヘクタール分、40分ほどで空になるので、その間に水を運びます。'
  },
  {
    type: 'image',
    src: workDailySprayerField,
    orientation: 'portrait',
    alt: '乗用管理機での除草剤散布',
    caption:
      '運んだ水は、この乗用管理機で撒きます。広い圃場を端から端まで、まっすぐ進んでいきます。'
  },
  {
    type: 'video',
    src: workDailyRobotMower,
    orientation: 'portrait',
    alt: 'リモコン式の草刈機による畦畔の草刈り',
    caption:
      '夏の畦畔はリモコン式の草刈機の出番。斜面に人が立たなくて済むので、暑い時期の負担がぐっと減りました。'
  },
  {
    type: 'image',
    src: workDailyTillingCab,
    orientation: 'portrait',
    alt: '運転席から見た荒起こし',
    caption: '荒起こしの一場面。運転席から見ると、起こした土と手つかずの草地の境目がよく分かります。'
  },
  {
    type: 'image',
    src: workDailyDiscHarrow,
    orientation: 'portrait',
    alt: '作業機で土を起こしているところ',
    caption: '後ろの作業機を気にしながら進みます。土の状態を見て、深さや速度をその都度変えています。'
  },
  {
    type: 'image',
    src: workDailySoyPrep,
    alt: '大豆の圃場準備',
    caption: '大豆の圃場準備。表面を整えて、次の作業に入りやすくします。'
  },
  {
    type: 'image',
    src: workDailyStubbleCultch,
    alt: 'スタブルカルチ作業',
    caption: 'スタブルカルチで土を起こす作業。圃場の状態を見ながら進めます。'
  },
  {
    type: 'image',
    src: workDailyPowerHarrow,
    alt: 'パワーハロー作業',
    caption: 'パワーハローで播種前の土を細かく整えます。'
  },
  {
    type: 'video',
    src: workDailyVideo,
    alt: '大豆圃場の作業動画',
    caption: '大豆圃場での作業。Topconの自動操舵を使っています。'
  },
  {
    type: 'video',
    src: newVideo,
    alt: '自社RTK基地局',
    caption: '自社RTK基地局を使った圃場測量。作業の精度を上げるための準備です。'
  },
  {
    type: 'image',
    src: workDailyDoronn,
    alt: 'ドローン',
    caption: 'ドローンを使った確認作業。広い圃場も上から状態を見られます。'
  },
  {
    type: 'image',
    src: workDailyDaizuhasyu,
    alt: '大豆の播種',
    caption: '大豆の播種作業。天気と土の状態を見ながら進めています。'
  },
  {
    type: 'image',
    src: workDailyInekariFields,
    alt: '秋の稲刈り',
    caption: '秋晴れの稲刈り。コンバイン2台で、町の田んぼを順番に刈り進めていきます。'
  },
  {
    type: 'image',
    src: workDailyInekariCombine,
    alt: '稲刈りを終えたコンバイン',
    caption: '今年の稲刈りが無事終了。一年がんばってくれたコンバインに感謝です。'
  },
  {
    type: 'image',
    src: workDailyFleconShipping,
    alt: 'フレコンでの出荷作業',
    caption: '収穫したお米はフレコンに詰めて出荷。ここから食卓への旅が始まります。'
  }
];
