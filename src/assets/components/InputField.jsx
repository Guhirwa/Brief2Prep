import React from 'react'
import deleteBtn from '../images/deleteBtn.svg'

const InputField = () => {

    const[ingredient, setIngredient] = React.useState([])

    function handleInputData(formData) {
        const newIngredient = formData.get("ingredient")
        if(!newIngredient) {
            alert("You're not allowed to submit empty")
            return
        }
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }

    const listOfIngredients = ingredient.map((ingre, index) => (
       <div className='flex gap-4 mb-3 -ml-64' key={index}>
        <li>{ingre}</li>
        <button onClick={() => {
          setIngredient(prev => prev.filter((element, elementIndex) => elementIndex !== index))
        }} 
          className='cursor-pointer'><img className='bg-black rounded-full p-1 h-auto w-6' src={deleteBtn} alt="Delete Button" /></button>
      </div>
    ))

  return (
    <div className='flex flex-col items-center'>
        <form action={handleInputData} className='mt-6'>
        <label htmlFor="inputField"></label>
        <input placeholder='e.g: beef' name='ingredient' className='p-2 w-80 border border-gray-400 rounded-sm' id='inputField' type="text" />
        <button className='ml-8 cursor-pointer rounded-sm p-2 text-white bg-black w-42'>+ Add Ingredient</button>
    </form>

    <ul className='mt-10 list-disc list-inside'>{listOfIngredients}</ul>
    </div>
  )
}

export default InputField