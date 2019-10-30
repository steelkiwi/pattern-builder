import React, {useEffect, useState} from 'react';
import {downloadURI} from "../../helpers/helpers";



interface CanvasSize {
    width: number;
    height: number;
}

interface Props {
    canvasRef: any,
    onDownload?: (img: string) => void;
    canvasSize: CanvasSize
}



const Export:React.FC<Props> = ({canvasRef, onDownload, canvasSize}) => {
    const canvas = canvasRef.current;

    const [imageSize, setImageSize] = useState<CanvasSize>({
        ...canvasSize
    });

    useEffect(() => {
        setImageSize({...canvasSize})
    }, [canvasSize]);

    function downloadImage(width: number, height: number): void {
        const dataURL = canvas.getStage().toDataURL({
            x:0,
            y:0,
            width: width,
            height: height,
        });
        if(onDownload) {
            onDownload(dataURL)
        } else {
            downloadURI(dataURL, 'pattern.png')
        }
    }

    const handleSizeChange = ({ target: { name, value }}: React.ChangeEvent<HTMLInputElement>) => {
        setImageSize({
            ...imageSize,
            [name]: Number(value),
        })
    };

    const { width, height } = imageSize;

    return  (
        <div>
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
            <button onClick={() => downloadImage(width, height)}>Download</button>
        </div>
    )
};

export default Export;