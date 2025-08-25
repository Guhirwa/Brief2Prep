import React from 'react'

const InputField = () => {

    const[ingredient, setIngredient] = React.useState(["Beef", "Meat"])

    function handleInputData(formData) {
        const newIngredient = formData.get("ingredient")
        if(!newIngredient) {
            alert("You're not allowed to submit empty")
            return
        }
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    } 

    const listOfIngredients = ingredient.map(ingre => <li key={ingre}>{ingre}</li>)

  return (
    <>
        <form action={handleInputData} className='mt-14 flex justify-center gap-6'>
        <label htmlFor="inputField"></label>
        <input placeholder='e.g: beef' name='ingredient' className='p-2 w-80 border border-gray-400 rounded-sm' id='inputField' type="text" />
        <button className='rounded-sm p-2 text-white bg-black w-42'>+ Add Ingredient</button>
    </form>

    <ul className='w-fit mx-auto mt-10 list-disc list-inside'>{listOfIngredients}</ul>
    </>
  )
}

export default InputField