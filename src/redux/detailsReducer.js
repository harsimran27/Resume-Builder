let initialState = {
    fName:"",
    lName:"",
    Email:"",
    City:"",
    state:"",
    PhoneNo:"",
    Degree:"",
    CGPA:"",
    Institute_Name:"",
    year:"",
    isPublic:false,
}

let detailsReducer = (state=initialState,action)=>{
    switch(action.type){
        case "SET_DETAILS":
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default detailsReducer;