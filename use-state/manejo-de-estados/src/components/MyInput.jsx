import {useState} from 'react'

const MyInput = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="myInput">Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)}
        />

      <h1>{name}</h1>
    </div>
  )
}

export default MyInput