import React, {useEffect, useState, useContext} from 'react';
import {Stage, Layer, Rect} from 'react-konva';

import {AppContext} from "../store";
import PatternGroup from "./PatternGroup";

interface CanvasSizes {
  canvasWidth: number;
  canvasHeight: number;
}

const Canvas: React.FC = () => {
  const {
    state: {selectedBackground, patternIcons},
    canvasRef,
  } = useContext(AppContext);

  const [canvasSizes, setCanvasSizes] = useState<CanvasSizes>({
    canvasWidth: 0,
    canvasHeight: 0,
  });
  const {canvasWidth, canvasHeight} = canvasSizes;

  useEffect(() => {
    // TODO: Get sizes with another algorithm
    const canvasWrapper = canvasRef.current.content.parentNode.parentNode;
    const canvasWidth: number = canvasWrapper.offsetWidth;
    const canvasHeight: number = canvasWrapper.offsetHeight;
    setCanvasSizes({
      canvasWidth,
      canvasHeight,
    })
  }, [canvasRef]);

  return (
    <Stage
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
    >
      <Layer>
        <Rect
          width={canvasWidth}
          height={canvasHeight}
          fill={selectedBackground}
        >
        </Rect>
        {patternIcons.map((item: string, index: number) => <PatternGroup image={item} key={index} index={index}/>)}
      </Layer>
    </Stage>
  )
};

export default Canvas

