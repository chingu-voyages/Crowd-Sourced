import React from 'react';
import SingleCard from '../Components/SingleCard';
import { Query } from "react-apollo";
import Loading from '../Components/Loading';

export default function SingleCardQuery(props){
  return(
    <Query query={props.query}>
      {({loading, error, data})=>{
        if(loading) return <Loading/>;
        return(
          <SingleCard>
            {error ? <props.errorComponent />: <props.successComponent data={data}/>}
          </SingleCard>
        )
      }}
    </Query>
  )
}
