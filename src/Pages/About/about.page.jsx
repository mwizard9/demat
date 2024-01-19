import React from 'react'
import { OurIntro, OurProjects, Ourteam } from '../../Components'

export const About = () => {
  return (
    <>
    <div>
      <div className='my-3'>
      <OurIntro/>
      </div>
      <div className='my-3'>
    <Ourteam />
    </div>
    <div className='my-3'>
      <OurProjects/>
    </div>
    </div>
    </>

  )
}
