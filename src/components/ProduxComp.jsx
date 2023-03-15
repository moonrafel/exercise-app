import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function ProduxComp(props) {

    const { product } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(addToCart({
            productName: product.productName,
            productImage: product.productImage,
            price: product.price,
            quantity: 1
        }))
    }

    return (
        <div className='flex flex-row p-auto m-auto'>
            <div className=" text-black p-5">

                <img
                    src={product.productImage}
                    style={{ width: 300, height: 300, objectFit: 'cover' }}
                    className='m-auto'
                    onClick={() => { navigate("/product/" + product.id) }} />

                <p
                    className='text-xl font-bold'
                    onClick={() => { navigate("/product/" + product.id) }}
                >{product.productName}</p>

                <p
                    className='text-lg'
                >{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>

                <p
                    className='text-sm'
                >{product.description}</p>

                <div className='flex gap-2 my-3'>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                        onClick={() => { navigate("/product/" + product.id) }}
                    >DETAILS</button>
                    <button
                        className=' bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'
                        onClick={() => { dispatch(addCart()) }}
                    >ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProduxComp