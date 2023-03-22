import React from "react";
import "./NewsPage.css";
import News from "../../components/newsComponent/News";

const NewsPage = () => {
  return (
    <>
      <div className="wrapperContainer">
        <div className="displayContainer">
          <News />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
