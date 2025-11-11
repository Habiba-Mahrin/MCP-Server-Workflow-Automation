import { Shield, Lock, Key, Eye } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      Icon: Shield,
      title: 'OAuth 2.0',
      description: 'Industry-standard authentication for all connected services.',
      color: '#FF6B35',
    },
    {
      Icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted in transit and at rest.',
      color: '#FFC145',
    },
    {
      Icon: Key,
      title: 'Scoped Permissions',
      description: 'Fine-grained control over what HabiCore can access.',
      color: '#FF6B35',
    },
    {
      Icon: Eye,
      title: 'Full Transparency',
      description: 'Complete audit logs of all automated actions.',
      color: '#FFC145',
    },
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] bg-clip-text text-transparent">
          Security & Privacy First
        </h2>
        <p className="text-center text-[#C5B9A0] text-lg mb-16 max-w-2xl mx-auto">
          Your data security is our top priority. HabiCore is built with enterprise-grade security
          from the ground up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#FF6B35] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.color}, transparent 70%)`,
                }}
              />

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: feature.color }}
              >
                <feature.Icon className="w-7 h-7 text-[#1A1A1A]" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-[#C5B9A0] group-hover:text-[#FF6B35] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#C5B9A0] opacity-70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center">
          <Lock className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#C5B9A0] mb-3">
            Your Credentials Stay Secure
          </h3>
          <p className="text-[#C5B9A0] opacity-80 max-w-2xl mx-auto leading-relaxed">
            HabiCore never stores your passwords. All integrations use OAuth 2.0 tokens with
            limited scopes, and you can revoke access at any time. We follow zero-trust
            architecture principles to keep your data safe.
          </p>
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

export default Security;
