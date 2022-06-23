import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `http://localhost:8080/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  // console.log(product);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
        {/* <img src={`/${product.imageUrl}`} /> */}
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 6월 22일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
