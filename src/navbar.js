import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool } from '@mdi/js'
import Icon from '@mdi/react'

function navbar(props) {

  let navClass = "navbar is-fixed-top animated fadeIn";

  return (
    <nav class={navClass}>
      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <p class="title large">S. Moyo</p>
          </a>
          <span class={props.active ? "navbar-burger  is-active burger" : "navbar-burger  burger"} data-target="navbarMenu" onClick={() => props.isActive(!props.active)}>
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div id="navbarMenu" class={props.active ? "navbar-menu is-active animated fadeIn" : "navbar-menu"}>
          <div class="navbar-end">
            <span class="navbar-item">
              <a class="subtitle is-black is-outlined" href="#selected" onClick={() => props.isActive(!props.active)}>

                <span>Selected Work</span>
              </a>
            </span>
              <span class="navbar-item">
                <a class="subtitle is-black is-outlined" href="#projects" onClick={() => props.isActive(!props.active)}>

                  <span>Sketch Book</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="subtitle is-black is-outlined" href="#education" onClick={() => props.isActive(!props.active)}>

                  <span>Contact</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="subtitle is-black is-outlined" href="#about" onClick={() => props.isActive(!props.active)}>

                  <span>About Me</span>
                </a>
              </span>
            </div>
          </div>
      </div>
    </nav>

  );
}
export default navbar;
