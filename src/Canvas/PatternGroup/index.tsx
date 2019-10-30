import React from 'react';
import {Group} from "react-konva";

import Image from '../Image';
import {handleCursorOutIcon, handleCursorOverIcon} from "../../helpers";

interface Props {
  image: string;
  index: number;
}

interface CartesianCoordinates {
  x: number;
  y: number;
}

const PatternGroup: React.FC<Props> = ({image, index}) => {
  const elementsInGrid = 20;
  const imageOffset = 170;
  const imagesAmount = 150;
  const imageSize = 55;

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
