import { data } from '../data/data.js'

import { useState } from 'react'

const Food = () => {
	const [foods, setFoods] = useState(data)

	// Filter Type burger/pizza/etc
	const filtertType = category => {
		setFoods(
			data.filter(food => {
				return food.category === category
			})
		)
	}

	// Filter by price
	const filterPrice = price => {
		setFoods(
			data.filter(item => {
				return item.price === price
			})
		)
	}

	return (
		<div className='max-w-[1640px] m-auto px-4 py-12 '>
			<h1 className='text-orange-600 font-bold text-4xl text-center'>
				Top Rated Menu Itens
			</h1>

			{/* Filter Row */}
			<div className='flex flex-col lg:flex-row justify-between'>
				{/* Filter Type */}
				<div>
					<p className='font-bold text-gray-700'>Filter Type</p>
					<div className='flex justify-between flex-wrap'>
						<button onClick={()=> setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							All
						</button>
						<button onClick={() => filtertType('burger')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							Burgers
						</button>
						<button onClick={() => filtertType('pizza')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							Pizza
						</button>
						<button onClick={() => filtertType('salad')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							Salads
						</button>
						<button onClick={() => filtertType('chicken')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							Chicken
						</button>
					</div>
				</div>

				{/* Filter Price */}

				<div>
					<p className='font-bold text-gray-700'>Filter Price</p>
					<div className='flex justify-between max-w-[390px] w-full'>
						<button onClick={() => filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							$
						</button>
						<button onClick={() => filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							$$
						</button>
						<button onClick={() => filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							$$$
						</button>
						<button onClick={() => filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-200'>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/* Display foods */}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 max-[390px]:grid-cols-1'>
				{foods.map((food, index) => (
					<div
						key={index}
						className='border shadow-lg hover:scale-105 duration-300 rounded-xl'
					>
						<img
							className='w-full h-[200px] object-cover rounded-t-xl cursor-pointer'
							src={food.image}
							alt={food.name}
						/>
						<div className='flex justify-between px-2 py-4'>
							<p className='font-bold'>{food.name}</p>

							<p>
								<span className='bg-orange-500 text-white p-1 rounded-full whitespace-nowrap'>
									{food.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Food
