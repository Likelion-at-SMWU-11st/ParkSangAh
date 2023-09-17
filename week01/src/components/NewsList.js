import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// API_KEY 에 본인 API 키를 넣어주세요!
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        var query = "";
        switch (category) {
          case "all":
            query = "top-headlines?country=kr";
            break;
          case "The Wall Street Journal":
            query = "everything?domains=wsj.com";
            break;
          case "cnn":
            query = "top-headlines?country=us&category=business";
            break;
          default:
            query = `top-headlines?country=kr&category=${category}`;
        }
        //const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/${query}&apiKey=fab7ecc34d934b54842464464b2ce4e2`
          //`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fab7ecc34d934b54842464464b2ce4e2`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
