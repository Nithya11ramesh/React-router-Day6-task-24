

const CyberSecurity = () => {
  const courses=[
    {
      Title:"Blockchain",
      featuresImg1:"https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg",
      Description:"4126 Enrolled",
      Duration:"4Hrs",
    },
    {
        Title:"Cyber security training employees",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3czbMPo9QCRhWevMreUxeuuSOS7yj5jjyw&s",
        Description:"2126 Enrolled",
        Duration:"6Hrs",
    },
    {
      Title:"Cyber Security",
      featuresImg1:"https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595842.jpg?t=st=1718344790~exp=1718348390~hmac=717523723d38dd3c79efb14fdbae91b8de34caf4283237a6180b1ec27dcfcea6&w=740",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
    {
      Title:"Cyber Security-Advanced",
      featuresImg1:"https://storage.needpix.com/rsynced_images/cyber-security-1784985_1280.png",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
  ]
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-between">
        {
            courses.map((e,id)=>(
              <div className="col-lg-3 mt-5 col-sm-6 "key={id} >
              <div className="card h-100" style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} >
                <img src={(`${e.featuresImg1}`)} alt="" className="card-img-top" />
              <div className="card-body">
                <h3>{e.Title}</h3>
                <hr></hr>
                <p><i className="fa-solid fa-users"aria-hidden="true"></i> {e.Description}</p>
                <p><i className="fa fa-hourglass" aria-hidden="true"></i> {e.Duration} </p>
               
                <label>Language: </label>  
                <select name="language" id="language">
                  <option value="Tamil">Tamil</option>
                  <option value="English">English</option>
                  <option value="Malayalam">Malayalam</option>
                  
                </select>
                </div></div>
          </div>
          
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity