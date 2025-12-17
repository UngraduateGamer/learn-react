import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardAllInfo from '../components/CardAllInfo'

const ShowCategory = () => {
  const { id } = useParams()

  const [data, setData] = useState([])
  const [selectedSorted, setSelectedSorted] = useState('')
  const [sortedData, setSortedData] = useState([])

  // ✅ Fetch API data
  useEffect(() => {
    async function getData() {
      const url = `https://dummyjson.com/products/category/${id}`
      const result = await axios.get(url)
      setData(result.data.products)
      setSortedData(result.data.products) // default
    }
    getData()
  }, [id])

  // ✅ Sort whenever selection OR data changes
  useEffect(() => {
    let temp = [...data]

    switch (selectedSorted) {
      case 'low':
        temp.sort((a, b) => a.price - b.price)
        break

      case 'high':
        temp.sort((a, b) => b.price - a.price)
        break

      case 'discount':
        temp.sort((a, b) => b.discountPercentage - a.discountPercentage)
        break

      case 'rating':
        temp.sort((a, b) => b.rating - a.rating)
        break

      default:
        break
    }

    setSortedData(temp)
  }, [selectedSorted, data])

  return (
    <div>
      <Header />
      <Navbar />

      <div className="category flex w-[90%] mx-auto py-5 gap-10">
        {/* LEFT FILTER */}
        <div className="left w-[20%] bg-gray-50 h-fit">
          <h2 className="font-semibold text-xl my-3 border-b border-gray-200 px-5">
            Filters
          </h2>

          <form className="flex flex-col gap-3 p-5 text-sm">
            {[
              { label: 'Price (Low to High)', value: 'low' },
              { label: 'Price (High to Low)', value: 'high' },
              { label: 'Rating', value: 'rating' },
              { label: 'Discount', value: 'discount' }
            ].map(item => (
              <label key={item.value} className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="filter"
                  value={item.value}
                  checked={selectedSorted === item.value}
                  onChange={(e) => setSelectedSorted(e.target.value)}
                />
                {item.label}
              </label>
            ))}
          </form>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="right w-[80%]">
          <div className="card-container flex flex-wrap gap-3">
            {sortedData.map((elem, idx) => (
              <CardAllInfo key={idx} data={elem} hidden={false} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShowCategory
