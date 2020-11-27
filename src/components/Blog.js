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
                    href="https://lyoung0789.github.io/method_overloading_vs_method_overriding"
                    className="blog-img"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80"
                      className="img-responsive"
                      alt="react"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>November 14, 2020 </small> | <small> Java </small>
                    </span>
                    <h3>
                      <a href="https://lyoung0789.github.io/method_overloading_vs_method_overriding">
                        Java
                      </a>
                    </h3>
                    <p>
                      Hi Guys, welcome back! In my last blog post we discussed
                      the 4 pillars of Object Oriented Programming. Inheritance,
                      Polymorphism, Abstraction and Encapsulation. In this blog
                      post I am going to be reviewing another major concept in
                      Java programming called Overloading and Overriding.
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
                    href="https://lyoung0789.github.io/four_pillars_of_object_oriented_programming"
                    className="blog-img"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2689&q=80"
                      className="img-responsive"
                      alt="react"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>November 7, 2020 </small> |{" "}
                      <small>Object Oriented Programming</small>{" "}
                    </span>
                    <h3>
                      <a href="https://lyoung0789.github.io/four_pillars_of_object_oriented_programming">
                        Four Pillars of Object Oriented Programming
                      </a>
                    </h3>
                    <p>
                      If you have been following my recent blog posts I have
                      mostly been reviewing concepts in React and JavaScript.
                      This past week I have been diving into Object Oriented
                      Programming (OOP). In this blog post I will go over the
                      four pillars of Object Oriented Programming. Before we
                      start, there are many Object Oriented Programming
                      languages, but some sample code and concepts that may be
                      provided will be in terms of Java.
                    </p>
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
