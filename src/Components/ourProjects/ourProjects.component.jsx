import React from 'react'
import { MultiCarousel } from '../../common'


export const OurProjects = () => {
    
    const items = [
        {name: 'Item 1', imageName: './gunner.jpg'},
        {name: 'Item 2', imageName: './sudan.jpg'},
        {name: 'Item 3', imageName: './parashar.jpg'},
        {name: 'Item 4', imageName: './rajish.jpg'}
      ]
    const onProjectClick = () => {
        window.open('https://custom-school-web.vercel.app/','_blank')
    }
  return (
    <>
    <h2 className='pagehead'>OurProjects</h2>
    <div className='mx-5'>
    <MultiCarousel items={items} onProjectClick={onProjectClick} />
    </div>
    </>
  )
}
