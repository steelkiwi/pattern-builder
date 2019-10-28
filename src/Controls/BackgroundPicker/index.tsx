import React from "react";
import {TwitterPicker, AlphaPicker, ColorChangeHandler, Color} from 'react-color';


interface Props {
    backgrounds: string[]
    onChange: ColorChangeHandler
    selected: Color
}

const BackgroundPicker:React.FC<Props> = ({backgrounds, onChange, selected}) => {
    console.log(backgrounds);
    return (
        <div>
            <TwitterPicker colors={backgrounds} onChangeComplete={onChange} />
            <AlphaPicker color={selected} />
        </div>
    );
};

export default BackgroundPicker
