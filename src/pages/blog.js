import * as React from "react";
import Layout from '../components/layout';
import { graphql } from "gatsby";

const BlogPage = (dataQuery) =>{
    console.log(dataQuery)
    return (
        <Layout pageTitle='Blog Page' pageHeading='This is the Blog Page'>
        Total Number of Posts: {dataQuery.data.allFile.totalCount}
         <ul>
            {dataQuery.data.allFile.nodes.map((node) =>{
                return <li key={node.name}>
                    {node.name}
                </li>;
            })}
         </ul>
        </Layout>
      )

}

export const dataQuery = graphql`
query dataCountAndQueryData{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
      allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        totalCount
      }
    
  }`
export default BlogPage;