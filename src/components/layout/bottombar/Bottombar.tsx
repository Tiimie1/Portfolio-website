import React from "react";
import Infobar from "../../infobar/Infobar";
import "./Bottombar.css";

const Bottombar = ({ keySequence }: { keySequence: string }) => {
  return (
    <>
      <div className="dividerWrapper">
        <div className="divider" />
      </div>
      <div className="wrapperContainer1">
        <Infobar keySequence={keySequence} />
      </div>
    </>
  );
};

export default Bottombar;
