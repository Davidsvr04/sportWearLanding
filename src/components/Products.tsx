import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const Products: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Datos de productos simulados - en una app real vendrían de una API
  const products: Product[] = [
    {
      id: 1,
      name: "Camiseta Pro Runner",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.8,
      image: "https://underarmourcol.vtexassets.com/arquivos/ids/444749-800-1200?v=637698345332900000&width=800&height=1200&aspect=true",
      category: "Camisetas",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Pantalón Athletic Fit",
      price: 89.99,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/db/57/ce/db57ced52b6378d85fbd5666098447b9.jpg",
      category: "Pantalones",
      isNew: false,
    },
    {
      id: 3,
      name: "Chaqueta WindBreaker",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/51jy0noS8TL.jpg",
      category: "Chaquetas",
      isSale: true,
    },
    {
      id: 4,
      name: "Zapatillas UltraBoost",
      price: 199.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
      category: "Calzado",
      isNew: true,
    },
    {
      id: 5,
      name: "Top Deportivo Elite",
      price: 39.99,
      rating: 4.6,
      image: "https://www.puntoblanco.co/cdn/shop/files/stoltz-verde-49698-749837_049698-3_660c474e-54cd-4384-a9a5-699b0a2356dc.jpg?v=1755699713",
      category: "Tops",
    },
    {
      id: 6,
      name: "Shorts Performance",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.8,
      image: "https://media.falabella.com/falabellaCO/127597635_01/w=800,h=800,fit=pad",
      category: "Shorts",
      isSale: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Productos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de ropa deportiva de alta calidad, 
            diseñada para maximizar tu rendimiento y comodidad.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NUEVO
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      OFERTA
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-50"
                  >
                    <FiHeart size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <FiStar className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FiShoppingCart size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos los Productos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;