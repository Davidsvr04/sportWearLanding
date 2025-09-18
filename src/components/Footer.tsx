import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShoppingBag, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiSend,
  FiArrowUp
} from 'react-icons/fi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    company: {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Nuestra Historia", href: "#" },
        { name: "Carreras", href: "#" },
        { name: "Prensa", href: "#" },
        { name: "Sostenibilidad", href: "#" }
      ]
    },
    products: {
      title: "Productos",
      links: [
        { name: "Hombres", href: "#" },
        { name: "Mujeres", href: "#" },
        { name: "Niños", href: "#" },
        { name: "Accesorios", href: "#" },
        { name: "Nuevos Lanzamientos", href: "#" }
      ]
    },
    support: {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#" },
        { name: "Guía de Tallas", href: "#" },
        { name: "Envíos y Devoluciones", href: "#" },
        { name: "Contacto", href: "#contact" },
        { name: "FAQ", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FiShoppingBag className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">SportWear</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elevamos tu rendimiento deportivo con ropa de alta calidad, 
              diseñada para atletas que buscan la excelencia en cada entrenamiento.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">
                  Av. Deportiva 123, Ciudad Deportiva, CP 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">info@sportwear.com</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-700"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Mantente al Día con SportWear
            </h3>
            <p className="text-gray-300 mb-8">
              Suscríbete a nuestro newsletter y recibe ofertas exclusivas, 
              nuevos productos y consejos de entrenamiento.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors duration-200"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubscribed}
                className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-200 ${
                  isSubscribed
                    ? 'bg-green-600 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isSubscribed ? (
                  <>
                    <span>¡Suscrito!</span>
                  </>
                ) : (
                  <>
                    <span>Suscribirse</span>
                    <FiSend size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center space-x-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SportWear. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;