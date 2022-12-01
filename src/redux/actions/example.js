// import axios from "axios";
// export const ADD_FAVORITE = "ADD_FAVORITE";


// export function addFavorite(idUser, idProduct) {
//     return async function (dispatch) {
//         try {
//             const body = {
//                 idUser,
//                 idProduct
//             }
//             const addFav = await axios.post("https://techstore123.herokuapp.com/favorite", body)
            
//             return dispatch({ type: ADD_FAVORITE, payload: addFav.data });
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// };