import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div id="colorlib-main" className="col-md-offset-2">
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage:
                    // "url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)",
                    "url(https://images.pexels.com/photos/1405762/pexels-photo-1405762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-offset-7 col-sm-offset-7 col-xs-offset-7 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{ color: "black" }}>
                            Hello and Welcome! <br />
                            My name is Lester, a Full Stack Web developer.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
