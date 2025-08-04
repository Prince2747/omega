import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function ContactPage() {
  const companyLocation = 'TK building, wello sefer';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation)}`;

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Reach out with any questions or to start your project.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help?" rows={5} />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Our Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex items-start">
                        <Mail className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
                        <a href="mailto:contact@omegashelfshutter.com" className="hover:underline">
                        contact@omegashelfshutter.com
                        </a>
                    </div>
                     <div className="flex items-start">
                        <Phone className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
                        <span>+251911208396</span>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {companyLocation}
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
