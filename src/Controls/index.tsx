import React, {useEffect, useState} from "react";
import IconsList from "./IconsList";

import {AppContext} from "../store";
import BackgroundPicker from "./BackgroundPicker";
import Export from "./Export";


const Controls:React.FC = () => {
    const [canvasSize, setCanvasSize] = useState({
        width: 0,
        height: 0,
    });
    const {
        state: {selectedBackground},
        icons,
        backgrounds,
        canvasRef,
        callbacks: { onDownload },
        handlers: {addPatternIcon, changeBackground},
    } = React.useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            const { width, height } = canvasRef.current.attrs;
            setCanvasSize({
                width,
                height
            })
        }, 0)
    }, [canvasRef]);

    return (
       <div className="pb__controls">
           <IconsList addPatternIcon={addPatternIcon} icons={icons} />
           <BackgroundPicker selectedBackground={selectedBackground} onChange={changeBackground} backgrounds={backgrounds} />
           {canvasRef && <Export canvasSize={canvasSize} canvasRef={canvasRef} onDownload={onDownload}/>}
       </div>
   )
};

export default Controls