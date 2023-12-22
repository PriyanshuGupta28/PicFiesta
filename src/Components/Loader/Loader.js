import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div class="scene">
        <div class="forest">
          <div class="tree tree1">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
          </div>

          <div class="tree tree2">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>

          <div class="tree tree3">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>

          <div class="tree tree4">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>

          <div class="tree tree5">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>

          <div class="tree tree6">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>

          <div class="tree tree7">
            <div class="branch branch-top"></div>
            <div class="branch branch-middle"></div>
            <div class="branch branch-bottom"></div>
          </div>
        </div>

        <div class="tent">
          <div class="roof"></div>
          <div class="roof-border-left">
            <div class="roof-border roof-border1"></div>
            <div class="roof-border roof-border2"></div>
            <div class="roof-border roof-border3"></div>
          </div>
          <div class="entrance">
            <div class="door left-door">
              <div class="left-door-inner"></div>
            </div>
            <div class="door right-door">
              <div class="right-door-inner"></div>
            </div>
          </div>
        </div>

        <div class="floor">
          <div class="ground ground1"></div>
          <div class="ground ground2"></div>
        </div>

        <div class="fireplace">
          <div class="support"></div>
          <div class="support"></div>
          <div class="bar"></div>
          <div class="hanger"></div>
          <div class="smoke"></div>
          <div class="pan"></div>
          <div class="fire">
            <div class="line line1">
              <div class="particle particle1"></div>
              <div class="particle particle2"></div>
              <div class="particle particle3"></div>
              <div class="particle particle4"></div>
            </div>
            <div class="line line2">
              <div class="particle particle1"></div>
              <div class="particle particle2"></div>
              <div class="particle particle3"></div>
              <div class="particle particle4"></div>
            </div>
            <div class="line line3">
              <div class="particle particle1"></div>
              <div class="particle particle2"></div>
              <div class="particle particle3"></div>
              <div class="particle particle4"></div>
            </div>
          </div>
        </div>

        <div class="time-wrapper">
          <div class="time">
            <div class="day"></div>
            <div class="night">
              <div class="moon"></div>
              <div class="star star1 star-big"></div>
              <div class="star star2 star-big"></div>
              <div class="star star3 star-big"></div>
              <div class="star star4"></div>
              <div class="star star5"></div>
              <div class="star star6"></div>
              <div class="star star7"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
