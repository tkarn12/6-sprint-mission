import axios from 'axios';

// https://panda-market-api-crud.vercel.app/docs
const URL = `http://localhost:3000/articles`;

export async function getArticleList(page, pageSize, keyword) {
  try {
    const response = await axios.get(URL, {
      params: {
        page: page,
        pageSize: pageSize,
        keyword: keyword,
      },
    });
    console.log('성공', response.data);
  } catch (error) {
    console.error('실패!', error.message);
  }
}

// export async function getArticle()
// export async function createArticle();
// export async function patchArticle();
// export async function deleteArticle();
