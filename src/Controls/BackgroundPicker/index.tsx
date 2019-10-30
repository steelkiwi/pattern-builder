import React from "react";
import {TwitterPicker, AlphaPicker, ColorChangeHandler, Color} from 'react-color';


interface Props {
    backgrounds: string[]
    onChange: ColorChangeHandler
    selectedBackground: Color
}

const BackgroundPicker:React.FC<Props> = ({backgrounds, onChange, selectedBackground}) => {
    return (
        <div>
            <TwitterPicker color={selectedBackground} colors={backgrounds} onChangeComplete={onChange} />
            <AlphaPicker onChange={onChange} color={selectedBackground} />
        </div>
    );
};

export default BackgroundPicker
