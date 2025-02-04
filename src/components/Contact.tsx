import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-600">
              Whether you're looking for strategic consulting, business development advice, 
              or want to discuss potential collaborations, I'm here to help.
            </p>
            
            <div className="space-y-4">
              <ContactInfo 
                icon={<Mail />} 
                text={
                  <div className="space-y-1">
                    <p>taofiqatoyebi1@gmail.com</p>
                    <p>taofiq@uniprimeinnovations.com</p>
                  </div>
                } 
              />
              <ContactInfo icon={<Phone />} text="+234 813 9497 705" />
              <ContactInfo icon={<MapPin />} text="Abuja, Nigeria" />
            </div>
          </div>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary 
                       focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
            />
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary 
                       focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
            />
            <textarea 
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary 
                       focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark 
                       transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div className="text-gray-600">{text}</div>
  </div>
);

export default Contact;