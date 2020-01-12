import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/mystyle.css';
import "animate.css/animate.min.css";
import Navbar from './navbar'
import ScrollAnimation from 'react-animate-on-scroll';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Icon from '@mdi/react'


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

      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              afterAnimatedIn={() => setStickyNav(false)}
              afterAnimatedOut={() => setStickyNav(true)}
              duration={1}>
              <h1 class="subtitle">Hey there, I'm</h1>
              <h2 class="title">Shane Moyo</h2>
              <h1 class="subtitle profession">A Full Stack Software Engineer</h1>
            </ScrollAnimation>
            <br/><br/><br/><br/><br/>
          </div>
      </div>
    </section>

    <section class="hero is-fullheight main">
    <ScrollAnimation
      animateOut="fadeOut"
      animateIn="fadeIn">
      <Navbar
        sticky={stickyNav}
        background={stickyNavBackground}
        isActive={setActiveNav}
        active={activeNav}/>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        duration={1}>
      <div class="hero-body has-text-centered">
      <div class="container has-text-centered">
        <div class="columns ">
          <div class="column" >
            <div class="container" id="projects">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                duration={1}>
                <br/><br/><br/>
                <div class="box black is-outlined has-text-white" >
                  <h1 class="title">Projects</h1>
                  <a class="button is-white is-outlined" href="https://github.com/ShaneMoyo">
                    <span class="icon">
                      <Icon path={mdiGithubCircle}
                      size={2}
                      color="white"
                      />
                    </span>
                    <br/>
                    <span>Github</span>
                  </a>
                  <h1 class="title">Projects</h1>
                  <a class="button is-white is-outlined" href="https://github.com/ShaneMoyo">
                    <span class="icon">
                      <Icon path={mdiRocket}
                      size={2}
                      color="white"
                      />
                    </span>
                    <span>Deployed Projects</span>
                  </a>
                </div>
              </ScrollAnimation>
            </div>



            <div class="container" id="education">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce={true}
                duration={1}>
                <br/><br/><br/>
                <div class="box black is-outlined has-text-white" >
                  <h1 class="title">Education</h1>
                  <h1 class="subtitle profession">This page is under construction</h1>
                  <h1 class="subtitle profession">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?
                  </h1>
                </div>
              </ScrollAnimation>
            </div>




            <div class="container" id="experience">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce={true}
                duration={1}>
                <br/><br/><br/>
                <div class="box black is-outlined has-text-white" >
                  <h1 class="title">Experience</h1>
                  <h1 class="subtitle profession">This page is under construction</h1>
                  <h1 class="subtitle profession">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?
                  </h1>
                </div>
              </ScrollAnimation>
            </div>



            <div class="container" id="about">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce={true}
                duration={2}>
                <br/><br/><br/>
                <div class="box black is-outlined has-text-white" >
                  <h1 class="title">About Me</h1>
                  <h1 class="subtitle profession">This page is under construction</h1>
                  <h1 class="subtitle profession">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?
                  </h1>
                </div>
              </ScrollAnimation>
            </div>
          </div>

      </div>
      </div>
      </div>
      </ScrollAnimation>
      </ScrollAnimation>
    </section>

    </div>
  );
}

export default App;
