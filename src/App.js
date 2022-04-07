import './App.css'
import './motion-ui.css'
import { useState } from 'react'
import M from 'materialize-css'

import 'materialize-css/dist/css/materialize.min.css'

const Carousel = () => {
  return (
    <div className="carousel">
      <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
      <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
      <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
      <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
      <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
    </div>
  )
}
function App() {
  const infoShow = "hinge-in-from-left mui-enter mui-enter-active"
  const infoHide = "hinge-out-from-left mui-leave mui-leave-active"
  const picsShow = "hinge-in-from-right mui-enter mui-enter-active"
  const picsHide = "hinge-out-from-right mui-leave mui-leave-active"
  const [displayMode, setDisplayMode] = useState({val:true,info:infoShow,pics:picsHide})
  const [displayHideInfo, setDisplayHideInfo] = useState("inherit")
  const [displayHidePics, setDisplayHidePics] = useState("hidden")
  const swanger = ({val})=>{
      setTimeout(()=>{
        if(val){
          setDisplayHideInfo("inherit")
          setDisplayHidePics("hidden")
        } else {
          setDisplayHideInfo("hidden")
          setDisplayHidePics("inherit")
        }
      },100)
      return {
        val:val?false:true,
        info:!val?infoShow:infoHide,
        pics:!val?picsHide:picsShow
      }
  }
  const infos = [
    {txt:"Mateusz Kozdrój", ico:"perm_identity"},
    {txt:"609081641", ico:"call", kalbak:(num)=>window.open(`tel:${num}`, '_self')},
    {txt:"kozdrojmateusz86@gmail.com", ico:"mail", linker:`"mailto: kozdrojmateusz86@gmail.com"`},
    {txt:"ul. ks. Fr. Koleboka", ico:"location_on"},
    {txt:"usługi ślusarsko-spawalnicze", ico:"arrow_forward"},
    {txt:"spawanie MIG, MAT, TIG", ico:"arrow_forward"},
    {txt:"cięcie rur", ico:"arrow_forward"},
    {txt:"szlifowanie", ico:"arrow_forward"},
    {txt:"wiercenie", ico:"arrow_forward"},
    {txt:"galeria", ico:"crop_original", kalbak:()=>setDisplayMode(swanger(displayMode))}
  ]

  const Smasher = ({ food }) => {
    return (
      <div className={"wide-box -- "+food.txt} onClick={ food.kalbak ? ()=>food.kalbak(food.txt) : () => null }>
        <i className="small material-icons oranger">{food.ico}</i>
        {
          food.linker ? 
            <a href={food.linker} >
              <p>{food.txt}</p>
            </a> : <p>{food.txt}</p>
        }
      </div>
    )
  }

  return (
    <div className="App">
      <div className={"app "+displayMode.info} style={{"display":displayHideInfo}}>
        <div className="header">
          <div className="header-center-box">
            <div className="header-dummy">
              MK
              <div className="white-line">KOZDRÓJ</div>
            </div>
          </div>
        </div>
        {    infos.map(el=><Smasher food={el} /> )    }
      </div>
      <div className={"app forPics "+displayMode.pics} style={{"display":displayHidePics}}>
        <div className="powrot" onClick={()=>setDisplayMode(swanger(displayMode))}>{`<< powrót`}</div>
        <div className="pictures">
          <img className="picture" src={`${process.env.PUBLIC_URL}/assets/-6006140360026685631.jpg`}/>
          <img className="picture" src={`${process.env.PUBLIC_URL}/assets/IMG_20220406_175717_910.jpg`}/>
          <img className="picture" src={`${process.env.PUBLIC_URL}/assets/IMG_20220406_175739_310.jpg`}/>
          <img className="picture" src={`${process.env.PUBLIC_URL}/assets/IMG_20220406_175755_550.jpg`}/>
        </div>
      </div>
    </div>
  )
}

export default App;
