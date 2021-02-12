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
export const deletePositions = ()=> {
    return {
        type: "DELETE_POSITIONS"
    }
}
export const setPage = ()=> {
    return {
        type: "SET_PAGE"
    }
}

export const setShowModal = ()=>{
    return {
        type: "SET_SHOW_MODAL"
    }
}