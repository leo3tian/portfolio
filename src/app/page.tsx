import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import PinnedPhoto from './components/PinnedPhoto';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500']
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Takes up most of the viewport */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className={`text-6xl font-normal text-gray-900 mb-6 ${playfair.className}`}>
              Leo Tian 🏂
            </h1>
            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
              <p>
                Hi, I&apos;m a student at the University of Washington majoring in{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                  Computer Science
                </Link>
                . My interests include intelligent systems and applying them to the real world. 
                I&apos;m a Software Engineer Intern at Ultravox AI and a TA for the CSE 12x courses at UW.
              </p>
              <p>
                I&apos;m passionate about building systems that solve real problems, particularly in AI/ML, 
                full-stack development, and developer tools. I enjoy the entire process from ideation 
                to deployment, with a focus on clean code and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Currently Working On</h2>
          <p className="text-sm text-gray-500 mb-8">Updated July 9</p>
          <div className="space-y-16">
            
            {/* Internship */}
            <div className="relative">
              <PinnedPhoto 
                src="/ultravoxteam.jpg" 
                alt="Ultravox AI office"
                side="right"
                rotation={-3}
                caption="The team @ Ultravox!"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-3">Interning at Ultravox AI</h3>
              <p className="text-gray-700 leading-relaxed">
                Building real-time voice AI systems that enable natural conversations between humans and AI. 
                Working with ex-Google engineers and MIT PhD researchers.
              </p>
            </div>

            {/* Projects */}
            <div className="relative">
              <PinnedPhoto 
                src="/sharingsussy.png" 
                alt="Sussi app interface"
                side="left"
                rotation={2}
                caption="Presenting Sussi @ Llamacon"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-3">Building Sussi</h3>
              <p className="text-gray-700 leading-relaxed">
                Building Sussi, a student monitoring app for teachers that uses AI to evaluate student engagement
                and automate classroom administration. Leverages LlaMa 4 reasoning to convert screenshot data into 
                actionable set of boolean and integer based data. Previously won 1st at the 2025 Seattle Meta LlaMa 
                Hackathon!
              </p>
            </div>

            {/* 
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Currently Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Diving deeper into distributed systems and real-time communication protocols. Also exploring 
                the intersection of AI and user experience design - particularly how to make AI interactions 
                feel natural and intuitive rather than robotic.
              </p>
            </div> */}

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">Palantir</h3>
                <span className="text-sm text-gray-500">Fall 2025</span>
              </div>
              <p className="text-gray-600 mb-3">Forward Deployed Software Engineer Intern</p>
              <p className="text-gray-700 leading-relaxed">
                Incoming Fall 2025 - FDSE Commercial Team
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">Ultravox AI</h3>
                <span className="text-sm text-gray-500">Summer 2025</span>
              </div>
              <p className="text-gray-600 mb-3">Software Engineer Intern</p>
              <p className="text-gray-700 leading-relaxed">
                Building large-scale audio data pipelines (for 1mil+ hours of audio) to support machine 
                learning workflows. Designed and optimized them to run on hundreds of H100 GPUs. Training 
                voice AI models to understand conversational context and take on a variety of tones and roles.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">Paul G. Allen School of Computer Science & Engineering</h3>
                <span className="text-sm text-gray-500">Fall 2024 - Spring 2025</span>
              </div>
              <p className="text-gray-600 mb-3">Lead Teaching Assistant</p>
              <p className="text-gray-700 leading-relaxed">
                TA for CSE 12x introductory programming courses. Led lab sections, held office hours, 
                and mentored 100+ students in programming fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For thoughts, questions, and opportunities, the best way to reach me is via email: tleo[at]cs[dot]washington[dot]edu. I try to respond fast! 
          </p>
          <div className="space-x-6">
            <a 
              href="mailto:tleo@cs.washington.edu" 
              className="text-blue-600 hover:underline"
            >
              Email
        </a>
        <a
              href="https://github.com/leo3tian" 
          target="_blank"
          rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
        </a>
        <a
              href="https://linkedin.com/in/leo-tian" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
