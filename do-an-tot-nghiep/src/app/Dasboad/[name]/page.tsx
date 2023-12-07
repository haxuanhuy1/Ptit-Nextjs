interface Props3 {
    name : string
}
export default function About({name}:Props3){
    console.log(name)
    return(
        <div>
      <h1>{name}</h1>
        </div>
    )
}