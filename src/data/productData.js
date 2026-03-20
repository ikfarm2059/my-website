import riceImage from '../assets/rice.jpg';
import wheatImage from '../assets/wheat.jpg';
import soyImage from '../assets/soy.jpg';

const productData = [
  {
    name: '稲作',
    description: '約100haの広大な土地で、太陽の光をたっぷり浴びた美味しいお米を育てています。',
    image: riceImage,
    alt: '稲作',
    animationClass: 'rice-animation'
  },
  {
    name: '麦',
    description: '品質にこだわった麦を約100haの規模で栽培。様々な加工品へと姿を変えます。',
    image: wheatImage,
    alt: '麦',
    animationClass: 'wheat-animation'
  },
  {
    name: '大豆',
    description: '栄養豊富な大豆を約100haの圃場で生産。日本の食卓に欠かせない食材です。',
    image: soyImage,
    alt: '大豆',
    animationClass: 'soy-animation'
  }
];

export default productData;
