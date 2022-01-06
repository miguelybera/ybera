import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle='Home Page' pageHeading='Home'>
  <p>Welcome to the Ybera Page</p>
  <StaticImage src="../images/sman.jpg" alt="spiderman"  /*for images coming from image folder*//>
  <StaticImage src="https://images.firstpost.com/wp-content/uploads/2021/09/Marvels-Spider-Man-2-1280.jpg" alt="spidrmen"  /*for images coming from link*//>  
    </Layout>
    
    
  )
}
export default HomePage