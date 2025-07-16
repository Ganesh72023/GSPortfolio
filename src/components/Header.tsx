import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <motion.span 
                  className="text-white font-bold text-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                >
                  G$
                </motion.span>
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-lg opacity-20 blur-sm"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
            <span className="text-xl font-bold text-gray-900">Ganesh Shingade</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <motion.a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#experience" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Experience
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.a 
              href="mailto:ganeshshingade788@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ganesh-shingade-42b059270/" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/Ganesh72023" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;