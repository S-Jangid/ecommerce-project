import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./OrderSummary.jsx";
import { CheckoutHeader } from "./CheckoutHeader.jsx";
import "./CheckoutPage.css"
import { PaymentSummary } from "./PaymentSummary.jsx";

export function CheckoutPage({ cart }) {

    const [ deliveryOptions, setDeliveryOptions ] = useState([]);
    const [ paymentSummary, setPaymentSummary ] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        .then((response)=>{
            setDeliveryOptions(response.data);
        })

        axios.get('/api/payment-summary')
        .then((response) => {
            console.log(response.data);
            setPaymentSummary(response.data);
        })

    }, [])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" href="images/cart-favicon.png" />
            < CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

                    <PaymentSummary paymentSummary={paymentSummary}/>
                </div>
            </div>
        </>
    );
}