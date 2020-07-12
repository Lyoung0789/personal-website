import React, {Component} from 'react'

export default class Projects extends Component {

    render(){
        return(
            <div className="col-md-offset-2">
                
                    <section className="colorlib-work" data-section="work">
                      <div className="colorlib-narrow-content col-md-12">
                        <div className="row">
                          <div className="animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Projects</span>
                            <h2 className="colorlib-heading animate-box">Recent Work</h2>
                          </div>
                        </div>
                        {/* <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                          <div className="col-md-12">
                            <p className="work-menu"><span><a href="google.com" className="active">Graphic Design</a></span> <span><a href="google.com">Web Design</a></span> <span><a href="google.com">Software</a></span> <span><a href="google.com">Apps</a></span></p>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">Reach</a></h3>
                                  <span><p>An app developed to track goals along with pending action items, featuring a checklist to help you achieve your targets.</p></span>
                                  <p className="icon">
                                    <span><a href="https://github.com/Lyoung0789/reach-frontend"><i className="icon-git" /></a></span>
                                    <span><a href="https://www.youtube.com/watch?v=02UWWDOHFns"><i className="icon-youtube" /></a></span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="project" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542600176-4f7f2cba84d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">HomeBartender</a></h3>
                                  <span><p>An app created to share your own twist on cocktail recipes with enabled ratings and comments.</p></span>
                                  <p className="icon">
                                    <span><a href="https://github.com/Lyoung0789/bartender-frontend.git"><i className="icon-git" /></a></span>
                                    <span><a href="https://www.youtube.com/watch?v=5AGmffKrvUI&t=292s"><i className="icon-youtube" /></a></span>
                                    
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                            <div className="project" style={{backgroundImage: 'url(https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">HandyMan</a></h3>
                                  <span><p>An app designed for users to sign in, book and request appointments with local technicians (ie: AC, Plumber, Electric).</p></span>
                                  <p className="icon">
                                    <span><a href="https://github.com/Lyoung0789/handyman-finder.git"><i className="icon-git" /></a></span>
                                    <span><a href="https://www.youtube.com/watch?v=5AGmffKrvUI&t=292s"><i className="icon-youtube" /></a></span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                            <div className="project" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548529793-1325ac6b99a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">HappyHour</a></h3>
                                  <span>A CLI application that allows you to find 10 happy hour locations, that is within 25 miles of your zipcode. The application provides the address, hours and specials of each location.</span>
                                  <p className="icon">
                                    <span><a href="https://github.com/Lyoung0789/happy_hour.git"><i className="icon-git" /></a></span>
                                    <span><a href="https://www.youtube.com/watch?v=DckfgGudKSk&t=12s"><i className="icon-youtube" /></a></span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">Work 05</a></h3>
                                  <span>Graphic, Logo</span>
                                  <p className="icon">
                                    <span><a href="#"><i className="icon-share3" /></a></span>
                                    <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                    <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
                              <div className="desc">
                                <div className="con">
                                  <h3><a href="work.html">Work 06</a></h3>
                                  <span>Web Design</span>
                                  <p className="icon">
                                    <span><a href="#"><i className="icon-share3" /></a></span>
                                    <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                    <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="row">
                          <div className="col-md-12 animate-box">
                            <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                          </div>
                        </div> */}
                      </div>
                    </section>
                    </div>

        )
    }
}