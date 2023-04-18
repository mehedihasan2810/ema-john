// import { createSlice } from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";
// const gooleProvider = new GoogleAuthProvider();


// const initialState = {
//   user: false,
//   isAuthLoading: true,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {

//     createUser: (state, action) => {
//       console.log(action.payload);
//       const email = action.payload.email;
//       const password = action.payload.password;
      
//       console.log(email, password)

//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const loggedUser = userCredential.user;
//           console.log(loggedUser);
//         })
//         .catch((error) => {
//           console.log(error.message);
//         });
//     },

//     googleLogin: (state, action) => {
        
//         signInWithPopup(auth, gooleProvider)
//         .then((result) => {
//          const loggedUser = result.user;
//           console.log(loggedUser)
//         })
//         .catch((error) => {
//          console.log(error.message)
//         })
//     },

//     setLoginStatus: (state, action) => {
//       state.user = action.payload
//     },
//     setIsAuthLoading: (state, action) => {
//       state.isAuthLoading = action.payload
//     }

//   },
// });





// export const { 
//     createUser,
//     googleLogin,
//     setLoginStatus,
//     setIsAuthLoading
//  } = authSlice.actions;



//  * check onAuthStateChanged
// * alternative = custom-hooks/useAuth.js
//  export const checkAuthStatus = () => (dispatch) => {
//   const unsubscribe = onAuthStateChanged(auth, user => {
//     if (user) {
//       dispatch(setLoginStatus(true))
//       dispatch(setIsAuthLoading(false))
//     } else {
//       dispatch(setLoginStatus(false))
//       dispatch(setIsAuthLoading(false))
//     }
//   });

//   return unsubscribe;
// }


// export default authSlice.reducer;
