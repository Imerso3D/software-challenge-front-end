import { ADD_SCAN, EDIT_SCAN, ADD_USER,EDIT_USER} from "../actions/actionTypes";
import {createScanData, createUserData} from "../data";

const initialState = {
    allScans: createScanData(),
    allUsers: createUserData(),
};

export default function(state = initialState, action) {
    console.log('action.payload: ', action.type);
    switch (action.type) {
         case ADD_SCAN: {
            const { content } = action.payload;
           console.log('Payload:',content );
            return {
                ...state,
                allScans: [...state.allScans, content],
            };
        }
        case ADD_USER: {
            const { content } = action.payload;
            console.log('Payload:',content );
            return {
                ...state,
                allUsers: [...state.allUsers, content],
            };
        }
        case EDIT_SCAN: {
            const { content } = action.payload;
            return {
                ...state,
                allScans: [...state.allScans, content],
            };
        }
        case EDIT_USER: {
            const { content } = action.payload;
            return {
                ...state,
                allUsers: [...state.allUsers, content],
            };
        }
        default:
            return state;
    }
}
