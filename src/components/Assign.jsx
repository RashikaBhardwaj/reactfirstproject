function  Assign(){
        let count = 3
        let item =[{para:"hello",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMiQT5T4JaTXIRmPDVI2OEHYOsnEKkKKS7Q&s"},{para:"hello eveyone",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiI-TRpi7WDrO2lt6N6EmDLB9_cvjCSKC2Sw&s"},{para:"welcome",img:"https://oshiprint.in/image/product_t/117/thumb-3479.jpg"}]
    return(
        <>
        {item.map((item,index)=>(
      <div className="card" style={{ width: "18rem" }}>
      <img src={item.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {item.para}
        </p>
      </div>
    </div>
    
        ))}
  
        </>
    )
}
export default Assign;