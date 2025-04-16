import Header from "./Header";
import Footer from "./Footer";
import '../styles/About.scss';

export default function About() {
  return(
    <>
      <div className="about-container">
        <div className="header">
          <h2>About Me</h2>
          <h3>Welcome to my front end capstone!</h3>
        </div>
        <div className="process">
          <h3>My Process</h3>
          <p>My process for this project was to first create a wireframe of the app using Figma. I then created a list of requirements for the app and started building out the components using React. I also used SCSS for styling and made sure to make it responsive. I first started from the main app component and created routing to each page I would need. Then I created page components and continued working from there. Starting with the basics and then slowly adding more components seems to do the trick nicely. Whenever I ran into an issue I didnt do it alone and either did thorough research, or asked someone with more knowledge then myself to learn new things. This capstone was a ton of fun and I look to make more projects like this in the future.</p>
        </div>
        <div className="challenges">
          <h3>Challenges</h3>
          <p>Some challenges I faced during this project were learning how to use React Router and how to not focus too much on one problem. I also had to learn how to use the API and how to fetch data from it linked here: <a href="https://fakestoreapi.com/docs" target="_blank">Fake Store API</a>. Learning how to style responsively was dificult for this project but in the end I was able to make it work. The biggest challenge overall was getting caught up in the little things. I noticed I often would sit for hours just trying to make a small feature work. The reality is that the bigger project wasnt even complete yet. I realize now that had I worked on the over arching project I wouldnt have been so stuck and rushing to finish it in the end. If I could go back I would learn to take breaks and try to get the bigger picture working first before working out the small kinks. I learned a lot from these challenges and am glad I faced them.</p>
        </div>
        <div className="languages">
          <h3>Python and Javascript</h3>
          <p>My favorite langauges I have learned through this process are python and javascript. IK think for me styling is as much fun and making something that works and works well. Python taught me efficiency and Javascript taught me the beauty of a good user experience. Efficiency is a huge part in my python learning process. I remember doing logic probnlems often to make code that did things. Specifically math related problems were the most interesting. Even if you were able to solve the problem if you couldnt do it efficiently then your computer wouldnt even be able to compute the solution even if it worked. Some of my most fond memories of this were me trying to figure out how to make the code more efficent. When I finally was able to see a solution be computed in under 10 seconds it was a joyful experience. Javascript while it does neeed efficiency it isnt the main point of it. I think the biggest thing that it teaches is user experience. There are so many things HTML, and CSS can't do alone. Click events, drag and drop, and cool animations. I loved making something come to life with javascript rather then it being a static page. This is the main fun of javascript. These are by far my two favorite languages to have learned thus far.</p>
        </div>
      </div>
    </>
  )
}