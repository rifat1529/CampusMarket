import Navbar from '../../components/Navbar/Navbar'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

import { useState } from 'react'

function Marketplace() {

  const [search, setSearch] =
    useState('')

  const [category, setCategory] =
    useState('All')

  const [sort, setSort] =
    useState('default')

  return (
    <>
      <Navbar />

      <div className='container'>

        <h1
          style={{
            marginTop: '40px'
          }}
        >
          Marketplace Feed
        </h1>

        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginTop: '30px',
            flexWrap: 'wrap'
          }}
        >

          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={e =>
              setSearch(e.target.value)
            }
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              minWidth: '250px'
            }}
          />

          <select
            value={category}
            onChange={e =>
              setCategory(e.target.value)
            }
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #ddd'
            }}
          >

            <option value='All'>
              All Categories
            </option>

            <option value='Jersey'>
              Jersey
            </option>

            <option value='Watch'>
              Watch
            </option>

            <option value='Perfume'>
              Perfume
            </option>

            <option value='Gadget'>
              Gadget
            </option>

          </select>

          <select
            value={sort}
            onChange={e =>
              setSort(e.target.value)
            }
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #ddd'
            }}
          >

            <option value='default'>
              Sort By
            </option>

            <option value='low-high'>
              Price Low → High
            </option>

            <option value='high-low'>
              Price High → Low
            </option>

          </select>

        </div>

        <ProductGrid
          search={search}
          category={category}
          sort={sort}
        />

      </div>
    </>
  )
}

export default Marketplace