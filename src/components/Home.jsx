import React, { Component } from 'react'


 class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="  col-md-3 col-lg-2   " style={{ backgroundColor:"black"}}></div>
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
                </div>

        )
    }
}
export default Home;