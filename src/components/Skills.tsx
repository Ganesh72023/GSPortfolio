import React from 'react';
import { Code, Database, BarChart3, Brain, Zap, Server, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      icon: <Code className="h-8 w-8" />,
      level: 95,
      description: 'Advanced proficiency in Python for data analysis, machine learning, and automation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'SQL',
      icon: <Database className="h-8 w-8" />,
      level: 90,
      description: 'Expert in database querying, optimization, and data manipulation',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Power BI',
      icon: <BarChart3 className="h-8 w-8" />,
      level: 85,
      description: 'Creating interactive dashboards and business intelligence solutions',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Data Visualization',
      icon: <TrendingUp className="h-8 w-8" />,
      level: 90,
      description: 'Transforming complex data into compelling visual narratives',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Tableau',
      icon: <BarChart3 className="h-8 w-8" />,
      level: 80,
      description: 'Advanced analytics and interactive dashboard development',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Exploratory Data Analysis',
      icon: <Brain className="h-8 w-8" />,
      level: 92,
      description: 'Statistical analysis and pattern discovery in complex datasets',
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'PySpark',
      icon: <Zap className="h-8 w-8" />,
      level: 75,
      description: 'Big data processing and distributed computing',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Databricks',
      icon: <Server className="h-8 w-8" />,
      level: 70,
      description: 'Unified analytics platform for big data and machine learning',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Flask',
      icon: <Globe className="h-8 w-8" />,
      level: 80,
      description: 'Building web applications and APIs for data-driven solutions',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
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
              Technical Skills
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm a passionate and detail-oriented data analyst skilled in Python, SQL, Power BI, Tableau, 
            EDA, Data Visualization, Databases, PySpark, Flask, Excel, and Python libraries like Pandas, 
            NumPy, and Matplotlib, with a strong understanding of data pipelines, storytelling with data, 
            and building data-driven solutions to support business decisions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <motion.span 
                      className="text-sm font-semibold text-gray-600 min-w-[40px]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                </div>
              </div>
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;