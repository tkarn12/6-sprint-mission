import axios from 'axios';

// https://panda-market-api-crud.vercel.app/docs
const URL = `http://localhost:3000/articles`; //가짜주소

export function getArticleList(page, pageSize, keyword) {
  return axios
    .get(URL, {
      params: {
        page,
        pageSize,
        keyword,
      },
    })
    .then((response) => {
      console.log('성공! :', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('실패! :', error.maessege);
    });
}

// export async function getArticle()
// export async function createArticle();
// export async function patchArticle();
// export async function deleteArticle();
