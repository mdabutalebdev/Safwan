import React from 'react'
import Image from './layouts/Image'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import BlogArticlesCard from './layouts/BlogArticlesCard'
import HeadingH4 from './layouts/HeadingH4'


const BlogArticles = () => {
  return (
     <section className='w-container mx-auto py-[50px]'>
        <div className="flex justify-center">
           <Image src={Line}/>
           
           <HeadingH4 text='Letest Blogs' className='pl-5'/>
        </div>
        <div className="">
            <Headding text='My Work Example' className='text-[50px] flex justify-center'/>
        </div>


        {/* blog articel card */}
        <div className="flex gap-x-5">
            <BlogArticlesCard />
            <BlogArticlesCard />
            <BlogArticlesCard />
        </div>
     </section>
  )
}

export default BlogArticles