// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Bagheshri T S',
    title: 'Economics Student | Christ University BRC',
    image: getAsset('assets/PROFILE_PIC.jpg'),
    description:
      'Bagheshri T S is a student pursuing BA Economics, interested in public policy and development research, aiming to create people-centred and data-driven solutions to socio-economic problems.',
    tagline:
      'Economics Student ♦ Public Policy & Development Research ♦ Data Analysis',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Bagheshri T S — Portfolio',
    description:
      'Portfolio website of Bagheshri T S showcasing academic background, research interests and projects.',
  },

  animatedText: ['Researcher', 'Analyst', 'Policy Enthusiast'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Contact', url: '/contact' },
  ],

  education: [
    {
      institution: 'Christ (Deemed to be University), Bengaluru',
      degree: 'Bachelor of Arts in Economics',
      year: '2024–2027',
      image: getAsset('assets/Christ_University.png'),
      description: [
        'Core coursework in Microeconomics, Macroeconomics, Statistics, Mathematical Economics and Political Economy of India.',
        'Strong focus on data analysis, policy evaluation and applied economic research.',
      ],
    },
    {
      institution: 'Advaith International Academy, Hosur',
      degree: 'Class XII',
      year: '2023–2024',
      image: getAsset('assets/ignouLogo.png'),
      description: [
        'Studied Economics, Political Science, History and Psychology.',
      ],
    },
  ],

  projects: [
    {
      id: 'regional-development',
      title:
        'Uneven Regional Development — Tribal & Resource-Rich Regions of India',
      image: getAsset('assets/project1.png'),
      abstract:
        'This study analyses why mineral-rich states like Jharkhand, Odisha and Chhattisgarh continue to show poor human development outcomes despite significant extractive wealth.',
      sections: [
        {
          heading: 'Key Case Findings',
          content: [
            'Jharkhand: Weak local reinvestment of mining revenues and limited recognition of tribal rights despite large DMF collections.',
            'Odisha: Resource extraction conflicts such as the Niyamgiri movement highlight governance and consent-related challenges.',
            'Chhattisgarh: Conflict-affected mining districts face displacement, underdevelopment and weak institutional capacity.',
          ],
        },
        {
          heading: 'Theory & Policy',
          content: [
            'Resource Curse and Growth Pole theories reveal governance failures, centralised decision-making and weak local participation as key drivers of regional exclusion.',
          ],
        },
        {
          heading: 'Recommendations',
          content: [
            'Improve Gram Sabha participation and DMF transparency.',
            'Invest in human capital and infrastructure in tribal regions.',
            'Promote local employment through mining value-chain linkages.',
            'Strengthen environmental and social safeguards.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Collected secondary data, conducted descriptive analysis in Excel, reviewed literature and drafted policy recommendations.',
          ],
        },
      ],
    },

    {
      id: 'brazil-macro',
      title: 'Brazil: Macroeconomic Analysis (2010–2024)',
      image: getAsset('assets/project2.png'),
      abstract:
        'A comprehensive macroeconomic study of Brazil analysing GDP growth, inflation, interest rates, unemployment, trade and FDI over 2010–2024.',
      sections: [
        {
          heading: 'Methodology',
          content: [
            'Descriptive time-series analysis using Excel.',
            'Basic correlation analysis and macroeconomic theory interpretation.',
          ],
        },
        {
          heading: 'Key Findings',
          content: [
            'Economic recessions in 2015–16 and 2020 were driven by commodity shocks, political instability and the COVID-19 pandemic.',
            'SELIC rate hikes controlled inflation but increased borrowing costs.',
            'High informality weakened the unemployment–growth relationship.',
          ],
        },
        {
          heading: 'Policy Recommendations',
          content: [
            'Reduce commodity dependence through diversification.',
            'Balance inflation targeting with growth objectives.',
            'Improve institutional efficiency and credit access.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Cleaned datasets, prepared charts, analysed trends and wrote theory-based interpretations.',
          ],
        },
      ],
    },

    {
      id: 'india-energy',
      title: 'India’s Energy Transition & Climate Diplomacy',
      image: getAsset('assets/project3.png'),
      abstract:
        'This project examines India’s renewable energy expansion, climate diplomacy initiatives and the challenges of achieving a just energy transition.',
      sections: [
        {
          heading: 'Drivers',
          content: [
            'Energy security and reduced import dependence.',
            'Climate vulnerability and public health concerns.',
            'Technological progress in solar, storage and grids.',
            'Leadership through the International Solar Alliance.',
          ],
        },
        {
          heading: 'Barriers',
          content: [
            'Financing constraints and grid integration challenges.',
            'Centre–state policy coordination issues.',
            'Land acquisition and social impacts.',
          ],
        },
        {
          heading: 'Way Forward',
          content: [
            'Expand storage and grid modernisation.',
            'Use green finance and blended funding mechanisms.',
            'Ensure just-transition policies for workers and communities.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Researched policy evolution, drafted case studies and contributed to recommendations and documentary content.',
          ],
        },
      ],
    },

    {
      id: 'tesla-stock',
      title: 'Tesla Stock Analysis Using SQL',
      image: getAsset('assets/project4.png'),
      abstract:
        'An SQL-based financial analysis of Tesla’s stock focusing on returns, volatility, trading volume and long-term investment trends.',
      sections: [
        {
          heading: 'Analysis',
          content: [
            'Calculated daily and cumulative returns.',
            'Measured volatility using rolling statistics.',
            'Analysed trading volume and trend reversals.',
          ],
        },
        {
          heading: 'Findings',
          content: [
            'Tesla exhibits high volatility with strong investor reactions to major events.',
            'Long-term growth potential exists alongside significant risk.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Wrote SQL queries, interpreted financial trends and documented insights.',
          ],
        },
      ],
    },
  ],

  contact: {
    email: 'bagheshri14@gmail.com',
    location: 'Bangalore, India',
    linkedin: 'https://www.linkedin.com/in/bagheshri-t-s-13a053316',
    github: 'https://github.com/bagheshri14-cmyk',
    googleScholar:
      'https://scholar.google.com/citations?authuser=1&user=V78qbA8AAAAJ',
    orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;
