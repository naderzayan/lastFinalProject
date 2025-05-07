import React from 'react'
import '../style/blog/_cardOfBlog.scss'
import '../style/blog/_search.scss'
import '../style/blog/_recentPosts.scss'
import '../style/blog/_recentComments.scss'
import '../style/blog/_archives.scss'
import '../style/blog/_categories.scss'
import '../style/blog/_meta.scss'
import CardOfBlog from './blog/CardOfBlog'
import CardOfBlog2 from './blog/CardOfBlog2'
import CardOfBlog3 from './blog/CardOfBlog3'
import CardOfBlog4 from './blog/CardOfBlog4'
import Search from './blog/Search'
import RecentPosts from './blog/RecentPosts'
import RecentComments from './blog/RecentComments'
import Archives from './blog/Archives'
import Categories from './blog/Categories'
import Meta from './blog/Meta'

export default function Blog() {
  return (
    <main className='mainOfBlog'>
      <div>
        <CardOfBlog />
        <CardOfBlog2 />
        <CardOfBlog3 />
        <CardOfBlog4 />
      </div>
      <div>
        <Search />
        <RecentPosts />
        <RecentComments />
        <Archives />
        <Categories />
        <Meta />
      </div>
    </main>
  )
}
