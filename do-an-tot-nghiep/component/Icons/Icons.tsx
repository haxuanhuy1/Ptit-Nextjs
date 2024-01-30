interface Prop {
    name : string
    name2 : string
    name3 : string
}
function Icons({name , name2, name3, name4, name5, name6}){
    return(
        <div>
           <i className={name}></i>  
           <i className={name2}></i>
           <i className={name3}></i>
           <i className={name4}></i>
           <i className={name5}></i>
           <i className={name6}></i>
        </div>
    )
}
export default Icons;
