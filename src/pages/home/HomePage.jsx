import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from "../../components/Header"
import { ProductsGrid } from './ProductsGrid'
// import { products } from "../../starting-code/data/products"
import "./HomePage.css"
import checkmarkIcon from "../../assets/images/icons/checkmark.png"

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        
        axios.get('/api/products')
        .then((response) => {
            setProducts(response.data);
        })
    }, [])
    

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href=" images/home-favicon.png" />

            <Header 
                cart={cart}
            />

            <div className="home-page">
                <ProductsGrid products={products} checkmarkIcon={checkmarkIcon}/>
            </div>
        </>
    )

}