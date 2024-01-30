import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />

          <section className="projects-container">
            <div className="projects">
              <ul>
                <li>
                  <img src="" alt="" />
                  <h3>Project 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <h3>Project 2</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <h3>Project 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </li>
              </ul>
            </div>
          </section>

          <section className="cta-container">
            <div className="cta-content">
              <h2>Are you multi-passionate</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perferendis? Nihil error ducimus, explicabo, perferendis perspiciatis ab modi nemo ullam, cum incidunt delectus dicta. Adipisci ab architecto molestiae sit quasi.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque dicta at officia libero, modi eum! Eligendi ducimus dolore obcaecati, cum nulla laboriosam veritatis voluptates non expedita atque sint rem.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repellendus eaque aliquid commodi exercitationem numquam a eum dolorem, incidunt, voluptates rerum asperiores sint placeat molestias in eos maxime aspernatur. Tempore.</p>

            </div>
            <div className="cta-graphic">
              <img src="" alt="" />
            </div>
          </section>

          <section className="blog-container">
            <h2>My thoughts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor aliquid iste in obcaecati maiores saepe architecto ea itaque aspernatur aperiam excepturi reiciendis beatae optio suscipit molestias laborum, fuga veniam.</p>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} 
          </section>
          
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
