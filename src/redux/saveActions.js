import { firestore } from "../firebase"

export const saveResumeCreator = () => {
    return {
        type: "SAVE_CREATOR"
    }
}

export const saveErrCreator = (err) => {
    return {
        type: "ERR_CREATOR",
        payload: err,
    }
}

export const saveCompletedCreator = (id) => {
    return {
        type: "COMPLETE_CREATOR",
        payload: id,
    }
}

export const saveResume = (uid, code, details) => {
    return (dispatch) => {

        dispatch(saveResumeCreator());

        firestore.collection("resume").add({
            uid,
            details,
            code,
        }).then((docRef) => {
            return docRef.get();
        }).then((doc) => {
            dispatch(saveCompletedCreator(doc.id));
        }).catch((err) => {
            dispatch(saveErrCreator(doc.err));
        })
    }
}