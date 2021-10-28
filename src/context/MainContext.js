import React, { useReducer } from 'react';
export const mainContext = React.createContext()

const INIT_STATE = {
    adminLogin: "developer21",
    adminPassword: '123456',


}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}
const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    return (
        <mainContext.Provider value={{
            adminLogin: state.adminLogin,
            adminPassword: state.adminPassword,
        }}>
            {children}

        </mainContext.Provider>
    );
};

export default MainContextProvider;