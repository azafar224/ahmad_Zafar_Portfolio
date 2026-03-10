import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Skainet",
    category: "AI Collaboration SaaS",
    tools: "React, Next.js, Django, OpenAI API, RAG Pipelines",
    image: "/images/skainet.png",
    description:
      "Global SaaS platform merging advanced AI with real-time collaboration. Features AI-assisted brainstorming, smart document management, and RAG for instant context-aware insights.",
  },
  {
    title: "SheetDrop",
    category: "AI Email Automation Agent",
    tools: "Next.js, Django, OpenAI API, PostgreSQL, Python",
    image: "/images/sheetdrop.png",
    description:
      "MVP AI agent that filters incoming emails by custom rules, extracts relevant data, and logs it into Google Sheets. Designed for lead management and SEO workflows.",
  },
  {
    title: "GetSetCV",
    category: "AI Resume & Cover Letter SaaS",
    tools: "Next.js, Django, PostgreSQL, OpenAI API, Lottie",
    image: "/images/getsetcv.png",
    description:
      "AI-powered SaaS that generates tailored resumes and cover letters in minutes. Adapts tone, structure, and keywords for specific job roles and industries.",
  },
  {
    title: "LexForge.AI",
    category: "Legal Compliance RAG Platform",
    tools: "Next.js, Django, OpenAI Embeddings, RAG, LLM Prompting",
    image: "/images/lexforge.png",
    description:
      "Secure compliance assistant for UK law firms. Uses RAG pipelines to answer plain-English legal queries with SRA rules, statutes, and ICO guidance. Auto-generates engagement letters and GDPR notices.",
  },
  {
    title: "QuickAuthors",
    category: "KDP eBook Generator",
    tools: "Next.js, OpenAI API, AI Agents, LLM Prompting, Stripe",
    image: "/images/quickauthors.png",
    description:
      "All-in-one platform to create, format, and publish Kindle-ready eBooks in minutes. Includes distraction-free editor, Kindle formatting automation, and Stripe POS integration.",
  },
  {
    title: "Compl-AI",
    category: "Legal Compliance Chatbot",
    tools: "Next.js, Django, PostgreSQL, OpenAI API, RAG, Model Deployment",
    image: "/images/complai.png",
    description:
      "AI-powered legal compliance chatbot using RAG to help legal teams interpret complex regulations. Delivers accurate, context-aware answers and streamlines compliance research.",
  },
  {
    title: "RAG Enterprise Assistant",
    category: "NLP / LLM System",
    tools: "FAISS, LangChain, GPT, BERT, ChromaDB",
    image: "/images/rag_project.png",
    description:
      "Enterprise-grade knowledge assistant using Retrieval-Augmented Generation. Supports grounded, context-aware responses over large proprietary document corpora.",
  },
  {
    title: "Sound Classification System",
    category: "Real-time Mobile ML",
    tools: "PyTorch, Flask, Time-Series, Signal Processing",
    image: "/images/sound_classifier.png",
    description:
      "AI-powered real-time sound classification system for mobile platforms, integrating time-series analysis and signal-based ML models for on-device inference.",
  },
  {
    title: "Face & Device Detection",
    category: "Computer Vision",
    tools: "CNNs, PyTorch, Privacy-Preserving ML",
    image: "/images/face_detect.png",
    description:
      "Privacy-preserving media pipeline using CNNs for face and device detection. Built for mobile-integrated applications requiring real-time visual inference at the edge.",
  },
  {
    title: "AI Character Generator",
    category: "Generative AI",
    tools: "Diffusion Models, GANs, Personalization",
    image: "/images/ai_character.png",
    description:
      "User-personalized animated character generation system using diffusion models and GANs. Designed large custom datasets and deployed model APIs for mobile integration.",
  },
  {
    title: "LLM Fine-tuning Pipeline",
    category: "MLOps / Optimization",
    tools: "LoRA, PEFT, GPTQ, ONNX, TensorRT",
    image: "/images/llm_pipeline.png",
    description:
      "Modular fine-tuning pipeline for GPT, BERT, and Falcon using LoRA and PEFT. Applied GPTQ quantization and TensorRT acceleration achieving 40% faster inference.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-desc">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>

          {/* Counter */}
          <div className="carousel-counter">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
