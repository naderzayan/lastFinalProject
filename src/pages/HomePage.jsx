import React from 'react'
import HeaderOfPage from './home page/HeaderOfPage'
import '../style/home page/_HeaderOfPage.scss'
import '../style/home page/_SecesionOne.scss'
import '../style/home page/_TrendingNow.scss'
import '../style/home page/_TopBrands.scss'
import '../style/home page/_SecesionTwo.scss'
import '../style/home page/_secesionThree.scss'
import '../style/home page/_flages.scss'
import SecesionOne from './home page/SecesionOne'
import { postsData } from '../data/DataOfTrending'
import TrendingNow from './home page/TrendingNow'
import TopBrands from './home page/TopBrands'
import SecesionTwo from './home page/SecesionTwo'
import SecesionThree from './home page/SecesionThree'
import Flages from './home page/Flages'

export default function HomePage() {
  return (
      <div>
          <HeaderOfPage />
          <SecesionOne />
          <h3 className="titleOfSecesion">Trending Now</h3>
          <div className="containerOftrending">
              {postsData.map((ele) => (
                  <TrendingNow key={ele.id} image={ele.image} title={ele.title} Category={ele.Category} beforPrice={ele.beforPrice} afterPrice={ele.afterPrice} />
              ))}
          </div>
          <h3 className="titleOfSecesion">Top Brands</h3>
          <TopBrands />
          <SecesionTwo />
          <SecesionThree />
          <Flages />
      </div>
  );
}
