import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead AI Engineer (Remote)</h4>
                <h5>MW Apps GmbH, Monheim am Rhein, Germany</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading end-to-end development of ML systems for enterprise
              applications, ensuring optimized performance and low-latency
              inference. Managing model lifecycle from data cleaning and feature
              extraction to production deployment using FastAPI and TensorRT.
              Conducting evaluation, benchmarking, and model selection for
              large-scale NLP and vision-based systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Verdant Soft, Lahore, Pakistan</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and deployed an AI-powered real-time sound classification
              system for mobile platforms. Built face and device detection
              pipelines using CNNs for privacy-preserving media applications.
              Implemented diffusion models and GANs for user-personalized
              animated character generation. Developed mobile-integrated ML APIs
              using Flask and PyTorch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>CacheLogic, Lahore, Pakistan</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Fine-tuned LLMs (GPT, BERT, Falcon) using LoRA and PEFT,
              improving contextual accuracy by 30%. Developed Retrieval-Augmented
              Generation (RAG) systems with FAISS and LangChain for enterprise
              knowledge-grounded assistants. Applied quantization (GPTQ, ONNX,
              Llama.cpp) and TensorRT acceleration to achieve 40% faster
              inference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
