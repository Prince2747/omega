'use client';

import { useEffect, useRef, useState } from 'react';
import { Eye, CheckSquare, CreditCard, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: 'View Our Products',
    description: 'Explore our curated collection of high-quality shelving and shutters.',
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-primary" />,
    title: 'Choose Your Solution',
    description: 'Select the perfect items that match your style and meet your needs.',
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: 'Make a Secure Payment',
    description: 'Complete your purchase through our safe and secure payment gateway.',
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: 'Swift Delivery',
    description: 'We deliver your order right to your doorstep, quickly and carefully.',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-muted/40 py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">How It Works</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            A simple, streamlined process to elevate your space.
          </p>
        </div>
        <div className="relative">
          {/* Dotted line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  'opacity-0 transform',
                  isVisible && (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right')
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                      {step.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
