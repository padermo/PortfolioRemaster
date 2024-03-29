import { CldImage } from 'next-cloudinary';
import { Carousel } from 'antd';
import type { PropsProject } from '@/types/generals';

export default function Project({images, title, paragraph, technologies}:PropsProject){
  return (
    <div className='rounded-md bg-[#e8e8e8] shadow-lg flex flex-col overflow-hidden w-[300px] dark:bg-[#333] md:w-[400px] lg:w-[400px]'>
      <Carousel dots={false} easing='ease-in-out' autoplay autoplaySpeed={5000} effect='fade' speed={1000}>
        {
          images.map((img, index) => (
            <CldImage key={index} src={img} alt={title} width={500} height={500} loading='lazy' className='h-[180px] object-cover object-center' />
          ))
        }
      </Carousel>
      <div className='flex flex-col items-center gap-3 p-3'>
        <h3 className='text-center font-semibold text-lg text-[#222] dark:text-white'>{title}</h3>
        <p className='font-light text-wrap tracking-wide text-base font-serif text-[#222] dark:text-gray-100'>{paragraph}</p>
        <div className='flex items-center gap-2 flex-wrap'>
          {
            technologies.map((value, index) => (
              <p key={index} className='font-light text-sm text-[#222] rounded-md py-[1px] px-[3px] bg-[#d9d9d9] dark:text-gray-100 dark:bg-[#555]'>{value}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}