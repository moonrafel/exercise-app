import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getProductById } from '../features/product/productSlice'

function ProduxPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const product = useSelector((state) => state.product.product)

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return (
        <div>
            <div>
                <button
                    onClick={() => navigate("/product-redux")}>BACK</button>
            </div>
            <div>
                Product {id}
                {product.productName}
            </div>
        </div>
    )
}

export default ProduxPage