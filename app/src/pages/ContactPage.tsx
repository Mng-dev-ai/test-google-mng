import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We'd love to hear from you! Please fill out the form below to get in
          touch.
        </p>
      </section>

      <section className="mt-12 max-w-lg mx-auto">
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={4} />
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;