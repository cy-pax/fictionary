import React from "react";
import "./Categories.scss"
import { Link } from "react-router-dom";

const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://i.pinimg.com/564x/54/d4/40/54d44014b006c2e8a1c94cc97a9989e2.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/4">FANTASY</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://i.pinimg.com/564x/6c/c6/7d/6cc67d2f99ee03190294a8c5d5c6f541.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/3">Romance</Link>
                    </button>
                </div>
                </div>
            <div className="col">
                <div className="row">
                <img src="https://i.pinimg.com/564x/e3/50/1f/e3501f81e85b2aafa293cf64ecaa83ca.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Thriller</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Categories