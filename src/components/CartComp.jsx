import React from 'react'
import { deleteCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartComp(props) {

    const { item } = props
    const dispatch = useDispatch()

    return (
        <div className='flex justify-center '>
            <div className='flex flex-row gap-3 p-2 w-1/3 m-auto'>
                <img
                    src={item.productImage}
                    style={{ width: 300, height: 300, objectFit: 'cover' }}
                />
                <div className='flex gap-3 p-2 m-auto'>
                    <p
                        className='text-xl font-bold'
                    >{item.productName}</p>

                    <p
                        className='text-lg'
                    >{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>

                    <div className='flex gap-2 my-3 justify-end'>
                        <button
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                            onClick={() => { dispatch(deleteCart(item.id)) }}
                        >DELETE</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartComp