"use client"
import clsx from 'clsx';
import Styles from './Footer.module.scss'
import {Button , UncontrolledTooltip} from 'reactstrap'
const Footer = ()=>{
    return (
       <div className={clsx(Styles.footer)}>
 <div className={clsx("row", Styles.footer1)}>
  <div className="col-md-4">
    <h2 style={{color: 'red'}}>ĐĂNG KÍ</h2>
    <span style={{color: '#fff'}}>LÁI THỬ MIỄN PHÍ CÁC DÒNG XE MERCEDES-BENZ</span>
  </div>
  <div className={clsx("col-md-8", Styles.colmd)}>
  <div className="row">
  <div className="col">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className={clsx("form-label", Styles.formlabel)}>Họ và tên:</label>
    <input type="email" className={clsx("form-control" ,Styles.formcontrol)} id="email" placeholder="Họ và tên" name="email"/>
  </div>
  </div>
  <div className="col">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className={clsx("form-label", Styles.formlabel)}>Số điện thoại:</label>
    <input type="email" className={clsx("form-control" ,Styles.formcontrol)} id="email" placeholder="Số điện thoại" name="email"/>
  </div>
  </div>
  <div className="w-100"></div>
  <div className="col">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className={clsx("form-label", Styles.formlabel)}>Địa chỉ email:</label>
    <input type="email" className={clsx("form-control" ,Styles.formcontrol)} id="email" placeholder="Địa chỉ email" name="email"/>
  </div></div>
  <div className="col">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className={clsx("form-label", Styles.formlabel)}>Dòng xe lái thử:</label>
    <input type="email" className={clsx("form-control" ,Styles.formcontrol)} id="email" placeholder="Dòng xe lái thử" name="email"/>
  </div>
  </div>
</div>
<div className={clsx("text-center" , Styles.text)}>
  <Button className={clsx(Styles.button)} id="ScheduleUpdateTooltip">
    Click me
  </Button>
  <UncontrolledTooltip
    placement="top"
    target="ScheduleUpdateTooltip"
    trigger="click"
  />
</div>
 
  </div>
 </div>
 
  </div>






   
        )
}
export default Footer;