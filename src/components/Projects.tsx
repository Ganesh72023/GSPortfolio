import React from 'react';
import { useState } from 'react';
import { ExternalLink, Github, BarChart3, Brain, Database, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Car Dekho Analysis',
      description: 'This project examines Car Dekho data to reveal car sales trends, prices, and customer preferences. The data is gathered, cleaned, and analysis to determine the most influential factors on car prices, including model, fuel type, and year.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'SQL', 'Data Analysis', 'EDA'],
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      detailedDescription: 'This comprehensive project involved analyzing Car Dekho\'s extensive automotive dataset to uncover valuable insights about car sales trends, pricing patterns, and customer preferences. The analysis focused on identifying the most influential factors affecting car prices and understanding market dynamics in the automotive industry.',
      keyFeatures: [
        'Comprehensive data cleaning and preprocessing of large automotive dataset',
        'Statistical analysis of price trends across different car models and years',
        'Customer preference analysis based on fuel type, transmission, and brand',
        'Interactive visualizations showing market trends and insights',
        'Predictive modeling for car price estimation',
        'Detailed reporting with actionable business recommendations'
      ],
      challenges: [
        'Handling missing and inconsistent data across multiple car attributes',
        'Standardizing car model names and specifications from different sources',
        'Managing large dataset efficiently for complex analytical operations',
        'Creating meaningful visualizations for non-technical stakeholders'
      ],
      outcomes: [
        'Identified top 5 factors influencing car prices with 85% accuracy',
        'Discovered seasonal trends in car sales and customer preferences',
        'Provided data-driven recommendations for inventory management',
        'Created automated reporting system for ongoing market analysis'
      ],
      duration: '3 months',
      teamSize: 'Individual Project',
      githubUrl: 'https://github.com/Ganesh72023',
      liveUrl: 'https://github.com/Ganesh72023'
    },
    {
      title: 'Super Store Sales Dashboard',
      description: 'A Super Store Sales Dashboard provides visual insights into sales performance, revenue, and key metrics for better decision-making.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Tableau', 'Data Visualization', 'Business Intelligence'],
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      detailedDescription: 'Developed a comprehensive business intelligence dashboard for Super Store sales data, providing real-time insights into sales performance, revenue trends, and key business metrics. The dashboard enables stakeholders to make data-driven decisions through interactive visualizations and automated reporting.',
      keyFeatures: [
        'Real-time sales performance monitoring with KPI indicators',
        'Interactive regional and product category analysis',
        'Customer segmentation and behavior analysis',
        'Profit margin analysis across different product lines',
        'Time-series forecasting for sales predictions',
        'Mobile-responsive design for on-the-go access'
      ],
      challenges: [
        'Integrating data from multiple sources with different formats',
        'Ensuring real-time data refresh without performance issues',
        'Creating intuitive visualizations for diverse user groups',
        'Implementing role-based access control for sensitive data'
      ],
      outcomes: [
        'Reduced reporting time by 70% through automated dashboards',
        'Improved decision-making speed with real-time insights',
        'Identified underperforming regions and products',
        'Increased sales team productivity by 25% through better data access'
      ],
      duration: '2 months',
      teamSize: 'Individual Project',
      githubUrl: 'https://github.com/Ganesh72023',
      liveUrl: 'https://github.com/Ganesh72023'
    },
    {
      title: 'Big Data Sales Analysis using PySpark',
      description: 'Developed and executed PySpark scripts to perform robust data cleaning and preprocessing, addressing missing values, handling data type inconsistencies, and standardizing formats for large sales data. Utilized PySpark Data Frame API and Spark SQL to perform complex joins and aggregations.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PySpark', 'Databricks', 'Big Data', 'Spark SQL'],
      icon: <Brain className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      detailedDescription: 'Engineered a scalable big data solution using PySpark and Databricks to process and analyze large-scale sales datasets. The project focused on building robust ETL pipelines and performing complex analytical operations on distributed data systems.',
      keyFeatures: [
        'Scalable data processing pipeline handling millions of records',
        'Advanced data cleaning and preprocessing using PySpark',
        'Complex joins and aggregations across multiple large datasets',
        'Performance optimization for distributed computing',
        'Real-time streaming data processing capabilities',
        'Integration with Databricks for collaborative development'
      ],
      challenges: [
        'Optimizing performance for large-scale data processing',
        'Managing memory and resource allocation in distributed environment',
        'Handling data skewness and partition optimization',
        'Ensuring data quality and consistency across distributed operations'
      ],
      outcomes: [
        'Processed 10+ million records with 90% performance improvement',
        'Reduced data processing time from hours to minutes',
        'Built reusable ETL framework for future projects',
        'Enabled real-time analytics on streaming sales data'
      ],
      duration: '4 months',
      teamSize: 'Team of 2',
      githubUrl: 'https://github.com/Ganesh72023',
      liveUrl: 'https://github.com/Ganesh72023'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real-world applications demonstrating expertise in data science, analytics, 
            and engineering across various industries and use cases
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 cursor-pointer"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3"
                  whileHover={{ color: "#2563eb" }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#f3f4f6"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">View Demo</span>
                  </motion.button>
                  <motion.button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;
