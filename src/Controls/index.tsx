import React, {useEffect, useState} from "react";

import {AppContext} from "../store";
import IconsList from "./IconsList";
import BackgroundPicker from "./BackgroundPicker";
import Export from "./Export";

const Controls: React.FC = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  const {
    state: {selectedBackground},
    icons,
    backgrounds,
    canvasRef,
    callbacks: {onDownload},
    handlers: {addPatternIcon, changeBackground},
  } = React.useContext(AppContext);

  // TODO: Make normal canvasRef interface
  const handleCanvasResize = (canvasRef: any) => {
    setTimeout(() => {
      const {width, height} = canvasRef.current.attrs;
      setCanvasSize({
        width,
        height
      })
    }, 0)
  };

  useEffect(() => {
    handleCanvasResize(canvasRef)
  }, [canvasRef]);

  return (
    <div className="pb__controls">
      <IconsList onIconClick={addPatternIcon} icons={icons}/>
      <BackgroundPicker selectedBackground={selectedBackground} onChange={changeBackground} backgrounds={backgrounds}/>
      {canvasRef && <Export canvasSize={canvasSize} canvasRef={canvasRef} onDownload={onDownload}/>}
    </div>
  )
};

export default Controls
