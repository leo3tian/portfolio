import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

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

      {/* About Me Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">About Me</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a developer who loves turning ideas into reality through code. With a focus on clean, 
              efficient solutions and user-centered design, I create digital experiences that are both 
              functional and beautiful.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source 
              projects, or sharing knowledge with the developer community. I believe in the power of 
              technology to solve real-world problems and make a positive impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My approach to development emphasizes collaboration, continuous learning, and building 
              sustainable solutions. I enjoy working across the full stack and am always excited to 
              take on new challenges that push the boundaries of what&apos;s possible.
            </p>
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
                <h3 className="text-lg font-medium text-gray-900">Software Engineer Intern</h3>
                <span className="text-sm text-gray-500">Summer 2024</span>
              </div>
              <p className="text-gray-600 mb-3">Ultravox AI</p>
              <p className="text-gray-700 leading-relaxed">
                Built and optimized real-time voice AI systems for enterprise applications. 
                Reduced conversation latency by 40% and helped scale system to handle 10x more concurrent calls.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">Teaching Assistant</h3>
                <span className="text-sm text-gray-500">2023-2024</span>
              </div>
              <p className="text-gray-600 mb-3">University of Washington CSE</p>
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
            Feel free to reach out if you&apos;d like to collaborate on a project or just chat about technology.
          </p>
          <div className="space-x-6">
            <a 
              href="mailto:leo.tian@example.com" 
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
            <a 
              href="https://github.com/leotian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/leotian" 
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
