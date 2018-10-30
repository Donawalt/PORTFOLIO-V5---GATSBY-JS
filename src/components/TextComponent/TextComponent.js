import React from "react";
import AOS from "aos";
import classNames from "classnames";
import { Watch } from "scrollmonitor-react";
import Link from 'gatsby-link'


import "aos/dist/aos.css";
import "./TextComponent.css";

const ViewStyle = props => (
  <div className={props.componentStyle} data-aos={props.aos}>
    <p>{props.text}</p>
  </div>
);

export default Watch(
  class TextComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 2000
      });
    }

    componentDidUpdate() {
      this.aos.refresh();
    }

    render() {
      const aosClass = classNames({
        "aos-init": true,
        "viewport-purple": !this.props.isInViewport,
        "aos-animate viewport-blue": this.props.isInViewport
      });

      return (
        <div>
          {this.props.isInViewport ? (
            <ViewStyle
              aos="slide-left"
              componentStyle={aosClass}
            />
          ) : (
            <ViewStyle
              aos="slide-right"
              componentStyle={aosClass}
            />
          )}
          {this.props.children}
        </div>
      );
    }
  }
);
