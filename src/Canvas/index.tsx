import React, {useEffect, useState} from 'react';
import { Stage, Layer, Group, Rect } from 'react-konva';
import Image from './Image';
import {AppContext} from "../store";
import {handleCursorOut, handleCursorOver} from "../helpers/helpers";

interface CanvasSizes {
    canvasWidth: number;
    canvasHeight: number;
}

const Canvas:React.FC = () => {
    const [canvasSizes, setCanvasSizes] = useState<CanvasSizes>({
        canvasWidth: 0,
        canvasHeight: 0,
    });
    const {canvasWidth, canvasHeight} = canvasSizes;
    const {
        state: {selectedBackground, patternIcons},
        canvasRef,
        }
        = React.useContext(AppContext);

    useEffect(() => {
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
                {patternIcons.map((item: string, index: number) => {
                    return (
                        <Group
                            y={0}
                            key={index}
                            draggable
                        >
                            {[...Array(150)].map((_, index) => {
                                const x = index % 20 * 170;
                                const y = Math.floor(index / 20) * 170 ;
                                return (
                                    <Image
                                        width={55}
                                        height={55}
                                        onMouseOver={handleCursorOver}
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

