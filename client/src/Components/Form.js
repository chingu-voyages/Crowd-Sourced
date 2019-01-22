// import React, { Component } from 'react';
// import TextInput from '../Components/TextInput';
// import Loading from '../Components/Loading';
//
// export default class Form extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       successSubmit: false,
//     }
//   }
//
//   createInputs(inputList){
//     let inputs = [];
//     for(let i = 0; i < inputsList.length; i++){
//       inputs.push(
//         <label>inputsList[i].title</label>
//         <TextInput
//           value=
//       )
//     }
//     return inputs;
//   }
//
//   render() {
//     return(
//       <SingleCard>
//         <span className='title'>{this.props.title}</span>
//         <div className='line'/>
//         <Mutation
//           onCompleted={()=>this.setState({ successSubmit: true })}
//           mutation={this.props.mutation}>
//           {(mutate, { loading, error })=>(
//             <div className='form-wrapper'>
//               <form
//                 onSubmit={e =>(
//                   e.preventDefault();
//                   this.submitForm(mutate);
//                 )}>
//                 {this.createInputs(this.props.inputs)}
//               </form>
//             </div>
//           )}
//         </Mutation>
//       </SingleCard>
//     )
//   }
// }
