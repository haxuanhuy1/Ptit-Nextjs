import clsx from 'clsx'
import Styles from './Seach.module.scss'
const Seach = ()=>{
    const handclick = ()=>{
        console.log('Tìm kiếm')
    }
    return (

<div  className={clsx(Styles.seach)}>
         <nav className="navbar navbar-light bg-light">
  <form className={clsx("form-inline" , Styles.form)}>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    {/* <button onClick={handclick}  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>   
{/* <button onClick={()=>{console.log('ptit')}}></button> */}
        </div>
    )
}
export default Seach;