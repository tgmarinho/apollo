import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm  from './RegisterForm';
import GoalForm  from './GoalForm';
import LoginForm from './LoginForm';
import { withApollo } from 'react-apollo';



const App = ({ loading, resolutions, client, user }) => {
  if(loading) return null;
  return (
  <div>
    { user._id ? (
      <button onClick={() => {
        Meteor.logout()
        client.resetStore();
        }}>
      Logout
      </button>
    ) : (
      <div>
        <RegisterForm client={client}/>
        <LoginForm client={client}/>
      </div>
    )}
    <ResolutionForm />
     <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>{resolution.name}
          <GoalForm resolutionId={resolution._id}/>
        </li>
      ))}
    </ul> 
  </div>
)
};


const resolutionQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
    user {
      _id
    }
   
}
`;

export default graphql(resolutionQuery, {
  props: ({data}) => ({... data})
})(withApollo(App));

// export default withApollo(LoginForm);