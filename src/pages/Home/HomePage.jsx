import React from "react";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classes["home-page"]}>
      <div className="text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className={`display-1 ${classes["welcome-text"]}`}>
          Welcome To Triangle Bank
        </h1>
        <h3 className="display-4">Your interest is our Priority!!</h3>
        <p className="lead blockquote-footer">Presented By Suraj Mamdyal</p>
      </div>
    </div>
  );
}

export default HomePage;
