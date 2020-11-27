import React, { Component } from 'react'

 class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div class="nav-item dropdown d-d-block d-md-none hamburger-menu ">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="index.html">Home</a>
          <a class="dropdown-item" href="Album Page.html">Your Library</a>
         
          <a class="dropdown-item" href="artist.html">Liked Songs</a>
        </div>
      </div>
      <div className="row">
                        <div className="  col-md-3 col-lg-2   " style={{ backgroundColor:"black"}}>
         <ul className="nav flex-column d-none d-md-block   " id="side-bar">
                    <li className="nav-item">
                      <a className="nav-link active" href="index.html">
                        <img
                          className="title img-fluid"
                          src="/assets/logos/Spotify_Logo_CMYK_White.png"
                          alt="spotify logo"
                      /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mt-2" href="index.html"
                        ><svg
                          width="1.5em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="bi bi-house-door mr-3 ml-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/></svg>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"
                        ><svg
                          width="1.5em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="bi bi-search mr-3 ml-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/></svg>Search</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Album Page.html"
                        ><svg
                          width="1.5em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="bi bi-bar-chart-line mr-3 ml-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                          /></svg>Your Library</a
                      >
                    </li>
                    <li className="playlist nav-item">
                                    <p style={{ color: "grey"}} className="ml-3 mt-4">PLAYLISTS</p>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="artist.html"
                        ><svg
                          width="1.5em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="bi bi-plus-square-fill mr-3 ml-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>Create Playlist</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="artist.html"
                        ><svg
                          width="1.5em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="bi bi-suit-heart-fill mr-3 ml-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                          /></svg>Liked Songs</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <a className="nav-link" href="signUp.html"><button type="button" className="btn-sign">SIGN UP</button></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="signUp.html"><button type="button" className="btn-login">LOGIN</button></a>
                    </li>
                  </ul>
        </div>

        <div className="main-part col-12 col-md-9 col-lg-10  mb-5 pb-5 ">       
         
        
              <ul
                className="nav mb-3 justify-content-center p-3  main-nav bg-none"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#trending"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >TRENDS</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#contents"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >CONTENTS</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#mooDandGenres"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >MOOD AND GENRES</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#newReleases"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >NEW RELEASES</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#discover"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >DISCOVER</a
                  >
                </li>
              </ul>
       
              <div className="tab-content " id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="trending"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                      
                        <h3>Recently Played</h3>
                        <div className="row">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home7.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/images/alvays.png"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home10.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home11.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home12.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/images/sutliman.png"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                            
              
                        <h3>Your Unique Choices</h3>
                        <div className="row justify-content-start ">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home13.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/images/viral50.png"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home15.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home14.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>  
                        </div>
                        <h3>Hit Rewind</h3>
                        <div className="row">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home1.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home3.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home8.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home9.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/ten.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                            
              
                        <h3>Today's Top Hits</h3>
                        <div className="row justify-content-start ">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home2.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home3.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home4.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home5.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>  
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home6.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home7.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>  
                        </div>
                      </div>
                
                <div
                  className="tab-pane fade"
                  id="contents"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                      <div>
                        <h3>Recently Played</h3>
                        <div className="row ">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                             
                              <img
                                src="/assets/artist.images/home15.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                            
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home2.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home3.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home4.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home5.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home6.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3>Recently Played</h3>
                        <div className="row ">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                             
                              <img
                                src="/assets/artist.images/home7.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                            
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home8.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home9.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home10.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home11.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2  px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/home12.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                            
              
                        <h3>Chill</h3>
                        <div className="row justify-content-start ">
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/chil.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              
                              <img
                                src="/assets/artist.images/chil1.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                            
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets/artist.images/chill.jpg"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4  col-lg-2 px-2">
                            <div className="card bg-transparent border-0 text-center">
                              <img
                                src="/assets\images\4.png"
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <p className="card-text">Acoustic</p>
                              </div>
                            </div>
                          </div>  
                        </div>
                      </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="mooDandGenres"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div>
                  <h3>Chill</h3>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/chill.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/chil1.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/chil.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/all.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <h3>#TOP 50</h3>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/viral50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50-2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50-3.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <h3>Recently Played</h3>
                  <div className="row">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/home9.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/home8.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/home7.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/home6.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/home5.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/chill.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                      
                    </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="newReleases"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                <div>
                  <h3>Discover More</h3>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/disc.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/disc1.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/disc2.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/artist.images/disc3.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <h3>#THROWBACKTHURSDAY</h3>
                  <div className="row">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\acoustic.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\alvays.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\caz.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\happy.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\sutliman.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\kure.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                      
        
                  <h3>#TOP 50</h3>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\top50-2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\top50-3.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\top50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\viral50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>

                </div>
                <div
                  className="tab-pane fade"
                  id="discover"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                <div >
                  <h3>Recently Played</h3>
                  <div className="row">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\11.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/19.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\18.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/17.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/16.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/15.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                      
        
                  <h5>Your Unique Choices</h5>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/viral50.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50-2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/top50-3.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <h3>Recently Played</h3>
                  <div className="row">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/\assets\images\12.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\13.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\14.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\15.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\16.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2  px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets\images\17.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                      
        
                  <h5>Your Unique Choices</h5>
                  <div className="row justify-content-start ">
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/24.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/23.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/22.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/21.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/19.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4  col-lg-2 px-2">
                      <div className="card bg-transparent border-0 text-center">
                        <img
                          src="/assets/images/18.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">Acoustic</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>
                </div>
              </div>
            
            
          
        </div>
      </div>
    </div>

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
export default Home;