import React, { useState } from 'react';
import { Send, Sparkles, Heart, Coffee, BookOpen, MessageCircle } from 'lucide-react';
import './App.css';

const aiStyles = {
  friendly: {
    name: 'Friendly Helper',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description: 'Warm and encouraging, like talking to a caring friend',
  },
  patient: {
    name: 'Patient Teacher',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-500',
    description: 'Methodical and clear, like your favorite teacher',
  },
  conversational: {
    name: 'Chat Buddy',
    icon: Coffee,
    color: 'from-amber-500 to-orange-500',
    description: 'Casual and relaxed, like chatting over coffee',
  },
};

const sampleQuestions = [
  'How does the internet work?',
  'What is artificial intelligence?',
  'Why do we need to sleep?',
  'How do airplanes stay in the sky?',
  'What makes the weather change?',
];

function getAIResponse(question, style) {
  const responses = {
    friendly: {
      'How does the internet work?':
        "Think of the internet like a giant postal system for messages and pictures!",
      'What is artificial intelligence?':
        "It's like teaching computers to recognize patterns, kind of how we learn new words!",
    },
    patient: {
      'How does the internet work?':
        'Imagine every computer connected by invisible threads sending messages extremely fast.',
      'What is artificial intelligence?':
        'AI is a computer program that learns from lots of examples to make good guesses.',
    },
    conversational: {
      'How does the internet work?':
        "It's basically a huge conversation where computers shout requests and servers answer back!",
      'What is artificial intelligence?':
        "Picture a super smart friend who's memorized millions of examples to answer your questions.",
    },
  };

  return (
    responses[style][question] ||
    "That's a fascinating question! I'm not sure, but let's explore it together."
  );
}

export default function App() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hi there! I'm here to explain anything you're curious about in simple terms.",
      style: 'friendly',
    },
  ]);
  const [currentStyle, setCurrentStyle] = useState('friendly');
  const [isTyping, setIsTyping] = useState(false);

  const CurrentIcon = aiStyles[currentStyle].icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMsg = { type: 'user', text: question };
    setMessages((m) => [...m, userMsg]);
    setQuestion('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        type: 'ai',
        text: getAIResponse(question, currentStyle),
        style: currentStyle,
      };
      setMessages((m) => [...m, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900/80 backdrop-blur sticky top-0 z-10 border-b border-slate-700">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <Sparkles className="w-6 h-6 text-white" />
            </span>
            <div>
              <h1 className="text-xl font-semibold text-white">Explain Like I'm 5</h1>
              <p className="text-sm text-slate-300">Making complex things simple</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {Object.entries(aiStyles).map(([key, style]) => {
              const Icon = style.icon;
              return (
                <button
                  key={key}
                  onClick={() => setCurrentStyle(key)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentStyle === key
                      ? `bg-gradient-to-r ${style.color} text-white shadow`
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                  title={style.description}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-6">
        {messages.length === 1 && (
          <div className="grid grid-cols-1 gap-3 mb-8">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setQuestion(q)}
                className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-left hover:bg-slate-700 flex justify-between items-center"
              >
                <span className="text-slate-200">{q}</span>
                <MessageCircle className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        )}

        <div className="space-y-6">
          {messages.map((msg, idx) => {
            const BubbleIcon = aiStyles[msg.style || currentStyle].icon;
            return (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md p-4 rounded-xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800 text-slate-100 border border-slate-700'
                  }`}
                >
                  {msg.type === 'ai' && (
                    <div className="flex items-center space-x-2 mb-2 text-pink-400">
                      <BubbleIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        {aiStyles[msg.style || currentStyle].name}
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-md p-4 rounded-xl bg-slate-800 text-slate-100 border border-slate-700">
                <div className="flex items-center space-x-2 mb-2 text-pink-400">
                  <CurrentIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">{aiStyles[currentStyle].name}</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 w-full bg-slate-900/80 backdrop-blur border-t border-slate-700 p-4"
      >
        <div className="max-w-2xl mx-auto flex space-x-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            disabled={!question.trim() || isTyping}
            className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white disabled:opacity-50 hover:from-purple-600 hover:to-pink-600 flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
