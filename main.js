import { addWeeks } from 'date-fns';
import {
    getArticleList, getArticle, createArticle, patchArticle, deleteArticle
} from './ArticleService.js'
import { createProduct, deleteProduct, getProduct, getProductList, patchProduct } from './Productservice.js';

// const data = await getArticleList({ page: 1, pageSize: 5, keyword: '게시글' });
// axios + async-await으로 초기화했던 ArticleService 함수를 fetch로 전부 바꿨으므로
// 위의 예시 뿐만아니라 모든 main.js 함수 call에서 await를 전부 지운다. 251001 11:55
getArticleList({ page: 1, pageSize: 5, keyword: 'Post' })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

getArticle(4918)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

createArticle({
    title: 'New Post Title',
    content: 'Content of the article.',
    image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLXN0YXItMDAxXzEucG5n.png'
})
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

//Even I didn't print out data4,
// only inputing wrong articleId in patchArticle makes 404 response.
// I found this made an error because
// when I changed the articleId argument in parchArticle
// from 3 into 4494, the getArticle method retrieves data correctly
// and print data22 normally. 22:50 250926

patchArticle(4918, { title: 'Updated Title' })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

deleteArticle(4915)
    .then(data => {
        console.log(data);
        // return data; return만 넣었더니 콘솔에 undefined고 뭐고 아무것도 뜨지 않음 251002 12:47
    })
    .catch(error => {
        console.error(error);
    })


// ========== ProductService ===========
let data = await getProductList({page:1, pageSize:5, keyword:''});
//Product.js에서 였나, ElectricProduct.js에서 였나 constructor에 favoriteCount 선언해놓고 favortietCount = 0;으로 해놨더니
//메인에서 프린트할 때 favoriteCount: xxx;자체가 출력되지 않았었음.(콘솔에 남아있음) 문제 원인 알아보고 기록하기✅ 1004 21:22
let data22 = await getProduct(2460);
//return response;만 하고 출력했더니 대량 데이터 출력됨 노션에 적을 것. 1004 21:20
let data33 = await createProduct({name: '버티컬마우스', description:'2025ver', price:1000000, tags:"전자제품", images:`https://placehold.co/200x200`});
// 구조분해 할당 사용했을 경우 이렇게 일일히 key이름에 value될 객체 넣어주지 않으면 인식을 못함
// ==undefined로 인식. 그러니 400 error와 함께 "'images' is required", "'tags' is required" 이런 메세지를 출력하는 것이고,
// 제대로 함수 call하기 위해선 귀찮더라도 일일이 key:에 객체 넣어줘야 함 22:49
let data4 = await patchProduct(2484, {tags: ["전자제품", "사무용품"]});
let data5 = await deleteProduct(2482);

console.log(`========== Call productService functions ==========`);
console.log(data);  //data 출력 잘 됨 8:02 251002
console.log(data22);
console.log(data33);  // data33 출력 잘 됨 22:50 251009
console.log(data4);
console.log(data5); // data4, 5 출력 확인 완료 22:55 251009