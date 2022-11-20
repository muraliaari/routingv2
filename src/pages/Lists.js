import React from 'react'

const Lists = (props) => {
  return (
    <div>
        <>
        {
            props.itemsarray.map((ele,i)=>(
                <li>{ele}</li>
            ))
        }
        </>
    </div>
  )
}

export default Lists