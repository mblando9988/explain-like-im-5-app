import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Splash = ({ onStart }) => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 p-6">
    <h1 className="text-5xl font-bold text-purple-700 drop-shadow-sm">Ask Like I'm 5</h1>
    <p className="text-gray-700 max-w-xs">A friendly chatbot for everyone, designed to be super easy for anyone to use.</p>
    <button
      onClick={onStart}
      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700"
    >
      Start Chatting
    </button>
  </div>
);

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    // Placeholder response
    setTimeout(() => {
      setMessages(current => [
        ...current,
        { from: 'bot', text: "I'm still learning, but imagine a helpful response here!" }
      ]);
    }, 500);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-lg font-semibold text-purple-700 py-4 text-center shadow-md bg-white/60 backdrop-blur-md">
        Ask Like I'm 5
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
              m.from === 'user'
                ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white self-end'
                : 'bg-white/70 backdrop-blur-md text-gray-800 self-start'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-3 bg-white/60 backdrop-blur-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none"
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white disabled:opacity-50"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [started, setStarted] = useState(false);
  return started ? <Chat /> : <Splash onStart={() => setStarted(true)} />;
};

export default App;
