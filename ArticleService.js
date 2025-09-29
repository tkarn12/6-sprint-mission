import axios, { Axios } from 'axios';
// https://panda-market-api-crud.vercel.app/docs

export async function getArticleList() {
  try {
    const response = await axios.get(`https://`);
    console.log(response.data);
  } catch (error) {
    console.error('에러메세지', error.message);
  }
}

// getArticle();
// createArticle();
// patchArticle();
// deleteArticle();
