import { getImagePath } from '@/lib/imageLoader';

export const navItems = [
  //  { 
  //    name: "Home", 
  //    link: "#home",
  //    onClick: (e: React.MouseEvent) => {
  //      e.preventDefault();
  //      const heroSection = document.getElementById('home');
  //      if (heroSection) {
  //        heroSection.scrollIntoView({ 
  //          behavior: 'smooth',
  //          block: 'start'
  //        });
  //      }
  //    }
  //  },
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  //{ name: "Education", link: "#education" },
  { name: "Achievements", link: "#achievements" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    //title: "I'm an AI Researcher at the Commonwealth Secretariat in London, specializing in integrating artificial intelligence with modern web technologies to build scalable, intelligent applications. My work involves leveraging existing AI models, fine-tuning open-source solutions, and developing robust full-stack systems to create impactful, real-world applications. With experience across multiple roles, I have worked on AI/ML-driven solutions, data-intensive applications, and end-to-end software systems that bridge the gap between research and practical implementation. My goal is to make AI more accessible and effective in solving real-world challenges.",
    //title: "I architect intelligent systems that bridge cutting-edge AI with practical implementation. Specializing in RAG architectures, LLMs, and modern web technologies, I'm passionate about making AI more accessible and effective in solving real-world challenges through robust full-stack development.",
    //title: "I architect intelligent systems that bridge cutting-edge AI with practical implementation. Specializing in RAG architectures, LLMs, and modern web technologies, I focus on developing scalable, AI-driven applications that solve real-world challenges through robust full-stack development. My expertise spans fine-tuning open-source models, integrating AI with web technologies, and building end-to-end software systems that make artificial intelligence more accessible and effective in practical settings.",
    title: "I design and engineer intelligent systems that connect cutting-edge AI research with real-world implementation. With 3+ years of experience in RAG architectures, LLMs, and modern full-stack development, I build scalable AI-driven applications that address real-world challenges across logistics, governance, and sustainability. My expertise spans fine-tuning open-source models, integrating AI into web ecosystems, and deploying end-to-end solutions that make machine intelligence more accessible, reliable, and impactful.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative text-justify text-balance hyphens-auto",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end",
    img: getImagePath("bg.png"),
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
    title: "Education",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
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
//   {
//   id: 1,
//   title: "Wellness-on-the-Go",
//   des: "A full-stack wellness booking platform connecting service providers with busy professionals in London. Built with React for a seamless user experience, Node.js for the backend, and PostgreSQL for secure and scalable data management.",
//   img: getImagePath("wellness.png"), // Suggest a screenshot of the homepage or booking interface
//   iconLists: [
//     getImagePath("tech/react.svg"),
//     getImagePath("tech/node.svg"),
//     getImagePath("tech/postgresql.svg"),
//   ],
//   link: "https://mywellnessonthego.com/"
// },

  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "/ui.earth.com",
  // },
//   {
//   id: 2,
//   title: "Witness Films",
//   des: "A visually captivating frontend website for a Dehradun-based production house, with operations in Delhi and across India. The website showcases the company’s creative portfolio, with Google Analytics integrated for performance tracking.",
//   img: getImagePath("witness.png"), // Suggest a screenshot of the landing page or about section
//   iconLists: [
//     getImagePath("tech/html.svg"),
//     getImagePath("tech/css.png"),
//     getImagePath("tech/javascript.png"),
//     getImagePath("tech/google.png"),
//   ],
//   link: "https://witness-films.com/"
// },

  {
    id: 3,
    title: "ReceiptHub",
    des: "An AI-powered expense tracking application that streamlines receipt management for small businesses. Built with NVIDIA NIM (Mixtral-8x22B), LlamaParse, Streamlit, and Flask.",
    img: getImagePath("project1.png"),
    link: "https://github.com/satyam3196/ReceiptHub",
    iconLists: [
      getImagePath("tech/python.png"),
      getImagePath("tech/nvidia.jpg"),
      getImagePath("Satyam_Portfolio/streamlit.svg"),
      getImagePath("tech/flask.png"),
    ],
  },
  {
    id: 4,
    title: "PropPrice Insight",
    des: "A comprehensive machine learning project implementing 7 advanced models (XGBoost, AdaBoost, CatBoost, Random Forest, KNN, Neural Networks) for real estate price prediction. Features detailed performance analysis and feature importance visualizations using the H4M dataset.",
    img: getImagePath("project2.png"),
    iconLists: [
      getImagePath("tech/python.png"),
      getImagePath("tech/tensorflow.png"),
      getImagePath("tech/scikitlearn.png"),
      getImagePath("tech/jupyter.png"),
    ],
    link: "https://github.com/satyam3196/PropPrice-Insight-Advanced-ML-Models-for-Real-Estate-Price-Prediction"
  },
  {
    id: 5,
    title: "Stock Analysis Web App",
    des: "A Django application that dynamically interacts with the YFinance REST API to display stock details, charts, and summaries based on user input. The app persists user data and login details in a PostgreSQL database, hosted on Railway Cloud.",
    img: getImagePath("project3.png"),
    iconLists: [
      getImagePath("tech/python.png"),
      getImagePath("tech/django.png"),
      getImagePath("tech/postgres.png"),
      getImagePath("tech/javascript.png"),
    ],
    link: "https://github.com/satyam3196/Stock-Analysis-Web-App",
  },
  {
    id: 6,
    title: "CIFAR-10 Image Classification Using PyTorch",
    des: "Developed a deep learning model to classify images from the CIFAR-10 dataset using PyTorch. The model incorporates convolutional layers, batch normalization, PReLU activation, and adaptive convolutions. It uses a custom loss function, LabelSmoothingCrossEntropyLoss, and is trained with the RMSprop optimizer, leveraging cosine annealing for learning rate scheduling. The project visualizes the training process with loss and accuracy plots for both training and validation.",
    img: getImagePath("project4.png"),
    iconLists: [
      getImagePath("tech/pytorch.png"),
      getImagePath("tech/python.png"),
      getImagePath("tech/jupyter.png"),
      //getImagePath("tech/neuralnetwork.jpg"),
      getImagePath("/git.svg"),
    ],
    link: "https://github.com/satyam3196/Image-Classification-CIFAR10",
  },
];

export const achievements = [ 
  {
    title: "Published AI Researcher",
    quote: "My research, Advanced Machine Learning Models for Real Estate Price Prediction, was published as Chapter 7 in the book Applications of AI for Interdisciplinary Research (CRC Press, Taylor & Francis Group). This study analyzes seven key machine learning algorithms using the H4M dataset, contributing to AI-driven real estate analytics. Being featured alongside groundbreaking work from the EECS Network Research Group at Queen Mary University of London is an honor.",
  },
    {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    quote: "This certification validates my expertise in transforming raw data into meaningful insights using Power BI. It demonstrates my ability to prepare, model, visualize, and analyze data while ensuring data security and efficient management, enabling data-driven decision-making.",
    //name: "",
    
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate",
    quote: "This certification validates my skills in designing and implementing data solutions that use Azure data services. It demonstrates my ability to manage data storage, processing, and security, ensuring that I can effectively handle data engineering tasks in cloud environments.",
  },
  { 
    //id: 1,
    title: "NVIDIA & LlamaIndex Developer Contest - Top 15 Project",
    quote: "Honored to have my project, ReceiptHub, ranked among the top 15 in the NVIDIA and LlamaIndex Developer Contest. This recognition highlights my work in leveraging AI for intelligent expense tracking. ReceiptHub utilizes advanced AI models for receipt parsing, categorization, and visualization, streamlining financial management for small businesses and solo entrepreneurs. Winning this award also granted me access to an NVIDIA DLI instructor-led workshop, allowing me to further enhance my expertise in AI-driven solutions.",
    //name: "",
    
},
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
//   {
//     "quote": "My Master's Dissertation, 'Advanced ML Models for Real Estate Price Prediction,' has been featured as Chapter 7 in the book 'Applications of AI for Interdisciplinary Research.' This recognition highlights my research in applying machine learning to predict real estate prices with high accuracy. Being part of this publication alongside other groundbreaking work from the EECS Network Research Group at QMUL is an honor. Special thanks to Dr. Sukhpal Singh Gill for his invaluable guidance throughout this project.",
//     "name": "Featured Research in 'Applications of AI for Interdisciplinary Research'",
//     "title": "Published AI Researcher",
// },
  // {
  //   id: 1,
  //   title: "NVIDIA NIM Hackathon Winner",
  //   des: "Won first place in the NVIDIA NIM Hackathon for developing an innovative AI-powered receipt management solution.",
    
  // },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "AI Researcher",
    company: "The Commonwealth Secretariat",
    location: "London, UK",
    desc: "Architected scalable AI systems using LangChain and Azure ML to automate policy analysis and decision-making across governance and sustainability programs.",
    date: "Nov 2023 - Present",
    className: "md:col-span-2",
    thumbnail: getImagePath("/exp1.svg"),
  },
  // {
  //   id: 2,
  //   title: "AI Consultant",
  //   company: "Obreal Global",
  //   location: "London, UK",
  //   desc: "Evaluated AI-driven projects for the Global Youth Incubator Program, contributing to OBREAL Global's €2M initiative supporting AI entrepreneurship.",
  //   date: "Feb 2024 - May 2024",
  //   className: "md:col-span-2",
  //   thumbnail: getImagePath("/exp2.svg"),
  // },
  {
    id: 3,
    title: "IT Assistant",
    company: "Quilombo UK",
    location: "Kingston upon Thames, UK",
    desc: "Optimized LAMP-stack Symfony web infrastructure by implementing caching and frontend refactoring to reduce load times and boost mobile responsiveness.",    
    date: "Jul 2023 - Oct 2023",
    className: "md:col-span-2",
    thumbnail: getImagePath("/exp3.svg"),
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "The Tann Mann Gaadi",
    location: "Bengaluru, India",
    desc: "Developed YOLOv5-powered computer vision models for electric mobility, enabling intelligent vehicle detection and logistics optimization.",
    date: "Feb 2022 - Jul 2022",
    className: "md:col-span-2",
    thumbnail: getImagePath("/exp4.svg"),
  },
];

export const socialMedia = [
  {
    id: 1,
    img: getImagePath("/git.svg"),
    url: "https://github.com/satyam3196",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 2,
    img: getImagePath("/link.svg"),
    url: "https://www.linkedin.com/in/satyamsharma96",
  },
];

// No CSS code should be present in a TypeScript file. Please move this CSS to a separate stylesheet.
 