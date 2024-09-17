import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceDetail, teamMembers } from '../../Data/Data';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import lightbox styles
import Title from '../Title';
import { FaWhatsapp } from 'react-icons/fa';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = ServiceDetail.find((item) => item.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Jika service tidak ditemukan, arahkan ke halaman NotFoundPage
  if (!service) {
    React.useEffect(() => {
      navigate('/not-found'); // Arahkan ke route NotFoundPage
    }, [navigate]);

    return null; // Kembalikan null agar tidak merender konten apa pun
  }

  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div
          data-aos="fade-up"
          className="bg-white shadow-xl rounded-lg overflow-hidden mb-10 transform transition-transform duration-500 hover:scale-105"
        >
          <img src={service.src} alt={service.title} className="w-full h-[60vh] object-cover" />
          <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <p className="text-sm text-gray-600 mb-4">{service.details}</p>
          </div>
        </div>

      {/* Service Features */}
        {service.features && (
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-lg p-6 md:p-8 mb-12 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-left">Karakteristik booth yang baik</h2>
            <div className="space-y-12 md:space-y-16">
              {service.features.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 150}`}
                >
                  <div className="flex-shrink-0">
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-lg font-semibold text-gray-900 mb-2">{item.feature}</div>
                    {item.description && (
                      <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Images */}
        {service.projectImages && (
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl rounded-lg p-8 mb-12 transition-transform transform hover:-translate-y-2 hover:shadow-3xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.projectImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openLightbox(index + (service.additionalImages?.length || 0))}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img src={image} alt={`Project ${index}`} className="w-full h-[40vh] object-cover transform transition-transform duration-300 group-hover:scale-110 rounded-lg" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                    <span className="text-white text-xl font-bold">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {service.videos && (
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="bg-white shadow-xl rounded-lg p-6 mb-10 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Video</h2>
            <div className="space-y-4">
              {service.videos.map((video, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-md transform transition-transform duration-500 hover:scale-105"
                >
                  <video controls className="w-full h-auto rounded-lg">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Team Section */}
        <div className="text-2xl text-left mb-8 border-t pt-8 ">
          <Title text1={'Start Working'} text2={'with Us'} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {teamMembers.map(member => (
            <a
              key={member.id}
              href={`tel:${member.phone}`} // Link untuk menghubungi nomor telepon
              className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-md rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 group flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-28 h-28 rounded-full border-4 border-gray-200 object-cover transition-transform duration-300"
                />
                {member.phone !== '#' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-70">
                    <a
                      href={`https://wa.me/${member.phone}`} // Menggunakan nomor telepon dari data
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaWhatsapp size={30} />
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                {member.phone !== '#' && (
                  <p className="text-gray-500 text-sm mt-2">Wa: {member.wa}</p> // Menampilkan nomor telepon
                )}
              </div>
            </a>
          ))}
        </div>

       {/* Location */}
        <div className="text-2xl text-left mb-8 border-t pt-8">
          <Title text1={'Find'} text2={'Us'} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Sections */}
          <div className="flex-1 md:w-1/3 flex flex-col space-y-8 ">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 bg-gradient-to-br from-blue-50 via-white to-blue-100">
              <h2 className="text-xl font-bold mb-4">Office Location</h2>
              <p className="text-gray-700">
                Address: Kota Wisata Cibubur, Jl. Pesona Amerika No.A2 No. 20, Ciangsana, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16967
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 bg-gradient-to-br from-blue-50 via-white to-blue-100">
              <h2 className="text-xl font-bold mb-4">Workshop Location</h2>
              <p className="text-gray-700">
                Address: Jl. Raya Ciangsana Gg. 12 Mei Reformasi, Ciangsana, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16967
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-1 md:w-2/3">
            <div className="rounded-lg shadow-lg overflow-hidden flex h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.291873259045!2d106.944359!3d-6.375154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef5ab7e30341%3A0x6c76d7a44bb75710!2sMAESTRO%20Pro%20Group%20of%20AFCO%20PROJECT!5e0!3m2!1sen!2sus!4v1725893995022!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>



        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={service.additionalImages[photoIndex]} // Set initial image
            nextSrc={service.additionalImages[(photoIndex + 1) % service.additionalImages.length]} // Set next image
            prevSrc={service.additionalImages[(photoIndex + service.additionalImages.length - 1) % service.additionalImages.length]} // Set previous image
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + service.additionalImages.length - 1) % service.additionalImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % service.additionalImages.length)}
            imageCaption={<span className="text-white text-lg">Gambar {photoIndex + 1} dari {service.additionalImages.length}</span>}
          />
        )}
      </div>
    </section>
  );
};

export default ServiceDetailPage;
