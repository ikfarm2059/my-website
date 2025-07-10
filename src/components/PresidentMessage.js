import React from 'react';
import president from '../assets/president.jpg';

function PresidentMessage() {
  console.log(president); // これを追加
  return (
    <section id="president" className="section president-section">
      <img src={president} className="president-image" alt="社長" />
      <div className="president-message">
        <h2>代表メッセージ</h2>
        <p>
          私たちは、ただ作物を作るだけでなく、食を通じて人々の暮らしと地域の未来を豊かにすることを目指しています。
          一杯のご飯、一杯の味噌汁が、皆様の笑顔の源となるように。そんな想いを込めて、日々土と向き合っています。
        </p>
      </div>
    </section>
  );
}

export default PresidentMessage;