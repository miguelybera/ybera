import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle='About Page' pageHeading='About Us Page'>
      These are the contents of about page
      <StaticImage src="https://images.indianexpress.com/2021/08/spider-man-no-way-home-1200.jpg" alt="spiderman 2" loading='eager' /*for images coming from link*//>  
      <StaticImage src="https://i.insider.com/61a542951f8b8c00195ab374?width=700" alt="spiderman 3" loading='lazy' /*for images coming from link*//>  
      
    </Layout>
  )
}
export default AboutPage