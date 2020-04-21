import React, { Component,Fragment } from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {connect} from 'react-redux';
 import {handleAddComponent, getCounterArray} from './dux'


class Counter extends Component{


    state={
        counterArray:[]
    }
//     handleAddComponent(){
//     const {counterArray} =this.state
//     this.setState({
//         counterArray:counterArray.length
//     })
    
// }
renderComponent=()=>{
    const {counterArray} = this.props
return(
    <Fragment>
  {counterArray.map((counter)=>

    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{counter.id}</CardTitle>
          <CardSubtitle>{counter.value}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  )}
    </Fragment>
)


}
    render(){

        return(
            <Fragment>
    <div>
    
    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>hhhhhhh</CardTitle>
          <CardSubtitle>hhhhhhhhhhhhhhhhhhhh</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Button onClick={this.props.handleAddComponent}>Add</Button>
    {this.renderComponent()}

    </div>
</Fragment>

        )
    }



}
const mapStateToProps=state=>{
    return{
      counterArray: getCounterArray(state)
    }
   }
   
   const mapDispatchToProps=dispatch=>{
         return{
             handleAddComponent:()=>dispatch(handleAddComponent())
           
         }
     }
     
    export default connect(mapStateToProps,mapDispatchToProps)(Counter);
   
// export default Counter; 
