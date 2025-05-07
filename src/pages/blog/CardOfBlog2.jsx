import React from 'react'
import { CgProfile } from "react-icons/cg";
import { TbFolderFilled } from "react-icons/tb";

export default function CardOfBlog2() {
  return (
          <>
          <div className='mainOfCard'>
          <img src="news-3.jpg" alt="" className='imgOfBlog'/>
          <main className='card'>
            <div>
                <CgProfile />
                <p className='person'>Donya</p>
                <hr />
                <p>0</p>
            </div>
            <div>
                <p className='categofcard'><TbFolderFilled /> Speaker</p>
                <h3>Seating Collection Inspiration Is Not Enough For People</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                <p>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                <p>voluptatem…</p>
            </div>
          </main>
          </div>
          </>
  )
}
