import React, {useEffect, useState} from 'react'
import axios from "axios"
import Product from "../Product"
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fechData = async () => {
            try {
                setLoading(true)
                const {data} = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }

        }
        fechData()
    }, [])
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant = "danger">{error}</MessageBox>
            ) : (
            <div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
            )}
        </div>

    )
}

export default HomeScreen