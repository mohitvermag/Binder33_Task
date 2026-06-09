import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRight, ClipboardList, Code, TrendingUp } from 'lucide-react';

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Manage work from one place',
      description: 'Track daily tasks, purchase requests, IMS records, code batches, and IPO listings in one operations view.',
      icon: ClipboardList,
      preview: ['Tasks', 'Code Creation', 'IPO Management']
    },
    {
      title: 'Create codes quickly',
      description: 'Generate dummy code batches with a prefix, category, quantity, and a clear list of created codes.',
      icon: Code,
      preview: ['BND-001', 'BND-002', 'BND-003']
    },
    {
      title: 'Review IPO details',
      description: 'Search IPO listings, filter by status, and review company, ticker, shares, price, and key dates.',
      icon: TrendingUp,
      preview: ['Open', 'Pending', 'Closed']
    }
  ];

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/auth');
      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <section className="md:w-1/2 bg-white border-b md:border-b-0 md:border-r border-border-light px-6 py-8 md:p-12 flex flex-col">
        <div>
          <h1 className="text-2xl font-extrabold tracking-widest text-brand-orange">BINDER-OS</h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
            Your Company's Nervous System
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-sm border border-border-light rounded-lg bg-white shadow-sm">
            <div className="border-b border-border-light px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                <span className="text-xs font-semibold text-text-primary">Dashboard Preview</span>
              </div>
              <span className="text-[10px] font-semibold text-text-secondary">BINDER-OS</span>
            </div>

            <div className="p-4 space-y-3">
              {slide.preview.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-50 text-brand-orange">
                      <SlideIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-text-primary">{item}</span>
                  </div>
                  <span className="text-xs text-text-secondary">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="md:w-1/2 flex flex-col justify-between px-6 py-8 md:p-14">
        <div className="md:hidden">
          <span className="text-xl font-extrabold tracking-widest text-brand-orange">BINDER-OS</span>
        </div>

        <div className="my-auto max-w-md">
          <div className="mb-5 inline-flex rounded-lg bg-orange-50 p-3 text-brand-orange">
            <SlideIcon className="h-6 w-6" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-text-primary">
            {slide.title}
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-text-secondary">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-brand-orange' : 'w-2 bg-gray-200'
                }`}
                aria-label={`Go to onboarding slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border-light pt-6">
          <button
            type="button"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="px-4 py-2 text-sm font-semibold text-text-secondary disabled:invisible"
          >
            Back
          </button>

          <Button onClick={handleNext} className="gap-2">
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            {currentSlide !== slides.length - 1 && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </section>
    </div>
  );
}
