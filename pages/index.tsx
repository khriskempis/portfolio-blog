import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Link from 'next/link'
import ProjectFeature from '../components/feature-project'

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
            imageUrl: 'path-to-your-technology-image.jpg', 
        },
        {
            category: 'Lifestyle',
            title: 'Finding Balance in a Busy World',
            description: 'Get tips on finding work-life balance and managing stress.',
            readTime: '5 min read',
            imageUrl: 'path-to-your-lifestyle-image.jpg', 
        },
        {
            category: 'Travel',
            title: 'Exploring New Destinations',
            description: 'Embark on exciting travel adventures and explore new destinations.',
            readTime: '5 min read',
            imageUrl: 'path-to-your-travel-image.jpg', 
        }
    ];

  const featuredProjects = [
    {
        title: 'BroadbandNow.com',
        description: [
            'BroadbandNow, at broadbandnow.com, is an extensive resource for finding and comparing internet service providers across various regions.',
            'The site is built on WordPress and a custom built MVC architecture using Bedrock Framework written in PHP on the backend and components using the templating language Blade on the frontend.'
        ],
        tags: ['WordPress', 'Bedrock Sage', 'PHP'],
        imageUrl: '/assets/blog/projects/broadbandnow.png',
        url: '#'
    },
    {
        title: 'SeniorLiving.com',
        description: [
            "SeniorLiving.org is an online resource designed to offer advice, information, and resources specifically for seniors, caregivers, and those approaching retirement. It addresses a wide range of pertinent topics including retirement planning, healthcare, housing, and technology.",
            "This is built on a Wordpress and uses Bedrock to modernize the strucure of the site to make it more developer friendly. It's built in a custom Wordpress them and uses the Twig framework on the frontend"
        ],
        tags: ['Wordpress', 'Twig', 'SEO', 'GA4 Analytics'],
        imageUrl: '/assets/blog/projects/seniorliving.png',
        url: '#'
    },
    {
        title: 'AutoInsurance.com',
        description: [
            "SeniorLiving.org is an online resource designed to offer advice, information, and resources specifically for seniors, caregivers, and those approaching retirement. It addresses a wide range of pertinent topics including retirement planning, healthcare, housing, and technology.",
            "This is built on a Wordpress and uses Bedrock to modernize the strucure of the site to make it more developer friendly. It's built in a custom Wordpress them and uses the Twig framework on the frontend"
        ],
        tags: ['Wordpress', 'Twig', 'SEO', 'GA4 Analytics'],
        imageUrl: '/assets/blog/projects/autoinsurance.png',
        url: '#'
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
                        {featuredProjects.map((project, index) => (
                        <ProjectFeature 
                            key={index} 
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            imageUrl={project.imageUrl}
                            url={project.url}
                        />
                        ))}
                    </ul>
                </div>
            </section>

            <section className="cta-container">
                <div className="cta-content">
                    <h2 className="mb-4 text-4xl lg:text-5xl leading-tight">Are you multi-passionate</h2>
                </div>
                <div className="cta-graphic">
                    <img src="" alt="" />
                </div>
            </section>

                {/* Save for blog home page */}
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
                        {allPosts.map((article, index) => (
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
    <div className="flex flex-col items-center md:items-start my-4">
        <img className="w-full rounded-lg" src={article.coverImage} alt={article.title} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="text-xl font-bold tracking-tight mb-2">{article.title}</h4>
            <p className="text-gray-700">{article.description}</p>
            <div className="flex justify-between items-center mt-4 w-full md:w-auto">
                <span className="text-gray-600 text-sm">{article.readTime}</span>
                <Link href={`posts/${article.slug}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"> Read more</Link>
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
