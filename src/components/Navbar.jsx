import React, { useState } from 'react'
import {
	AiFillTag,
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineSearch,
} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
			{/* Left side */}
			<div className='flex items-center'>
				<div onClick={() => setNav(!nav)} className='cursor-pointer'>
					<AiOutlineMenu size={30} className='mt-[5px]' />
				</div>
				<h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 whitespace-nowrap'>
					Best <span className='font-bold'>Eats</span>
				</h1>
				<div
					className='hidden lg:flex items-center bg-gray-200
                rounded-full p-1 text-[14px]'
				>
					<p className='bg-black text-white rounded-full p-2'>Delivery</p>
					<p className='p-2'>Pickup</p>
				</div>
			</div>

			{/* search input */}
			<div
				className='bg-gray-200 rounded-full flex items-center px-2 w-[200x]
            sm:w-[400px] lg:w-[500px]'
			>
				<AiOutlineSearch size={20} />
				<input
					className='bg-transparent p-2 w-full focus:outline-none'
					type='text'
					placeholder='Search foods'
				/>
			</div>

			{/* Cart button */}
			<button className='bg-black text-white hidden md:flex items-center rounded-full py-2 hover:bg-orange-500 duration-300 hover:border-orange-300'>
				<BsFillCartFill size={20} className='mr-2' /> Cart
			</button>

			{/* Mobile */}

			{nav ? (
				<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
			) : (
				''
			)}

			<div
				className={
					nav
						? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
				}
			>
				<AiOutlineClose
					onClick={() => setNav(!nav)}
					size={30}
					className='absolute right-4 top-4 cursor-pointer'
				/>
				<h1 cl className='text-2xl p-4 whitespace-nowrap'>
					Beast <span className='font-bold'>Eats</span>
				</h1>
				<nav>
					<ul className='flex flex-col p-4 text-gray-800'>
						<a
							className='text-xl py-4 flex max-w-[110px] hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<TbTruckDelivery size={25} className='mr-4' /> Orders
						</a>

						<a
							className='text-xl py-4 flex max-w-[110px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<MdFavorite size={25} className='mr-4' /> Favorites
						</a>

						<a
							className='text-xl py-4 flex max-w-[110px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<FaWallet size={25} className='mr-4' /> Wallet
						</a>

						<a
							className='text-xl py-4 flex max-w-[110px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<MdHelp size={25} className='mr-4' /> Help
						</a>

						<a
							className='text-xl py-4 flex max-w-[160px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<AiFillTag size={25} className='mr-4' /> Promotions
						</a>

						<a
							className='text-xl py-4 flex max-w-[150px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<BsFillSaveFill size={25} className='mr-4' /> Best Ones
						</a>

						<a
							className='text-xl py-4 flex max-w-[160px]  hover:text-orange-500 duration-300'
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
						>
							<FaUserFriends size={25} className='mr-4' /> Invite Friends
						</a>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
