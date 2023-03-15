import React from 'react'
import { useSelector } from 'react-redux'
import CartComp from '../components/CartComp'

function Cart() {

    const cartList = useSelector((state) => state.cart.cartList)

    const renderCartList = () => {
        return cartList.map((item) => {
            return <CartComp item={item} />
        })
    }

    return (
        <div>
            <div>
                <p>CART</p>
                {renderCartList()}
            </div>
        </div>
    )
}

export default Cart