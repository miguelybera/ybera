import * as React from "react";
import Layout from '../components/layout';
import { graphql } from "gatsby";

const BlogPage = (dataQuery) =>{
    return (
        <Layout pageTitle='Blog Page' pageHeading='This is the Blog Page'>
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
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }`
export default BlogPage;