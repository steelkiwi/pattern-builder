import {createContext} from "react";

const initialState = {
    icons: [],
    backgrounds: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#000000'],
};


const AppContext: any = createContext(initialState);

export {initialState, AppContext}

