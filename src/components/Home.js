import React, {Component} from 'react'

export default class Home extends Component {

    render(){

   
    return (
        <div id="colorlib-main">
          <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc">
                            <h1>Hello and Welcome! <br />My name is Lester</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                          <div className="desc">
                            <h1>I am <br />a full-stack web developer</h1>
                            <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                            <div class="arrow bounce">
		                        <a class="fa fa-arrow-down fa-2x" href="#">enter</a>
	                        </div>
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


