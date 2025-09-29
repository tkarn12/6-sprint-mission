import Product from './Product.js';
import ElectronicProduct from './ElectronicProduct.js';
import Article from './Article.js';
import { getArticleList } from './ArticleService.js';

console.log('테스트 시작 시간');
const laptop = new ElectronicProduct(
  'galaxy book',
  '평범한 삼성 노트북이다.',
  1000000,
  [],
  [],
  0
);
console.log(laptop.name);
console.log(laptop.description);
console.log(laptop.favorite());
console.log(laptop.favorite());
getArticleList(1, 10, '테스트'); // getArticleList 테스트
