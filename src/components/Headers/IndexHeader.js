/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import Carousel from "./Carousel.js";
import MiniCarousel from "./miniCarousel.js"; 
function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div 
      style={{
        minHeight: "0",
        height: "25rem"
      }}className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          ref={pageHeader}
        >
          <Carousel/>
        </div>
        
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/pic_logoGR.svg")}
              style={{ width:"30rem", maxWidth:"30%" ,transform:"translateY(4rem)"}}
            ></img>
          
          </div>
          <div style= {{position:"absolute" ,bottom:"0" , left:"0", background:"rgba(0,0,0,0.5)"}}>
        <MiniCarousel/> </div>
        </Container>
        
      </div>
    </>
  );
}

export default IndexHeader;
