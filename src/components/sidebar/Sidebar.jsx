import "./sidebar.css";
// import axios from "axios";
import { Slider } from '@lifarl/react-scroll-snap-slider';
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import food from "../../Images/nuggets.gif"
import dance from "../../Images/zumba.gif"
import yoga from "../../Images/lotus.gif"
import travel from "../../Images/plane.gif"
import music from "../../Images/headphone.gif"
import Education from "../../Images/book.gif"
import relation from "../../Images/love.gif"
import exercise from "../../Images/deadlift.gif"
import electonics from "../../Images/socket.gif"


export default function Sidebar() {
  // const [cat, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  const slidesPerPageSettings = {
    mobileSmall: 1,
    mobileBig: 2,
    tablet: 3,
    desktop: 4.5,
  }
  return (
    <div className="sidebaritem">
      <span className="sidebartitle"> Scroll to see all categories  </span>
      <div className="bg"></div>

      <Slider slidesPerPageSettings={slidesPerPageSettings}>
      <div className="sliderdiv"><img className="sliderimg" src={dance} alt="dance" /><p><Link to={`/?cat=Dance`} className="link">Dance</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={yoga} alt="yoga" /><p><Link to={`/?cat=Yoga`} className="link">yoga</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={music} alt="music"  /><p><Link to={`/?cat=Music`} className="link">Music</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={travel} alt="travel" /><p><Link to={`/?cat=Travel`} className="link">Travel</Link></p></div>
      <div className="sliderdiv"><img className="sliderimg" src={food} alt="food" /><p><Link to={`/?cat=Food`} className="link">Food</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={exercise} alt="yoga" /><p><Link to={`/?cat=Exercise`} className="link">Exercises</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={Education} alt="Education" /><p><Link to={`/?cat=Education`} className="link">Education</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={relation} alt="realtionships" /><p><Link to={`/?cat=Relationships`} className="link">Realtionships</Link></p></div>
      <div className="sliderdiv"><img  className="sliderimg" src={electonics} alt="Electronics" /><p><Link to={`/?cat=Electronics`} className="link">Electronics</Link></p></div>
     
    </Slider>
    
    </div>
  );
}
