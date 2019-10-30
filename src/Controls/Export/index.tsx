import React, {useEffect, useState} from 'react';

import {downloadURI} from "../../helpers";

interface CanvasSize {
  width: number;
  height: number;
}

interface Props {
  canvasRef: any,
  onDownload?: (img: string) => void;
  canvasSize: CanvasSize
}

const Export: React.FC<Props> = ({canvasRef, onDownload, canvasSize}) => {
  const canvas = canvasRef.current;
  const [imageSize, setImageSize] = useState<CanvasSize>({
    ...canvasSize
  });
  const {width, height} = imageSize;

  useEffect(() => {
    setImageSize({...canvasSize})
  }, [canvasSize]);

  const downloadImage = (): void => {
    const dataURL = canvas.getStage().toDataURL({
      x: 0,
      y: 0,
      width,
      height
    });
    if (onDownload) {
      onDownload(dataURL)
    } else {
      downloadURI(dataURL, 'pattern.png')
    }
  };

  const handleSizeChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
    setImageSize({
      ...imageSize,
      [name]: Number(value),
    })
  };

  return (
    <div className="pb__export">
      <input
        type="number"
        value={width}
        name="width"
        onChange={handleSizeChange}
      />
      <input
        type="number"
        name="height"
        value={height}
        onChange={handleSizeChange}
      />
      <button type="button" onClick={downloadImage}>Download</button>
    </div>
  )
};

export default Export;
