export const navItems = [
  { 
    name: "Home", 
    link: "#home",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi, I'm Satyam Sharma, an AI Researcher at the Commonwealth Secretariat in London, specializing in bridging cutting-edge artificial intelligence with practical software solutions. With deep expertise in Generative AI, large language models (LLMs), Machine Learning and full-stack development, I transform complex AI technologies into impactful, real-world applications that drive innovation and solve meaningful challenges.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone Adaptable",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Core tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  

  {
    id: 5,
    description: "I constantly evolve my tech stack to bridge cutting-edge AI with robust full-stack solutions",
    title: "",
    className: "md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
  },
  {
    id: 6,
    title: "Let's Connect & Collaborate",
    description: "",
    className: "md:col-span-2 md:row-span-1",
    titleClassName: "justify-center text-center",
  },
];

export const projects = [
  {
    id: 1,
    title: "ReceiptHub",
    des: "An AI-powered expense tracking application that streamlines receipt management for small businesses. Built with NVIDIA NIM (Mixtral-8x22B), LlamaParse, Streamlit, and Flask.",
    img: "/project1.png",
    link: "https://github.com/satyam3196/ReceiptHub",
    iconLists: [
      "/tech/python.png",
      "/tech/nvidia.png",
      "/tech/streamlit.png",
      "/tech/flask.png",
    ],
  },
  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "/ui.earth.com",
  // },
  {
    id: 2,
    title: "PropPrice Insight",
    des: "A comprehensive machine learning project implementing 7 advanced models (XGBoost, AdaBoost, CatBoost, Random Forest, KNN, Neural Networks) for real estate price prediction. Features detailed performance analysis and feature importance visualizations using the H4M dataset.",
    img: "/project2.png",
    iconLists: [
      "/tech/python.png",
      "/tech/tensorflow.png",
      "/tech/scikit.png",
      "/tech/jupyter.png",
    ],
    link: "https://github.com/satyam3196/PropPrice-Insight-Advanced-ML-Models-for-Real-Estate-Price-Prediction"
  },
  {
    id: 3,
    title: "Stock Analysis Web App",
    des: "A Django application that dynamically interacts with the YFinance REST API to display stock details, charts, and summaries based on user input. The app persists user data and login details in a PostgreSQL database, hosted on Railway Cloud.",
    img: "/project3.png",
    iconLists: [
      "/tech/python.png",
      "/tech/django.png",
      "/tech/postgresql.png",
      "/tech/javascript.png",
    ],
    link: "https://github.com/satyam3196/Stock-Analysis-Web-App",
  },
  {
    id: 4,
    title: "Ethereum Transaction Analysis Project",
    des: "Analyzed transaction trends and evaluated the top 10 smart contracts and top 10 Ethereum miners by Ether received. Tracked and correlated scam activity with known scams going offline using a substantial dataset of 5 million rows. Utilized Apache Spark for advanced data manipulation, exploration, and visualization techniques on Ethereum blockchain data.",
    img: "/project4.png",
    iconLists: [
      "/tech/spark.png",
      "/tech/python.png",
      "/tech/ethereum.png",
    ],
    link: "https://github.com/satyam3196/spark-ethereum-transactions-analysis",
  },
];

export const achievements = [
  {
    quote: "Microsoft Certified: Azure Data Engineer Associate. This certification validates my skills in designing and implementing data solutions that use Azure data services. It demonstrates my ability to manage data storage, processing, and security, ensuring that I can effectively handle data engineering tasks in cloud environments.",
    name: "Microsoft Certified: Azure Data Engineer Associate",
    title: "Certified Data Engineer",
  },
    {
    "quote": "Microsoft Certified: Power BI Data Analyst Associate. This certification validates my expertise in transforming raw data into meaningful insights using Power BI. It demonstrates my ability to prepare, model, visualize, and analyze data while ensuring data security and efficient management, enabling data-driven decision-making.",
    "name": "Microsoft Certified: Power BI Data Analyst Associate",
    "title": "Certified Power BI Data Analyst"
  },
  {
    "quote": "Honored to have my project, ReceiptHub, ranked among the top 15 in the NVIDIA and LlamaIndex Developer Contest. This recognition highlights my work in leveraging AI for intelligent expense tracking. ReceiptHub utilizes advanced AI models for receipt parsing, categorization, and visualization, streamlining financial management for small businesses and solo entrepreneurs. Winning this award also granted me access to an NVIDIA DLI instructor-led workshop, allowing me to further enhance my expertise in AI-driven solutions.",
    "name": "NVIDIA & LlamaIndex Developer Contest - Top 15 Project",
    "title": "Award-Winning AI Developer",
    "project_link": "https://github.com/satyam3196/ReceiptHub"
},
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  {
    "quote": "My Master's Dissertation, 'Advanced ML Models for Real Estate Price Prediction,' has been featured as Chapter 7 in the book 'Applications of AI for Interdisciplinary Research.' This recognition highlights my research in applying machine learning to predict real estate prices with high accuracy. Being part of this publication alongside other groundbreaking work from the EECS Network Research Group at QMUL is an honor. Special thanks to Dr. Sukhpal Singh Gill for his invaluable guidance throughout this project.",
    "name": "Featured Research in 'Applications of AI for Interdisciplinary Research'",
    "title": "Published AI Researcher",
},
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
