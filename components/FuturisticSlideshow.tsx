'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Button } from './ui/button';
import { Card } from './ui/card';

const slideshowItems = [
    {
        id: '1',
        title: 'Modern Industrial Design',
        description: 'Combining raw metal with finished wood for a stunning contrast.',
        imageUrl: '/slideshow/slide6.jpg',
        href: '/products/1',
        dataAiHint: 'industrial shelf'
    },
    {
        id: '2',
        title: 'Floating Shelf Concepts',
        description: 'Minimalist designs that create a sense of space and openness.',
        imageUrl: '/slideshow/slide7.jpg',
        href: '/products/2',
        dataAiHint: 'floating shelf'
    },
    {
        id: '5',
        title: 'Customized Storage Solutions',
        description: 'From corner units to full wall systems, we build to your needs.',
        imageUrl: '/slideshow/slide8.jpg',
        href: '/products/5',
        dataAiHint: 'custom shelving'
    },
    {
        id: '6',
        title: 'Rustic Reclaimed Wood Shelf',
        description: 'Each shelf is unique, crafted from reclaimed barn wood.',
        imageUrl: '/slideshow/photo_4_2025-08-05_10-46-32.jpg',
        href: '/products/6',
        dataAiHint: 'rustic shelf'
    },
    {
        id: '8',
        title: 'Modern Glass Display Shelf',
        description: 'Showcase your collectibles or fine china on these elegant tempered glass shelves.',
        imageUrl: '/slideshow/photo_6_2025-08-05_10-46-32.jpg',
        href: '/products/8',
        dataAiHint: 'glass shelf'
    },
];


export function FuturisticSlideshow() {
    return (
        <section className="bg-background py-12 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Innovations</h2>
                    <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                        A glimpse into the future of design and functionality.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent>
                        {slideshowItems.map((item, index) => (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="overflow-hidden group">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative aspect-video"
                                        >
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                data-ai-hint={item.dataAiHint}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h3 className="text-2xl font-headline font-bold text-white shadow-lg">{item.title}</h3>
                                            </div>
                                        </motion.div>
                                        <div className="p-6 bg-secondary/20">
                                            <p className="text-muted-foreground h-12 mb-4">{item.description}</p>
                                            <Button asChild className="w-full">
                                                <Link href={item.href}>Explore More</Link>
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                    <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
