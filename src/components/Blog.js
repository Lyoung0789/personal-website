import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
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
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://lyoung0789.github.io/using_fetch_in_js"
                    className="blog-img"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                      className="img-responsive"
                      alt="javascript code"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>October 9, 2020 </small> |{" "}
                      <small> Javascript </small>
                    </span>
                    <h3>
                      <a href="https://lyoung0789.github.io/using_fetch_in_js">
                        Using Fetch in JS
                      </a>
                    </h3>
                    <p>
                      In this blog post I will go over how to use the Fetch API.
                      Let’s start off by giving an overview of what the Fetch
                      API does.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://lyoung0789.github.io/react_native_pt_3"
                    className="blog-img"
                  >
                    <img
                      src="https://www.manhattanmobile.com/wp-content/uploads/2018/08/react-native-workshop.jpg"
                      className="img-responsive"
                      alt="react"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>October 2, 2020 </small> |{" "}
                      <small> React Native </small>
                    </span>
                    <h3>
                      <a href="https://lyoung0789.github.io/react_native_pt_3">
                        React Native Pt. 3
                      </a>
                    </h3>
                    <p>
                      Welcome back! I am guessing that you’ve enjoyed my walk
                      through this far and want to finish up. Well, in this blog
                      we will be developing how to add a Todo to the list that
                      we just created.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://lyoung0789.github.io/react_native_intro_pt_2"
                    className="blog-img"
                  >
                    <img
                      src="https://www.manhattanmobile.com/wp-content/uploads/2018/08/react-native-workshop.jpg"
                      className="img-responsive"
                      alt="react"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>September 26, 2020 </small> |{" "}
                      <small>React Native</small>{" "}
                    </span>
                    <h3>
                      <a href="https://lyoung0789.github.io/react_native_intro_pt_2">
                        React Native Pt. 2
                      </a>
                    </h3>
                    <p>Hello and welcome back!</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="blog-entry">
                              <a href="https://lyoung0789.github.io/welcome_to_javascript" className="blog-img"><img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                              <div className="desc">
                                <span><small>June 6, 2020</small> | <small> JavaScript</small></span>
                                <h3><a href="https://lyoung0789.github.io/welcome_to_javascript">Welcome to JavaScript</a></h3>
                                <p>“Welcome to JavaScript”. The words that have brought me so much joy and so much pain. For my fourth project I developed a Home Bartender application that lets users share their favorite cocktails. Users, are able to comment, like, and add their own recipes to share with other aspiring at home bartenders. </p>
                              </div>
                            </div>
                          </div> */}
              {/* <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="blog-entry">
                              <a href="https://lyoung0789.github.io/rails_portfolio_project" className="blog-img"><img src="https://images.unsplash.com/photo-1544776943-031655f13833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                              <div className="desc">
                                <span><small>May 10, 2020 </small> | <small> Ruby </small></span>
                                <h3><a href="https://lyoung0789.github.io/rails_portfolio_project">Rails Portfolio Project</a></h3>
                                <p>Project 3! Okay here we go, for my third portfolio project I created a Handyman application in which users are able to book appointments with technicians that are signed up for the application. Users can also be managers and create Technicians and view their appointments.</p>
                              </div>
                            </div>
                          </div> */}
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a
                    href="https://lyoung0789.github.io/"
                    className="btn btn-primary btn-lg btn-load-more"
                  >
                    View Blog{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
