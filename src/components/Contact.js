import React, { Component } from 'react'
import emailjs from 'emailjs-com'

export default class Contact extends Component {


  state ={
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  handleOnChange(event){
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event){
    event.preventDefault()

    let templateParams={
      from_name: this.state.email,
      to_name: "LesterMYoung07@gmail.com",
      subject: this.state.subject, 
      message_html: this.state.message
    }

    if (emailjs.send(
      'personal_gmail',
      'template_h44Sbg4u',
      templateParams,
      'user_2SYagLZqmZqxFhTPUQaHc'
    )){
      alert("Thank you for the email!")
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } else {
      alert("There was an error. Please try again.")
    }


    
    
  } 

    render(){
        return(
                <div className="col-md-offset-2">
                    <section className="colorlib-contact" data-section="contact">
                      <div className="colorlib-narrow-content">
                        <div className="row">
                          <div className="animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                              <div className="colorlib-icon">
                                <i className="icon-mail" />
                              </div>
                              <div className="colorlib-text">
                                <p>LesterMYoung07@gmail.com</p>
                              </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                              <div className="colorlib-icon">
                                <i className="icon-map" />
                              </div>
                              <div className="colorlib-text">
                                <p>Orlando, FL</p>
                              </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                              <div className="colorlib-icon">
                                <i className="icon-phone" />
                              </div>
                              <div className="colorlib-text">
                                <p>(407)-520-9700</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7 col-md-push-1">
                            <div className="row">
                              <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                <form onSubmit = {event => this.handleSubmit(event)}>
                                  <div className="form-group">
                                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" placeholder="Name" name="name" value={this.state.name}/>
                                  </div>
                                  <div className="form-group">
                                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" placeholder="Email" name="email" value={this.state.email}/>
                                  </div>
                                  <div className="form-group">
                                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" placeholder="Subject" name="subject" value={this.state.subject}/>
                                  </div>
                                  <div className="form-group">
                                    <textarea  onChange={event => this.handleOnChange(event)} id="message" cols={30} rows={7} className="form-control" placeholder="Message"  name="message" value={this.state.message}/>
                                  </div>
                                  <div className="form-group">
                                    <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
             
        )
    }
}