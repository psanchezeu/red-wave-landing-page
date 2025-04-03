
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ChatContactForm = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy el asistente virtual de Pepe. ¿En qué puedo ayudarte?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showContactFields, setShowContactFields] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }]);
    
    // Clear input
    setInput('');
    
    // Show contact fields after first message
    if (!showContactFields) {
      setTimeout(() => {
        setShowContactFields(true);
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: "¡Genial! Por favor, déjame tus datos de contacto para que Pepe pueda comunicarse contigo pronto.", 
          sender: 'bot' 
        }]);
      }, 1000);
    } else if (name && email) {
      // Send the form if we have all the data
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: `¡Gracias ${name}! Pepe se pondrá en contacto contigo a la brevedad a través de ${email}.`, 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  const handleSubmitContactInfo = () => {
    if (!name || !email) return;
    
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: `Mi nombre es ${name} y mi email es ${email}`, 
      sender: 'user' 
    }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: `¡Gracias ${name}! Pepe se pondrá en contacto contigo a la brevedad a través de ${email}.`, 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div 
      className="chat-form-container bg-black/60 backdrop-blur-sm border border-[#8A0303]/40 rounded-lg p-4 w-full max-w-md" 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-delay="1600"
    >
      <div className="chat-title text-[#8A0303] font-bold text-xl mb-4 text-center">Cuéntame sobre tu proyecto</div>
      
      <div className="chat-messages h-60 overflow-y-auto mb-4 space-y-3 p-2">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`message ${msg.sender === 'user' ? 'user-message ml-auto bg-[#8A0303]/90' : 'bot-message bg-black/80 border border-[#8A0303]/30'} 
            rounded-lg p-3 max-w-[80%] text-white shadow-md`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      {showContactFields ? (
        <div className="contact-fields space-y-3 mb-3 animate-fade-in">
          <Input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/40 border-[#8A0303]/30 text-white"
          />
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/40 border-[#8A0303]/30 text-white"
          />
          <Button 
            onClick={handleSubmitContactInfo}
            className="w-full bg-[#8A0303] hover:bg-[#6a0202] text-white"
          >
            Enviar mis datos <Send className="ml-2 w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div className="message-input flex items-center">
          <Textarea
            placeholder="¿En qué puedo ayudarte con tu proyecto?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            className="flex-grow bg-black/40 border-[#8A0303]/30 text-white mr-2 resize-none"
          />
          <Button 
            onClick={handleSend}
            className="h-full aspect-square p-2 bg-[#8A0303] hover:bg-[#6a0202] text-white"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatContactForm;
