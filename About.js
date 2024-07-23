import React, { Component } from 'react'
import profile from "./Port.js/pics/vamshi.jpeg"
export default class About extends Component {
  render() {
    return (
      <div className='container p-5 port'>
        <div className='row'>
      <div className='col-lg-6'>
      <img src={profile} className='w-50'></img>
      <p>MERN Stack Developer with 8 Months of Internship Experience 
        Introduction Vamshi is an aspiring software developer with 8 months of hands-on internship experience in the MERN stack, a popular JavaScript stack used for building dynamic web applications. The MERN stack includes MongoDB, Express.js, React, and Node.js, each playing a crucial role in creating a full-stack application.</p>
        <p>Internship Experience
        During the 8-month internship, Vamshi worked on various projects that provided a deep understanding of both front-end and back-end development. This period involved practical application of theoretical knowledge, enhancing problem-solving skills, and learning industry best practices.</p>
      </div>
      <div className='col-lg-6'>
      <p>1.E-commerce Platform Development

Front-End: Developed user interfaces using React, focusing on a responsive and user-friendly design. Implemented Redux for state management to streamline data flow and improve performance.
Back-End: Created RESTful APIs using Node.js and Express.js. Integrated MongoDB for managing product inventories, user data, and transactions.
Deployment: Deployed the application on a cloud platform, ensuring scalability and reliability.</p>
<p>2.Social Media Application

Front-End: Built interactive features such as user profiles, friend lists, and real-time messaging using React and Socket.io.
Back-End: Set up a robust server using Express.js and Node.js. Utilized MongoDB to handle user data, posts, and interactions securely and efficiently.
Authentication: Implemented authentication and authorization using JWT (JSON Web Tokens) to secure user data and sessions.</p>
      </div>
        </div>
        
      </div>
    )
  }
}
