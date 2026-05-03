import riceImage from '../assets/rice.jpg';
import wheatImage from '../assets/wheat.jpg';
import soyImage from '../assets/soy.jpg';

const productData = [
  {
    name: 'お米',
    description: '毎日の食卓にのぼるものだから、田んぼの状態を見ながら、収穫まで丁寧に管理しています。',
    image: riceImage,
    alt: '収穫したお米',
    animationClass: 'rice-animation'
  },
  {
    name: '麦',
    description: '地域の輪作を支える作物として、時期を見ながら播種、管理、収穫を行っています。',
    image: wheatImage,
    alt: '麦畑',
    animationClass: 'wheat-animation'
  },
  {
    name: '大豆',
    description: '味噌や豆腐など、身近な食べものにつながる作物です。土づくりから収穫まで気を配っています。',
    image: soyImage,
    alt: '大豆',
    animationClass: 'soy-animation'
  }
];

export default productData;
