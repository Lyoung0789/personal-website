import React, {Component} from 'react'

export default class Navbar extends Component{



    render(){
        return(
            <div>
            <div style={{backgroundColor:"black"}}>
              <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                  <div className="author-img" style={{backgroundImage: 'url(images/profile.jpg)'}} />
                  <h1 id="colorlib-logo">Lester Young<br/></h1>
                  {/* <span className="email"><i className="icon-mail"></i> LesterMYoung07@gmail.com </span> */}
                  
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                      <li><a href="#about" data-nav-section="about">About</a></li>
                      <li><a href="#projects" data-nav-section="work">Projects</a></li>
                      <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                      <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                    </ul>
                  </div>
                </nav>
                <nav id="colorlib-main-menu">
                  <ul>
                    {/* <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                    <li><a href="https://www.linkedin.com/in/lestermyoung/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin22" /></a></li>
                    <li><a href="https://github.com/Lyoung0789" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    <li><a href="https://lyoung0789.github.io/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger"></i></a></li>
                  </ul>
                </nav>
                <span className="email"><i className="icon-mail"></i> LesterMYoung07@gmail.com </span>
              </aside>
            </div>
            
          </div>
        )
        
    }

}