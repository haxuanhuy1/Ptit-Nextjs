interface Prop {
    name : string
    name2 : string
    name3 : string
}
function Icons({name , name2, name3}){
    return(
        <div>
           <i className={name}></i>  
           <i className={name2}></i>
           <i className={name3}></i>
        </div>
    )
}
export default Icons;
