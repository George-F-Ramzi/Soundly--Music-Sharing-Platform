import { createContext } from "react";
import { IContextPlayer } from "./types.def";

let PlayerContext = createContext<IContextPlayer>({});

export default PlayerContext;
