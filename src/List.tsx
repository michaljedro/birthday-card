import React from 'react'

type Props ={
    data: {
        id: number;
        name: string;
        age: number;
        image: string;
    }[]
}
function List({data}:Props) {
  return (
    <>{data.map((item)=> {
       return <article key={item.id} className='person'>
        <img src={item.image} alt={item.name}/>
        <div>
            <h4>{item.name}</h4>
            <p>{item.age} years</p>
        </div>
       </article>
        
    })}</>
  )
}

export default List