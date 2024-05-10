import bannerImage1 from './../images/banner1-small.png'; 
import bannerImage2 from './../images/banner2-small.png'; 
import "./../css/banner.css"


export const Banner1 = () => {
    return (
      <div className="banner">
        <img src={bannerImage1} alt="Banner1" className="banner-image banner1" />
        <div className="banner-text">
          Chez vous, <span className="text-mobile-split">partout et ailleurs</span> 
        </div>
      </div>
    );
  }

 export const Banner2 = () => {
    return (
      <div className="banner">
        <img src={bannerImage2} alt="Banner2" className="banner-image banner2" />
      </div>
    );
  }