import articles from './services/ArticleService.mjs';
import products from './services/ProductService.mjs';
import Dummy from './lib/dummy.js';

// 더미 데이터 정리
const {
  articleContent,
  articleContentPatch,
  eProduct,
  cProduct,
  eProductPatch,
  cProductPatch,
} = Dummy;

//------------------------------------------------

// // Article

// // Article 리스트
//articles.getArticleList(1, 20, '');

// // Article 1개 선택
// articles.getArticle(4681);

// // Article 생성
// articles.createArticle(articleContent);

// // Article 수정
// articles.patchArticle(5013, articleContentPatch);

// // Article 삭제
// articles.deleteArticle(5004);

//------------------------------------------------

// // Product

// // Product 리스트
products.getProductList(1, 5, '');

// // Product 1개 선택
//products.getProduct(2367); // common
//products.getProduct(2374); // electronic

// // Product 생성
// products.createProduct(eProduct);
// products.createProduct(cProduct);

// // Product 수정
//products.patchProduct(2542, cProductPatch);
//products.patchProduct(2543, eProductPatch);

// // Product 삭제
//products.deleteProduct(2543);

// ----------------------------
