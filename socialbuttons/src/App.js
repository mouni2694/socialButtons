import React from "react";
import "./App.css";

const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const App = () => {
  return (
    <div className="social-buttons-container">
      <div className="content-container">
        <h1 className="heading">Social BUttons</h1>
        <div className="buttons-container">
          <Button buttonText="Like" className="like-button" />
          <Button buttonText="Comment" className="comment-button" />
          <Button buttonText="Share" className="share-button" />
        </div>
      </div>
    </div>
  );
};

export default App;
