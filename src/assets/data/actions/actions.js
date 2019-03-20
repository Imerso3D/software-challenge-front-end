import {ADD_SCAN, ADD_USER, EDIT_SCAN, EDIT_USER} from "./actionTypes";

export const addScan = content => ({
    type: ADD_SCAN,
    payload: {
        content
    }
});

export const EditScan = content => ({
    type: EDIT_SCAN,
    payload: {
             content
    }
});

export const addUser = content => ({
    type: ADD_USER,
    payload: {
        content
    }
});

export const EditUser = content => ({
    type: EDIT_USER,
    payload: {
        content
    }
});

