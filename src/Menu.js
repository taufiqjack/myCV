import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="page">
          <div className="theme_panel">
            <div className="toggle_bts">
              <a className="toggle-theme-panel" href="fake_url">
                <i className="ion ion-android-settings" />
              </a>
            </div>
            <div className="theme_menu">
              <h4>Color Switcher</h4>
              <div className="segment">
                <ul className="theme layout_style">
                  <li>
                    <a
                      title="theme-green"
                      href="fake_url"
                      data-color="green"
                      style={{ backgroundColor: "rgba(46, 202, 127, 1)" }}
                    />
                  </li>
                  <li>
                    <a
                      title="theme-blue"
                      href="fake_url"
                      data-color="blue"
                      style={{ backgroundColor: "rgba(8, 86, 193, 1)" }}
                    />
                  </li>
                  <li>
                    <a
                      title="theme-orange"
                      href="fake_url"
                      data-color="orange"
                      style={{ backgroundColor: "rgba(255, 152, 0, 1)" }}
                    />
                  </li>
                  <li>
                    <a
                      title="theme-pink"
                      href="fake_url"
                      data-color="pink"
                      style={{ backgroundColor: "rgba(255, 94, 148, 1)" }}
                    />
                  </li>
                  <li>
                    <a
                      title="theme-purple"
                      href="fake_url"
                      data-color="purple"
                      style={{ backgroundColor: "rgba(196, 70, 218, 1)" }}
                    />
                  </li>
                  <li>
                    <a
                      title="theme-red"
                      href="fake_url"
                      data-color="red"
                      style={{ backgroundColor: "rgba(232, 103, 107, 1)" }}
                    />
                  </li>
                </ul>
              </div>
              <div className="clear" />
              <h4>Dark/Light Version</h4>
              <ul className="theme demo_list dark_style">
                <li style={{ width: "50%" }}>
                  <a href="fake_url" data-dark="dark">
                    <strong>Dark</strong>
                  </a>
                </li>
                <li style={{ width: "50%" }}>
                  <a href="fake_url" data-dark="light">
                    <strong>Light</strong>
                  </a>
                </li>
              </ul>
              <div className="clear" />
            </div>
          </div>
          {/* preloader */}
          <div className="preloader">
            <div className="centrize full-width">
              <div className="vertical-center">
                <div className="spinner">
                  <div className="double-bounce1" />
                  <div className="double-bounce2" />
                </div>
              </div>
            </div>
          </div>
          {/* background */}
          <div className="background" />
          {/*
  Container
*/}
          <div
            className="container opened"
            data-animation-in="fadeInLeft"
            data-animation-out="fadeOutLeft"
          >
            {/*
    Header
  */}
            <header className="header">
              {/* menu */}
              <div className="top-menu">
                <ul>
                  <li className="active">
                    <a href="#about-card">
                      <span className="icon ion-person" />
                      <span className="link">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#resume-card">
                      <span className="icon ion-android-list" />
                      <span className="link">Resume</span>
                    </a>
                  </li>
                  <li>
                    <a href="#works-card">
                      <span className="icon ion-paintbrush" />
                      <span className="link">Works</span>
                    </a>
                  </li>
                  <li>
                    <a href="#blog-card">
                      <span className="icon ion-chatbox-working" />
                      <span className="link">Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contacts-card">
                      <span className="icon ion-at" />
                      <span className="link">Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </header>
            {/*
    Card - Started
  */}
            <div className="card-started" id="home-card">
              {/*
Profile
    */}
              <div className="profile">
                {/* profile image */}
                <div
                  className="slide"
                  style={{ backgroundImage: "url(images/bg.jpg)" }}
                />
                {/* profile photo */}
                <div className="image">
                  <img src="images/FOTOKRS.JPG" alt="" />
                </div>
                {/* profile titles */}
                <div className="title">Taufiq Dwi Cahyono</div>
                <div className="subtitle">Frontend Developer</div>
                {/* profile socials */}
                <div className="social">
                  <a target="" href="https://dribbble.com/">
                    <span className="fab fa-dribbble" />
                  </a>
                  <a target="" href="https://twitter.com/">
                    <span className="fab fa-twitter" />
                  </a>
                  <a target="" href="https://github.com/">
                    <span className="fab fa-github" />
                  </a>
                  <a target="" href="https://www.spotify.com/">
                    <span className="fab fa-spotify" />
                  </a>
                  <a target="" href="https://stackoverflow.com/">
                    <span className="fab fa-stack-overflow" />
                  </a>
                </div>
                {/* profile buttons */}
                <div className="lnks">
                  <a href="fake_url" className="lnk">
                    <span className="text">Download CV</span>
                    <span className="ion ion-archive" />
                  </a>
                  <a href="http://wa.me/6289664653661" className="lnk discover">
                    <span className="text">Contact Me</span>
                    <span className="arrow" />
                  </a>
                </div>
              </div>
            </div>
            {/* 
    Card - About
  */}
            <div className="card-inner animated active" id="about-card">
              <div className="card-wrap">
                {/* 
  About 
*/}
                <div className="content about">
                  {/* title */}
                  <div className="title">About Me</div>
                  {/* content */}
                  <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                      <div className="text-box">
                        <p>I am Taufiq Dwi Cahyono, developer from Sleman.</p>
                      </div>
                      <div className="info-list">
                        <ul>
                          <li>
                            <strong>Age . . . . .</strong> 24
                          </li>
                          <li>
                            <strong>Residence . . . . .</strong> Indonesia
                          </li>
                          <li>
                            <strong>Fulltime . . . . .</strong> Available
                          </li>
                          <li>
                            <strong>Address . . . . .</strong> Jl. Nglebeng,
                            Kapanewon Tempel, Kabupaten Sleman 55552
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Services
*/}
                <div className="content services">
                  {/* title */}
                  <div className="title">My Services</div>
                  {/* content */}
                  <div className="row service-items border-line-v">
                    {/* service item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                      <div className="service-item">
                        <div className="icon">
                          <span className="ion ion-iphone" />
                        </div>
                        <div className="name">Mobile Development</div>
                        <p>Developing mobile android and ios.</p>
                      </div>
                    </div>
                    {/* service item */}

                    <div className="col col-d-6 col-t-6 col-m-12">
                      <div className="service-item">
                        <div className="icon">
                          <span className="ion ion-code" />
                        </div>
                        <div className="name">Web Development</div>
                        <p>
                          Modern and mobile-ready website that will help you
                          reach all of your marketing.
                        </p>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Price Tables
