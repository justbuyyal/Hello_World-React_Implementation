import React from 'react'

function Columns() {
    const items = []
    return (
        // <React.Fragment>
        //     {
        //         items.map( item => (
        //             <React.Fragment key = {item.id}>
        //                 <h1>Title</h1>
        //                 <p>{item.title}</p>
        //             </React.Fragment>
        //         ))
        //     }
        //     <td>Name</td>
        //     <td>Faker</td>
        // </React.Fragment>

        // cannot pass in the key attribute
        <>
            <td>Name</td>
            <td>Faker</td>
        </>
    )
}

export default Columns
