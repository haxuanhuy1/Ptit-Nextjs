"use client"
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Styles from './Contracts.module.scss';
import clsx from 'clsx'
const Contracts = () => {
  const [isVisible, setIsVisible] = useState(false);
const [select, setSelect]=  useState('Chọn xe bạn cần')
  const slideInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 2000 },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Đặt thời gian đợi trước khi hiển thị cửa sổ

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
    alert('Thông tin của bạn đã được chúng tôi tiếp nhận, sẽ có nhân viên tư vấn liên hệ đến bạn sớm nhất')
  };
  const bandClick = (opions:string)=>{
    setSelect(opions)
  }

  return (
    <div>
    <animated.div style={slideInAnimation} className={Styles.contract}>

            <form>
  <div className="form-group">
    <span style={{fontSize : '15px'}}>Trong tháng này dòng xe Anh/Chị quan tâm đang được giảm giá rất lớn tiền mặt, ưu đãi tặng kèm full Phụ kiện, bảo hiểm thân vỏ, bảo dưỡng ... Đây là cơ hội lớn để mua sắm xe.</span>
    <p style={{paddingTop: '5px'}}>Form nhận ưu đãi khi mua xe</p>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ tên"/>
   
  </div>

  <div style={{paddingTop: '5px'}} className="form-group">

<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Số điện thoại"/>
</div>
<div style={{display: 'flex'}}>

<div className="dropdown" style={{paddingTop: '10px'}}>
  <button style={{width: '291px'}} type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      {select}
    </button>
  <ul className="dropdown-menu">
    <li><a onClick={()=>{bandClick('Mercerdes C200')}} className="dropdown-item" href="#">Mercerdes C200</a></li>
    <li><a onClick={()=>{bandClick('Mercerdes C300')}}   className="dropdown-item" href="#">Mercerdes C300</a></li>
    <li><a onClick={()=>{bandClick('Mercesdes E200')}} className="dropdown-item" href="#">Mercerdes E200</a></li>
    <li><a onClick={()=>{bandClick('Mercerdes E300')}} className="dropdown-item" href="#">Mercerdes E300</a></li>
    <li><a onClick={()=>{bandClick('Mercerdes S450')}} className="dropdown-item" href="#">Mercerdes S450</a></li>
    <li><a onClick={()=>{bandClick('Mercerdes S500')}} className="dropdown-item" href="#">Mercerdes S500</a></li>
    <li><a onClick={()=>{
     bandClick('Mercerdes S650')
    }} className="dropdown-item" href="#">Mercerdes S650 </a></li>
    <li><a onClick={()=>{bandClick('Mercerdes S650 maybach')}} className="dropdown-item" href="#">Mercerdes S650 Maybach</a></li>
    
  </ul>
</div>

</div>

</form>
<div style={{display: 'flex'}}>

<button  style={{marginTop: '20px', marginLeft: '100px'}} onClick={handleClick} type="button" className="btn btn-primary position-relative">
  Đăng kí
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    Sẵn sàng
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

</div>

    </animated.div>

  </div>
   
  );
};

export default Contracts;