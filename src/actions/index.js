export const addUsers = (users)=> {
    return {
        type: "ADD_USERS",
        payload: users
    }
}
export const loadPositions = (positions)=> {
    return {
        type: "LOAD_POSITIONS",
        payload: positions
    }
}