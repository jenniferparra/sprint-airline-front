import React, { useState } from 'react'

const useForm = (initialState = {}) => {

    const [dataForm, setDataForm] = useState(initialState);

    const handleChangeInput = ({target}) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value
        })
    }

    // const reset = () => {
    //     setDataForm(initialState)
    // }

  return [dataForm, handleChangeInput]
}

export default useForm