import react, { useState } from 'react'
import '../styles/Home.css'
import { Header } from '../components/Header'

export const Home = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState(0)
  return (
    <div>
      <Header />
      <h1>Home</h1>
      {/* Header  */}
      {/* row of inputs: name, location, price, search button */}
      <div className='addRestaurant'>
        <form>
          <span>
            <label>Name</label>
            <input type='search'></input>
          </span>
          <span>
            <label>Location</label>
            <input type='search'></input>
          </span>
          <span>
            <label>Price</label>
            <select defaultValue={'none'}>
              <option value='$'>$</option>
              <option value='$$'>$$</option>
              <option value='$$$'>$$$</option>
            </select>
          </span>
          <button type='button' onClick={() => console.log('clicked')}>
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
