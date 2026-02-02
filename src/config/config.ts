// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  // -------------------------
  // Personal Info & Hero Section
  // -------------------------
  personal: {
    name: 'Bagheshri T S',
    title: 'Student | Christ University BRC',
    image: getAsset('assets/PROFILE_PIC.jpg'),
    description:
      'Bagheshri T S is a student pursuing BA Economics, interested in public policy and development research, aiming to create solutions for existing socio-economic problems.',
    tagline:
      'Economics Student ♦ Public Policy & Development Research ♦ Data Analysis',
    location: 'Bangalore, India',
  },

  // -------------------------
  // SEO meta info
  // -------------------------
  seo: {
    title: 'Bagheshri T S — Student and Learning Enthusiast',
    description:
      "Official website showcasing Bagheshri T S's education, research, projects and experience.",
  },

  // -------------------------
  // Animated Text for Hero Section
  // -------------------------
  animatedText: ['Researcher', 'Analyst', 'Builder'],

  // -------------------------
  // Navigation
  // -------------------------
  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // -------------------------
  // Education
  // -------------------------
  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Bachelor of Arts in Economics',
      year: '2024–2027',
      image: getAsset('assets/Christ_University.png'),
      description: [
        'Focusing on economics as a core subject with data analysis and policy research',
      ],
    },
    {
      institution: 'Advaith International Academy, Hosur',
      class: '12th',
      year: '2023–24',
      image: getAsset('assets/ignouLogo.png'),
      description: [
        'Focused on Economics, Political Science, History and Psychology',
      ],
    },
  ],

  // -------------------------
  // Projects
  // -------------------------
  projects: [
    {
      id: 'regional-development',
      title: 'Uneven Regional Development — Tribal & Resource-Rich Regions of India',
      image: getAsset('assets/project1.png'),
      abstract:
        'This study examines regional development in Jharkhand, Odisha and Chhattisgarh — states with significant mineral endowments but weak human development outcomes.',
      sections: [
        {
          heading: 'Key Case Findings',
          content: [
            {
              subheading: 'Jharkhand',
              text: 'Contains large mineral resources (coal, iron ore). Despite DMF collections, local reinvestment remains weak and tribal rights are often overlooked.',
            },
            {
              subheading: 'Odisha',
              text: 'Major bauxite and iron reserves; the Niyamgiri movement highlighted the need for tribal consent and stronger environmental protection.',
            },
            {
              subheading: 'Chhattisgarh',
              text: 'High mineral output coupled with conflict-affected districts; displacement and weak reinvestment perpetuate underdevelopment.',
            },
          ],
        },
        {
          heading: 'Theory & Policy',
          content: [
            'Applying Resource Curse and Growth Pole frameworks reveals governance failures and top-down implementation as major causes of regional exclusion. Policy tools such as PESA, DMF and MGNREGA require improved transparency and local participation.',
          ],
        },
        {
          heading: 'Recommendations',
          content: [
            'Strengthen Gram Sabha participation and DMF transparency',
            'Invest in local human capital & infrastructure targeted at tribal habitations',
            'Promote value-chain linkages so mining creates nearby employment',
            'Ensure environmental & social safeguards for displaced communities',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'I collected secondary data (NFHS, Census, DMF reports), performed descriptive analysis in Excel, synthesized the literature, and drafted the policy recommendations.',
          ],
        },
      ],
    },
    {
      id: 'brazil-macro',
      title: 'Brazil: Macroeconomic Analysis (2010–2024)',
      image: getAsset('assets/project2.png'),
      abstract:
        'Macroeconomic study of Brazil covering GDP, inflation, SELIC, unemployment, FDI and trade, with theoretical interpretation from multiple economic perspectives.',
      sections: [
        {
          heading: 'Introduction & Research Gap',
          content: [
            'Brazil experienced expansion, recession (2015–2016), pandemic shock (2020) and partial recoveries. Few studies integrate multiple macro indicators over 2010–2024 — this report fills that gap with descriptive and interpretive analysis.',
          ],
        },
        {
          heading: 'Methodology',
          content: [
            'Descriptive time-series analysis with Excel charts and basic correlation analysis; theoretical interpretation using macroeconomic frameworks; BRICS comparison included.',
          ],
        },
        {
          heading: 'Key Findings',
          content: [
            '2015–2016 recession related to commodity price shocks and political instability; COVID-19 yielded a sharp contraction in 2020.',
            'Inflation spikes in 2015–16 and 2021–22 were addressed by SELIC hikes, containing inflation but raising borrowing costs.',
            'Unemployment peaked near 14% during shocks; informality weakens standard Okun relationships.',
            'Descriptive correlations: Growth vs spread: -0.19; Trade vs growth: +0.12; Spread vs FDI: +0.43',
          ],
        },
        {
          heading: 'Policy Recommendations',
          content: [
            'Economic diversification away from commodity dependence.',
            'Balanced macro policy that considers growth while maintaining price stability.',
            'Institutional reforms to improve credit access and reduce interest spreads.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Collected secondary data, cleaned series in Excel, produced time-series charts and correlation tables, and wrote interpretation aligning with macroeconomic theory.',
          ],
        },
      ],
    },
    {
      id: 'india-energy',
      title: 'India’s Energy Transition & Climate Diplomacy',
      image: getAsset('assets/project3.png'),
      abstract:
        'This project explores India’s renewable energy expansion, climate diplomacy, barriers and recommendations for a just energy transition.',
      sections: [
        {
          heading: 'Historical Overview',
          content: [
            'From coal-dominance pre-independence to the National Solar Mission (2009), International Solar Alliance (2015) and COP commitments (2021–2024), India has ramped up renewable capacity and climate diplomacy.',
          ],
        },
        {
          heading: 'Drivers',
          content: [
            'Economic: energy security, import bill reduction, Make in India industrial demand',
            'Environmental: air pollution, climate vulnerability, public health impacts',
            'Technology: falling solar PV costs, storage and smart grid advances',
            'Geopolitics: ISA and India\'s leadership in Global South climate diplomacy',
          ],
        },
        {
          heading: 'Key Barriers',
          content: [
            'Finance constraints, grid integration, state–centre regulatory inconsistency, land & social disputes, and environmental trade-offs for large-scale projects.',
          ],
        },
        {
          heading: 'Case Studies',
          content: [
            'Bhadla Solar Park: Large-scale solar deployment with low auction prices, employment benefits and environmental management challenges',
            'Rural Microgrid (Lakshmipura-Jharla): Solar microgrids delivered electrification, improved study time for students, reduced indoor air pollution and supported livelihoods',
          ],
        },
        {
          heading: 'Way Forward',
          content: [
            'Prioritise storage (battery & pumped hydro) and smart grid modernisation',
            'Use green bonds, blended finance & climate funds to lower upfront costs',
            'Streamline centre–state policy coordination and protect just-transition for workers',
            'Include community engagement and environmental safeguards for project siting',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Researched policy history, wrote drivers & barriers sections, drafted case studies, contributed to the documentary script and prepared policy-oriented recommendations for a just energy transition.',
          ],
        },
      ],
    },
    {
      id: 'tesla-stock',
      title: 'Tesla Stock Analysis Using SQL',
      image: getAsset('assets/project4.png'),
      abstract:
        'SQL-based analysis of Tesla stock performance focusing on returns, volatility, trading volume, trend detection and long-term investment insights.',
      sections: [
        {
          heading: 'Data & Methodology',
          content: [
            'Historical daily stock data of Tesla was used, including open, high, low, close prices and trading volume. SQL queries were applied to clean the data, calculate daily returns, identify trends and examine volatility patterns over time.',
          ],
        },
        {
          heading: 'Key Objectives',
          content: [
            'Analyse daily and cumulative stock returns',
            'Study price volatility and risk patterns',
            'Examine trading volume and market activity',
            'Identify bullish and bearish trends',
            'Evaluate long-term investment performance',
          ],
        },
        {
          heading: 'Key Analysis Performed',
          content: [
            'Calculated daily and percentage returns using closing prices',
            'Measured volatility using rolling averages and standard deviation',
            'Analysed volume spikes to identify high-activity trading days',
            'Detected breakouts and trend reversals using moving averages',
            'Compared short-term fluctuations with long-term growth patterns',
          ],
        },
        {
          heading: 'Findings',
          content: [
            'The analysis shows that Tesla’s stock exhibits high volatility with periods of rapid price appreciation and sharp corrections. Trading volume often increases during major price movements, indicating strong investor response to market news and earnings announcements. Despite short-term fluctuations, long-term trends suggest significant growth potential accompanied by higher risk.',
          ],
        },
        {
          heading: 'Conclusion',
          content: [
            'Tesla’s stock performance reflects the nature of growth-oriented technology firms, where innovation-driven optimism coexists with market uncertainty. SQL-based analysis provides valuable insights into risk, return and investor behaviour.',
          ],
        },
        {
          heading: 'My Contribution',
          content: [
            'Cleaned and analysed the stock dataset, wrote SQL queries to calculate returns and volatility, interpreted trends, and documented the findings in a structured and data-driven manner.',
          ],
        },
      ],
    },
  ],

  // -------------------------
  // Contact
  // -------------------------
  contact: {
    email: 'bagheshri14@gmail.com',
    location: 'Bangalore, India',
    linkedin:
      'https://www.linkedin.com/in/bagheshri-t-s-13a053316',
    github: 'https://github.com/bagheshri14-cmyk',
    googleScholar: 'https://scholar.google.com/citations?authuser=1&user=V78qbA8AAAAJ',
    orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;
