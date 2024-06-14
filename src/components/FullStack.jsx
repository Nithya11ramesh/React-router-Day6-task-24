/* eslint-disable no-unused-vars */
import React from 'react'

const FullStack = () => {

  const courses=[
    {
      Title:"HTML & CSS",
      featuresImg1:"https://img.freepik.com/premium-photo/programming-web-pages-with-html-css-code-desktop-computer_671359-114.jpg",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
    {
      Title:"JavaScript",
      featuresImg1:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
      Description:"2196 Enrolled",
      Duration:"7Hrs",
    },
   
    {
      Title:"JavaScript Advanced",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplyu-rILMIaKhSihUMbqrTTXseXvpJnJ_A&s",
      Description:"3589 Enrolled",
      Duration:"8Hrs",
    },
    {
      Title:"React for Beginners",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HmySqfFGq7I8CeHAGrPF0p9cOjj6UAnTOQ&s",
      Description:"2126 Enrolled",
      Duration:"7Hrs",
    },
    {
      Title:"Advanced React",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyvRGfzL4Z1sF9ipw637NnbL2nK5Y9sx8Jg&s",
      Description:"2126 Enrolled",
      Duration:"4Hrs",
    },
    {
        Title:"MY SQL",
        featuresImg1:"https://www.shutterstock.com/image-photo/mysql-inscription-against-laptop-code-260nw-1929760871.jpg",
        Description:"2714 Enrolled",
        Duration:"3Hrs",
      },
      {
        Title:"MongoDB",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TQvA69HAHtHym43p3_bt0Kmh-7shcjRMJA&s",
        Description:"1945 Enrolled",
        Duration:"3Hrs",
      },
    {
      Title:"NodeJS",
      featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYqtlZ8hRs-1a_Wdsa-x-rSmWNxNNiaJCaA&s",
      Description:"2026 Enrolled",
      Duration:"4Hrs",
    },
    {
      Title:"ExpressJs",
      featuresImg1:"https://i.ytimg.com/vi/0QRFOsrBtXw/maxresdefault.jpg",
      Description:"2436 Enrolled",
      Duration:"4Hrs",
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
                  <option value="Malayam">Malayam</option>
                 
                  
                </select>
                </div>
                    </div>
          </div>
          
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FullStack