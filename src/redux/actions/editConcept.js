import axios from "axios";

export const EDIT_CONCEPT = "EDIT_CONCEPT";
const api_url = import.meta.env.VITE_API_URL;
import { toast } from 'react-toastify';

export function editConcept(id, concept) {
    return async function (dispatch) {

        const token = sessionStorage.getItem("token");
        dispatch({ type: "IS_LOADING" });
        const toast1 = toast.loading('Saving changes...')
        try{
            const res = await axios.put(
                `${api_url}/transactions/${id}`,
                { concept: concept },
                {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                }
                
                );  
                toast.update(
                toast1,
                { render:"Changes saved!", type: toast.TYPE.SUCCESS, isLoading: false, autoClose: 1500})
        
                //Esto porque la api no me devuelve el concepto editado, sino el estado anterior.
                res.data.concept = concept;
                    
                return dispatch({ type: EDIT_CONCEPT, payload: res.data });

        }catch(error)
        {
            toast.update(
                toast1,
                { render:"Error saving changes", type: toast.TYPE.ERROR, isLoading: false, autoClose: 1500})
        }
        
    };
}
