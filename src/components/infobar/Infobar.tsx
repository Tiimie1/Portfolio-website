import React from "react";
import "./Infobar.css";

const Infobar = ({ keySequence }: { keySequence: string }) => {
  return (
    <div className="infobarbg">
      <p className="infobarText">See the most trending news on p600</p>
      <p className="keySeqText">{keySequence}</p>
    </div>
  );
};

export default Infobar;
