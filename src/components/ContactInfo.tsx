
import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="contact-info" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1500">
      <div className="contact-item group">
        <Mail className="w-5 h-5 text-[#8A0303] group-hover:text-white transition-colors" />
        <a href="mailto:pepe@aihumancopilot.com" className="hover:text-[#8A0303] transition-colors">
          pepe@aihumancopilot.com
        </a>
      </div>
      <div className="contact-item group">
        <Linkedin className="w-5 h-5 text-[#8A0303] group-hover:text-white transition-colors" />
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A0303] transition-colors">
          LinkedIn
        </a>
      </div>
      <div className="contact-item group">
        <Twitter className="w-5 h-5 text-[#8A0303] group-hover:text-white transition-colors" />
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A0303] transition-colors">
          Twitter
        </a>
      </div>
      <div className="contact-item group">
        <Github className="w-5 h-5 text-[#8A0303] group-hover:text-white transition-colors" />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A0303] transition-colors">
          Github
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
