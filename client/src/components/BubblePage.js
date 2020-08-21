import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import FetchBubbles from "./FetchBubbles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    FetchBubbles().then((res) => {
      setColorList(res.data);
    });
  }, [update]);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        update={update}
        setUpdate={setUpdate}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
