import React, { Component } from 'react'

 class Player extends Component {
    render() {
        return (
            <div>
               <footer className="nowPlaying  ">
      <div  className ="row ">
                        <div className="d-none d-lg-block col-lg-2" id="infos" style={{ marginTop: "10px"}}>
                            <div className="row no-wrap " style={{  width: "600px"}}>
            <div className="col-2"><img src="/assets/artist.images/fan1.jpg" className="img-fluid pl-2 mr-1"width="60rem" alt=""/></div>
            <div className="col-2 d-flex flex-column align-items-center">
              <label className="footerText d-inline p-1 m-0 p-0" >Song Title</label>         
            <label className="footerText d-inline p-1 m-0 p-0">Artist</label></div>
            <div className="col-1 align-items-center flex-column text-center p-0"><p className="fa fa-heart-o pt-2 mr-5"></p></div>
            

          </div>
         
          
          <div >
          
        </div>
        
        
        </div>
        <div className=" col-12 col-lg-8 " id="player">
                            <div style={{ textAlign: "center", marginTop: "10px"}}>
            <button className="btn footerIcons">
              <span className="fa fa-random"></span>
            </button>

            <button className="btn footerIcons">
              <span className="fa fa-step-backward"></span>
            </button>

            <button className="btn footerIcons">
              <span className="fa fa-play sf-btn-play"></span>
            </button>

            <button className="btn footerIcons">
              <span className="fa fa-step-forward"></span>
            </button>

            <button className="btn footerIcons">
              <span className="fa fa-retweet"></span>
            </button>

            
           
          </div>
          <div className=" progress progressBar mb-5  ">
            <div
              className="progress-bar "
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="50"
              aria-valuemax="70"
            ></div>
          </div>
        </div>
                        <div id="options" className="d-none d-lg-block col-lg-2" style={{ textAlign:"center", marginTop:"10px"}}>
         
          <button className="btn footerIcons">
            <span className="fa fa-list"></span>
          </button>

          <button className="btn footerIcons">
            <span className="fa fa-laptop"></span>
          </button>

          <button className="btn footerIcons">
            <span className="fa fa-volume-up"></span>
          </button>
        </div>
      </div>
     
    </footer>  
            </div>
        )
    }
}
export default Player