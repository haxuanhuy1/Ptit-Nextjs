
"use client"
import {useState , useEffect} from 'react';
import Header from '../../../../component/Header/Header';
import clsx from 'clsx'
import Styles from './name.module.scss'
import Example from '../../../../component/bostraps/Course';
import Icons from '../../../../component/Icons/Icons';
import Contracts from '../../../../component/nhap/Nhap';
import C200Color from '../MercerdesC200/C200';
import Link from 'next/link';
import Example2 from '../../../../component/bostraps/Course2';
import C200ExcluColor from '../MerC200Exclu/E200Exclu';
import Example3 from '../../../../component/bostraps/Course3';
import C300ex from '../MercerdesC300/MerC300';
import Motasp from '../MercerdesC300/Motasp';
import Example4 from '../../../../component/bostraps/Course4';
import E200Eclu from '../MercedesE200/MerE200';
import MotaE200 from '../MercedesE200/MotaE200';
import Example5 from '../../../../component/bostraps/Course7';
import Example7 from '../../../../component/bostraps/Course7';
import MerESQ from '../MercedesESQ/MerESQ';
import MotaESQ from '../MercedesESQ/MotaESQ';
interface Props3 {
    params : {name: number
    }
}
const About = ({params}: Props3)=>{
    const [data , setData]= useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:3001/Mercerdes?id=${params.name}`)
            const datas = await response.json();
            setData(datas)
        }
        fetchData()
    }, 
    [])
//  useEffect(() => {
//     console.log(data); // Kiểm tra kiểu dữ liệu của data
//     // if (data && data.id) {
//     //   console.log(data.id);
//     // }

//   }, [data]);
  
    const Logo = './img/logo.png'
   const [contract , setContract] = useState(false)
    const [trues , setTrues] = useState(false)
  const handcolor = {
    color : trues ? 'red': 'blue'
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTrues((prevTrues) => !prevTrues);
    }, 1000);

    // Hủy interval khi component bị unmount để tránh memory leaks
    return () => clearInterval(interval);
  }, []); // useEffec

    // return () => clearInterval(interval); // Hủy interval khi component bị unmount
  const handclick = ()=>{
    setContract(true)
  }
  const Image = [
    ""
  ]
    return(
        <div className={clsx(Styles.Name)}>
           
            <div style={{borderBottom: '3px solid #ccc'}}>
   <Header />
            </div>
        <div className={clsx(Styles.Name2)}>
  <div className="row">
  <div className={clsx("col-sm" , Styles.row2)}>
    {params.name == 1 ? <Example /> : null}
    {params.name ==2 ? <Example2 /> :null  }
    {params.name == 3 ? <Example3 /> : null}
    {params.name == 4 ? <Example4 /> :null}
    {params.name == 7 ? <Example7 /> :null}
  {/* <Example /> */}
  </div>
  
  <div className="col-sm">
    <div>
  {data.map((dele) => (
              <div key={dele.id}>
                <span style={{fontSize: '25px'}}>{dele.name3}</span>
                <p style={{color: 'red'}}>{dele.gia}</p>
                {/* Hiển thị các thành phần khác của phần tử dele tại đây */}
                
              </div>
            ))}
    </div>
    {/* <input type='number'>1</input> */}
    <div>
    <input type="number" min="1" max="100" />
    <span style={{color: "blue", paddingLeft: '10px'}}>Số lượng</span>
    <div className={clsx(Styles.dele)}>
      <div className={clsx(Styles.dele2)}>
      <Icons name5= "fa-solid fa-gift" />
      <span style={handcolor}>THÔNG TIN QUAN TRỌNG KHI MUA XE THÁNG 12/2023</span>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p >Chính sách bán sập sàn chỉ duy nhất trong tháng 12/2023</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p >02 Xuất Ngoại giao giá cực kỳ ưu đãi (*Liên hệ ngay Hotline: 0945.93.86.83 để biết chi tiết)</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p >Tặng gói phụ kiện chính hãng bảo hành 10-15 năm cực giá trị.</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p style={{fontWeight: 'bold'}} >Hỗ trợ trả góp tới 80% giá trị xe, Lãi xuất ưu đãi dành riêng cho đối tác chỉ 0.6%, Hồ sơ xử lý chuyên nghiệp, đơn giản.</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p > Đăng ký biển số HÀ NỘI không cần HỘ KHẨU, Công ty ở tỉnh vẫn lấy được biển số HN.

</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p style={{fontWeight: 'bold'}} > Thu cũ, đổi mới, kí gửi xe đã qua sử dụng chính hãng của Khách Hàng với giá cao hơn thị trường.</p>
      </div>
      <div  style={{display: "flex",paddingTop: "10px"}}>
        <Icons name4 = "fa-solid fa-hand-point-right" />
        <p >Hỗ trợ đấu giá lấy biển VVIP theo ý muốn, chi phí cực rẻ.</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <span style={{fontWeight: 'bold'}}>HOTLINE: 0864418408</span>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px'}}>
      {/* <button type="button" className="btn btn-primary">Yêu cầu báo giá</button>
<button type="button" className="btn btn-secondary">Đăng kí lái thử</button> */}
<button onClick={handclick} type="button" className="btn btn-danger">Yêu cầu báo giá</button>
<Link href="/">
<button type="button" className="btn btn-danger">Đăng kí lái thử</button>
</Link>


      </div>
    </div>
    </div>


  </div>
  {params.name == 3 ? <Motasp /> :null}
  {params.name == 4 ?<MotaE200 />: null}
  {params.name == 7 ? <MotaESQ /> : null}
   <div className={clsx(Styles.bangmau)}>
    
    {params.name ==1 ? <C200Color /> : null}
    {params.name == 2 ? <C200ExcluColor /> : null}
    {params.name ==3 ? <C300ex /> :null }
    {params.name == 4 ? <E200Eclu /> :null}
    
    {/* <div className="row" style={{border: '2px solid #ccc', height: '300px'}}>
    <div className="col-sm-4" style={{ backgroundColor: '#fff', width: '33.33%', borderLeft: "2px solid #ccc" }}>
      33.33%
      <img src=''></img>
      </div>
<div className="col-sm-4" style={{ backgroundColor: '#fff', width: '33.33%',borderLeft: "2px solid #ccc" }}>33.33%</div>
<div className="col-sm-4" style={{ backgroundColor: '#fff', width: '33.33%',borderLeft: "2px solid #ccc" }}>33.33%</div>

    </div> */}
 </div>
</div>       
    </div>
   { contract ? <Contracts /> : null } 
        </div>
    )
}
export default About;
