import { useContext } from "react";
import TaqueriaContext from "../context/taqueriaProvider";

const useTaqueria = () => {
    return useContext(TaqueriaContext)
}

export default useTaqueria