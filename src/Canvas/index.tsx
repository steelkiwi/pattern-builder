import React from 'react';
import { Stage, Layer, Group, Rect } from 'react-konva';
import Image from './Image';
import {Color} from "react-color";

interface Props {
    stageRef: any
    width: number
    height: number
    selectedBackground: Color
}

const Canvas:React.FC<Props> = ({stageRef, width, height, selectedBackground}) => {
    return (
        <Stage
            width={width}
            height={height}
        >
            <Layer>
                <Rect
                    width={width}
                    height={height}
                    fill={selectedBackground}
                >

                </Rect>
            </Layer>
        </Stage>
    )
};

export default Canvas

