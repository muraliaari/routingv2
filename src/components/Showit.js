import React,{useState} from 'react'

const Show = () => {

    const [state,setState] = useState([])

let items= localStorage.getItem("todo");

if(items){
    items=JSON.parse(items)
}
else{
    items=[]
}
  return (
    <div>
        <>
        {
            items.map((ele)=>(
                <li class="list-group-item list-group-item-primary">{ele}</li>
            ))
        }
        </>
    </div>
  )
}

export default Show