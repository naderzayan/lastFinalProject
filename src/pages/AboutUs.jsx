import React from 'react'
import '../style/about us/_ourHistory.scss'
import '../style/about us/_ourVision.scss'
import '../style/about us/_ourTeam.scss'
import '../style/about us/_letterUpdates.scss'
import OurHistory from './about us/OurHistory'
import OurVision from './about us/OurVision'
import OurTeam from './about us/OurTeam'
import LetterUpdates from './about us/LetterUpdates'

export default function AboutUs() {
  return (
    <div>
      <OurHistory />
      <OurVision />
      <OurTeam />
      <LetterUpdates />
    </div>
  )
}
