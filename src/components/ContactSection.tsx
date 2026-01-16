import React, { useState } from 'react';
import { Mail, Phone, Github, Copy, Check, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      console.log('[Analytics] Copied to clipboard:', field);
      toast({
        title: 'Copied!',
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Please copy manually',
        variant: 'destructive',
      });
    }
  };

  const handleGithubClick = () => {
    console.log('[Analytics] GitHub profile clicked from contact');
    window.open('https://github.com/akhilreddy2303', '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('[Analytics] Contact form submitted:', formData);
    
    // Demo mode - simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. This is a demo mode.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="swiss-container">
        <h2 className="text-title font-semibold text-foreground mb-10">
          Get in touch
        </h2>

        <div className="swiss-grid">
          {/* Contact Cards */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5 space-y-4">
            {/* Email Card */}
            <button
              onClick={() => handleCopy('akhilmuduganti@hotmail.com', 'Email')}
              className="swiss-card-interactive w-full text-left flex items-center gap-4"
            >
              <div className="p-3 bg-accent rounded-lg">
                <Mail size={20} className="text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                <p className="text-foreground font-medium truncate">
                  akhilmuduganti@hotmail.com
                </p>
              </div>
              {copiedField === 'Email' ? (
                <Check size={18} className="text-primary" />
              ) : (
                <Copy size={18} className="text-muted-foreground" />
              )}
            </button>

            {/* Phone Card */}
            <button
              onClick={() => handleCopy('+1 (814) 737-7063', 'Phone')}
              className="swiss-card-interactive w-full text-left flex items-center gap-4"
            >
              <div className="p-3 bg-accent rounded-lg">
                <Phone size={20} className="text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-0.5">Phone</p>
                <p className="text-foreground font-medium">
                  +1 (814) 737-7063
                </p>
              </div>
              {copiedField === 'Phone' ? (
                <Check size={18} className="text-primary" />
              ) : (
                <Copy size={18} className="text-muted-foreground" />
              )}
            </button>

            {/* GitHub Card */}
            <button
              onClick={handleGithubClick}
              className="swiss-card-interactive w-full text-left flex items-center gap-4"
            >
              <div className="p-3 bg-accent rounded-lg">
                <Github size={20} className="text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-0.5">GitHub</p>
                <p className="text-foreground font-medium">
                  akhilreddy2303
                </p>
              </div>
            </button>
          </div>

          {/* Contact Form */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-7">
            <form onSubmit={handleSubmit} className="swiss-card">
              <h3 className="text-subtitle font-semibold text-foreground mb-4">
                Send a message
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Demo mode enabled. Form submissions are simulated.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary border border-border rounded-md 
                             placeholder:text-muted-foreground text-foreground
                             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary border border-border rounded-md 
                             placeholder:text-muted-foreground text-foreground
                             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-secondary border border-border rounded-md 
                             placeholder:text-muted-foreground text-foreground resize-none
                             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    placeholder="How can I help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-swiss-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
