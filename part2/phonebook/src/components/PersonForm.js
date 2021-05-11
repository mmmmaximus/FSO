import React from 'react'
import Input from './Input'

const PersonForm = ({changeName, changeNumber, addContact}) => {
  return (
    <form>
      <Input id='name' text='name: ' func={changeName} />
      <Input id='number' text='number: ' func={changeNumber} />
      <div>
        <button onClick={addContact} type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
