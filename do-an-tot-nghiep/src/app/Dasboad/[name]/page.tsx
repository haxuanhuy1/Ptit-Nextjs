
"use client"
import {useState , useEffect} from 'react';
import Header from '../../../../component/Header/Header';
import clsx from 'clsx'
import Styles from './name.module.scss'
import Example from '../../../../component/bostraps/Course';
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
    return(
        <div className={clsx(Styles.Name)}>
           
            <div style={{borderBottom: '3px solid #ccc'}}>
   <Header />
            </div>
        <div className={clsx(Styles.Name2)}>
  <div className="row">
  <div className={clsx("col-sm" , Styles.row2)}>
    {params.name == 1 ? <Example /> : null}
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
    <input type="number" min="0" max="100" />


  </div>
</div>       
    </div>
        </div>
    )
}
export default About;
