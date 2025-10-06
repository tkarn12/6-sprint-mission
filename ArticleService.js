const API_URL = 'https://panda-market-api-crud.vercel.app';

/* The swagger url looks like this,
https://panda-market-api-crud.vercel.app/docs/#/Article/CreateArticle
I was confused from where I should use the endpoint.
`/#/Article/ListArticles` vs `/Article/ListArticles`
So I asked to gemini and got an answer.
Then revise codes with no-# endpoints.
https://g.co/gemini/share/6b23700fe84e
 */
export function getArticleList({ page, pageSize, keyword }) {
  const params = new URLSearchParams({ page, pageSize, keyword});
  const url = `${API_URL}/articles/?${params}`;
  
  return fetch(url)
    .then(response => {
      if (!response.ok){
        console.error(`HTTP 오류 발생: ${response.status} (${response.statusText})`);
        throw new Error(`getArtiList Response failed: ${response.status} ${response.statusText}`);
      }
      return response.json(); //response를 json 형태로 바꿔서 받아온다.
    })
    .then(data => {
      // console.log('articleList:', data); 이거 지워도 data 그대로 출력되려나? 1001 22:51
      return data; //필요한 경우를 위해 data 반환
    })
    .catch(error => {
      console.error(`ArtiList API error `, error);
      throw error;
    });
}

export function getArticle(articleId){
  const url = `${API_URL}/articles/${articleId}`;
  /*fetch() 함수는 method 옵션을 지정하지 않으면 
  기본값으로 GET 메소드를 사용하도록 설계되어 있다.
  따라서 데이터를 조회하는 일반적인 GET 요청의 경우,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArticle)
  } 이런 부분 필요 없이
  아래와 같이 코드를 간결하게 작성할 수 있다.
  */
  return fetch(url)
    .then(response => {
      if (!response.ok){
        console.error(`HTTP error: ${response.status} (${response.statusText})`);
        throw new Error(`getArti request failed: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      return data;
    })
    .catch(error => {
      console.error('getArti API error: ', error);
    });
}

export function createArticle({title, content, image}) {
  //https://g.co/gemini/share/a845840e327f (createdAt 관련 심화 내용)
  const url = `${API_URL}/articles`;
  const newArticle = { title, content, image }; 

  return fetch(url, {
    method: 'POST', // HTTP 메소드를 POST로 지정
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 형식을 JSON으로 지정
    },
    body: JSON.stringify(newArticle) 
    // JavaScript 객체를 stringify 메소드를 통해 JSON 문자열로 변환
  })
   .then(res => {
    if(!res.ok) {
      console.error(`HTTP error: ${res.status} (${res.statusText})`);
      throw new Error(`createArti Failed request: ${res.status} ${res.statusText}`);
    }
    return res.json();
   })
   .then(data => {
    // console.log(data);
    return data;
   })
   .catch(error =>{
    console.error('createArti API error: ', error);
   });
}

export function patchArticle(articleId, updateData) {
  const url = `${API_URL}/articles/${articleId}`;

  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
  })
   .then(res => {
    if(!res.ok){
      throw new Error(`Failed request: ${res.status} ${res.statusText}`);
    }
    return res.json(); // 서버 응답을 JSON으로 파싱
   })
   .then(data => {
    return data;
   })
   .catch(error => {
    console.log('patchArti API error: ', error);
    return error;
    //main.js에서 호출자가 .catch()를 통해 오류를 처리하도록 에러를 다시 던진다.
   });
}

export function deleteArticle(articleId) {
  const url = `${API_URL}/articles/${articleId}`;

  return fetch(url, {
    method: 'DELETE'
  })
    .then(res => {
      if(!res.ok){
        throw new Error(`Failed request: ${res.status} (${res.statusText})`);
      }
      return res.json();
    })
    .then(data => {
      return data; // 서버가 반환한 성공 메시지나 객체 반환
    })
    .catch(error => {
      console.error(`deleteArti API `, error);
      throw error; //main.js에서 호출자가 .catch()를 통해 오류를 처리하도록 에러를 다시 던진다.
    });
}
