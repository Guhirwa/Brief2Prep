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
    <>
      <div className='grid justify-center'>
        <form action={handleInputData} className='mt-6'>
          <label htmlFor="inputField"></label>
          <input placeholder='e.g: beef' name='ingredient' className='p-2 w-80 border border-gray-400 rounded-sm invalid:bg-red-400' id='inputField' type="text" />
          <button className='ml-8 cursor-pointer rounded-sm p-2 text-white bg-black w-42 font-semibold transition duration-500 ease-out hover:text-black hover:bg-gray-300 hover:scale-105'>+ Add Ingredient</button>
        </form>
        {ingredient.length > 0 && <h1 className='my-6 font-bold text-xl'>Ingredients in hand:</h1>}
        <ul className='grid justify-center ml-8 list-disc list-inside'>{listOfIngredients}</ul>
      </div>
      <div className={`absolute bottom-2 ml-[2.3%] flex gap-16 bg-gray-200 p-5 w-[95%] justify-between rounded-md mt-6 transition duration-300 ease-in-out ${ingredient.length > 0 ? "opacity-100" : "opacity-10"}`}>
        <div className='grid'>
          <h1 className='font-bold text-xl'>Ready for a Recipe?</h1>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className='bg-amber-600 h-fit py-1 px-4 rounded-md text-white font-semibold'>Get a recipe</button>
      </div>
    </>
  )
}

export default InputField