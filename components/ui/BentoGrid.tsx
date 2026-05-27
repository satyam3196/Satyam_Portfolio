import { useState } from "react";
import { IoCopyOutline, IoDownloadOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import dynamic from "next/dynamic";
const GridGlobe = dynamic(() => import("./GridGlobe"), { ssr: false });
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React.js", "Python", "Docker","Azure"];
  const rightLists = ["Node.js", "OpenAI API", "MySQL","PHP"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "satyam96.tech@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative min-h-40 flex flex-col px-5 p-5 lg:p-10 w-full"
          )}
        >
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base text-[#C1C2D3] z-10">
            {description}
          </div>
          
          {id === 3 ? (
            <div className="z-10 h-full">
              <div className="font-sans text-2xl lg:text-3xl font-bold mb-5">{title}</div>
              <div className="flex flex-col gap-2">
                <div className="text-white font-light space-y-3">
                  <p className="text-purple font-semibold text-2xl">
                    M.Sc. in Big Data Science (Distinction)
                  </p>
                  <p className="text-[#C1C2D3]">
                    Queen Mary University of London
                  </p>
                  <p className="text-[#C1C2D3] text-sm">
                    Sept 2022 - Sept 2023
                  </p>
                  <p className="text-[#C1C2D3] mt-4 text-sm leading-relaxed">
                   Dissertation: ”Advanced Machine Learning Models for Real Estate Price Prediction” (Published by CRC Press, Taylor & Francis Group).
                  </p>
                </div>
              </div>
            </div>
           ) : id === 5 ? (
            <div className="z-10 h-full bg-[#04071D] p-6 rounded-3xl">
              <div className="font-sans text-base lg:text-xl font-bold mb-4">Tools & Technologies</div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-xs lg:text-sm">
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Core Languages</span>
                  <span className="text-white font-light">Python, SQL, JavaScript (ES6+)</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Data Analysis & Engineering</span>
                  <span className="text-white font-light">Pandas, NumPy, Power BI, ETL Pipelines, Airflow, Custom Data Pipelines</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">AI & Machine Learning</span>
                  <span className="text-white font-light">LLMs (OpenAI GPT, LangChain, Transformers), PyTorch, TensorFlow, RAG, AI Agents</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">AI Integration</span>
                  <span className="text-white font-light">ChatGPT API, Hugging Face, Azure Cognitive Services, NVIDIA NIM</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Cloud & DevOps</span>
                  <span className="text-white font-light">AWS (EC2, S3), Microsoft Azure (App Service, DevOps), Docker, CI/CD</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Databases</span>
                  <span className="text-white font-light">PostgreSQL, MySQL, MongoDB</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Backend Development</span>
                  <span className="text-white font-light">FastAPI, Node.js, Express.js, RESTful APIs, GraphQL</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Frontend</span>
                  <span className="text-white font-light">React.js</span>
                </div>
                <div className="tech-category">
                  <span className="text-[#C1C2D3] block mb-1">Monitoring & Tools</span>
                  <span className="text-white font-light">Grafana, Prometheus, Azure Monitor, GitHub/GitLab CI, Agile</span>
                </div>
              </div>
            </div>
          
          //: id === 5 ? (
          //   <div className="z-10 h-full bg-[#04071D] p-6 rounded-3xl">
          //     <div className="font-sans text-lg lg:text-2xl font-bold mb-4">Tools & Technologies</div>
          //     <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm lg:text-base">
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">Core Languages</span>
          //         <span className="text-white font-light">Python, JavaScript (React Native, Node.js), SQL, C, C++, PHP</span>
          //       </div>
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">AI/ML</span>
          //         <span className="text-white font-light">Transformers, LangChain, PyTorch, TensorFlow, OpenAI API (ChatGPT), RAG</span>
          //       </div>
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">Cloud & DevOps</span>
          //         <span className="text-white font-light">Azure (App Service, Cognitive Services, DevOps), AWS (EC2, S3), Docker, Git, CI/CD</span>
          //       </div>
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">AI Tools</span>
          //         <span className="text-white font-light">Hugging Face, OpenAI API, Vertex AI, NVIDIA NIM</span>
          //       </div>
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">Frontend</span>
          //         <span className="text-white font-light">React Native, Expo, React.js, Vue.js</span>
          //       </div>
          //       <div className="tech-category">
          //         <span className="text-[#C1C2D3] block mb-1">Backend & Databases</span>
          //         <span className="text-white font-light">Node.js, Express.js, GraphQL, MySQL, MongoDB</span>
          //       </div>
                
                
          //     </div>
          //   </div>
         ) : id === 6 ? (
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                </div>
              </BackgroundGradientAnimation>
              
              {copied && (
                <div className="absolute inset-0 z-50">
                  <Lottie options={defaultOptions} />
                </div>
              )}
              
              <div className="absolute inset-0 bg-[#10132E] z-5" />
              
              <div className={cn(
                titleClassName,
                "relative z-20 h-full w-full flex flex-col items-center justify-center p-6"
              )}>
                <div className={`font-sans text-lg lg:text-2xl font-bold mb-6`}>
                  {title}
                </div>
                
                <div className="space-y-4 w-full">
                  <MagicButton
                    title={copied ? "Email copied!" : "Copy my email"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31] w-full"
                  />
                  
                  {/* <MagicButton
                    title="Download resume"
                    icon={<IoDownloadOutline />}
                    position="left"
                    handleClick={() => window.open('https://drive.google.com/file/d/1pquzLcnzl3HpFcSwrK3r6kuERGG2F4nG/view?usp=sharing', '_blank')}
                    otherClasses="!bg-[#161A31] w-full"
                  /> */}
                </div>
              </div>
            </div>
          ) : (
            <div className={`font-sans text-lg lg:text-3xl font-bold z-10`}>
              {title}
            </div>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div - only show for id === 3 if you want to keep it */}
          {id === 3 ? null : id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
