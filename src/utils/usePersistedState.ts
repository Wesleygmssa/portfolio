import { useState, useEffect, Dispatch, SetStateAction } from "react";

function usePersistedState<T>(initialState: T) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem("@theme");

        if (storageValue) {
            return JSON.parse(storageValue);
        }
        return initialState;
    });

    useEffect(() => {
        localStorage.setItem("@theme", JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default usePersistedState;
