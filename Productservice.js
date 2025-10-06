// 공부를 위해 product 관련 함수에서는 axios 사용
/* https://panda-market-api-crud.vercel.app/docs Product API를 이용하여 
아래 함수들을 구현해 주세요.
- async/await 을 이용하여 비동기 처리를 해주세요.
- 구현한 함수들을 아래와 같이 파일을 분리해 주세요.
-- export를 활용해 주세요.
-- ProductService.js 파일 Product API 관련 함수들을 작성해 주세요.
-- ArticleService.js 파일에 Article API 관련 함수들을 작성해 주세요.
- 이외의 코드들은 모두 main.js 파일에 import를 활용해서 작성해 주세요.
*/
import axios from "axios";
import { Product } from "./Product.js";
import {ElectronicProducts} from "./ElectronicProduct.js";

const instance = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
  timeout: 5000
  //timeout: xnnn = x초 내에 연결이 되지 않으면 error return
});

/* 🚨 getProductList() : GET 메소드를 사용해 주세요.
  -- page, pageSize, keyword 쿼리 파라미터를 이용해 주세요. */
export async function getProductList({page, pageSize, keyword}){
  // - try/catch 를 이용하여 오류 처리를 해주세요.
  /* try and catch는 function 안에 들어가야 동작한다.
    처음에 했던대로 try { export async function ....(){} } catch{}
    시도하면 오류남 251001 22:27
  */
  try{
  const res = await instance.get(`/products`, {
    params: {page, pageSize, keyword}
  });
  /* getProductList()를 통해서 받아온 상품 리스트를 
  각각 인스턴스로 만들어(-> 인스턴스로 만들어= map 메소드 사용)
  products 배열에 저장해 주세요.
  - 해시태그에 "전자제품"이 포함되어 있는 상품들은 Product 클래스 대신 
  ElectronicProduct 클래스를 사용해 인스턴스를 생성해 주세요.
  - 나머지 상품들은 모두 Product 클래스를 사용해 인스턴스를 생성해 주세요. */
  
  // 1. 위 res를 통해 갖고온 API 데이터 중에 실제 상품 리스트 배열을 가져오고
  const productList = res.data.list; //res.data;

  //2. map 메서드를 통해 각 상품(item)을 Product 클래스의 인스턴스로 변환한다.
  const products = productList.map(item =>{
      //여기서 foreach 말고 map 쓰는 게 맞나?
    if (item.tags.includes("전자제품") || item.tags.includes("전자 제품")) {
      return new ElectronicProducts(
        item.name,
        item.description,
        item.price,
        item.tags,
        item.images,
        item.favortieCount,
        item.manufacturer
      );
      //want: item의 속성(key value)이 key name과 일치하는 곳으로 들어감
      //real: ⭐️item 전체가 ElectronicProducts의 첫번째 매개변수인 name에 들어감⭐️
      //need: item의 각 속성과 이름이 같은 ElectronicProducts의 각 매개변수를 매칭시켜주는 것. 15:50 251002
    } else {
      return new Product(
        item.name,
        item.description,
        item.price,
        item.tags,
        item.imgaes,
        item.favortieCount
      );
    }
    });
  //3. 인스턴스들로 구성된 최종 배열 반환
    return products;
  } catch(error){
    console.log("getProdL error!", error);
    throw error;
  };
}
/* Axios는 비동기 요청을 Promise로 처리하고, async/await를 사용하면 이를 더 간단하게 다룰 수 있다.
조금 더 정확히 표현해야 해요.
Axios 자체는 비동기적으로 동작해요. (axios.get()은 Promise를 반환함)
async/await는 비동기 처리를 더 직관적이고 동기적인 코드 스타일로 작성할 수 있게 해주는 문법이에요.
따라서 axios + async/await를 쓰면 비동기 요청을 깔끔하게 처리할 수 있지만,
"async/await를 쓰면 비동기처리가 된다"는 설명은 살짝 오해의 소지가 있어요.

📖 더 정확한 설명:
Axios는 비동기 HTTP 요청을 Promise 기반으로 처리한다.
async/await를 사용하면 Axios의 비동기 요청을 마치 동기 코드처럼 순차적으로 다룰 수 있다.
*/

// 🚨 getProduct() : GET 메소드를 사용해 주세요.
export async function getProduct(productId){
  try{
  const response = await instance.get(`/products/${productId}`, )
  return response.data;
  } catch(error){
    console.log("getPd error: ", error);
    throw error;
  };
}

// 🚨 createProduct() : POST 메소드를 사용해 주세요.
// - request body에 {name, description, price, tags, images} 를 포함해 주세요.


// 🚨 patchProduct() : PATCH 메소드를 사용해 주세요.


// 🚨 deleteProduct() : DELETE 메소드를 사용해 주세요.
