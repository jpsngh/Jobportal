const jobs = [
    {
        image:"https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/24/google-+-logo-png/colorful-google-logo-design-on-transparent-png-similar-png.png",
        company:"Google",
        field:"Data Science",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:"Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :"50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com"
        
        
    },
    {
        image:"data:image/png;base64,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",
        company:"Twitter",
        field:"Web Developer",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :" 50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com"

    },
    {
        image:"https://signsalad.com/wp-content/uploads/2021/11/Screenshot-2021-11-03-at-12.14.11.png",
        company:"Meta",
        field:"Machine Science",
        desc:"Tik Tok team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:[<li> Masters degree in Computer Science, Information Systems, related technical field, or equivalent practical experience    3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation,  3 years of experience analyzing data, working with SQL and databases",</li>],
        location:"Toronto",
        posted :" 2 days ago",
        applicants:"25",
        link:"https://www.linkedin.com"
  

    },
   {
        image:"https://cdn5.vectorstock.com/i/1000x1000/70/34/linkedin-logo-icon-image-vector-37037034.jpg",
        company:"LinkedIn",
        field:"Recuriter",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :" 50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com"
  

    },
{
        image:"https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/24/google-+-logo-png/colorful-google-logo-design-on-transparent-png-similar-png.png",
        company:"Twitter",
        field:"Data Science",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :" 50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com"
  

    }, {
        image:"https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297.jpg",
        company:"Microsoft",
        field:"Full Stack Developer",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :" 50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com",
  

    }, {
        image:"https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png",
        company:"TCS",
        field:"Software Developer",
        desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
        qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
        location:"Toronto",
        posted :" 50 mins ago",
        applicants:"20",
        link:"https://www.linkedin.com",
        
    }

]

export default jobs

