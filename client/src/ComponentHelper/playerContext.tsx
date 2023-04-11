import { createContext } from "react";
import { ContextPlayerType } from "../lib/types.def";

let PlayerContext = createContext<ContextPlayerType>({});

export default PlayerContext;
