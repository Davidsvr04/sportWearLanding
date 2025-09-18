import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: FiAward,
      title: "Calidad Premium",
      description: "Materiales de alta calidad seleccionados cuidadosamente para garantizar durabilidad y comodidad."
    },
    {
      icon: FiUsers,
      title: "Para Todos",
      description: "Diseños inclusivos que se adaptan a atletas de todos los niveles y disciplinas deportivas."
    },
    {
      icon: FiTrendingUp,
      title: "Innovación",
      description: "Tecnología de vanguardia integrada en cada prenda para mejorar tu rendimiento deportivo."
    },
    {
      icon: FiHeart,
      title: "Pasión por el Deporte",
      description: "Creado por atletas, para atletas. Entendemos tus necesidades porque compartimos tu pasión."
    }
  ];

  const stats = [
    { number: "15+", label: "Años de Experiencia" },
    { number: "1M+", label: "Productos Vendidos" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte al Cliente" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Nuestra <span className="gradient-text">Historia</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Desde 2008, SportWear ha sido pionero en la creación de ropa deportiva 
              que combina estilo, funcionalidad y rendimiento. Nuestra misión es empoderar 
              a cada atleta para que alcance su máximo potencial.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajamos con los mejores diseñadores y utilizamos tecnologías avanzadas 
              para crear prendas que no solo se ven increíbles, sino que también mejoran 
              tu experiencia deportiva.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-colors duration-300"
            >
              Conoce Más
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center"
                alt="Atletas usando SportWear"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Atletas de Élite</h3>
                <p className="text-white/80">Confiando en nuestra calidad</p>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FiAward className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Premios Ganados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Números que hablan por nosotros
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;