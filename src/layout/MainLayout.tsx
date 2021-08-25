import React from "react"

const MainLayout = (props: Props) => {
  const { children } = props
  console.log(children)
  return (
    <div className='page flex-row flex-jst-btw flex-ali-center'>
      {children}
    </div>
  )
}

export default MainLayout