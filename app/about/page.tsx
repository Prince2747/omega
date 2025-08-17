
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Rocket, Star, Heart, CheckCircle } from 'lucide-react';


export default function AboutUsPage() {
  return (
    <div className="container py-12 md:py-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About Alfa Storage Solution</h1>
        <p className="mt-4 text-2xl font-semibold text-primary font-headline tracking-wide">"Fix the mess."</p>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          At Alfa Storage Solution, we understand the pivotal role of storage in improving productivity, organization, and living standards. Our mission is to create practical, durable, and modern storage systems that make a meaningful difference for businesses and households across Ethiopia.
        </p>
      </section>

      <section className="mb-16">
         <div className="relative aspect-video md:aspect-[2.8/1] rounded-lg overflow-hidden border shadow-lg bg-white">
            <Image 
                src="/logo124.png"
                alt="Alfa Storage Solution Logo"
                fill
                className="object-contain p-8"
            />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Rocket className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">With a forward-thinking approach and strong commitment to excellence, Alfa Storage Solution continually invests in modern, high-tech manufacturing equipment. Our aim is to boost both the quality and output of our products by collaborating with leading global producers. We specialize in robust shutters, versatile shelving systems, and other customized storage solutions designed to international standards. These improvements allow us to tap into the expanding market opportunities fueled by national development projects and Ethiopia’s growing economy.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Eye className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To be recognized as Ethiopia’s foremost and most respected provider of storage solutions.</p>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Target className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To deliver innovative, efficient, and competitively priced storage products — from shutters to shelves — to an ever-expanding customer base, while maintaining our responsibility to society and the environment.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4"><Heart className="w-8 h-8 text-primary" /></div>
              <CardTitle className="font-headline text-xl">Customer Commitment</CardTitle>
            </CardHeader>
            <CardContent><p className="text-muted-foreground">Striving to understand and exceed client needs.</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4"><Star className="w-8 h-8 text-primary" /></div>
              <CardTitle className="font-headline text-xl">Innovation & Improvement</CardTitle>
            </CardHeader>
            <CardContent><p className="text-muted-foreground">Continuously upgrading our technology and product designs.</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4"><CheckCircle className="w-8 h-8 text-primary" /></div>
              <CardTitle className="font-headline text-xl">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent><p className="text-muted-foreground">Delivering durable, reliable, and well-crafted solutions.</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4"><Users className="w-8 h-8 text-primary" /></div>
              <CardTitle className="font-headline text-xl">Community Impact</CardTitle>
            </CardHeader>
            <CardContent><p className="text-muted-foreground">Contributing positively to local communities and national progress.</p></CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
