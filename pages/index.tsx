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

  const articles = [
    {
      category: 'Technology',
      title: 'How to Improve Your Coding Skills',
      description: 'Discover the latest trends in technology and coding.',
      readTime: '5 min read',
      imageUrl: 'path-to-your-technology-image.jpg', // Replace with your image path
    },
    {
      category: 'Lifestyle',
      title: 'Finding Balance in a Busy World',
      description: 'Get tips on finding work-life balance and managing stress.',
      readTime: '5 min read',
      imageUrl: 'path-to-your-lifestyle-image.jpg', // Replace with your image path
    },
    {
      category: 'Travel',
      title: 'Exploring New Destinations',
      description: 'Embark on exciting travel adventures and explore new destinations.',
      readTime: '5 min read',
      imageUrl: 'path-to-your-travel-image.jpg', // Replace with your image path
    }
  ];
  
  return (
    <>
      <Layout>
        <Head>
          <title>{`Khris Kempis`}</title>
        </Head>
        <Container>
          <Intro />

          <section className="projects-container">
            <div className="projects">
              <ul>
                <li>
                  <div className="bg-white p-4 flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <div className="">
                        <img className="rounded-lg w-full" src="/assets/blog/projects/broadbandnow.png" alt="screenshot of Broadbandnow homepage"/>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:border-l md:border-gray-300 md:pl-4">
                      <h2 className="text-xl font-bold mt-2 md:mt-0">BroadbandNow.com</h2>
                      <p className="text-gray-700 text-sm my-2">
                        BroadbandNow, at broadbandnow.com, is an extensive resource for finding and comparing internet service providers across various regions.
                      </p>
                      <p className="text-gray-700 text-sm my-2">
                        The site is built on WordPress and a custom built MVC architecture using Bedrock Framework written in PHP on the backend and components using the templating language Blade on the frontend.
                      </p>
                      <div className="flex flex-wrap gap-2 my-2">
                        <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">WordPress</span>
                        <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Bedrock Sage</span>
                        <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">PHP</span>
                        {/* Add more tags as needed */}
                      </div>
                      <div className="mt-4">
                        <a href="#"
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm flex items-center">
                          View project
                          <svg className="ml-1 w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
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

          {/* <section className="blog-container">
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
          </section> */}

          <div className="px-5 py-5">
            <div className="flex flex-col max-w-md mx-auto md:max-w-none md:mx-0 md:grid md:grid-cols-3 md:gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm">View all</a>
            </div>
          </div>
          
        </Container>
      </Layout>
    </>
  )
}

const ArticleCard = ({ article }) => (
  <div className="flex flex-col items-center md:items-start md:flex-row my-4">
    <img className="w-full md:w-1/3 rounded-lg" src={article.imageUrl} alt={article.title} />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="text-blue-600 font-bold tracking-tight mb-2">{article.category}</h5>
      <h4 className="text-xl font-bold tracking-tight mb-2">{article.title}</h4>
      <p className="text-gray-700">{article.description}</p>
      <div className="flex justify-between items-center mt-4 w-full md:w-auto">
        <span className="text-gray-600 text-sm">{article.readTime}</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm">Read more</a>
      </div>
    </div>
  </div>
);


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
