'use client'
import { useState, useEffect } from 'react'
import { FloatButton } from 'antd'
import ConfigThemeAnt from '../ParentComponents/ConfigThemeAnt'
import { CaretUpFilled } from '@ant-design/icons'

export default function ScrollTop(){
  const [isView, setIsView] = useState<boolean>(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const ButtonIsVisible = () => {
    const valueScrollY = window.scrollY;
    if(valueScrollY >= 720){
      setIsView(true)
    } else {
      setIsView(false)
    }
  }

  useEffect(() => {
    ButtonIsVisible();

    window.addEventListener('scroll', ButtonIsVisible);

    return () => {
      window.removeEventListener('scroll', ButtonIsVisible);
    }
  }, [])

  if(isView){
    return (
      <ConfigThemeAnt>
        <FloatButton
          shape='circle'
          type='primary'
          style={{right: 20, bottom: 20}}
          icon={<CaretUpFilled className='text-[#222] dark:text-white'/>}
          onClick={handleScrollTop}
        />
      </ConfigThemeAnt>
    )
  }

  return null;
}