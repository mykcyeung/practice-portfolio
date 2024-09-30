
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

// interface GridItemProps {
//   id: string;
//   title: string;
//   description: string;
//   className: string;
//   img: string;
//   imgClassName: string;
  
// }

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName}) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid