import React from "react"

type Props = {
  children: Element | JSX.Element,
  [key:string]: any
}

const MainLayout = (props:Props) => {
  const { children } = props
  return (
    <div className='page flex-row flex-jst-btw flex-ali-center'>
      <div className='sideMenu flex-1'>菜单</div>
      <div className='main flex-3'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout