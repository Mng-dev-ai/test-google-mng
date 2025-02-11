import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Create Your Dream Website with AI
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Effortlessly build stunning websites with the power of artificial
          intelligence. No coding required!
        </p>
        <Button size="lg">Get Started Now</Button>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-md bg-card">
          <h2 className="text-xl font-semibold mb-4">AI-Powered Design</h2>
          <p className="text-muted-foreground">
            Let our AI create a unique and professional design tailored to your
            needs.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-card">
          <h2 className="text-xl font-semibold mb-4">Drag & Drop Editor</h2>
          <p className="text-muted-foreground">
            Customize your website with ease using our intuitive drag-and-drop
            editor.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-card">
          <h2 className="text-xl font-semibold mb-4">Fully Responsive</h2>
          <p className="text-muted-foreground">
            Your website will look amazing on any device, from desktops to
            smartphones.
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of satisfied users and create your website today!
        </p>
        <Button size="lg">Start Your Free Trial</Button>
      </section>
    </div>
  );
};

export default LandingPage;