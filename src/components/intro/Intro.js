import './intro.scss'

export default function Intro() {
   return (
      <div className='intro' id='intro'>
         <div className="left">
            <div className="imgContainer">
               <img src="assets/thinking-man-miscellaneous-people-necktie-thumbnail.png" alt="" />
            </div>
         </div>
         <div className="right">
            <div className="wrapper">
               <h2>Hi There, I'm</h2>
               <h1>Silvio Brentan</h1>
               <h3>Software<span> Engineer</span></h3>
            </div>
            <a href="#portfolio">
               <img src="assets/arrowDown.jpeg" alt="" / // need to change this for material-ui icon
               >
            </a>
            </div> 
      </div>
   )
}
