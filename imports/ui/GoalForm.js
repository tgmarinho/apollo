import React, { Component }from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createGoal = gql`
    mutation createGoal($name: String!, $resolutionId: String!) {
        createGoal(name: $name, resolutionId: $resolutionId) {
            _id
        }
    }

`;

class GoalForm extends Component {
    
    submitForm = () => {
      
        this.props.createGoal({
            variables: {
                name: this.name.value,
                resolutionId: this.props.resolutionId
            }
     
        }).catch(err => {
            console.log(err);
        });
      
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={input => (this.name = input)} />
                <button onClick={this.submitForm}>Submit</button>
            </div> 
        );
    }
}


export default graphql(createGoal, { name: "createGoal"})(GoalForm)