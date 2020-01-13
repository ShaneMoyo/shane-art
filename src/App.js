import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/mystyle.css';
import "animate.css/animate.min.css";
import Navbar from './navbar'
import ScrollAnimation from 'react-animate-on-scroll';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Icon from '@mdi/react'
import waves from './img/waves.jpg';
import a1 from './img/art/a1.jpeg';
import a2 from './img/art/a2.jpeg';
import a3 from './img/art/a3.jpeg';
import a4 from './img/art/a4.jpeg';
import a5 from './img/art/a5.jpeg';
import a6 from './img/art/a6.jpeg';
import a7 from './img/art/a7.jpeg';
import a8 from './img/art/a8.jpeg';
import a9 from './img/art/a9.jpeg';
import a10 from './img/art/a10.jpeg';
import a11 from './img/art/a11.jpeg';
import a12 from './img/art/a12.jpeg';
import a13 from './img/art/a13.jpeg';
import a14 from './img/art/a14.jpeg';
import a15 from './img/art/a15.jpeg';
import a20 from './img/art/a20.jpg';
import a21 from './img/art/a21.jpg';

function App() {
  const [stickyNav, setStickyNav] = useState(false);
  const [stickyNavBackground, setStickyNavBackground] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  return (
    <div>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.com/libraries/kissui.scrollanim"/>
        <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
        <title>Shane Moyo</title>
      </head>
    <section class="hero is-info is-fullheight landing">
      <div class="hero-head">
        <Navbar
          sticky={stickyNav}
          background={stickyNavBackground}
          isActive={setActiveNav}
          active={activeNav}/>
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns ">
              <div class="column is-three-fifths is-offset-one-fifth">
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a20}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a21}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a1}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a2}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a3}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a4}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a5}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation
                  animateOut="fadeOut"
                  animateIn="fadeIn">
                  <figure class="image">
                    <img src={a6}/>
                  </figure>
                </ScrollAnimation>
                <br/>
                <figure class="image">
                  <img src={a7}/>
                </figure>
                <figure class="image">
                  <img src={a8}/>
                </figure>
                <figure class="image">
                  <img src={a9}/>
                </figure>
                <figure class="image">
                  <img src={a10}/>
                </figure>
                <figure class="image">
                  <img src={a11}/>
                </figure>
                <figure class="image">
                  <img src={a12}/>
                </figure>
                <figure class="image">
                  <img src={a13}/>
                </figure>
                <figure class="image">
                  <img src={a14}/>
                </figure>
                <figure class="image">
                  <img src={a15}/>
                </figure>



              </div>
            </div>
          </div>
      </div>
    </section>



    </div>
  );
}

export default App;
