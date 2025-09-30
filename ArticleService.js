import axios from 'axios';

// https://panda-market-api-crud.vercel.app/docs
const URL = `https://panda-market-api-crud.vercel.app`;

//-------------getArticleList(1,1,'')------------------------
export function getArticleList(page, pageSize, keyword) {
  return axios
    .get(URL + '/articles', {
      params: {
        page,
        pageSize,
        keyword,
      },
    })
    .then((response) => {
      console.log(`성공!`, response.data);
    })
    .catch((error) => {
      console.error('실패! :', error.message);
      if (error.response) {
        console.log(`실패 어쩌구 ${error.response.status}`);
        console.log(error.response.data);
      }
    })
    .finally(() => {
      console.log('=====[gerArticleList] 테스트 완료=====');
    });
}

//------------getArticle(id)--------------------------------------

export function getArticle(id) {
  return axios
    .get(`${URL}/articles/${id}`)
    .then((response) => {
      console.log('성공! :', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('실패! :', error.message);
      if (error.response) {
        console.log(`${error.response.status}`);
        console.log(error.response.data);
      }
    })
    .finally(() => {
      console.log('=====[gerArticle] 테스트 완료=====');
    });
}
//------------createArticle--------------------------------------

export function createArticle(articleData) {
  return axios
    .post(URL + '/articles', articleData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('실패!!!', error.message);
      if (error.response) {
        console.log(`${error.response.status}`);
        console.log(`${error.response.data}`);
      }
    })
    .finally(() => {
      console.log(`===생성 실험 끝===`);
    });
}
//--------------------patchArticle------------------
export function patchArticle(id, articleData) {
  return axios
    .patch(`${URL}/articles/${id}`, articleData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`실패!!!`, error.message);
      if (error.response) {
        console.log(`${error.response.status}`);
        console.log(`${error.response.data}`);
      }
    })
    .finally(() => {
      console.log(`===패치 실험 끝===`);
    });
}

//-----------------deleteArticle----------------------
export function deleteArticle() {
  return axios
    .delete(`${URL}/articles/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(`${error.response.status}`);
      console.log(`${error.response.data}`);
    })
    .finally(() => {
      console.log(`=== 게시물 삭제 실험 끝===`);
    });
}
