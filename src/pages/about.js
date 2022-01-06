import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle='About Page' pageHeading='About Us Page'>
      These are the contents of about page
      <StaticImage src="https://images.indianexpress.com/2021/08/spider-man-no-way-home-1200.jpg" alt="spiderman 2"  /*for images coming from link*//>  
    </Layout>
  )
}
export default AboutPage