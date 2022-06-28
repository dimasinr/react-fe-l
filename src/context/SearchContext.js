// import { useReducer } from "react";
// import { createContext } from "react";

// const INITIAL_STATE = {
//     name_bb: undefined
// };

// export const SearchContext = createContext(INITIAL_STATE)

// const SearchReducer = (state, action) => {
//     switch(action.type){
//         case "NEW_SEARCH";
//             return action.payload
//         case "RESET_SEARCH";
//             return INITIAL_STATE
//             default:
//                 return state;
//     }
// };

// export const SearchContextProvider = ({childer}) => {
//     const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

//     return (
//         <SearchContext.Provider
//         value={{ 
//             name_bb: state.name_bb,
//             dispatch, 
//         }}
//         >
//         </SearchContext.Provider>
//     )
// }