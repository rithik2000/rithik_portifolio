export const projects = [
  {
    title: 'AI Underwriting Automation Platform',
    organization: 'Liberty Mutual',
    category: 'Insurance GenAI',
    year: '2025 - 2026',
    problem:
      'Underwriting teams needed faster, more consistent risk evaluation across policy data, regulatory documents, historical cases, and expert rules.',
    solution:
      'Designed a RAG-powered multi-agent platform where specialized agents handled document parsing, retrieval, risk scoring, compliance validation, and recommendation synthesis.',
    impact:
      'Improved risk evaluation consistency, reduced manual review effort, and accelerated policy issuance with explainable, auditable AI outputs.',
    stack: ['Azure OpenAI', 'LangGraph', 'LangChain', 'LlamaIndex', 'Pinecone', 'FastAPI', 'AKS', 'MLflow'],
    metrics: ['Hybrid retrieval', 'Cross-encoder reranking', 'RAGAS evaluation', 'AI guardrails'],
  },
  {
    title: 'Pharma Knowledge Retrieval Platform',
    organization: 'Pfizer',
    category: 'Healthcare & Research AI',
    year: '2023 - 2024',
    problem:
      'Research and operations teams needed contextual discovery across scientific papers, lab data, manufacturing sensors, SOPs, and equipment logs.',
    solution:
      'Built a GCP-based operational intelligence platform with Dataflow pipelines, Gemini embeddings, vector search, LangGraph workflows, and Vertex AI evaluation.',
    impact:
      'Improved knowledge discovery, data-driven manufacturing visibility, and audit-ready validation for regulated pharma analytics.',
    stack: ['GCP', 'Gemini', 'Vertex AI', 'BigQuery', 'Dataflow', 'Pinecone', 'FastAPI', 'GKE'],
    metrics: ['Semantic search', 'IoT anomaly detection', 'GxP validation', 'Cloud monitoring'],
  },
  {
    title: 'Treasury Payments & Reconciliation ML System',
    organization: 'U.S. Bank',
    category: 'Banking ML',
    year: '2020 - 2022',
    problem:
      'Treasury teams needed to reconcile transactions, identify payment mismatches, and triage large volumes of customer support emails.',
    solution:
      'Engineered Azure data pipelines and NLP classification models combining structured payment data with unstructured email text for anomaly detection and routing.',
    impact:
      'Reduced reconciliation friction, surfaced exceptions earlier, and helped teams focus on high-value financial analysis and customer engagement.',
    stack: ['Azure', 'ADF', 'Synapse', 'FastAPI', 'spaCy', 'NLTK', 'MLflow', 'SHAP'],
    metrics: ['Text classification', 'Anomaly detection', 'Model drift checks', 'Explainability'],
  },
  {
    title: 'Search, Recommendations & Product Matching',
    organization: 'Flipkart',
    category: 'Ecommerce Personalization',
    year: '2017 - 2019',
    problem:
      'High-scale ecommerce discovery required stronger product matching, search relevance, query understanding, and personalized recommendations.',
    solution:
      'Built recommendation models, LambdaMART ranking systems, Siamese product matching, query NLP pipelines, and experimentation frameworks.',
    impact:
      'Improved catalog quality, discovery relevance, and experiment velocity across homepage, product detail, and search experiences.',
    stack: ['Python', 'Spark', 'Hive', 'Hadoop', 'AWS', 'Word2Vec', 'LambdaMART', 'A/B Testing'],
    metrics: ['Collaborative filtering', 'Bandit experiments', 'LTR models', 'Catalog drift alerts'],
  },
];
