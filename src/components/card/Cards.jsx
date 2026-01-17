import React from 'react'
import Card from './Card'
import CardButton from './CardButton'

const Cards = () => {
  
const courses = [
  {
  
    title: "Data Science and Analytics with GenAI",
    language: "HINGLISH",
    price: 6999,
    
    discountPercent: 53,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-Image_2_QUZ-yb_0T.jpeg"
  },
  {
   
    title: "2.0 Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    language: "HINGLISH",
    price: 5999,
    
    discountPercent: 50,
    discountLabel: "Early Bird Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/Cohort%202.0/cohort-3_ekZjBiRzc-2_76HU4-Mz5z.jpeg?updatedAt=1757741949621"
  },
  {
    
    title: "DSA Domination Cohort",
    language: "HINGLISH",
    price: 6600,
   
    discountPercent: 12,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg"
  },
  {
    
    title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    language: "HINGLISH",
    price: 5999,
  
    discountPercent: 50,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-IMG_5100_7vO7pODI9.JPG"
  },
  {
   
    title: "Three.js Domination",
    language: "HINDI",
    price: 2499,
 
    discountPercent: 29,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg"
  },
  {
  
    title: "Java & DSA Domination",
    language: "HINGLISH",
    price: 4999,
   
    discountPercent: 50,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-javaas_Large_jY0Wighav__6PygWBZQ.jpeg"
  },
  {
 
    title: "Aptitude & Reasoning for Campus Placements",
    language: "HINGLISH",
    price: 1100,
    
    discountPercent: 45,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/undefined-apti_reasoning_45vyAnZ4y.jpeg"
  },
  {
   
    title: "Front-End Domination: Create Anything with Code",
    language: "HINDI",
    price: 3999,
   
    discountPercent: 60,
    discountLabel: "Limited Time Discount",
    imgUrl: "https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg"
  }
];


  return (
    <div className='text-white font-[HalveticaLigh] p-5   justify-evenly flex  flex-wrap gap-5' >
        
        {courses.map(function(course,idx){
          return <div>
          <Card key={idx} course={course}/>
          <CardButton/>
          </div>
        })}
        
      
    </div>
  )
}

export default Cards