import React from 'react'

export const CamProgress = (props) => {
  let name, description, price
  switch(props.item_no) {
    case '22_female':
      name = '包包';
      description = '男朋友送的CHARLES & KEITH';
      price = '¥439';
      break;
    case '26_female':
      name = '化妆品';
      description = 'SK-II 嫩肤清莹露';
      price = '¥560';
      break;
    case '30_female':
      name = '贵妇化妆品';
      description = 'LA MER/海蓝之谜 精华面霜';
      price = '¥1999';
      break;
    case 'old_female':
      name = '带娃必备';
      description = '虎妈战歌';
      price = '¥58';
      break;
    case '22_male':
      name = '游戏机';
      description = '我爱PS4';
      price = '¥3200';
      break;
    case '24_male':
      name = '篮球鞋';
      description = 'JORDAN';
      price = '¥1499';
      break;
    case '28_male':
      name = '婚房';
      description = '六个钱包的万科翡翠滨江';
      price = '¥1.8 亿';
      break;
    case 'old_male':
      name = '中年必备';
      description = '还贷还要保重身体';
      price = '¥55';
      break;
  }
  return (
  <div className="cam_progress">
    <div className="cam_progress__top">
      <div className="album-info">
        <div className="album-info__name">{name}</div>
        <div className="album-info__track">{description}</div>
      </div>
      <div className="cam_progress__duration">{price}</div>
    </div>
  </div>
  )
}
