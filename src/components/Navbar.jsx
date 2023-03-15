import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart } from "../features/cart/cartSlice"

function Navbar() {

    const navigate = useNavigate()
    const cartList = useSelector((state) => state.cart.cartList)
    const dispatch = useDispatch()

    // supaya data di cart gak hilang setelah refresh
    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    return (
        <div className="justify-between p-5 px-14 flex flex-row bg-black text-white">
            <div>
                <p
                    onClick={() => { navigate("/") }}
                >BETA APP</p>
            </div>
            <div className="flex flex-row gap-10">
                <p onClick={() => { navigate("/") }}>HOME</p>
                <p onClick={() => { navigate("/pokemon") }}>POKEMON</p>
                <p onClick={() => { navigate("/search") }}>SEARCH</p>
                <p onClick={() => { navigate("/counter") }}>COUNTER</p>
                <p onClick={() => { navigate("/learn-form") }}>FORM</p>
                <p onClick={() => { navigate("/user") }}>USERS</p>
                <p onClick={() => { navigate("/learn-storage") }}>STORAGE</p>
                <p onClick={() => { navigate("/counter-redux") }}>COUNT REDUX</p>
                <p onClick={() => { navigate("/product-redux") }}>PRODUX</p>
                <p onClick={() => { navigate("/cart") }}>CART {cartList.length}</p>
            </div>
        </div>
    )
}

export default Navbar