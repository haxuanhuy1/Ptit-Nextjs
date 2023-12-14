// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '@fortawesome/fontawesome-svg-core/styles.css';
"use client"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Styles from './Header.module.scss'
import clsx from 'clsx'
import Icons from '../Icons/Icons';
import {useState} from 'react'
import Seach from '../seach/Seach';
import {useDispatch , useSelector} from 'react-redux'
import { useEffect} from 'react';
const Header = ()=>{
    interface rootSeach {
        id : number,
        payload : boolean
    }
    interface Mer {

    }
    const Logo = './img/logo.png'
    // const [posts, setPosts] = useState();
//  async function Api(){
//     const respon = await fetch(`http://localhost:3001/Mercerdes`)
//     const data = await respon.json()
//     setPosts(data)
//  }     
// useEffect(()=>{
//     Api()
// },[])
// useEffect(()=>{
//   const fetchData = async ()=>{
//     const response = await fetch(`http://localhost:3001/Mercerdes?q=GLC`)
//     const data2 = await response.json()
//     console.log(data2)
//   }
//    fetchData()
// }, [])
   const [seach , setSeach] = useState(false)
   const handSeach = ()=>{
    if(seach){
        setSeach(false)
    }else {
        setSeach(true)
    }
   }
    return(
        <div>
            <div className={clsx(Styles.icons)}>
                <div className={clsx(Styles.icon1)}>
                <Icons  name2='fa-solid fa-phone' />
                <p> Holine: 0945938362</p>
                </div>
                <div className={clsx(Styles.icon1)} style={{paddingLeft: '25px'}}>
                <Icons name = 'fa-regular fa-clock' />
                <p>Thứ 2-Thứ 6 8h30-16h30</p>
                </div>
            </div>
            <div className={clsx(Styles.lists)}>
         <img  src={Logo} className={clsx(Styles.logo)} />
         
         <ul className={clsx(Styles.list)}>
           <li>
           <a>GIỚI THIỆU</a>
           </li>
           <li><a>BẢNG GIÁ XE</a></li>
           <li>
            <a>XE MỚI</a>
            {/* <ul>
              <li><a>S-Class</a></li>
              <li><a>C-Class</a></li>
              <li><a>E-Class</a></li>
              <li><a>GLC</a></li>
              <li><a>GLS</a></li>
    </ul> */}
            </li>
           <li><a>MERCERDES-EQ</a></li>
           <li><a>XE CŨ</a></li>
           <li><a>THƯ VIỆN ẢNH</a></li>
           <li><a>TIN TỨC</a></li>
         </ul>
            {/* <i style={{lineHeight:'100px', paddingRight: '100px'}} className="fa-solid fa-magnifying-glass"></i> */}
            <div onClick={handSeach} style={{lineHeight: '100px', paddingRight: '80px'}}>
            <Icons name3 = "fa-solid fa-magnifying-glass" />
            </div>
            {seach ? <Seach /> : null}
            
            </div>
        </div>
    )
}
export default Header