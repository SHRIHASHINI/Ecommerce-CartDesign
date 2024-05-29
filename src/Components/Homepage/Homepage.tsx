import { useState } from "react";
import Product from '../CartProducts.json';
import Shoppingicon from "../../assets/images/shoppingicon.png";
import Logoimg from '../../assets/images/logo.png'
import './Homepage.css';
import Searchicon from '../../assets/images/searchicon.png';
import ShippingIcon from '../../assets/images/shippingbag.png';
import Addicon from '../../assets/images/addmember.png';
import Favourite from '../../assets/images/favourites.png';
import Wishlist from '../../assets/images/wishlist.png';
import { useNavigate } from "react-router-dom";
import UpperIcon from '../../assets/images/upperarrow.png';
import Menubar from '../../assets/images/menubar.png';

interface searchdata {
    Name: string

}
function Cart() {
    const [SearchData, setSearchData] = useState<searchdata>({
        Name: ""
    })
   const [count,setCount]=useState(0)
    const [Products, setProducts] = useState(Product)
    const filteritems = (items: any) => {
        const Updateitems = Product.filter((e: any) => {
            return e.category === items
        })
        setProducts(Updateitems)
    }
    const handlefilterbrands = (dataitems: any) => {
        const Uploaditems = Product.filter((e: any) => {
            return e.category === dataitems.category && e.brand === dataitems.brand
        })
        setProducts(Uploaditems)
    }
    const handlesearchform = (element: any) => {
        const { name, value } = element.target;
        setSearchData
            ({
                ...SearchData,
                [name]: value
            })
    }
    const handleselect=(value:number)=>
        {
            const PriceCategory= Products.filter((values:any)=>
            {
                if(value==1)
                    {
                        return values.price > 5000 && values.price < 10000
                    }
            })
            setProducts(PriceCategory)
        }
    const handlesearchdata = () => {
        filteritems(SearchData.Name.toLowerCase())
    }
    const handlepath = () => {
        navigate('/login')
    }
    
    const handlecount=(count:any)=>
    {
        
    }
    const navigate = useNavigate()
    return (
        <div className="homepagemain">
            <div className="Floating-content">
                <h2>Welcome to Neo!!! Your one stop shop for Electronic store</h2>
            </div>
            <div className="top-footer">
                <div className="nav-logo">
                    <img src={Logoimg} />
                </div>
                <div className="nav-content">
                    <ul>
                        <li><a href="/" onClick={() => { setProducts(Product) }} >Store</a></li>
                        <li><a href="#" onClick={() => { filteritems("mobile") }} >Mobile</a></li>
                        <li><a href="#" onClick={() => { filteritems("laptop") }} >Laptops</a></li>
                        <li><a href="#" onClick={() => { filteritems("tab") }} >Tablets</a></li>
                        <li><a href="#" onClick={() => { filteritems("audio") }} >Audio</a></li>
                        <li><a href="#" onClick={() => { filteritems("gaming") }} >Games</a></li>
                        <li><a href="#" onClick={() => { filteritems("tv") }} >Television</a></li>
                    </ul>
                </div>
                <div className="nav-search">
                    <form autoComplete="off">
                        <input
                            placeholder="search your items"
                            type="text"
                            name="Name"
                            value={SearchData.Name}
                            onChange={handlesearchform} />
                    </form>
                    <div className="nav-searchicon">
                        <img src={Searchicon} onMouseDown={handlesearchdata} />
                    </div>
                </div>
                <div className="nav-icons">
                    <div>
                    <img src={ShippingIcon} />
                    <p>{count}</p>
                    </div>
                    <img src={Addicon} onMouseDown={handlepath} />
                    {/* <div>
                    <img src={Favourite} />
                    <p>{count}</p>
                    </div> */}
                    <img src={Menubar} className="menubar"/>
                </div>
            </div>


            <div className="Container-homepage">
                <div className="column1">
                    <div className="filter">
                        {/* <div>
                            <img src={Menubar}/>
                        </div> */}
                        <form className="filter-form">
                            <div className="form-text">
                                <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Tablets Brands</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <li> <input
                                            type="checkbox"
                                            name="samsung"
                                            value="samsung"
                                            onClick={() => { handlefilterbrands({brand:"samsung",category:"tab"}) }} />Samsung
                                        </li>
                                        <li><input
                                            type="checkbox"
                                            name="oneplus"
                                            value="oneplus"
                                            onClick={() => { handlefilterbrands({brand:"oneplus",category:"tab"}) }} />OnePlus</li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Television Brands</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <li> <input
                                            type="checkbox"
                                            name="samsung"
                                            value="samsung"
                                            onClick={() => { handlefilterbrands({brand:"samsung",category:"tv"}) }} />Samsung
                                        </li>
                                        <li><input
                                            type="checkbox"
                                            name="redmi"
                                            value="redmi"
                                            onClick={() => { handlefilterbrands({brand:"redmi",category:"tv"}) }} />Redmi</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="mi"
                                                value="mi"
                                                onClick={() => { handlefilterbrands({brand:"mi",category:"tv"}) }} />Mi</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="acer"
                                                value="acer"
                                                onClick={() => { handlefilterbrands({brand:"acer",category:"tv"}) }} />Acer</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="LG"
                                                value="LG"
                                                onClick={() => { handlefilterbrands({brand:"LG",category:"tv"}) }} />LG</li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Gaming Brands</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <li> <input
                                            type="checkbox"
                                            name="microsoft"
                                            value="microsoft"
                                            onClick={() => { handlefilterbrands({brand:"microsoft",category:"gaming"}) }} />Microsoft
                                        </li>
                                        <li><input
                                            type="checkbox"
                                            name="logitechG"
                                            value="logitechG"
                                            onClick={() => { handlefilterbrands({brand:"logitech G",category:"gaming"}) }} />Logitech G</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="Amkette"
                                                value="Amkette"
                                                onClick={() => { handlefilterbrands({brand:"Amkette",category:"gaming"}) }} />Amkette</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="ant esports"
                                                value="ant esports"
                                                onClick={() => { handlefilterbrands({brand:"ant esports",category:"gaming"}) }} />Ant Esports</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="CredevZone"
                                                value="CredevZone"
                                                onClick={() => { handlefilterbrands({brand:"CredevZone",category:"gaming"}) }} />CredevZone</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="sony"
                                                value="sony"
                                                onClick={() => { handlefilterbrands({brand:"sony",category:"gaming"}) }} />Sony</li>
                                       
                                    </ul>
                                </div>        



                                {/*  */}
                                <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Mobile Brands</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <li> <input
                                            type="checkbox"
                                            name="samsung"
                                            value="samsung"
                                            onClick={() => { handlefilterbrands({brand:"samsung",category:"mobile"}) }} />Samsung
                                        </li>
                                        <li><input
                                            type="checkbox"
                                            name="xiaomi"
                                            value="xiaomi"
                                            onClick={() => { handlefilterbrands({brand:"xiaomi",category:"mobile"}) }} />Xiaomi</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="realme"
                                                value="realme"
                                                onClick={() => { handlefilterbrands({brand:"realme",category:"mobile"}) }} />Realme</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="oneplus"
                                                value="oneplus"
                                                onClick={() => { handlefilterbrands({brand:"oneplus",category:"mobile"}) }} />Oneplus</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="vivo"
                                                value="vivo"
                                                onClick={() => { handlefilterbrands({brand:"vivo",category:"mobile"}) }} />Vivo</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="apple"
                                                value="apple"
                                                onClick={() => { handlefilterbrands({brand:"apple",category:"mobile"}) }} />Apple</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="iQOO"
                                                value="iQOO"
                                                onClick={() => { handlefilterbrands({brand:"iQOO",category:"mobile"}) }} />iQOO</li>

                                    </ul>
                                </div>
                                {/*  */}
                                <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Audio Brands</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <li> <input
                                            type="checkbox"
                                            name="sony"
                                            value="sony"
                                            onClick={() => { handlefilterbrands({brand:"sony",category:"audio"}) }} />Sony
                                        </li>
                                        <li><input
                                            type="checkbox"
                                            name="urbanista"
                                            value="urbanista"
                                            onClick={() => { handlefilterbrands({brand:"urbanista",category:"audio"}) }} />Urbanista</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="xiaomi"
                                                value="xiaomi"
                                                onClick={() => { handlefilterbrands({brand:"xiaomi",category:"audio"}) }} />Xiaomi</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="boat"
                                                value="boat"
                                                onClick={() => { handlefilterbrands({brand:"boat",category:"audio"}) }} />Boat</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="sennheiser"
                                                value="sennheiser"
                                                onClick={() => { handlefilterbrands({brand:"Sennheiser",category:"audio"}) }} />Sennheiser</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="apple"
                                                value="apple"
                                                onClick={() => { handlefilterbrands({brand:"apple",category:"audio"}) }} />Apple</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="panasonic"
                                                value="panasonic"
                                                onClick={() => { handlefilterbrands({brand:"panasonic",category:"audio"}) }} />Panasonic</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="mivi"
                                                value="mivi"
                                                onClick={() => { handlefilterbrands({brand:"mivi",category:"audio"}) }} />Mivi</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="jbl"
                                                value="jbl"
                                                onClick={() => { handlefilterbrands({brand:"jbl",category:"audio"}) }} />JBL</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="Soundcore"
                                                value="Soundcore"
                                                onClick={() => { handlefilterbrands({brand:"soundcore",category:"audio"}) }} />Soundcore</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="marshell"
                                                value="marshell"
                                                onClick={() => { handlefilterbrands({brand:"Marshell",category:"audio"}) }} />Marshell</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="Bang & Olufsen"
                                                value="Bang & Olufsen"
                                                onClick={() => { handlefilterbrands({brand:"Bang & Olufsen",category:"audio"}) }} />SonyBang & Olufsen</li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="denon"
                                                value="denon"
                                                onClick={() => { handlefilterbrands({brand:"Denon",category:"audio"}) }} />Denon</li>
                                    </ul>
                                </div>
                                {/* <div className="audio-disabled">
                                    <div className="side-display">
                                        <h4>Filters</h4>
                                        <img src={UpperIcon} />
                                    </div>
                                    <ul>
                                        <label>Price</label>
                                      
                                        <select >
                                            <option></option>
                                            <option value="1">Rs. 5000 to Rs.10000 </option>
                                            <option value="2">Rs. 11000 to Rs.20000 </option>
                                            <option>Rs. 21000 to Rs.30000 </option>
                                            <option>Rs. 31000 to Rs.40000 </option>
                                            <option>Rs. 41000 to Rs.50000 </option>
                                            <option>Rs. 51000 to Rs.70000 </option>
                                            <option>Rs. 71000 to Rs.100000 </option>
                                            <option>Rs. 100000 and above</option>
                                        </select>
                                        <label>Storage</label><br />
                                        <select>
                                            <option></option>
                                            <option>4GB + 64GB</option>
                                            <option>6GB + 64GB</option>
                                            <option>8GB + 128GB</option>
                                            <option>8GB + 256GB</option>
                                            <option>12GB + 256GB</option>
                                            <option>12GB + 512GB</option>
                                        </select>
                                    </ul>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="bottom">
                        <div className="cart-products">

                            {Products.map((element: any) => {
                                const { title, image, name, price, id } = element
                                return <div className="card" key={id} >
                                    <div className="content">
                                        <div className="image-content">
                                            <img src={image}></img>
                                        </div>
                                        <div className="card-content">
                                            {/* <img className="wishicon" src={Wishlist} /> */}
                                            <div className="title">
                                                <span >{title}{name}</span>
                                            </div>
                                            <p className="price"> Price  {price}</p>
                                            {/* <div className="quantity">
                                                <label>Quantity</label>
                                                <select className="options">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                    <option>13</option>
                                                    <option>14</option>
                                                    <option>15</option>
                                                    <option>16</option>
                                                    <option>17</option>
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                    <option>21</option>
                                                    <option>22</option>
                                                    <option>23</option>
                                                    <option>24</option>
                                                    <option>25</option>
                                                    <option>26</option>
                                                    <option>27</option>
                                                    <option>28</option>
                                                    <option>29</option>
                                                    <option>30</option>
                                                </select>
                                            </div> */}


                                            <div className="card-button">
                                                {/* <p className="card-button-disabled">Added!</p> */}
                                                <button onClick={()=>setCount(count+1)}>Add to card</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="addtocard-button">
                            <button>Place order<img src={Shoppingicon} id="shopingicon" /></button>
                        </div>
                        <div className="footer">
                            <div className="footer-content1">
                                <div className="footer-box">
                                    <h3>INFORMATION</h3>
                                    <ul>
                                        <li>Contact Us</li>
                                        <li>About Us</li>
                                        <li>Refund/Return Policy</li>
                                        <li>FAQs</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                                <div className="footer-box">
                                    <h3>CATEGORIES</h3>
                                    <ul>
                                        <li>Mobiles</li>
                                        <li>Laptops</li>
                                        <li>Tablets</li>
                                        <li>Audio</li>
                                        <li>Games</li>
                                        <li>Television</li>
                                    </ul>
                                </div>
                                <div className="footer-box">
                                    <h3>IMPORTANT LINKS</h3>
                                    <ul>
                                        <li>My Account</li>
                                        <li>Shop</li>
                                        <li>My Orders</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="footer-content2">
                                <p>Copyright 2021 The Accessory Store all rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart