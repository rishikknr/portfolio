import { HandHeart, Scale, BrainCircuit } from 'lucide-react';
import type { Venture, Achievement, Value } from './types';

export const values: Value[] = [
  {
    icon: HandHeart,
    title: 'Build for Impact',
    description: 'Focus on solving problems that create measurable, positive change in people\'s lives.',
  },
  {
    icon: Scale,
    title: 'Design for Scale',
    description: 'Architect systems that are not just functional but resilient, reliable, and ready for growth.',
  },
  {
    icon: BrainCircuit,
    title: 'Execute with Discipline',
    description: 'Combine long-term vision with a relentless focus on execution and operational excellence.',
  }
];

export const ventures: Venture[] = [
  {
    name: 'Sanchaya',
    tagline: 'Securing India’s informal savings ecosystem with voice-tech and blockchain.',
    story: 'Sanchaya addresses the critical issues of fraud and lack of trust in India\'s informal chit fund industry, which manages over $50 billion annually. By leveraging voice-based technology and blockchain, it provides a secure and transparent platform for millions of families who rely on these traditional savings methods.',
    role: 'Founder & Architect',
    details: [
      'Millions of families risk losing their savings in a $50 billion informal chit fund market plagued by fraud.',
      'A first-of-its-kind platform using voice biometrics and blockchain to create a fraud-proof, accessible financial ledger.',
      'Empowers financial inclusion by transforming a high-risk system into a secure and transparent ecosystem for the underserved.',
    ],
    vision: 'To formalize trust, not to replace tradition.',
    imageId: 'venture-sanchaya',
    videoUrl: 'https://www.youtube.com/embed/P2VKhyACxks'
  },
  {
    name: 'Revive',
    tagline: 'AI-powered rural healthcare infrastructure.',
    story: "Revive was born from the challenge of providing timely and effective healthcare in rural areas with limited access to medical professionals. It’s an offline-first platform that uses AI to assist healthcare workers, reduce doctor workload, and enable faster emergency response, bringing critical care to where it's needed most.",
    role: 'Co-founder & Systems Architect',
    details: [
      'Limited access to doctors in rural areas leads to delayed care and overburdened healthcare workers.',
      'An offline-first AI platform that assists local health workers with preliminary diagnostics, reducing doctor workload by 40%.',
      'Delivers 24/7 emergency support and brings reliable, scalable healthcare to remote communities where it is needed most.',
    ],
    vision: 'To build resilient healthcare systems for underserved communities.',
    imageId: 'venture-revive',
    videoUrl: 'https://www.youtube.com/embed/HCcH3KKCWRw'
  },
  {
    name: 'NeuroDam',
    tagline: 'AI-driven flood prediction and risk mitigation.',
    story: 'In the face of increasing climate-related risks, NeuroDam provides a critical decision-support system for managing dam operations and predicting floods. By analyzing vast datasets, it offers actionable intelligence to mitigate disaster risks, protecting lives and infrastructure at scale.',
    role: 'Project Lead & AI Engineer',
    details: [
      'Dam operators lack predictive tools, leading to reactive decisions that risk lives and critical infrastructure during floods.',
      'An AI system that analyzes complex hydrological and meteorological data to provide real-time, predictive insights for dam management.',
      'Enables proactive flood control and enhances climate resilience for large-scale public infrastructure, protecting communities at risk.',
    ],
    vision: 'To leverage AI for proactive climate risk management.',
    imageId: 'venture-neurodam',
    videoUrl: 'https://www.youtube.com/embed/Kbqi_cKUBXA'
  }
];

export const achievements: Achievement[] = [
  { title: 'National Winner', organization: 'EY Techathon 5.0' , description: 'Recognized for innovative solutions in technology.'},
  { title: 'Finalist', organization: 'Hult Prize @ IIT Hyderabad', description: 'Competed with a social enterprise concept.' },
  { title: 'Semi-Finalist', organization: 'Smart India Hackathon, Kavach', description: 'Developed solutions for national security challenges.' },
  { title: 'Mentored 1,000+ students', organization: 'FILO Verified Tutor', description: 'Guided students in STEM subjects and problem-solving.' }
];

export const founderJourney = {
    introduction: "My journey is one of continuous evolution—from an engineer fascinated by how things work, to a builder creating solutions, and finally to a founder driven by a mission to solve fundamental problems. It's a path defined not by a sequence of jobs, but by an expanding sense of purpose.",
    originStory: {
        title: "The Builder's Mindset",
        content: "From an early age, I was driven by a deep-seated curiosity about systems and a desire to deconstruct them, understand them, and build them better. This wasn't just about code or circuits; it was about seeing the world as a set of interconnected problems waiting for elegant solutions. This mindset took me from tinkering with electronics to designing complex, scalable software architectures."
    },
    motivation: {
        title: "Solving for Trust and Access",
        content: "My transition to founding ventures was catalyzed by witnessing real-world problems that technology was uniquely positioned to solve. Whether it was the trust deficit in informal financial systems or the healthcare access gap in rural communities, I saw opportunities to build not just products, but systems of trust and access. This motivation is the common thread that runs through Sanchaya, Revive, and my other work."
    },
    philosophy: {
        title: "Founder Philosophy",
        items: [
            {
                title: "Build for Impact",
                content: "Focus on solving problems that create measurable, positive change in people's lives."
            },
            {
                title: "Design for Scale",
                content: "Architect systems that are not just functional but resilient, reliable, and ready for growth."
            },
            {
                title: "Execute with Discipline",
                content: "Combine long-term vision with a relentless focus on execution and operational excellence."
            }
        ]
    }
};
