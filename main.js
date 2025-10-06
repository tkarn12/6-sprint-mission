import { addWeeks } from 'date-fns';
import { 
  getArticleList, getArticle, createArticle, patchArticle, deleteArticle
} from './ArticleService.js'
import { getProduct, getProductList } from './Productservice.js';

// const data = await getArticleList({ page: 1, pageSize: 5, keyword: '게시글' });
// axios + async-await으로 초기화했던 ArticleService 함수를 fetch로 전부 바꿨으므로
// 위의 예시 뿐만아니라 모든 main.js 함수 call에서 await를 전부 지운다. 251001 11:55
// getArticleList({ page: 1, pageSize: 5, keyword: 'Post' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   })

// getArticle(4918)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   })

// createArticle({
//   title: 'New Post Title',
//   content: 'Content of the article.',
//   image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLXN0YXItMDAxXzEucG5n.png'
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   })

// //Even I didn't print out data4, 
// // only inputing wrong articleId in patchArticle makes 404 response.
// // I found this made an error because 
// // when I changed the articleId argument in parchArticle 
// // from 3 into 4494, the getArticle method retrieves data correctly
// // and print data22 normally. 22:50 250926

// patchArticle(4918, { title: 'Updated Title' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   })

// deleteArticle(4915)
//   .then(data => {
//     console.log(data);
//     // return data; return만 넣었더니 콘솔에 undefined고 뭐고 아무것도 뜨지 않음 251002 12:47
//   })
//   .catch(error => {
//     console.error(error);
//   })


// ========== ProductService ===========
let data = await getProductList({page:2, pageSize:5, keyword:''});
//Product.js에서 였나, ElectricProduct.js에서 였나 constructor에 favoriteCount 선언해놓고 favortietCount = 0;으로 해놨더니
//메인에서 프린트할 때 favoriteCount: xxx;자체가 출력되지 않았었음.(콘솔에 남아있음) 문제 원인 알아보고 기록하기 1004 21:22
let data22 = await getProduct(2460);
//return response;만 하고 출력했더니 대량 데이터 출력됨 노션에 적을 것. 1004 21:20

//console.log(data);  //data 출력 잘 됨 8:02 251002
console.log(data22); //data22 출력 잘 됨 22:56 250926
// console.log(data33);  // data33 출력 잘 됨 12:50 250927
// console.log(data4); // data4 출력 잘 됨 12:59 250927
