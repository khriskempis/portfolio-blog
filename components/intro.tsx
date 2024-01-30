import { CMS_NAME } from '../lib/constants'
import '../styles/components/hero.module.scss';

const Intro = () => {
  return (
    <section className="hero">
      <div className="hero-container mt-16 mb-16 md:mb-12 text-center">
        <img src="" alt="" />
        <h1 className="text-5xl mb-5 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Hey! My name is Khris
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ex. Ex reprehenderit iusto eaque unde debitis earum optio amet velit officia neque obcaecati quae laboriosam, deleniti quo fugit. Excepturi, quos.
        </p>
        <button className="button__learn-more mt-5 text-blue-700 py-2 px-4 rounded bg-orange-500 border border-blue-500 bg-transparent">
          Learn More
        </button>
      </div>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4> */}
      <div className="max-w-lg mx-auto bg-white overflow-hidden">
        <div className="flex justify-center mt-8">
          <div className="flex items-center justify-center h-24 w-24 bg-orange-200 rounded-full">
            <img className="h-20 w-20 rounded-full" src="path_to_khris_image.jpg" alt="Profile picture of Khris"/>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="text-center">
            <div className="font-bold text-xl mb-2">Hey! My name is Khris</div>
            <p className="text-gray-700 text-base">
              I'm a software engineer, musician and all-around nerd.
              I specialize in full-stack custom WordPress projects. I'm very comfortable
              working on both the back-end and front-end. Check out some of my work below.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="mt-6 mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Intro
