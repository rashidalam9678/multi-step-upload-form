
function Information({ formData, setFormData }) {
  return (
    <div className="mb-8">
      <div className="flex justify-around mt-8">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="artist">
            artist*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md '
            type="text"
            required
            placeholder="artist..."
            value={formData.artist}
            onChange={(event) =>
              setFormData({ ...formData, artist: event.target.value })
            }
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="name">
            name*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md '
            type="text"
            required
            placeholder="name..."
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="title">
            title*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md'
            type="text"
            required
            placeholder="title..."
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="description">
            description*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md '
            type="text"
            required
            placeholder="description..."
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div>

        </div>
        <div className="w-1/2 mr-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="price">
            price*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md'
            type="number"
            required
            placeholder="price..."
            value={formData.price}
            onChange={(event) =>
              setFormData({ ...formData, price: event.target.value })
            }
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1 ml-2" htmlFor="symbol">
            symbol*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md'
            type="text"
            required
            placeholder="symbol..."
            value={formData.symbol}
            onChange={(event) =>
              setFormData({ ...formData, symbol: event.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-600 text-xs  font-semibold mb-1 ml-2" htmlFor="total supply">
            total supply (0-10000)*
          </label>
          <input
            className='w-full p-2 border-2 border-gray-400 rounded-md '
            type="number"
            required
            placeholder="total supply..."
            value={formData.totalSupply}
            min={0}
            max={10000}
            onChange={(event) =>
              setFormData({ ...formData, totalSupply: event.target.value })
            }
          />
        </div>
       <div className="w-1/2 ml-2">
       <label className="block text-xs text-gray-600  font-semibold mb-1 ml-2" htmlFor="commision">
            commision (0-20 %)*
          </label>
        <input
          className='w-full p-2 border-2 border-gray-400 rounded-md '
          type="number"
          required
          placeholder="commision..."
          value={formData.commision}
          min="0"
          max="20"
          onChange={(event) =>
            setFormData({ ...formData, commision: event.target.value })
          }
        />
       </div>
      </div>
    </div>
  );
}

export default Information;