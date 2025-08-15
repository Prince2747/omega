
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & Lead Designer',
    bio: 'With a passion for minimalist design and functional art, Alex founded Alfa to revolutionize storage solutions.',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional portrait'
  },
  {
    name: 'Samantha Bee',
    role: 'Head of Operations',
    bio: 'Samantha ensures that every product meets our high standards and that your order arrives on time, every time.',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'smiling woman'
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Master Craftsman',
    bio: 'Carlos brings decades of woodworking and metal fabrication experience, turning designs into reality.',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'craftsman portrait'
  },
];

export default function AboutUsPage() {
  return (
    <div className="container py-12 md:py-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About Alfa Storage Solution</h1>
        <p className="mt-4 text-2xl font-semibold text-primary font-headline tracking-wide">"Fix the mess."</p>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We believe that storage should not only be functional but also beautiful. Our mission is to create innovative, high-quality shelving and storage systems that transform spaces and simplify lives.
        </p>
      </section>

      <section className="mb-16">
         <div className="relative aspect-video md:aspect-[2.8/1] rounded-lg overflow-hidden border shadow-lg">
            <Image 
                src="https://placehold.co/1200x500.png"
                alt="Modern workshop with organized tools and materials"
                fill
                className="object-cover"
                data-ai-hint="modern workshop"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Target className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To design and build elegant, durable, and intelligent storage solutions that enhance the beauty and functionality of any space.</p>
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
            <p className="text-muted-foreground">To be the leading innovator in home and commercial storage, recognized for our commitment to design, quality, and customer satisfaction.</p>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Users className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A dedicated group of designers, engineers, and craftspeople passionate about creating exceptional products.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet the Team</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                The skilled individuals behind our innovative products.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden">
                <div className="aspect-square relative">
                    <Image
                        src={member.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={member.dataAiHint}
                    />
                </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
