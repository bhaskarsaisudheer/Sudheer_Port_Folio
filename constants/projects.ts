import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-research-copilot",
    title: "AI Research Copilot",
    description:
      "An intelligent research assistant powered by LLMs that helps researchers discover, summarize, and synthesize academic papers.",
    longDescription:
      "AI Research Copilot is a full-stack application that leverages large language models and retrieval-augmented generation to help researchers navigate vast amounts of academic literature. It provides intelligent paper recommendations, automated summarization, and contextual Q&A over research documents.",
    image: "/assets/projects/ai-research-copilot.jpg",
    tags: ["AI", "RAG", "Full Stack"],
    techStack: [
      "Next.js",
      "Python",
      "FastAPI",
      "OpenAI",
      "ChromaDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/bhaskarsai/ai-research-copilot",
    featured: true,
    features: [
      "Semantic search across research papers",
      "AI-powered paper summarization",
      "Contextual Q&A with RAG pipeline",
      "Citation network visualization",
      "Multi-format document ingestion",
    ],
    challenges: [
      "Handling large PDF documents efficiently",
      "Maintaining retrieval accuracy across diverse domains",
      "Optimizing LLM token usage for cost efficiency",
    ],
    solutions: [
      "Implemented chunking strategies with overlap for better context retention",
      "Built hybrid search combining semantic and keyword matching",
      "Added caching layer for frequently accessed papers",
    ],
    futureImprovements: [
      "Multi-agent research workflows",
      "Real-time collaboration features",
      "Integration with arXiv and PubMed APIs",
    ],
    architecture: "/assets/projects/ai-research-architecture.png",
  },
  {
    slug: "live-event-detection",
    title: "Live Event Detection",
    description:
      "Real-time audio event detection system using deep learning to identify and classify environmental sounds.",
    longDescription:
      "Live Event Detection is a machine learning system that processes live audio streams to detect and classify events such as alarms, speech, music, and environmental sounds. Built with PyTorch and deployed with real-time inference capabilities.",
    image: "/assets/projects/live-event-detection.jpg",
    tags: ["ML", "Deep Learning", "Audio"],
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "Docker",
      "WebSocket",
    ],
    github: "https://github.com/bhaskarsai/live-event-detection",
    featured: true,
    features: [
      "Real-time audio stream processing",
      "Multi-class event classification",
      "Live waveform visualization",
      "Model confidence scoring",
      "REST & WebSocket APIs",
    ],
    challenges: [
      "Achieving low-latency inference on live streams",
      "Handling noisy audio environments",
      "Balancing model accuracy vs. speed",
    ],
    solutions: [
      "Optimized model architecture with MobileNet-inspired layers",
      "Implemented sliding window approach for continuous detection",
      "Added noise reduction preprocessing pipeline",
    ],
    futureImprovements: [
      "Edge deployment with ONNX optimization",
      "Custom event training interface",
      "Multi-language speech detection",
    ],
  },
  {
    slug: "meeting-assistant",
    title: "Meeting Assistant",
    description:
      "AI-powered meeting assistant that transcribes, summarizes, and extracts action items from meetings.",
    longDescription:
      "Meeting Assistant uses speech-to-text and LLM summarization to automatically generate meeting notes, action items, and key decisions. It integrates with calendar systems and provides searchable meeting archives.",
    image: "/assets/projects/meeting-assistant.jpg",
    tags: ["AI", "NLP", "Productivity"],
    techStack: [
      "Next.js",
      "OpenAI Whisper",
      "GPT-4",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    github: "https://github.com/bhaskarsai/meeting-assistant",
    featured: false,
    features: [
      "Real-time transcription",
      "AI-generated meeting summaries",
      "Automatic action item extraction",
      "Speaker diarization",
      "Searchable meeting archive",
    ],
    challenges: [
      "Accurate transcription in multi-speaker environments",
      "Generating concise yet comprehensive summaries",
    ],
    solutions: [
      "Used Whisper with fine-tuned post-processing",
      "Implemented structured prompt templates for consistent summaries",
    ],
    futureImprovements: [
      "Calendar integration",
      "Team collaboration features",
      "Multi-language support",
    ],
  },
];
