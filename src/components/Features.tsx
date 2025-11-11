import { Calendar, FileText, GitBranch, MessageSquare, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      Icon: Calendar,
      name: 'Google Calendar',
      description: 'Auto-create and manage events seamlessly across your schedule.',
      color: '#FF6B35',
    },
    {
      Icon: FileText,
      name: 'Notion',
      description: 'Update and retrieve project pages with AI-powered automation.',
      color: '#FFC145',
    },
    {
      Icon: GitBranch,
      name: 'GitHub',
      description: 'Sync PR, issue, and commit activity in real-time.',
      color: '#FF6B35',
    },
    {
      Icon: MessageSquare,
      name: 'Slack',
      description: 'Send instant updates to team channels automatically.',
      color: '#FFC145',
    },
    {
      Icon: MessageCircle,
      name: 'Discord',
      description: 'Notify project communities with seamless integration.',
      color: '#FF6B35',
    },
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] bg-clip-text text-transparent">
          Unified Integrations
        </h2>
        <p className="text-center text-[#C5B9A0] text-lg mb-16 max-w-2xl mx-auto">
          Connect all your essential tools in one powerful hub. No more context switching, no more
          manual updates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#FF6B35] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.color}, transparent 70%)`,
                }}
              />

              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: feature.color }}
              >
                <feature.Icon className="w-8 h-8 text-[#1A1A1A]" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-[#C5B9A0] group-hover:text-[#FF6B35] transition-colors">
                {feature.name}
              </h3>
              <p className="text-[#C5B9A0] opacity-80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
