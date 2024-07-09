import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return <div>
        <p>this is dashboard page</p>
        <Link to="/products">go to products</Link>
    </div>
}