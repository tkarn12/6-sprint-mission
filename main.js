import Product from './Product.js';
import ElectronicProduct from './ElectronicProduct.js';
import Article from './Article.js';
import { createArticle } from './ArticleService.js';

const powerNeo = new ElectronicProduct(
  '네오 건전지',
  '평범한 건전지이다...',
  5500,
  [],
  [],
  0
);

// console.log(powerNeo.name);
// console.log(powerNeo.description);
// console.log(`찜하기 수: ${powerNeo.favorite()}`);
// console.log(`찜하기 수: ${powerNeo.favorite()}`);
// getArticleList(1, 1, '테스트')

console.log('=====테스트 시작=====');

const articleData = {
  title: '고양이',
  content: '고양이',
  image:
    'https://images.mypetlife.co.kr/content/uploads/2022/05/27120923/52041878798_acf34e8861_b.jpg',
};
createArticle(articleData);

// console.log('=====테스트 완료=====');
