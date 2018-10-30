import React from "react"
import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'

export default ({ children }) => <div className="app-wrapper">
<Helmet>
<script type="text/javascript">{`
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var cHeight = document.documentElement.clientHeight;
    var sHeight = document.documentElement.scrollHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
document.body.style.backgroundColor = "#DCDCDC";
if(!document.getElementById("BlogPost")){
  if (sHeight > 2*cHeight){
    if (scrolled > 20 && scrolled < 90){
      console.log('true');
      document.body.style.transition = "400ms";
      document.body.style.backgroundColor = "darkblue";
      document.getElementById("header").style.filter = "invert(100%)";
    }
    else if (scrolled > 90) {
      document.body.style.transition = "800ms";
      document.body.style.backgroundColor = "crimson";
      document.getElementById("header").style.filter = "invert(100%)";
    }
    else{
      document.body.style.transition = "400ms";
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.filter = "invert(0%)";
      document.body.style.color = "black";
    }
    }
  }
}
`}</script>
<script type="text/javascript">{`
    burger = document.getElementById("burger");
    burger.addEventListener('click', function(e) {
e.preventDefault();

alert("0+0+0+0+00");
});
)
  `}</script>
</Helmet>
<style
dangerouslySetInnerHTML={{__html: `
#header > nav > div > div > span{
  font-size: 0.8em;
      opacity: 0;
    position: absolute;
    animation: textSlide 10s linear 0s infinite normal none running;
  }

#header > nav > div > div > span:nth-child(2){
animation-delay:2.5s ;
  }

#header > nav > div > div > span:nth-child(3){
animation-delay: 5s;
  }

#header > nav > div > div > span:nth-child(4){
    animation-delay:7.5s;
  }

  @keyframes textSlide {
    0% {
    opacity: 0;
}
6% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
}
10% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
}
25% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
}
29% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}
80% {
    opacity: 0;
}
100% {
    opacity: 0;
}
  }
  `}} />
<Header/>
    {children}
<Footer/>
</div>
