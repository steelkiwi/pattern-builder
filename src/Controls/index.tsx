import React from "react";
import IconsList from "./IconsList";

import {AppContext} from "../store";
import BackgroundPicker from "./BackgroundPicker";


const Controls:React.FC = () => {
    const {
        state: {selectedBackground},
        icons, backgrounds,
        handlers: {addPatternIcon, changeBackground}
    }
        = React.useContext(AppContext);

   return (
       <div>
           <IconsList addPatternIcon={addPatternIcon} icons={icons} />
           <BackgroundPicker selected={selectedBackground} onChange={changeBackground} backgrounds={backgrounds} />
       </div>
   )
};

export default Controls