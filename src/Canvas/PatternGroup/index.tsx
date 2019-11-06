import React from 'react';
import {Group} from "react-konva";

import Image from '../Image';
import {handleCursorOutIcon, handleCursorOverIcon} from "../../helpers";

interface Props {
  image: string;
  index: number;
  imageSize: number;
  imageOffset: number;
}

interface CartesianCoordinates {
  x: number;
  y: number;
}

const PatternGroup: React.FC<Props> = ({image, index, imageSize, imageOffset}) => {
  const elementsInGrid = 20;
  const imagesAmount = 150;

  const getImagePosition = (index: number): CartesianCoordinates => {
    return {
      x: index % elementsInGrid * imageOffset,
      y: Math.floor(index / elementsInGrid) * imageOffset
    }
  };

  const getImagesGrid = () => {
    const arr = [];
    for (let i = 0, l = imagesAmount; i < l; i++) {
      const {x, y} = getImagePosition(i);
      arr.push(
        <Image
          width={imageSize}
          height={imageSize}
          onMouseOver={handleCursorOverIcon}
          onMouseOut={handleCursorOutIcon}
          x={x}
          y={y}
          link={image}
          key={i}
        />
      )
    }
    return arr;
  };

  const imagesGrid = getImagesGrid();

  return (
    <Group y={index * imageSize} draggable>
      {imagesGrid}
    </Group>
  );
};

export default PatternGroup;
