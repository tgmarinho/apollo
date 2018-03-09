import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm  from './RegisterForm';
import LoginForm from './LoginForm';
import { withApollo } from 'react-apollo';


const App = ({ loading, resolutions, client }) => {
  if(loading) return null;
  return (
  <div>
    <button onClick={() => {
      Meteor.logout()
      client.resetStore();
      }}>Logout</button>
    <RegisterForm client={client}/>
    <LoginForm client={client}/>
    <ResolutionForm />
     <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>{resolution.name}</li>
      ))}
    </ul> 
  </div>
)
};


const resolutionQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
}
`;

export default graphql(resolutionQuery, {
  props: ({data}) => ({... data})
})(withApollo(App));

// export default withApollo(LoginForm);