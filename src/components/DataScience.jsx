
const DataScience = () => {
  const courses=[
    {
      Title:"Machine Learning 101",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcn3Xn1l5E6gkH5YYc3BNEKIXYij9IOJb0w&s",
      Description:"81263 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"Data Analytics Using Pandas",
      featuresImg1:"https://learnerbits.com/wp-content/uploads/2023/10/data-analysis-1024x576.webp",
      Description:"21263 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"Data Engineering ",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbwpP_3Nn95JyxYzPrQRqb4OhStEzvq2MTA&s",
      Description:"2126 Enrolled",
      Duration:"5Hrs",
    },
    {
      Title:"Bigdata",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvlh1HWdBCti_mHcaucD1BIifwvn11tvRGw&s",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
    {
      Title:"Datascience",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpR1U0keRG0FrwQGTCD68xyTyEAdS-GlbbBA&s",
      Description:"5126 Enrolled",
      Duration:"10Hrs",
    },
    
  ]
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-between">
        {
            courses.map((e,id)=>(
              <div className="col-lg-3 col-sm-6 mb-4 "key={id} >
              <div className="card h-100" style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} >
              <img src={(`${e.featuresImg1}`)} alt="" className="card-img-top" />
              <div className="card-body">
                <h3>{e.Title}</h3>
                <hr></hr>
                <p><i className="fa-solid fa-users"aria-hidden="true"></i> {e.Description}</p>
                <p><i className="fa fa-hourglass" aria-hidden="true"></i> {e.Duration} </p>
                <label>Language:</label>
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

export default DataScience