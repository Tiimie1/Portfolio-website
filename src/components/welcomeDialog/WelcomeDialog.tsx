import React from "react";
import "./WelcomeDialog.css";

const WelcomeDialog = ({ showContinue }: { showContinue: boolean }) => {
  return (
    <div className="dialog">
      <div className="dialoContent">
        <h2>WELCOME TO MY WEBSITE</h2>
        <p>
          Website is inspired by 90's teletext. You can navigate through website
          by pressing the right sequence of numbers on your keyboard. Also it is
          in beta, so expect some things not to work
        </p>
        <p
          className="closeMessage"
          style={{ display: showContinue ? "block" : "none" }}
        >
          PRESS 999 TO CLOSE THIS MESSAGE
        </p>
      </div>
    </div>
  );
};

export default WelcomeDialog;
