// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Bagheshri T S',
    title: 'Student | Christ University BRC',
    image: getAsset('images/PROFILE_PIC.jpg'), // Resolves to /profile.png or /base-path/profile.png
    description: 'Bagheshri T S is a student pursuing BA Economics interested in the field of publicy policy and development research aiming to create solutions for the existing socio-economic problems,
    
  tagline: "Economics Student ♦ Public Policy & Development Research ♦ Data Analysis",
  location: 'Bangalore, India',
  },

  seo: {
    title: "Bagheshri T S - Student and Learning Enthusiast",
    description: "Official website showcasing Bagheshri T S\'s education, research, projects and experience.",
  },

  animatedText: ['Researcher', 'Analyst', 'Builder'],

navigation: [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Resume', url: '/resume' },
  { name: 'Contact', url: '/contact' },
],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
 


  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Bachelor of Economics',
      year: '2024–2027',
      image: getAsset('images/education/Christ_University.png'),
      description: [
        'Focusing on economics as a core subject with data analysis and policy research',
      ],
    },
    {
      institution: 'Advaith International Academy,Hosur',
      class: '12th',
      year: '2023-24',
      image: getAsset('images/education/ignouLogo.png'),
      description: [
        'Focused on Economics,Political Science, History and Psychology',
      ],
    },
   

// ✅ Unified MOOC + Certifications Section
certifications: [
  // --- Deep Learning Specialization (DeepLearning.AI) ---
    // --- Deep Learning Specialization (DeepLearning.AI) ---
  {
    title: "Deep Learning Specialization (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation: Neural Networks and Deep Learning Improving Deep Neural Networks Hyperparameter tuning Regularization and Optimization Structuring Machine Learning Projects Convolutional Neural Networks Sequence Models.pdf"),
    certificates: [
      { name: "Neural Networks and Deep Learning", file: getAsset("images/education/Certifications/deep learning Neural Networks and Deep Learning.pdf") },
      { name: "Improving Deep Neural Networks", file: getAsset("images/education/Certifications/deep learning: Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization.pdf") },
      { name: "Structuring Machine Learning Projects", file: getAsset("images/education/Certifications/deep learning ai structuring ML projects.pdf") },
      { name: "Convolutional Neural Networks", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks.pdf") },
      { name: "Sequence Models", file: getAsset("images/education/Certifications/deep learning sequence models.pdf") },
    ],
  },



  // ✅ Projects section updated
  projects: [
    {
      title: "MultiModal Machine Learning AutoML",
      cardImage: getAsset("images/project/Brain-AutoML.png"),
      description: "BMMA framework is capable of scaling to multiple modalities such as tabular, sentiment data, time series, and computer vision data...",
      Githublink: "https://github.com/chandraveshchaudhari/brain-ai",
    },
    {
      title: "Hybrid Subset Feature Selection and Importance Framework",
      cardImage: getAsset("images/project/HSFSIframework.png"),
      description: "Implements MultiSURF, ReliefF, SURF, and more for scalable feature selection...",
      Githublink: "https://github.com/chandraveshchaudhari/hybrid-feature-selection",
    },
    {
      title: "systematic-reviewpy",
      cardImage: getAsset("images/project/systematic-reviewpy.png"),
      description: "An open-source Python framework for systematic review based on PRISMA",
      Githublink: "https://github.com/chandraveshchaudhari/systematic-reviewpy",
    },
  ],


  contact: {
    email: 'bagheshri14@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bagheshri-t-s-13a053316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/bagheshri14-cmyk',
    googleScholar: 'https://scholar.google.com/citations?authuser=1&user=V78qbA8AAAAJ',
  orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;
