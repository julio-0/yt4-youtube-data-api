import styled from 'styled-components';

const Container = styled.div`;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color:  ${ props => props.theme.background };
`;

const Content = styled.article`;
    height: 100%;
    width: 100%;
    max-width: 1260px;
    margin: 80px 4px;
    background: transparent;
    padding: 4px;
`;

const Article = styled.main`;
    font-size: 1.4em;
    text-align: justify;

    @media (max-width: 768px) {
          font-size: 1.2em;
    }      

    @media (min-width: 769px) {
      font-size: 1.4em;
    }
`;

const ArticleList = styled.ul`;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const PostBanner = styled.div`;
    height: 300px;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    margin: 30px 0px;
`;

const PostFrame = styled.iframe`;
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`;

const PostTitle = styled.h2`;
    font-family: Droid Sans, Arial, sans-serif;
    padding: 16px 30px 8px 30px;
    color: ${ props => props.theme.primary };        
`;

const PostDescription = styled.p`;
    font-size: 1.2em;
    padding: 30px 30px;
    color: ${ props => props.theme.base_text };
    overflow: hidden;
`;

const ArticleListItem = styled.li`;    
    overflow: hidden;
    margin-top: 16px;
    background-color: ${ props => props.theme.midground };
    transition: margin 0.2s ease;    
    text-align: left;
    min-width: 400px;
    min-height: 600px;

    &:hover, &:focus {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        margin-top: 8px;
        margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        width: 100%;
      }  
    @media (min-width: 769px) {
        width: 49.5%;
    }  
    @media (min-width: 1260px) {
        width: 30%;
    }  
`;


export const Styled = {
  Container,
  Content,
  Article,
  ArticleList,
  ArticleListItem,
  PostBanner,
  PostFrame,
  PostTitle,
  PostDescription,
};

export default Styled;
