import {createContext} from "react";
import {DEFAULT_BACKGROUNDS_PALETTE} from "./constants";

interface IInitialState {
  icons: string[];
  backgrounds: string[];
}

const initialState: IInitialState = {
  icons: [],
  backgrounds: DEFAULT_BACKGROUNDS_PALETTE
};

// TODO: Create AppContext interface
const AppContext: any = createContext(initialState);

export {initialState, AppContext}

