import React, {Component} from 'react'

export default class Home extends Component {

    render(){

   
    return (
        <div id="colorlib-main">
          <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)'}}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc" >
                            <h1 style={{color:"black"}}>Hello and Welcome! <br />My name is Lester <br/> And I am a Full Stack Web developer</h1>
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


