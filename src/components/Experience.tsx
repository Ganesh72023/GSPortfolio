import React from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst Internship',
      company: 'Professional Experience',
      period: 'Recent',
      description: 'Assisted in data collection, cleaning, and analysis to generate business insights. Performed Exploratory Data Analysis (EDA) using Python, SQL, and Excel. Created interactive dashboards and reports using Power BI/Tableau.',
      skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'EDA']
    }
  ];

  const certifications = [
    {
      name: 'Vultr Cloud Innovation Hackathon',
      issuer: 'Vultr',
      year: '2023'
    },
    {
      name: 'Google Cloud Computing Foundations and Generative AI',
      issuer: 'Google Cloud',
      year: '2024'
    },
    {
      name: 'Oracle Academy Database Foundation',
      issuer: 'Oracle Academy',
      year: '2023'
    },
    {
      name: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Deloitte',
      year: '2024'
    },
    {
      name: 'Accenture Data Analytics and Visualization',
      issuer: 'Accenture North America',
      year: '2024'
    },
    {
      name: 'PySpark Course',
      issuer: 'Infosys Springboard',
      year: '2024'
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Progressive career growth in data science and analytics, delivering measurable business impact 
            through innovative data solutions
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mr-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-300 to-purple-300"></div>
                  
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-purple-600 font-semibold mb-4">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education & Certifications */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white mr-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  B.Tech Computer Science and Engineering
                </h4>
                <p className="text-blue-600 font-semibold mb-2">MIT Aurangabad, DBATU University</p>
                <p className="text-gray-600 text-sm mb-1">Chhatrapati Sambhaji Nagar</p>
                <p className="text-gray-500 text-sm font-medium">2021 - 2025</p>
              </motion.div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white mr-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -3, 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <h4 className="font-bold text-gray-900 text-sm mb-2">{cert.name}</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-xs">{cert.issuer}</p>
                      <span className="text-blue-600 text-xs font-semibold bg-blue-50 px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;