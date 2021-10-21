import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import youtube from '../services/youtube';
import { GetServerSideProps } from 'next';
import HStyled from '../styles/pages/home'

interface Video {
  'kind': 'youtube#searchResult',
  'id': {
    'kind': string,
    'videoId': string,
    'channelId': string,
    'playlistId': string
  },
  'snippet': {
    'publishedAt': string,
    'channelId': string,
    'title': string,
    'description': string,
    'thumbnails': {
      (key: any): {
        'url': string,
        'width': string,
        'height': string
      }
    },
    'channelTitle': string
  }
}

interface StateProps {
  videos: Video[],
}

type Props = StateProps;

const Home: NextPage<Props> = ({ videos }: Props) => {
  const renderPosts = () => {
    const postList = Array.from(videos).filter((i) => (i.id.videoId))
      .reverse().map((post: Video) => {
        const original = post.snippet.description;
        const limit = 100;

        const description = (original.length > limit) ? `${original.substring(0, original.indexOf(' ', limit))}...` : original;
        
        return (
          <HStyled.ArticleListItem key={post.id.videoId}>
            <HStyled.PostBanner >
              <HStyled.PostFrame src={`https://www.youtube.com/embed/${post.id.videoId}`}></HStyled.PostFrame>
            </HStyled.PostBanner>
            <HStyled.PostTitle>
            {post.snippet.title}
            </HStyled.PostTitle>
            <HStyled.PostDescription>
            {description}
            </HStyled.PostDescription>
          </HStyled.ArticleListItem>
        )
      });

      return (
      <HStyled.ArticleList>
        {postList}
      </HStyled.ArticleList>
      );
  }

  return (

    <HStyled.Container>
      <HStyled.Content>
        <HStyled.Article>
          {renderPosts()}
        </HStyled.Article>
      </HStyled.Content>
    </HStyled.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    // res.setHeader(
    //   'Cache-Control',
    //   'public, s-maxage=10, stale-while-revalidate=120'
    // )

    const response = await youtube.get('/search', { params: { channelId: 'UC-eQ7JXgSETWL-bgcEjR_lA' }});
    const videos = response.data.items;

    return {
      props: {
        videos,
      }
    }
}

export default Home;
