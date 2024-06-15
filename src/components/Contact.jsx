function Contact (){
    let handleForm =(event)=>{
        console.log(event);
    };
    return(
        <>
        <form action="" onClick={handleForm()}>
        <>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Example textarea
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>
</>
<div>
    <button type="submit">submit</button>
</div>
        </form>
        </>
    )
}
export default Contact;