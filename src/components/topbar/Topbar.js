import './topbar.scss'
import { Phone, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
   return (
      <div className={'topbar ' + (menuOpen && "active")} // this is to receive the state status and set the class to active
      >
         <div className="wrapper">
            <div className="left">
               <a href="#intro" className='logo'>brent.</a>
               <div className="itemContainer">
                  <Phone className='icon'/>
                  <span>0414 733 121</span>
               </div>
               <div className="itemContainer">
                  <Mail className='icon'/>
                  <span>silvio.brntn@gmail.com</span>
               </div>
            </div>
            
            <div className="right">
               <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}//on click function to toggle the active status
               >
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                  </div>            
            </div>
         </div>
      </div>
   )
}
