import React, {Component} from 'react'

export default class Blog extends Component{

    render(){
        return(

            <div className="col-md-offset-2">
                    <section className="colorlib-blog " data-section="blog">
                      <div className="colorlib-narrow-content">
                        <div className="row">
                          <div className=" animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Read</span>
                            <h2 className="colorlib-heading">Recent Blog</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="blog-entry">
                              <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                              <div className="desc">
                                <span><small>July 5, 2020 </small> | <small>JavaScript</small> </span>
                                <h3><a href="blog.html">React Redux</a></h3>
                                <p>We’re here! The Final Project. It feels like it was yesterday, working on my first CLI project, but look how far we’ve come! For my Final Project I decided to create an Application that keeps track of users goals. The user can log what their goals are and maintain a checklist to Reach those goals. Hence, I have named it Reach.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="blog-entry">
                              <a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                              <div className="desc">
                                <span><small>June 6, 2020</small> | <small> JavaScript</small></span>
                                <h3><a href="blog.html">Welcome to JavaScript</a></h3>
                                <p>“Welcome to JavaScript”. The words that have brought me so much joy and so much pain. For my fourth project I developed a Home Bartender application that lets users share their favorite cocktails. Users, are able to comment, like, and add their own recipes to share with other aspiring at home bartenders. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="blog-entry">
                              <a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                              <div className="desc">
                                <span><small>May 10, 2020 </small> | <small> Ruby </small></span>
                                <h3><a href="blog.html">Rails Portfolio Project</a></h3>
                                <p>Project 3! Okay here we go, for my third portfolio project I created a Handyman application in which users are able to book appointments with technicians that are signed up for the application. Users can also be managers and create Technicians and view their appointments.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 animate-box">
                            <p><a href="https://lyoung0789.github.io/" className="btn btn-primary btn-lg btn-load-more">View Blog </a></p>
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
          
        )
    }
}