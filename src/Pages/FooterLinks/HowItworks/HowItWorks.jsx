import React from "react";
import LoginLayout from "../../../Component/Layout/LoginLayout";
import classes from"./style.module.css"
const HowItWorks = () => {
  return (
    <LoginLayout>
      <div className={classes.outer_container_wrapper}>
        <h1>How it works</h1>
      </div>
      {/* <div className={classes.discription_Wrapper}>
        <h2>Introduction</h2>
        <p>
          Welcome to EVANGADI FORUM, a platform where technology enthusiasts
          connect, share, and solve problems collaboratively. Our forum is
          designed to help you find answers, contribute your knowledge, and
          engage with a community of like-minded individuals.
        </p>

        <h3>Creating an Account</h3>
        <p>
          To become a member of our community, please click the 'Sign Up' button
          located at the top right of the page. Enter your email address, select
          a username, and create a password. You will receive a confirmation
          email to activate your account.
        </p>

        <h3>Exploring Categories</h3>
        <p>
          Our forum is organized into various categories. These include:
          <ul>
            <li>
              Categories displaying questions asked by other forum members.
            </li>
            <li>Pages with detailed views of individual questions.</li>
            <li>Areas where you can post your own questions.</li>
          </ul>
          Use the navigation bar to access the home page and to log out from the
          forum.
        </p>
      </div>
      <div className={classes.lower_description_Wrapper}>
        <h3>Searching for Questions</h3>
        <p>
          If you are seeking specific questions, utilize the search bar located
          at the top right of the home page. Enter relevant keywords to find
          threads and posts that match your query.
        </p>

        <h3>Posting a New Question</h3>
        <p>
          To post a new question, provide a clear and descriptive title, and
          include a detailed explanation of your question or topic. Click 'Post'
          to submit your inquiry.
        </p>

        <h3>Replying to a Question</h3>
        <p>
          To respond to a question, open the specific question you are
          interested in and type your response in the text box provided. Click
          'Post Answer' to share your insights or provide a solution.
        </p>

        <h3>Community Guidelines</h3>
        <p>
          To ensure a positive experience for all members, please adhere to our
          community guidelines. Be respectful, avoid spam, and contribute
          constructively to discussions.
        </p>

        <h3>Contact and Support</h3>
        <p>
          For additional information, please visit our Evangadi Networks page or
          contact our support team via the Contact Info section located at the
          bottom of the page. We are here to assist you with any questions or
          concerns you may have.
        </p>

        <p>
          We are excited to have you join our community! Dive in, share your
          knowledge, and enjoy the discussions. Happy posting!
        </p>
      </div> */}
      <div className={classes.discription_Wrapper}>
  <h2>Introduction</h2>
  <p>
    Welcome to Q&A Forum, a unique hub where curious minds ask, answer, and solve 
    challenges together. Unlike other forums, Q&A Forum blends community spirit with 
    practical solutions, empowering you to share knowledge and connect with a dedicated 
    network.
  </p>

  <h3>Creating an Account</h3>
  <p>
    Get started with Q&A Forum by clicking 'Sign Up' at the top right. Add your email, 
    choose a username, and set a password. A confirmation email will unlock your access.
  </p>

  <h3>Exploring Categories</h3>
  <p>
    Q&A Forum organizes discussions into clear sections:
    <ul>
      <li>Questions from our active members.</li>
      <li>In-depth views of each question.</li>
      <li>Spaces to post your own queries.</li>
    </ul>
    Use the navigation bar to jump home or log out.
  </p>
</div>

<div className={classes.lower_description_Wrapper}>
  <h3>Searching for Questions</h3>
  <p>
    Need answers fast? Q&A Forum’s search bar at the top right lets you enter keywords 
    to pinpoint relevant discussions—quicker than on many other forums.
  </p>

  <h3>Posting a New Question</h3>
  <p>
    Share your question with a simple title and clear details. Click 'Post' to tap into 
    Q&A Forum’s responsive community.
  </p>

  <h3>Replying to a Question</h3>
  <p>
    Got a solution? Open a question, type your answer in the text box, and hit 'Post Answer' 
    to help others—Q&A Forum thrives on your input.
  </p>

  <h3>Community Guidelines</h3>
  <p>
    Keep Q&A Forum friendly: stay respectful, avoid spam, and contribute meaningfully—standards 
    that set us apart from the rest.
  </p>

  <h3>Contact and Support</h3>
  <p>
    Have questions? Visit our Q&A Forum Networks page or reach our support team via the 
    Contact Info section below. We’re here to make your experience better than elsewhere.
  </p>

  <p>
    Excited to welcome you to Q&A Forum! Dive in, share your know-how, and enjoy a 
    community that outshines the ordinary. Happy posting!
  </p>
</div>
    </LoginLayout>
  );
};

export default HowItWorks;
