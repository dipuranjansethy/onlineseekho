import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from "./reducers/otherReducer";
import { profileReducer } from "./reducers/profileReducer";
import { subscriptionReducer, userReducer } from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit"

const Store=configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription:subscriptionReducer,
        admin:adminReducer,
        other:otherReducer,
    }
})
 
export default Store;
export const server="https://edtech2-6u7y.onrender.com/api/v1";
// export const server="https://edtech-r1dx.onrender.com/api/v1";

// export const server="http://localhost:4000/api/v1";