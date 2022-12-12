import { useState } from 'react'
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { Field } from "formik"
import { editConcept } from '../../../redux/actions/editConcept'

import { useDispatch } from 'react-redux'

export const EditMovement = ({ concept, id }) => {

    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault()
        setIsEditing(!isEditing)
    }

    const handleSubmit = ({concept}) => {

       dispatch(editConcept(id, concept)) 

        setIsEditing(!isEditing)
    }


    return (
        <div className="flex space-x-6">

            {isEditing ?
                <>

                    <Formik
                        initialValues={{
                            concept: ""
                        }}
                        validationSchema={Yup.object({
                            concept: Yup.string()
                                .min(4, "Must contain a min length of 4 characters")
                                .max(15, "Must contain a max length of 15 characters")
                                .required("Concept cannot be empty")
                        })}
                        onSubmit={values => handleSubmit(values)}
                    >
                        <Form className="flex flex-row ">


                            <Field name="concept"
                            >
                                {({ field, form, meta }) => (
                                    <div>
                                        <div className="flex flex-row ">
                                            <input type="text" {...field} placeholder={concept}
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                            />
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0  border-gray-700  hover:bg-gray-900 dark:bg-dark2 dark:border-gray-700 dark:text-primary dark:hover:bg-primary dark:hover:text-dark1"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>

                                            </button>
                                            <button onClick={handleEdit} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-dark2 dark:border-gray-700 dark:text-primary dark:hover:bg-primary dark:hover:text-dark1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            </button>
                                        </div>

                                        {meta.touched &&
                                            meta.error && <div className="text-error text-xs">{meta.error}</div>}
                                    </div>
                                )}

                            </Field>





                        </Form>

                    </Formik>

                </>


                :
                <div className=' flex flex-row text-dark1 dark:text-white'>
                    <button onClick={handleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    <div>
                        {concept}
                    </div>

                </div>

            }

        </div>
    )
}
