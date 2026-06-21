import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <form className="contact-form" action="mailto:rithikkaparthi23@gmail.com" method="post" encType="text/plain">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        Message
        <textarea name="message" rows="6" placeholder="Tell me about the role, project, or AI problem." required />
      </label>
      <button className="primary-button" type="submit">
        Send Message <Send size={17} />
      </button>
    </form>
  );
}
