import React, {Component} from 'react'

export default class Home extends Component {

    render(){

   
    return (
        <div id="colorlib-main">
          <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li style={{backgroundImage: 'url(images/home.jpeg)'}}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc" >
                            <h1 style={{color:"white"}}>Hello and Welcome! <br />My name is Lester <br/> And I am a Full Stack Web developer</h1>
                            <div className="arrow bounce">
		                        <a className="fa fa-arrow-down fa-2x" href="#">enter</a>
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


