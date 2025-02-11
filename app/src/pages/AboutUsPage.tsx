import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We are a team of passionate developers and designers dedicated to
          making website creation accessible to everyone.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground">
          Our mission is to empower individuals and businesses to create
          professional websites without the need for coding knowledge. We
          believe that everyone should have the opportunity to express their
          ideas and build their online presence.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-muted-foreground">
          We are a diverse team with expertise in artificial intelligence, web
          development, and user experience design. Together, we are committed
          to providing the best website building experience possible.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;