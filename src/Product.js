import React from "react";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Product = (props) => {

    // 방법1. const {파라미터명} = useParams();
    const {productId} = useParams();

    // 방법2. const 변수명 = useParams().파라미터명;
    const param = useParams().productId;

    // useLocation 훅
    const location = useLocation();

    // useSearchParams 훅
    // http://localhost:3000/product/1?search=productName&q=demo
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const q = searchParams.get("q");

    // useNavigate 훅
    const navigate = useNavigate();

    return(
        <div>
            <h3>{productId}번 상품 페이지 입니다.(Product.js)</h3>
            <h3>{param}번 상품 페이지 입니다.(Product.js)</h3>

            <h3>useLocation</h3>
            <ul>
                <li>hash : {location.href}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
            <h3>useSearchParams 훅</h3>
            <ul>
                <li>search : {search}</li>
                <li>q : {q}</li>
            </ul>

            <ul>
                <li><button onClick={()=>navigate(-2)}>Go 2 pages</button></li>
                <li><button onClick={()=>navigate(-1)}>Go back</button></li>
                <li><button onClick={()=>navigate(1)}>Go forward</button></li>
                <li><button onClick={()=>navigate(2)}>Go 2 pages</button></li>
                <li><button onClick={()=>navigate("/")}>첫 페이지</button></li>
                <li><button onClick={()=>navigate("/test")}>테스트 페이지</button></li>
            </ul>
        </div>
    );

}

export default Product;