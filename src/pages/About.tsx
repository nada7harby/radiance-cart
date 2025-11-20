const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About PureGlow</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-muted-foreground mb-6">
            At PureGlow, we believe that everyone deserves access to high-quality, 
            effective skincare that delivers real results.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We're committed to creating science-backed skincare solutions that are 
            transparent about ingredients, affordable, and truly effective. Every 
            product is formulated with clinically-proven ingredients at optimal 
            concentrations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Transparency:</strong> We list all ingredients and their benefits</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Quality:</strong> Clinical-grade formulations at accessible prices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Sustainability:</strong> Eco-friendly packaging and practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Education:</strong> Empowering customers with skincare knowledge</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose PureGlow?</h2>
          <p className="text-muted-foreground mb-6">
            Our formulations are developed by dermatologists and backed by scientific 
            research. We focus on proven ingredients like niacinamide, hyaluronic acid, 
            retinol, and vitamin C - delivered at effective concentrations without 
            unnecessary additives or marketing hype.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
