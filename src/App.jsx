import "./styles.css";
import insta from "./img/insta.png";
import profile from "./img/profile.png";
import prof from "./img/prof.jpg";
import explore from "./img/explore.png";
import plus from "./img/plus.png";
import arrow from "./img/arrow.png";
import home from "./img/home.png";
import heart from "./img/heart.png";
import set from "./img/set.png";
import save from "./img/save.png";
import tag from "./img/icon.jpg";
import gallery from "./img/gallery.jpg";
import React from "react";

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default function App() {
  return (
    <div className="App">
      <div class="top">
        <div class="m">
          <div class="m1">
            <img src={insta} alt="insta" />
          </div>
          <div class="m1">
            <input
              class="clear"
              type="text"
              name=""
              value=""
              placeholder="search"
            />
          </div>
          <div class="m1">
            <ul>
              <li>
                <img src={home} class="prof3" alt="" />
              </li>
              <li>
                <img src={arrow} class="prof" alt="" />
              </li>
              <li>
                <img src={plus} class="prof" alt="" />
              </li>
              <li>
                <img src={explore} class="prof1" alt="" />
              </li>
              <li>
                <img src={heart} class="prof1" alt="" />
              </li>
              <li>
                <img src={profile} class="prof2 dropbtn" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="n">
        <div class="n1">
          <img src={prof} alt="" />
        </div>
        <div class="n2">
          <p>kavya_dhars</p>
        </div>
        <div class="n2">
          <button>Edit Profile</button>
        </div>
        <div class="n2">
          <img src={set} class="set" alt="" />
        </div>
        <div class="n3">
          <ul>
            <li>0 posts </li>
            <li>108 followers </li>
            <li>123 following </li>
          </ul>
          <br></br>
          <h3>Kavyadharsini</h3>
        </div>
      </div>
      <div class="s">
        <div class="tabs">
          <Tabs>
            <Tab label="POSTS">
              <div>
                <img src={gallery} class="post" alt="" />
              </div>
            </Tab>
            <Tab label="SAVED">
              <div>
                <img src={save} class="save" alt="" />
              </div>
            </Tab>
            <Tab label="TAGGED">
              <div>
                <img src={tag} class="tag" alt="" />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
