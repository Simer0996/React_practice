import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostProduct from './component/PostProduct'

type responseTypes = {
  id: string,
  productName: string,
  productOwnerName: string,
  scrumMasterName: string,
  startDate: string,
  methodology: string,
}

function App() {

  const [data, setData] = useState<responseTypes[]>([])



  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8000/api/products');
      console.log(res.data)
      setData(res.data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  console.log(data)

  return (
    <div>{data.map(product => (
      <div>
        <p>{product.id}</p>
        <p>{product.productName}</p>
      </div>


    ))}
      <PostProduct /></div>
  )
}

export default App