*/}
                <div className="content pricing">
                  {/* title */}
                  <div className="title">Pricing</div>
                  {/* content */}
                  <div className="row pricing-items">
                    {/* pricing item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="pricing-item">
                        <div className="icon">
                          <i className="ion ion-speedometer speed-basic" />
                        </div>
                        <div className="name">Basic</div>
                        <div className="amount">
                          <span className="dollar">$</span>
                          <span className="number">22</span>
                          <span className="period">hour</span>
                        </div>
                        <div className="feature-list">
                          <ul>
                            <li>Web Development</li>
                            <li>Advetising</li>
                            <li>Game Development</li>
                            <li className="disable">Music Writing</li>
                            <li className="disable">
                              Photography <strong>new</strong>
                            </li>
                          </ul>
                        </div>
                        <div className="lnks">
                          <a href="fake_url" className="lnk">
                            <span className="text">Buy Basic</span>
                            <i className="ion ion-speedometer speed-basic" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* pricing item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="pricing-item">
                        <div className="icon">
                          <i className="ion ion-speedometer" />
                        </div>
                        <div className="name">Pro</div>
                        <div className="amount">
                          <span className="dollar">$</span>
                          <span className="number">48</span>
                          <span className="period">hour</span>
                        </div>
                        <div className="feature-list">
                          <ul>
                            <li>Web Development</li>
                            <li>Advetising</li>
                            <li>Game Development</li>
                            <li>Music Writing</li>
                            <li>
                              Photography <strong>new</strong>
                            </li>
                          </ul>
                        </div>
                        <div className="lnks">
                          <a href="fake_url" className="lnk">
                            <span className="text">Buy Pro</span>
                            <i className="ion ion-speedometer" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Fun Fact
*/}
                <div className="content fuct">
                  {/* title */}
                  <div className="title">Fun Fact</div>
                  {/* content */}
                  <div className="row fuct-items">
                    {/* fuct item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="fuct-item">
                        <div className="icon">
                          <span className="ion ion-disc" />
                        </div>
                        <div className="name">80 Albumes Listened</div>
                      </div>
                    </div>
                    {/* fuct item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="fuct-item">
                        <div className="icon">
                          <span className="ion ion-trophy" />
                        </div>
                        <div className="name">15 Awards Won</div>
                      </div>
                    </div>
                    {/* fuct item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="fuct-item">
                        <div className="icon">
                          <span className="ion ion-coffee" />
                        </div>
                        <div className="name">1 000 Cups of coffee</div>
                      </div>
                    </div>
                    {/* fuct item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="fuct-item">
                        <div className="icon">
                          <span className="ion ion-flag" />
                        </div>
                        <div className="name">10 Countries Visited</div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Clients
*/}
                <div className="content clients">
                  {/* title */}
                  <div className="title">Clients</div>
                  {/* content */}
                  <div className="row client-items">
                    {/* client item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="" href="https://www.google.com/">
                            <img src="images/clients/client_1.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* client item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="" href="https://www.google.com/">
                            <img src="images/clients/client_2.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* client item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="" href="https://www.google.com/">
                            <img src="images/clients/client_3.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* client item */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="" href="https://www.google.com/">
                            <img src="images/clients/client_4.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Testimonials
*/}
                <div className="content testimonials">
                  {/* title */}
                  <div className="title">Testimonials</div>
                  {/* content */}
                  <div className="row testimonials-items">
                    {/* client item */}
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                      <div className="revs-carousel default-revs">
                        <div className="owl-carousel">
                          <div className="item">
                            <div className="revs-item">
                              <div className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </div>
                              <div className="user">
                                <div className="img">
                                  <img src="images/man1.jpg" alt="" />
                                </div>
                                <div className="info">
                                  <div className="name">Helen Floyd</div>
                                  <div className="company">Art Director</div>
                                </div>
                                <div className="clear" />
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="revs-item">
                              <div className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </div>
                              <div className="user">
                                <div className="img">
                                  <img src="images/man1.jpg" alt="" />
                                </div>
                                <div className="info">
                                  <div className="name">Robert Chase</div>
                                  <div className="company">CEO</div>
                                </div>
                                <div className="clear" />
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="revs-item">
                              <div className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </div>
                              <div className="user">
                                <div className="img">
                                  <img src="images/man1.jpg" alt="" />
                                </div>
                                <div className="info">
                                  <div className="name">Helen Floyd</div>
                                  <div className="company">Art Director</div>
                                </div>
                                <div className="clear" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            {/*
    Card - Resume
  */}
            <div className="card-inner" id="resume-card">
              <div className="card-wrap">
                {/*
  Resume
*/}
                <div className="content resume">
                  {/* title */}
                  <div className="title">Resume</div>
                  {/* content */}
                  <div className="row">
                    {/* experience */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="resume-title border-line-h">
                        <div className="icon">
                          <i className="ion ion-briefcase" />
                        </div>
                        <div className="name">Experience</div>
                      </div>
                      <div className="resume-items">
                        <div className="resume-item border-line-h active">
                          <div className="date">Aug 2019 - Dec 2019</div>
                          <div className="name">Mobile Developer(Flutter)</div>
                          <div className="company">
                            PT. Tamadun Teknologi Internasional
                          </div>
                          <p>Internship Program</p>
                        </div>
                      </div>
                    </div>
                    {/* education */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="resume-title border-line-h">
                        <div className="icon">
                          <i className="ion ion-university" />
                        </div>
                        <div className="name">Education</div>
                      </div>
                      <div className="resume-items">
                        <div className="resume-item border-line-h">
                          <div className="date">Sept 2016 - Sept 2020</div>
                          <div className="name">Information Technology</div>
                          <div className="company">
                            Muhammadiyah University of Yogyakarta
                          </div>
                          <p>
                            Bachelor's Degree of Computer in Information
                            Technology, Engineering Faculty, Muhammadiyah
                            University of Yogyakarta
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Skills
*/}
                <div className="content skills">
                  {/* title */}
                  <div className="title">My Skills</div>
                  {/* content */}
                  <div className="row">
                    {/* skill item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="skills-list">
                        <div className="skill-title border-line-h">
                          <div className="icon">
                            <i className="ion ion-easel" />
                          </div>
                          <div className="name">Design</div>
                        </div>
                        <ul>
                          <li className="border-line-h">
                            <div className="name">Web Design</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </li>

                          <li className="border-line-h">
                            <div className="name">Photoshop</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "75%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="name">Graphic Design</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "70%" }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* skill item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="skills-list">
                        <div className="skill-title border-line-h">
                          <div className="icon">
                            <i className="ion ion-code" />
                          </div>
                          <div className="name">Coding</div>
                        </div>
                        <ul>
                          <li className="border-line-h">
                            <div className="name">React</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </li>
                          <li className="border-line-h">
                            <div className="name">Flutter</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "75%" }}
                              />
                            </div>
                          </li>
                          <li className="border-line-h">
                            <div className="name">PHP MYSQL</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="name">HTML / CSS</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            {/*
    Card - Works
  */}
            <div className="card-inner" id="works-card">
              <div className="card-wrap">
                {/*
  Works
*/}
                <div className="content works">
                  {/* title */}
                  <div className="title">Recent Works</div>
                  {/* filters */}
                  <div className="filter-menu filter-button-group">
                    <div className="f_btn active">
                      <label>
                        <input
                          type="radio"
                          name="fl_radio"
                          defaultValue="grid-item"
                        />
                        All
                      </label>
                    </div>
                    <div className="f_btn">
                      <label>
                        <input
                          type="radio"
                          name="fl_radio"
                          defaultValue="photo"
                        />
                        Photo
                      </label>
                    </div>
                    <div className="f_btn">
                      <label>
                        <input
                          type="radio"
                          name="fl_radio"
                          defaultValue="video"
                        />
                        Video
                      </label>
                    </div>
                    <div className="f_btn">
                      <label>
                        <input
                          type="radio"
                          name="fl_radio"
                          defaultValue="music"
                        />
                        Music
                      </label>
                    </div>
                    <div className="f_btn">
                      <label>
                        <input
                          type="radio"
                          name="fl_radio"
                          defaultValue="design"
                        />
                        Design
                      </label>
                    </div>
                  </div>
                  {/* content */}
                  <div className="row grid-items border-line-v">
                    {/* work item photo */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="images/works/work1.jpg"
                            className="has-popup-image"
                          >
                            <img src="images/works/work1.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-image" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a
                            href="images/works/work1.jpg"
                            className="name has-popup-image"
                          >
                            Motorcycle Helmet
                          </a>
                          <div className="category">Photo</div>
                        </div>
                      </div>
                    </div>
                    {/* work item video */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="https://vimeo.com/97102654"
                            className="has-popup-video"
                          >
                            <img src="images/works/work2.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-videocamera" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a
                            href="https://vimeo.com/97102654"
                            className="name has-popup-video"
                          >
                            Minimalism Shapes
                          </a>
                          <div className="category">Video</div>
                        </div>
                      </div>
                    </div>
                    {/* work item music */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                            className="has-popup-music"
                          >
                            <img src="images/works/work3.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-music-note" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="fake_url" className="name has-popup">
                            Staircase
                          </a>
                          <div className="category">Music</div>
                        </div>
                      </div>
                    </div>
                    {/* work item design */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a href="#popup-1" className="has-popup-media">
                            <img src="images/works/work4.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-images" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="#popup-1" className="name has-popup-media">
                            Mobile Application
                          </a>
                          <div className="category">Design</div>
                        </div>
                        <div
                          id="popup-1"
                          className="popup-box mfp-fade mfp-hide"
                        >
                          <div className="content">
                            <div className="image">
                              <img src="images/works/work4.jpg" alt="" />
                            </div>
                            <div className="desc">
                              <div className="post-box">
                                <h1>Mobile Application</h1>
                                <div className="blog-detail">Design</div>
                                <div className="blog-content">
                                  <p>
                                    So striking at of to welcomed resolved.
                                    Northward by described up household
                                    therefore attention. Excellence decisively
                                    nay man yet impression for contrasted
                                    remarkably.
                                  </p>
                                  <p>
                                    Forfeited you engrossed but gay sometimes
                                    explained. Another as studied it to evident.
                                    Merry sense given he be arise. Conduct at an
                                    replied removal an amongst. Remaining
                                    determine few her two cordially admitting
                                    old.
                                  </p>
                                  <blockquote>
                                    Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia
                                    Curae; Pellentesque suscipit.
                                  </blockquote>
                                  <p>
                                    Tiled say decay spoil now walls meant house.
                                    My mr interest thoughts screened of outweigh
                                    removing. Evening society musical besides
                                    inhabit ye my. Lose hill well up will he
                                    over on. Increasing sufficient everything
                                    men him admiration unpleasing sex.
                                  </p>
                                  <ul className="list-style">
                                    <li>
                                      Greatest properly off ham exercise all.
                                    </li>
                                    <li>
                                      Unsatiable invitation its possession nor
                                      off.
                                    </li>
                                    <li>
                                      All difficulty estimating unreserved
                                      increasing the solicitude.
                                    </li>
                                  </ul>
                                  <p>
                                    Unpleasant astonished an diminution up
                                    partiality. Noisy an their of meant. Death
                                    means up civil do an offer wound of.
                                  </p>
                                </div>
                                <a href="fake_url" className="button">
                                  <span className="text">View Project</span>
                                  <span className="arrow" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* work item photo */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="images/works/work5.jpg"
                            className="has-popup-image"
                          >
                            <img src="images/works/work5.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-image" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a
                            href="images/works/work5.jpg"
                            className="name has-popup-image"
                          >
                            Gereal Travels
                          </a>
                          <div className="category">Photo</div>
                        </div>
                      </div>
                    </div>
                    {/* work item music */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                            className="has-popup-music"
                          >
                            <img src="images/works/work8.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-music-note" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="fake_url" className="name has-popup">
                            Daylight Entrance
                          </a>
                          <div className="category">Music</div>
                        </div>
                      </div>
                    </div>
                    {/* work item video */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a
                            href="https://vimeo.com/97102654"
                            className="has-popup-video"
                          >
                            <img src="images/works/work6.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-videocamera" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a
                            href="https://vimeo.com/97102654"
                            className="name has-popup-video"
                          >
                            Architecture
                          </a>
                          <div className="category">Video</div>
                        </div>
                      </div>
                    </div>
                    {/* work item design */}
                    <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a href="#popup-2" className="has-popup-media">
                            <img src="images/works/work7.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-images" />
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="#popup-2" className="name has-popup-media">
                            Social Website
                          </a>
                          <div className="category">Design</div>
                        </div>
                        <div
                          id="popup-2"
                          className="popup-box mfp-fade mfp-hide"
                        >
                          <div className="content">
                            <div className="image">
                              <img src="images/works/work7.jpg" alt="" />
                            </div>
                            <div className="desc">
                              <div className="post-box">
                                <h1>Mobile Application</h1>
                                <div className="blog-detail">Design</div>
                                <div className="blog-content">
                                  <p>
                                    So striking at of to welcomed resolved.
                                    Northward by described up household
                                    therefore attention. Excellence decisively
                                    nay man yet impression for contrasted
                                    remarkably.
                                  </p>
                                  <p>
                                    Forfeited you engrossed but gay sometimes
                                    explained. Another as studied it to evident.
                                    Merry sense given he be arise. Conduct at an
                                    replied removal an amongst. Remaining
                                    determine few her two cordially admitting
                                    old.
                                  </p>
                                  <blockquote>
                                    Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia
                                    Curae; Pellentesque suscipit.
                                  </blockquote>
                                  <p>
                                    Tiled say decay spoil now walls meant house.
                                    My mr interest thoughts screened of outweigh
                                    removing. Evening society musical besides
                                    inhabit ye my. Lose hill well up will he
                                    over on. Increasing sufficient everything
                                    men him admiration unpleasing sex.
                                  </p>
                                  <ul className="list-style">
                                    <li>
                                      Greatest properly off ham exercise all.
                                    </li>
                                    <li>
                                      Unsatiable invitation its possession nor
                                      off.
                                    </li>
                                    <li>
                                      All difficulty estimating unreserved
                                      increasing the solicitude.
                                    </li>
                                  </ul>
                                  <p>
                                    Unpleasant astonished an diminution up
                                    partiality. Noisy an their of meant. Death
                                    means up civil do an offer wound of.
                                  </p>
                                </div>
                                <a href="fake_url" className="button">
                                  <span className="text">View Project</span>
                                  <span className="arrow" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            {/*
    Card - Blog
  */}
            <div className="card-inner blog" id="blog-card">
              <div className="card-wrap">
                {/*
  Blog
*/}
                <div className="content blog">
                  {/* title */}
                  <div className="title">Latest Posts</div>
                  {/* content */}
                  <div className="row border-line-v">
                    {/* blog item */}
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a href="blog-post.html">
                            <img src="images/blog/blog1.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-document-text" />
                            </span>
                            <span className="date">
                              <strong>20</strong>Jun
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="blog-post.html" className="name">
                            By spite about do of do allow blush
                          </a>
                          <div className="category">Design</div>
                        </div>
                      </div>
                    </div>
                    {/* blog item */}
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a href="blog-post.html">
                            <img src="images/blog/blog2.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-document-text" />
                            </span>
                            <span className="date">
                              <strong>19</strong>Jun
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="blog-post.html" className="name">
                            Two Before Arrow Not Relied
                          </a>
                          <div className="category">Coding</div>
                        </div>
                      </div>
                    </div>
                    {/* blog item */}
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                      <div className="box-item">
                        <div className="image">
                          <a href="blog-post.html">
                            <img src="images/blog/blog3.jpg" alt="" />
                            <span className="info">
                              <span className="ion ion-document-text" />
                            </span>
                            <span className="date">
                              <strong>20</strong>Jun
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <a href="blog-post.html" className="name">
                            By spite about do of do allow blush
                          </a>
                          <div className="category">Travel</div>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            {/*
    Card - Contacts
  */}
            <div className="card-inner contacts" id="contacts-card">
              <div className="card-wrap">
                {/*
  Conacts Info
*/}
                <div className="content contacts">
                  {/* title */}
                  <div className="title">Get in Touch</div>
                  {/* content */}
                  <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                      <div className="map" id="map" />
                      <div className="info-list">
                        <ul>
                          <li>
                            <strong>Address . . . . .</strong> California, USA
                          </li>
                          <li>
                            <strong>Email . . . . .</strong> adlard@example.com
                          </li>
                          <li>
                            <strong>Phone . . . . .</strong> +123 654 78900
                          </li>
                          <li>
                            <strong>Freelance . . . . .</strong> Available
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                {/*
  Contact Form
*/}
                <div className="content contacts">
                  {/* title */}
                  <div className="title">Contact Form</div>
                  {/* content */}
                  <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                      <div className="contact_form">
                        <form id="cform" method="post">
                          <div className="row">
                            <div className="col col-d-6 col-t-6 col-m-12">
                              <div className="group-val">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div className="col col-d-6 col-t-6 col-m-12">
                              <div className="group-val">
                                <input
                                  type="text"
                                  name="email"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col col-d-12 col-t-12 col-m-12">
                              <div className="group-val">
                                <textarea
                                  name="message"
                                  placeholder="Your Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="align-left">
                            <a
                              href="fake_url"
                              className="button"
                              onclick="$('#cform').submit(); return false;"
                            >
                              <span className="text">Send Message</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </form>
                        <div className="alert-success">
                          <p>Thanks, your message is sent successfully.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
