import axios from "axios"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import "./OrderPage.css"
import buyAgainIcon from "../../assets/images/icons/buy-again.png"
import { OrdersGrid } from "./OrdersGrid"

export function OrderPage({ cart }) {

    const [orders, setOrders] = useState(null);
    useEffect(() => {
        axios.get("/api/orders?expand=products")
            .then((response) => {
                setOrders(response.data)
            })
    }, [])

    return (
        <>
            <title>Orders</title>

            <link rel="icon" href="images/orders-favicon.png" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} buyAgainIcon={buyAgainIcon} />
            </div>
        </>
    )
}