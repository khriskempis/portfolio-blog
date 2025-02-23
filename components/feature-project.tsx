type Props = {
    title: string
    description: string | string[]
    tags: string[]
    imageUrl: string
    url: string
  }

export default function FeaturedProject({ title, description, tags, imageUrl, url } : Props) {
    return (
        <li>
            <div className="bg-white p-4 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <div className="">
                        <img className="rounded-lg w-full" src={imageUrl} alt={`screenshot of ${title} homepage`}/>
                    </div>
                </div>
                <div className="md:w-1/2 md:border-l md:border-gray-300 md:pl-4">
                    <h2 className="text-xl font-bold mt-2 md:mt-0">{title}</h2>
                    {description instanceof Array ? (
                        description.map((desc, index) => (
                            <p key={index} className="text-gray-700 text-sm my-2">{desc}</p>
                        ))
                    ) : (
                        <p className="text-gray-700 text-sm my-2">{description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 my-2">

                        {tags.map((tag, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">{tag}</span>
                        ))}
                    </div>
                    <div className="mt-4">
                        <a href={url}
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
    )
}