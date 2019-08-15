import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-2"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Evaluacion de Riesgo</h6>
		  </div>
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Riesgo bancario y Aseguradoras</h6>
		  </div>
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Obligaciones y titularizaciones</h6>
		  </div>
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;