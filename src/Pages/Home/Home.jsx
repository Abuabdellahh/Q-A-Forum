import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import React from "react";
import classes from "./home.module.css";
// import logo from "../../Asset/image/evangadi-logo-home.png";
import logo from "../../Asset/image/Q&A forum-logo.png";
import img from "../../Asset/image/newpic.jpg";
const Home = () => {
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.nav_wrapper}>
          <nav>
            <img src={logo} alt="" />
            <ul>
              <li>
                <Link to=""></Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </ul>
            <div>
              <Link to={"./login"} className={classes.login_btn}>
                SIGN IN
              </Link>
            </div>
          </nav>
        </div>
        {/* <div className={classes.content}>
          <h1 className={classes.anim}>
            Evangadi
            <br />
            Forum
          </h1>
          <p className={classes.anim}>
            Welcome to Evangadi Forum—your premier tech community for global
            networking and learning. Join us to connect with peers, collaborate
            on projects, and enhance your professional growth. Explore the
            features that can elevate your tech journey today.
          </p>
          <Link to="/login" className={`${classes.login_btn} ${classes.anim}`}>
            Join Now
          </Link>
        </div> */}
        <div className={classes.content}>
  <h1 className={classes.anim}>
    <span className={classes.titleMain}>Q&A</span>
    <span className={classes.titleSub}>Forum</span>
  </h1>
  
  <p className={`${classes.anim} ${classes.introText}`}>
    Welcome to your dedicated Q&A platform - ask questions, share knowledge, 
    and find clear solutions. Engage with a community-driven space where:
  </p>

  <ul className={`${classes.anim} ${classes.featureList}`}>
    <li>📚 Students get academic help</li>
    <li>👩🏫 Teachers share expertise</li>
    <li>💡 Everyone learns through discussion</li>
  </ul>

  <Link to="/login" className={`${classes.login_btn} ${classes.anim}`}>
            Join Now
          </Link>
</div>
        <img
          src={img}
          alt=""
          className={`${classes.feature_img} ${classes.anim}`}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
