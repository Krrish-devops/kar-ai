import image1 from "@/public/images/testimonial/melbeezz.svg";
import image2 from "@/public/images/testimonial/emed.svg";
import image3 from "@/public/images/testimonial/shodatLogo.svg";
import image4 from "@/public/images/testimonial/xeni.svg";
import image5 from "@/public/images/testimonial/trussedais.svg";
import { Testimonial } from "@/types/testimonial";

export const testimonialDataProject: Testimonial[] = [
  {
    id: 1,
    name: "Melbeez",
    designation: "Melbeez, an app that helps homeowners and businesses manage appliance inventory",
    content: "On the web, we built an admin tool using React to add product warranties and feeds.In the mobile app (React Native), customers can buy warranties with Stripe payments (Java).The app is available on the Play Store and App Store, deployed on AWS for scalability.Our work improved warranty management, user experience, and overall functionality",
    image: image1,
  },
  {
    id: 2,
    name: "Emedlogix",
    designation: "Emedlogix Solutions, an AI-driven healthcare platform optimizing HCC coding and risk analysis.",
    content: "Our contribution included loading and parsing data in the Java backend for efficient processing.We developed the frontend using React to fetch and display code details seamlessly.A code search tool, built with Material UI, enhances usability and accessibility.We integrated Elasticsearch for fast, accurate searches and PostgreSQL for secure data storage.The platform ensures high accuracy, productivity, and compliance for healthcare providers.Our work improved workflow efficiency, data retrieval, and overall user experience",
    image: image2,
  },
  {
    id: 3,
    name: "Shodat Ai",
    designation: "Shodat, a platform that enhances businesses with data analytics solutions.",
    content: "Our team developed its website using React, Node.js, and Tailwind CSS for a modern UI.We built a contact form to facilitate seamless user interaction with the admin.The platform ensures a smooth and engaging experience for businesses and clients.Our focus was on efficiency, responsiveness, and a visually appealing design",
    image: image3,
  },
  {
    id: 4,
    name: "Xeni",
    designation: "Xeni, a travel booking app for flights, cruises, hotels, and more",
    content: "The platform aims to bring elegant and efficient tech solutions to the travel industry.Our contributions included developing key components to enhance functionality.We also fixed customer-reported bugs to improve the booking experience.Our work ensured a smoother, more reliable ticket booking process for users.",
    image: image4,
  },
  {
    id: 5,
    name: "Trussed Ai",
    designation: "Trussed.AI, a platform",
    content: "Our contribution was a component utilization graph built with React and Material UI.The graph visualizes how many users interacted with the AI API monitoring tool.This helps track usage, improve insights, and enhance system monitoring. We focused on a user-friendly, scalable, and visually intuitive design",
    image: image5,
  }
];
