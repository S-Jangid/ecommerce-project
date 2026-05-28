import dayjs from "dayjs";
import { amountFormat } from "../../utils/amount-format";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({deliveryOptions, cart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                })
                return (
                    <div className="cart-item-container" key={cartItem.productId}>
                        <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem}/>

                            <div className="delivery-options">
                                <div className="delivery-options-title">
                                    Choose a delivery option:
                                </div>

                                {deliveryOptions.map((deliveryOption) => {
                                    let deliveryPrice = "Free Shipping";

                                    if (deliveryOption.priceCents > 0) {
                                        deliveryPrice = `${amountFormat(deliveryOption.priceCents)} - Shipping`;
                                    }
                                    return (
                                        <div key={deliveryOption.id} className="delivery-option">
                                            <input type="radio"
                                                checked={deliveryOption.id === cartItem.deliveryOptionId}
                                                className="delivery-option-input"
                                                name={`delivery-option-${cartItem.productId}`} />
                                            <div>
                                                <div className="delivery-option-date">
                                                    {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(" dddd, MMMM D")}
                                                </div>
                                                <div className="delivery-option-price">
                                                    {deliveryPrice}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}