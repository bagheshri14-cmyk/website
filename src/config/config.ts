// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Bagheshri T S',
    title: 'Student | Christ University BRC',
    image: getAsset('images/PROFILE_PIC.jpg'),
    description:
      'Bagheshri T S is a student pursuing BA Economics, interested in public policy and development research, aiming to create solutions for socio-economic problems.',
    tagline:
      'Economics Student ♦ Public Policy & Development Research ♦ Data Analysis',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Bagheshri T S - Student and Learning Enthusiast',
    description:
      "Official website showcasing Bagheshri T S's education, research, projects and experience.",
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

  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Bachelor of Economics',
      year: '2024–2027',
      image: getAsset('images/education/Christ_University.png'),
      description: [
        'Focusing on economics with data analysis and policy research',
      ],
    },
    {
      institution: 'Advaith International Academy, Hosur',
      degree: 'Class 12',
      year: '2023–2024',
      image: getAsset('images/education/ignouLogo.png'),
      description: [
        'Studied Economics, Political Science, History and Psychology',
      ],
    },
  ],

  certifications: [
    {
      title: 'Deep Learning Specialization (DeepLearning.AI)',
      specialization: true,
      file: getAsset(
        'images/education/Certifications/Deep_Learning_Specialization.pdf'
      ),
      certificates: [
        {
          name: 'Neural Networks and Deep Learning',
          file: getAsset(
            'images/education/Certifications/Neural_Networks_and_Deep_Learning.pdf'
          ),
        },
        {
          name: 'Improving Deep Neural Networks',
          file: getAsset(
            'images/education/Certifications/Improving_Deep_Neural_Networks.pdf'
          ),
        },
        {
          name: 'Structuring Machine Learning Projects',
          file: getAsset(
            'images/education/Certifications/Structuring_ML_Projects.pdf'
          ),
        },
        {
          name: 'Convolutional Neural Networks',
          file: getAsset(
            'images/education/Certifications/Convolutional_Neural_Networks.pdf'
          ),
        },
        {
          name: 'Sequence Models',
          file: getAsset(
            'images/education/Certifications/Sequence_Models.pdf'
          ),
        },
      ],
    },
  ],

  projects: [
    {
      title: 'MultiModal Machine Learning AutoML',
      cardImage: getAsset('images/project/Brain-AutoML.png'),
      description:
        'BMMA framework supports multiple modalities such as tabular data, time series, sentiment analysis and computer vision.',
      Githublink: 'https://github.com/chandraveshchaudhari/brain-ai',
    },
    {
      title: 'Hybrid Subset Feature Selection Framework',
      cardImage: getAsset('images/project/HSFSIframework.png'),
      description:
        'Implements MultiSURF, ReliefF and other feature selection techniques.',
      Githublink:
        'https://github.com/chandraveshchaudhari/hybrid-feature-selection',
    },
    {
      title: 'systematic-reviewpy',
      cardImage: getAsset('images/project/systematic-reviewpy.png'),
      description:
        'An open-source Python framework for systematic reviews using PRISMA.',
      Githublink:
        'https://github.com/chandraveshchaudhari/systematic-reviewpy',
    },
  ],

  contact: {
    email: 'bagheshri14@gmail.com',
    linkedin:
      'https://www.linkedin.com/in/bagheshri-t-s-13a053316',
    github: 'https://github.com/bagheshri14-cmyk',
    googleScholar:
      'https://scholar.google.com/citations?user=V78qbA8AAAAJ',
    orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;
