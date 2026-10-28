import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, Phone, ShieldCheck } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'm CH Dispatch AI, your 24/7 freight rate & dispatch assistant. Ask me about spot rates, high-paying lanes out of Georgia or Nationwide, detention policies, or onboarding with CH Logistics!",
      time: 'Just now'
    }
  ]);

  const presetQuestions = [
    "What is the average Dry Van rate from Atlanta GA to Chicago IL?",
    "How does CH Logistics handle detention and TONU fees?",
    "What paperwork is required to onboard my truck?",
    "How do you negotiate higher rate-cons with brokers?"
  ];

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!questionText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          truckType: 'Dry Van',
          lane: 'Georgia / Nationwide'
        })
      });

      const data = await res.json();
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || 'Our dispatch desk is standing by! Call (404) 555-0199 for an immediate rate lock.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'CH Logistics dispatch desk is active 24/7! For instant lane analysis or carrier setup, give us a direct call at (404) 555-0199 or fill out our consultation form below.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 bg-[#05070d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a00]/10 border border-[#ff8a00]/30 text-xs font-semibold text-[#ffc247] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Freight Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Ask Our <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">AI Dispatch Assistant</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Get instant answers on rate estimations, market trends, required carrier paperwork, and dispatch strategy.
          </p>
        </div>

        {/* Chat Widget Container */}
        <div className="max-w-4xl mx-auto bg-[#0b1220] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[580px]">
          
          {/* Chat Header */}
          <div className="px-6 py-4 bg-[#070b18] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8a00] to-[#ffc247] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#ff8a00]/25">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">CH Dispatch AI</h3>
                <span className="text-[11px] text-slate-400 font-mono">
                  Online 24/7 · Spot Rate Assistant
                </span>
              </div>
            </div>

            <a
              href="tel:9122174632"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff8a00]" />
              <span>(912) 217-4632</span>
            </a>
          </div>

          {/* Preset Questions Chips */}
          <div className="p-3 bg-white/[0.02] border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={loading}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff8a00]/15 border border-white/10 hover:border-[#ff8a00]/40 text-xs font-medium text-slate-300 hover:text-white transition-all shrink-0 text-left"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg bg-[#ff8a00] text-black flex items-center justify-center font-bold shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black font-medium'
                      : 'bg-white/5 border border-white/10 text-slate-200'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`text-[10px] block mt-2 font-mono ${
                      msg.sender === 'user' ? 'text-black/60 text-right' : 'text-slate-500'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-slate-200 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <div className="w-8 h-8 rounded-lg bg-[#ff8a00]/20 border border-[#ff8a00]/30 text-[#ff8a00] flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <span>CH Dispatch AI is analyzing market lanes...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-[#070b18] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about rate per mile, Georgia lanes, setup requirements..."
                disabled={loading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a00] transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 rounded-xl bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black font-bold hover:shadow-lg hover:shadow-[#ff8a00]/30 disabled:opacity-50 transition-all shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
