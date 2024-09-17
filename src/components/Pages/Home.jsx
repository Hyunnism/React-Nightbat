import Hero from "../Hero/Hero";
import Services from "./Services";
import Card from '../Card/Card';
import { faPalette, faStar, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Title from './../Title';
import Testimonial from './Testimonial';
import HomeContent from "../Content/HomeContent";
import Client from "../Client/Client";

const Home = () => {
  const cardData = [
    {
      title: 'Creative Design',
      description: 'Explore our innovative and creative design solutions tailored for your needs.',
      icon: faPalette,
    },
    {
      title: 'High Quality',
      description: 'Experience the highest quality materials and craftsmanship in our products.',
      icon: faStar,
    },
    {
      title: 'Expert Team',
      description: 'Meet our team of experts who are dedicated to bringing your vision to life.',
      icon: faUsers,
    },
    {
      title: 'Customer Support',
      description: 'We offer outstanding customer support to ensure your satisfaction.',
      icon: faHeadset,
    },
  ];

  return (
    <div>
      <Hero />
      
      <div 
        className="text-center py-8 text-3xl"
        data-aos="fade-up"
      >
        <Title text1={'Mengenal'} text2={'Night-Bat'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Night bat Merupakan anak dari perusahaan PT. AFCO Mahakarya Hutama.Penuh dengan semangat dan gaya kerja
          yang profesional, modern, serta memberikan pelayanan yang terbaik kepada para Team Terutama
          client
        </p>
      </div>

      <div 
        className="flex flex-wrap justify-center gap-6 mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/5 flex-shrink-0"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered delay for animation
          >
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
              className="bg-blue-100 hover:bg-blue-300 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* The following sections are not animated */}
      <HomeContent />
      <Services />
      <Testimonial />
      <Client />
      
    </div>
  );
};

export default Home;
