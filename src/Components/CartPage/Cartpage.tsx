import React from "react";
import Products from "../CartProducts.json"
function Cart()
{
    return(
        <div>
            <div>
                <h3>Free Shipping on orders above Rs. 40,000/-</h3>
                <h3>Cash on Delivery (COD) available</h3>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div>
                    <table>
                        <thead>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quality</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>item1</td>
                                <td>$456</td>
                                <td>1</td>
                                <td>$456</td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                            Subtotal
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart

