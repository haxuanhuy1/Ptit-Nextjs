import clsx from 'clsx'
import Styles from './Seach.module.scss'
import {useState , useEffect} from 'react'
import {C200 , C200EvantGarfe , C300,E180,E200,ESQ,E300,Glc200,Glc300,GLS450,
    S450,S450lx,c200cu2018,c200cu2019,e200cu,e200dencu,glc200cu,c250,nhatrang, cantho,hoankiem} from '../../component/Img/Img.tsx'
const Seach = ()=>{
    const [post , setPost] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
          const response = await fetch(`http://localhost:3000/Mercerdes`)
          const data2 = await response.json()
          setPost(data2)
        }
         fetchData()
      }, [])
      useEffect(()=>{
        console.log(post)
      }, [post])
    const handclick = ()=>{
        console.log('Tìm kiếm')
    }
    interface Post1 {
        name: string;
        salary: string;
        id : number;
        giá : string;
        img : string
    }
   
    return (
<div>

<div  className={clsx(Styles.seach)}>

         <nav className="navbar navbar-light bg-light">
  <form className={clsx("form-inline" , Styles.form)}/>
    <input onChange={e => e.target.value} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
</nav>  
{
 post.length >0 ?  <div className={clsx(Styles.seach2)} >
    <div style={{borderBottom: "1px solid #ccc"}}>
    {post.map((post2)=> (
        <div className={clsx(Styles.seach3)}>
            <span>{post2.name2}</span>
            <img style={{width: '100px'}} src={post2.img}></img>
            <p>{post2.gia}</p>
        </div>
        
    ))}
    </div>
    <div>
      
    </div>

    </div> : null
}
</div>
        </div>
    )
}
export default Seach;