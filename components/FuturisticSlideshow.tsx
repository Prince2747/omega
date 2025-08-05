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
import { products } from '@/lib/data';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function FuturisticSlideshow() {
    const featuredProducts = products.slice(0, 5);

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
                        {featuredProducts.map((product, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                                                src={product.imageUrl}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                data-ai-hint={`${product.category.toLowerCase()} product`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h3 className="text-2xl font-headline font-bold text-white shadow-lg">{product.name}</h3>
                                            </div>
                                        </motion.div>
                                        <div className="p-6 bg-secondary/20">
                                            <p className="text-muted-foreground h-12 mb-4">{product.description.substring(0, 80)}...</p>
                                            <Button asChild className="w-full">
                                                <Link href={`/products/${product.id}`}>Explore More</Link>
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
