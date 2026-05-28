import { Fragment } from "react"
import { Link } from "react-router"
import dayjs from "dayjs"
import { amountFormat } from "../../utils/amount-format"

export function OrdersGrid( { orders, buyAgainIcon } ) {
    return (
        <div className="orders-grid">
            {orders && orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <div className="order-header">
                            <div className="order-header-left-section">
                                <div className="order-date">
                                    <div className="order-header-label">Order Placed:</div>
                                    <div>{dayjs(order.orderTimeMs).format("dddd D")}</div>
                                </div>
                                <div className="order-total">
                                    <div className="order-header-label">Total:</div>
                                    <div>{amountFormat(order.totalCostCents)}</div>
                                </div>
                            </div>

                            <div className="order-header-right-section">
                                <div className="order-header-label">Order ID:</div>
                                <div>{order.id}</div>
                            </div>
                        </div>

                        <div className="order-details-grid">
                            {order.products.map((productElement) => {
                                return (
                                    <Fragment key={productElement.productId}>
                                        <div className="product-image-container">
                                            <img src={productElement.product.image} />
                                        </div>

                                        <div className="product-details">
                                            <div className="product-name">
                                                {productElement.product.name}
                                            </div>
                                            <div className="product-delivery-date">
                                                {`Arriving on: ${dayjs(productElement.estimatedDeliveryTimeMS).format("dddd D")}`}
                                            </div>
                                            <div className="product-quantity">
                                                {`Quantity: ${productElement.quantity}`}
                                            </div>
                                            <button className="buy-again-button button-primary">
                                                <img className="buy-again-icon" src={buyAgainIcon} />
                                                <span className="buy-again-message">Add to Cart</span>
                                            </button>
                                        </div>

                                        <div className="product-actions">
                                            <Link to="/tracking">
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </Link>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}