import React from 'react'

const InputField = () => {
  return (
    <form className='mt-14 flex justify-center gap-6'>
        <label htmlFor="inputField"></label>
        <input placeholder='e.g: beef' name='ingredient' className='p-2 w-80 border border-gray-400 rounded-sm' id='inputField' type="text" />
        <button className='rounded-sm p-2 text-white bg-black w-42'>+ Add Ingredient</button>
    </form>
  )
}

export default InputField