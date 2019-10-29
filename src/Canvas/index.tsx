import React from 'react';
import { Stage, Layer, Group, Rect } from 'react-konva';
import Image from './Image';
import {AppContext} from "../store";


const handleCursorOver = (target: string) => {
    document.body.style.cursor = target
};

const handleCursorOut = () => {
    document.body.style.cursor = 'default'
};

const Canvas:React.FC = () => {
    const {
        state: {selectedBackground, canvasWidth, canvasHeight, patternIcons}
        }
        = React.useContext(AppContext);

    return (
        // @ts-ignore
        <Stage
            // ref={stageRef}
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
                {patternIcons.map((item: string, index: number) => {
                    return (
                        <Group
                            y={0}
                            key={index}
                            draggable
                        >
                            {[...Array(100)].map((_, index) => {
                                const x = index % 10 * 170;
                                const y = Math.floor(index / 10) * 270 ;
                                return (
                                    <Image
                                        width={55}
                                        height={55}
                                        onMouseOver={() => handleCursorOver('move')}
                                        onMouseOut={handleCursorOut}
                                        x={x}
                                        y={y}
                                        link={item}
                                    />
                                )})}
                        </Group>
                    )
                })}
            </Layer>
        </Stage>
    )
};

export default Canvas

