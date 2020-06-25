import React from 'react'

export default props => [
    <h1 key="h1">Bom dia {props.nome}!</h1>,
    <h2 key="h2">Tenho {props.idade} anos</h2>
] 

// export default props => 
//     // tag usada para envolver as outras tag sem precisar usar <div>
//     // React.Fragment ou import ele e usa como Fragment
//     <React.Fragment> 
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Tenho {props.idade} anos</h2>
//     </React.Fragment>

// export default props => 
//     <div> 
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Tenho {props.idade} anos</h2>
//     </div>