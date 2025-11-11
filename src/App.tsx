import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowShowcase from './components/WorkflowShowcase';
import Security from './components/Security';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#C5B9A0]">
      <Hero />
      <Features />
      <WorkflowShowcase />
      <Security />
      <CTA />
    </div>
  );
}

export default App;
