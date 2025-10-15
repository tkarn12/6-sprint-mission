
## 목표

- API 리퀘스트 보내는 코드 구현

## 요구사항

### 클래스 구현

`class` 키워드를 이용해 Product, ElectronicProduct, Article 클래스 생성
- [ ] Product 클래스
	-  프로퍼티
		- `name` (상품명), `description` (상품 설명), `price` (판매 가격), `tags` (해시태그 배열), `images` (이미지 배열), `favoriteCount` (찜하기 수)
	- `favorite` 메소드포함 (`favorite` 메소드 호출시 찜하기 수 ‘1’ 증가)
- [ ] ElectronicProduct 클래스 
	  - Product 상속 
	  - `manufacturer` (제조사) 프로퍼티 추가
- [ ] Article 클래스
	- 프로퍼티
		- `title` (제목), `content` (내용), `writer` (작성자), `likeCount` (좋아요 수)
	- `like` 메소드 포함(`like` 메소드 호출시  좋아요 수 ‘1’ 증가)

- [ ] 각 클래스 마다 **constructor** 를 작성
- [ ] 추상화/캡슐화/상속/다형성을 고려하여 코드 작성

## Article 요청 구현

- API 정의서: [https://panda-market-api-crud.vercel.app/docs](https://panda-market-api-crud.vercel.app/docs) 

- [ ] Article API를 이용하여 아래 함수 구현
    - [ ] Article 가져오기(GET)
        - `getArticle()`
        - `getArticleList()`
	        - 쿼리 파라미터: `page`, `pageSize`, `keyword`
    - [ ] Article 등록하기(POST)
	    - `createArticle()`
		- request body: `title`, `content`, `image`
	- [ ] Article 수정하기(PATCH)
		- `patchArticle()`
	- [ ] Article 삭제하기(DELETE) 
		- `deleteArticle()`
- [ ] `fetch` 혹은 `axios` 이용
- [ ] `.then()` 메소드를 이용해 비동기 처리
- [ ] `.catch()` 를 이용해 오류 처리
	- 응답의 상태 코드가 2XX가 아닐 경우, 에러 메시지 콘솔 출력

## Product 요청 구현

- API 정의서:  [https://panda-market-api-crud.vercel.app/docs](https://panda-market-api-crud.vercel.app/docs) 

- [ ] Product API를 이용하여 아래 함수 구현
	- [ ] Product 가져오기(GET)
		- `getProduct()`
		- `getProductList()`
			- 쿼리 파라미터: `page`, `pageSize`, `keyword`
			- 상품 리스트를 각각 인스턴스로 만들어 `products` 배열에 저장
				- 해시태그에 `전자제품`이 포함된 경우 `ElectronicProduct` 클래스로 인스턴스 생성
				- 나머지 상품들은 모두 `Product` 클래스 사용
	- [ ] Product 등록하기(POST)
		- `createProduct()`
		- request body: `name`, `description`, `price`, `tags`, `images`
    - [ ] Product 수정하기(PATCH)
	    - `patchProduct()`
    - [ ] Product 삭제하기(DELETE) 
	    - `deleteProduct()`
- [ ] `async/await` 을 이용해 비동기 처리
- [ ] `try/catch` 를 이용해 오류 처리

### 아키텍처

- [ ] `import` 및 `export` 활용
- [ ] `ProductService.js`: **Product** API 관련 함수 작성
- [ ] `ArticleService.js`: **Article** API 관련 함수 작성
- [ ] 이외 코드는 모두 `main.js` 파일에 작성

### 심화

- [ ] Article 클래스에 `createdAt` (생성일자) 프로퍼티 생성
- [ ] 새로운 객체가 생성되어 constructor가 호출될 시 `createdAt` 에 현재 시간 저장


## 스크린샷

![image](이미지url)

  

## 멘토에게

- 셀프 코드 리뷰를 통해 질문 이어가겠습니다.


