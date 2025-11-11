import { useEffect, useState } from 'react';
import { Calendar, FileText, GitBranch, MessageSquare, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tools = [
    { Icon: Calendar, name: 'Google Calendar', angle: 0, color: '#FF6B35' },
    { Icon: FileText, name: 'Notion', angle: 72, color: '#FFC145' },
    { Icon: GitBranch, name: 'GitHub', angle: 144, color: '#FF6B35' },
    { Icon: MessageSquare, name: 'Slack', angle: 216, color: '#FFC145' },
    { Icon: MessageCircle, name: 'Discord', angle: 288, color: '#FF6B35' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.15), transparent 50%)`,
        }}
      />

      <div className="relative z-10 text-center px-4">
        <div className="relative w-64 h-64 mx-auto mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFC145] flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-4xl font-bold text-[#1A1A1A]">HC</span>
            </div>
          </div>

          {tools.map((tool, index) => {
            const angle = (tool.angle + Date.now() / 30) % 360;
            const radian = (angle * Math.PI) / 180;
            const radius = 100;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <div
                key={tool.name}
                className="absolute top-1/2 left-1/2 transition-all duration-300"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animation: `orbit-${index} 20s linear infinite`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-transform"
                  style={{ backgroundColor: tool.color }}
                >
                  <tool.Icon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] bg-clip-text text-transparent">
          HabiCore
        </h1>
        <p className="text-2xl mb-4 text-[#C5B9A0]">Your AI-Powered Productivity Hub</p>
        <p className="text-lg mb-8 text-[#C5B9A0] opacity-80 max-w-2xl mx-auto">
          The central command center that unifies Google Calendar, Notion, GitHub, Slack, and
          Discord into one secure, AI-orchestrated workflow.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] text-[#1A1A1A] font-semibold rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300">
            Launch Dashboard
          </button>
          <button className="px-8 py-4 border-2 border-[#FF6B35] text-[#FF6B35] font-semibold rounded-lg hover:bg-[#FF6B35] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-300">
            See How It Works
          </button>
        </div>
      </div>

      <style>{`
        ${tools.map((_, index) => `
          @keyframes orbit-${index} {
            from {
              transform: translate(-50%, -50%) rotate(${tools[index].angle}deg) translateX(100px) rotate(-${tools[index].angle}deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(${tools[index].angle + 360}deg) translateX(100px) rotate(-${tools[index].angle + 360}deg);
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default Hero;
