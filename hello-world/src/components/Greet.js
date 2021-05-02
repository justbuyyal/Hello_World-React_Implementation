import React from 'react'

// function Greet() {
//     return <h1>Hello Faker</h1>
// }

// const Greet = ({name, heroName}) => {
//     // console.log(seken)
//     return (
//     <div>
//         <h1>Hello {name} a.k.a {heroName}</h1> 
//     </div>
//     )
// }

const Greet = seken => {
    const {name, heroName} = seken
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greet