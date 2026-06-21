# Rithik Kaparthi | AI/ML Portfolio

Production portfolio for **Rithik Kaparthi**, a Senior AI / ML Engineer focused on Generative AI, Retrieval-Augmented Generation, MLOps, NLP, and cloud-native enterprise AI systems.

Live site: [https://rithikportifolio.vercel.app](https://rithikportifolio.vercel.app)

GitHub: [github.com/rithik2000](https://github.com/rithik2000)  
LinkedIn: [linkedin.com/in/rithik-k32](https://www.linkedin.com/in/rithik-k32)

## Overview

This portfolio presents resume-backed AI/ML case studies across insurance, healthcare/pharma, banking, and ecommerce. It is built as a fast, responsive React application with animated AI-themed visuals, light/dark mode, project storytelling, and contact flows.

The content is based on 9+ years of experience delivering:

- Enterprise GenAI and LLM applications
- Retrieval-Augmented Generation systems
- Multi-agent AI workflows
- NLP and text classification systems
- MLOps pipelines, model registries, and observability
- Cloud AI platforms across Azure, GCP, and AWS
- Responsible AI controls for regulated domains

## Featured Case Studies

### AI Underwriting Automation Platform

Insurance GenAI platform designed for underwriting decision support at Liberty Mutual.

Core architecture:

- RAG over policy guidelines, regulatory documents, and historical underwriting data
- LangGraph multi-agent workflows for document parsing, risk scoring, compliance validation, and recommendation synthesis
- Azure OpenAI, Pinecone, hybrid retrieval, cross-encoder reranking, RAGAS evaluation, and AI guardrails
- FastAPI services deployed with Docker, AKS, Azure DevOps, and MLflow

### Pharma Knowledge Retrieval Platform

GCP-based research and operational intelligence system built for pharma workflows at Pfizer.

Core architecture:

- Semantic retrieval over scientific papers, SOPs, lab data, equipment logs, and manufacturing sensor streams
- Gemini embeddings, Vertex AI, BigQuery, Dataflow, Pinecone, FastAPI, and GKE
- Monitoring for latency, drift, data freshness, and regulated validation workflows

### Treasury Payments & Reconciliation ML System

Banking ML platform developed for reconciliation, anomaly detection, and support-email triage at U.S. Bank.

Core architecture:

- Azure data pipelines using ADF, ADLS, Synapse, Python, and MLflow
- NLP classification with spaCy, NLTK, TF-IDF, SVM, Naive Bayes, and Gradient Boosting
- Explainability with SHAP and LIME
- FastAPI inference services and Azure monitoring

### Search, Recommendations & Product Matching

Ecommerce personalization and discovery systems built at Flipkart.

Core architecture:

- Recommendation systems using collaborative filtering, matrix factorization, and early deep learning patterns
- Product matching with Siamese neural networks and fastText embeddings
- Learning-to-rank with LambdaMART
- Large-scale data pipelines using Hadoop, Hive, Spark, Airflow, and AWS

## Tech Stack

Frontend:

- React
- Vite
- React Router
- Framer Motion
- Lucide React
- CSS custom properties for light/dark themes

AI/ML experience represented:

- Python, SQL, JavaScript, R
- PyTorch, TensorFlow, Scikit-learn, XGBoost, LightGBM
- LangChain, LangGraph, LlamaIndex, Hugging Face Transformers
- Azure OpenAI, Gemini, Vertex AI, Amazon Bedrock
- Pinecone, FAISS, Azure AI Search, OpenSearch
- MLflow, Docker, Kubernetes, Airflow, GitHub Actions
- Azure, GCP, AWS

## Pages

- **Home**: AI/ML positioning, animated hero, experience highlights, featured projects, and skill groups
- **Projects**: Resume-based case studies with problem, solution, impact, stack, and delivery patterns
- **Contact**: Email, phone, LinkedIn, GitHub, and opportunity-focused contact form

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173/
```

## Build

```bash
npm run build
```

The production output is generated in:

```text
dist
```

## Deploy

This project is deployed on Vercel.

Manual production deploy:

```bash
npx vercel --prod
```

GitHub-connected workflow:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel can automatically deploy every push to `main`.

## Repository Structure

```text
src/
  components/
    AnimatedSection.jsx
    ContactForm.jsx
    ExperienceTimeline.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProjectCard.jsx
    SkillCloud.jsx
  data/
    profile.js
    projects.js
  pages/
    Contact.jsx
    Home.jsx
    Projects.jsx
  styles/
    global.css
```

## Contact

Email: [rithikkaparthi23@gmail.com](mailto:rithikkaparthi23@gmail.com)  
LinkedIn: [Rithik Kaparthi](https://www.linkedin.com/in/rithik-k32)  
GitHub: [rithik2000](https://github.com/rithik2000)
