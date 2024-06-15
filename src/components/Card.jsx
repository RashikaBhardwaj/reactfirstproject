function Card(){
    // let title = "Rashika"
    // let para =" I am Rashika Bhardwaj currently pursuing a Fullstack developer course."
    let count =2
    let items=[{title:"Rashi",para:"hello everyone"},{title:"Rashika",para:"hello  to everyone"}]
return(
    <>
    {items.map((item,index)=>(
<div className="card" style={{ width: "18rem" }}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyAu9u59YBF9QdKRjaDLc2j3crpxxIR4U5g&s" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{item.title}</h5>
  <p className="card-text">
   {item.para}
  </p>
  <a href="#" className="btn btn-primary">
    Go somewhere
  </a>
</div>
</div>

    ))}

    </>
)
}
export default Card