import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="">
      <div className="hero-container flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 text-center">
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
    </section>
  )
}

export default Intro
