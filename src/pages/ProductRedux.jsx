import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProduxComp from '../components/ProduxComp'
import { fetchProducts } from '../features/product/productSlice'

function ProductRedux() {

    const dispatch = useDispatch()
    const productList = useSelector((state) => state.product.productList)

    const renderProductList = () => {
        return productList.map((product) => {
            return <ProduxComp product={product} />
        })
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <div>
                PRODUCT REDUX
            </div>
            <div className='grid grid-cols-4 gap-10 m-auto w-3/4 mt-10'>
                {renderProductList()}
            </div>
        </div>
    )
}

export default ProductRedux