'use client';

import { motion } from 'framer-motion';
import { Eye, CheckSquare, CreditCard, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: 'View Our Products',
    description: 'Explore our curated collection of high-quality shelving solutions.',
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
    title: 'Swift Delivery and Installation',
    description: 'We deliver and install your order right to your doorstep, quickly and carefully.',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (i: number) => {
    return {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    }
  },
};

export function HowItWorks() {
  return (
    <section className="bg-muted/40 py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">How It Works</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            A simple, streamlined process to elevate your space.
          </p>
        </div>
        <div className="relative">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
