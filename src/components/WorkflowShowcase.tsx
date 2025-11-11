import { useState, useEffect } from 'react';
import { GitBranch, FileText, Calendar, MessageSquare, MessageCircle, ArrowRight } from 'lucide-react';

const WorkflowShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { Icon: GitBranch, name: 'GitHub PR Merged', color: '#FF6B35', description: 'Pull request merged to main branch' },
    { Icon: FileText, name: 'Notion Updated', color: '#FFC145', description: 'Task marked as completed' },
    { Icon: Calendar, name: 'Calendar Event', color: '#FF6B35', description: 'Review meeting scheduled' },
    { Icon: MessageSquare, name: 'Slack Notification', color: '#FFC145', description: 'Team channel updated' },
    { Icon: MessageCircle, name: 'Discord Alert', color: '#FF6B35', description: 'Community notified' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="py-24 px-4 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] bg-clip-text text-transparent">
          Workflow Automation
        </h2>
        <p className="text-center text-[#C5B9A0] text-lg mb-16 max-w-2xl mx-auto">
          Watch how HabiCore automatically orchestrates actions across all your tools with a single trigger.
        </p>

        <div className="bg-[#1A1A1A] rounded-2xl p-12 border border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={step.name} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep
                        ? 'scale-110 shadow-2xl'
                        : 'scale-90 opacity-40'
                    }`}
                    style={{
                      backgroundColor: index <= activeStep ? step.color : '#2A2A2A',
                      boxShadow: index === activeStep ? `0 0 30px ${step.color}` : 'none',
                    }}
                  >
                    <step.Icon className="w-10 h-10 text-[#1A1A1A]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#C5B9A0] text-center max-w-[120px]">
                    {step.name}
                  </p>
                  <p className="mt-1 text-xs text-[#C5B9A0] opacity-60 text-center max-w-[120px]">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className={`w-8 h-8 mx-4 transition-all duration-500 hidden md:block ${
                      index < activeStep
                        ? 'text-[#FF6B35] opacity-100'
                        : 'text-[#2A2A2A] opacity-30'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#0F0F0F] rounded-lg p-6 border border-[#2A2A2A]">
            <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Example Workflow:</h3>
            <ol className="space-y-2 text-[#C5B9A0]">
              <li className="flex items-start">
                <span className="text-[#FFC145] font-bold mr-2">1.</span>
                <span>Developer merges a pull request on GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC145] font-bold mr-2">2.</span>
                <span>HabiCore detects the event and updates the corresponding Notion task to "Completed"</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC145] font-bold mr-2">3.</span>
                <span>Automatically schedules a code review meeting in Google Calendar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC145] font-bold mr-2">4.</span>
                <span>Posts update to the team's Slack channel with PR summary</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC145] font-bold mr-2">5.</span>
                <span>Notifies the project community on Discord with release notes</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowShowcase;
