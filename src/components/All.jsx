const All = () => {
    const courses=[
      {
        Title:"JavaScript for Beginners",
        featuresImg1:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
        Description:"1234 Enrolled",
        Duration:"6Hrs",
      },
      {
        Title:"HTML & CSS",
        featuresImg1:"https://img.freepik.com/premium-photo/programming-web-pages-with-html-css-code-desktop-computer_671359-114.jpg",
        Description:"2123 Enrolled",
        Duration:"7Hrs",
      },
      {
        Title:"MY SQL",
        featuresImg1:"https://www.shutterstock.com/image-photo/mysql-inscription-against-laptop-code-260nw-1929760871.jpg",
        Description:"2114 Enrolled",
        Duration:"3Hrs",
      },
      {
        Title:"JavaScript Advanced",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplyu-rILMIaKhSihUMbqrTTXseXvpJnJ_A&s",
        Description:"5632 Enrolled",
        Duration:"8Hrs",
      },
      {
        Title:"React for Beginners",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HmySqfFGq7I8CeHAGrPF0p9cOjj6UAnTOQ&s",
        Description:"2568 Enrolled",
        Duration:"7Hrs",
      },
      {
        Title:"Advanced React",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyvRGfzL4Z1sF9ipw637NnbL2nK5Y9sx8Jg&s",
        Description:"2126 Enrolled",
        Duration:"4Hrs",
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
      {
        Title:"MongoDB",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TQvA69HAHtHym43p3_bt0Kmh-7shcjRMJA&s",
        Description:"1945 Enrolled",
        Duration:"3Hrs",
      },
     
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
      {
        Title:"R Programming",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F-Tax3tCVq-3T4qGuxfTMMe1XPNyQRiJ_g&s",
        Description:"19126 Enrolled",
        Duration:"6Hrs",
      },
      {
        Title:"Blockchain",
        featuresImg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFeTmev_jlEGu4l1kGf6S7Lz6osYtvObKHA&s",
        Description:"4126 Enrolled",
        Duration:"4Hrs",
      },
      {
        Title:"Ethical Hacking",
        featuresImg1:"https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
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
      {
        Title:"Career Opportunities",
        featuresImg1:"https://thumbs.dreamstime.com/z/career-opportunities-motivation-business-success-corporate-concept-110446016.jpg?ct=jpeg",
        Description:" Trusted by200+ companies",
        Duration:"PayPal,JusPay,chargbee,scapic",
      },
      
    ]
    return (
      <div>
       
        <div className="container">
          <div className="row d-flex justify-content-between">
            {
              courses.map((e,id)=>(
                <div className="col-xl-3 mt-5 col-sm-6 "key={id} >
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
                 <div className="d-grid">
                    </div>
                </div></div>
                
          </div>
          
            ))
          }
        </div>
      </div>
    </div>
  )
}





  export default All