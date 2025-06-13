{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Bold;\f1\fmodern\fcharset0 Courier;\f2\froman\fcharset0 Times-Roman;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red109\green109\blue109;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c50196\c50196\c50196;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}}{\leveltext\leveltemplateid1\'01\'00;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid1}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa321\partightenfactor0

\f0\b\fs48 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Explain Like I'm 5 - Complete Project Files\
\pard\pardeftab720\sa298\partightenfactor0

\fs36 \cf0 File Structure\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 explain-like-im-5-app/\
\uc0\u9500 \u9472 \u9472  package.json\
\uc0\u9500 \u9472 \u9472  public/\
\uc0\u9474    \u9492 \u9472 \u9472  index.html\
\uc0\u9500 \u9472 \u9472  src/\
\uc0\u9474    \u9500 \u9472 \u9472  App.js\
\uc0\u9474    \u9500 \u9472 \u9472  App.css\
\uc0\u9474    \u9492 \u9472 \u9472  index.js\
\uc0\u9492 \u9472 \u9472  README.md\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 package.json\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 \{\
  "name": "explain-like-im-5-app",\
  "version": "1.0.0",\
  "description": "An AI app that explains complex topics in simple, friendly terms",\
  "homepage": "https://yourusername.github.io/explain-like-im-5-app",\
  "private": true,\
  "dependencies": \{\
    "@testing-library/jest-dom": "^5.16.4",\
    "@testing-library/react": "^13.3.0",\
    "@testing-library/user-event": "^13.5.0",\
    "lucide-react": "^0.263.1",\
    "react": "^18.2.0",\
    "react-dom": "^18.2.0",\
    "react-scripts": "5.0.1",\
    "web-vitals": "^2.1.4"\
  \},\
  "scripts": \{\
    "start": "react-scripts start",\
    "build": "react-scripts build",\
    "test": "react-scripts test",\
    "eject": "react-scripts eject",\
    "predeploy": "npm run build",\
    "deploy": "gh-pages -d build"\
  \},\
  "eslintConfig": \{\
    "extends": [\
      "react-app",\
      "react-app/jest"\
    ]\
  \},\
  "browserslist": \{\
    "production": [\
      ">0.2%",\
      "not dead",\
      "not op_mini all"\
    ],\
    "development": [\
      "last 1 chrome version",\
      "last 1 firefox version",\
      "last 1 safari version"\
    ]\
  \},\
  "devDependencies": \{\
    "gh-pages": "^4.0.0"\
  \}\
\}\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 public/index.html\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 <!DOCTYPE html>\
<html lang="en">\
  <head>\
    <meta charset="utf-8" />\
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\
    <meta name="viewport" content="width=device-width, initial-scale=1" />\
    <meta name="theme-color" content="#000000" />\
    <meta name="description" content="Explain Like I'm 5 - Making AI simple and friendly for everyone" />\
    <title>Explain Like I'm 5 - AI Made Simple</title>\
    <script src="https://cdn.tailwindcss.com"></script>\
  </head>\
  <body>\
    <noscript>You need to enable JavaScript to run this app.</noscript>\
    <div id="root"></div>\
  </body>\
</html>\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 src/App.js\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 import React, \{ useState \} from 'react';\
import \{ Send, Sparkles, Heart, Coffee, BookOpen, MessageCircle \} from 'lucide-react';\
\
const ExplainLikeImFive = () => \{\
  const [question, setQuestion] = useState('');\
  const [messages, setMessages] = useState([\
    \{\
      type: 'ai',\
      text: "Hi there! I'm here to explain anything you're curious about - in simple, friendly terms. Think of me as your patient teacher who never gets tired of questions. What would you like to understand today?",\
      style: 'friendly'\
    \}\
  ]);\
  const [currentStyle, setCurrentStyle] = useState('friendly');\
  const [isTyping, setIsTyping] = useState(false);\
\
  const aiStyles = \{\
    friendly: \{\
      name: "Friendly Helper",\
      icon: Heart,\
      color: "from-pink-400 to-rose-400",\
      description: "Warm and encouraging, like talking to a caring friend"\
    \},\
    patient: \{\
      name: "Patient Teacher", \
      icon: BookOpen,\
      color: "from-blue-400 to-indigo-400",\
      description: "Methodical and clear, like your favorite teacher"\
    \},\
    conversational: \{\
      name: "Chat Buddy",\
      icon: Coffee,\
      color: "from-amber-400 to-orange-400", \
      description: "Casual and relaxed, like chatting over coffee"\
    \}\
  \};\
\
  const sampleQuestions = [\
    "How does the internet work?",\
    "What is artificial intelligence?",\
    "Why do we need to sleep?",\
    "How do airplanes stay in the sky?",\
    "What makes the weather change?"\
  ];\
\
  const getAIResponse = (userQuestion, style) => \{\
    const responses = \{\
      friendly: \{\
        "How does the internet work?": "Oh, what a great question! Think of the internet like a giant postal system, but instead of letters, we're sending messages and pictures instantly! Your computer is like your house, and it connects to this huge network of 'roads' called cables and wireless signals. When you want to visit a website, it's like asking the postal worker (your internet provider) to go get something from a store across town and bring it back to you - except it happens in just a few seconds! Pretty amazing, right?",\
        "What is artificial intelligence?": "I love this question! You know how you can recognize your friend's voice on the phone, or figure out if a picture shows a cat or a dog? Well, artificial intelligence is like teaching computers to be smart in similar ways! We show computers thousands of examples - like thousands of pictures of cats - until they learn to spot patterns and make good guesses. It's like how you learned to read by seeing lots of words over and over. AI isn't magic, it's just computers that have practiced a lot at specific tasks!"\
      \},\
      patient: \{\
        "How does the internet work?": "Let me break this down step by step. First, imagine every computer in the world connected by invisible threads - these are internet connections. When you type in a website address, your computer sends a message along these threads asking for that website. The message travels through several 'helper computers' called servers until it finds the right one. That server then sends the website back to you along the same path. The whole process takes less than a second because these messages travel at the speed of light!",\
        "What is artificial intelligence?": "Let's think about this carefully. AI is essentially a computer program that can learn from examples, just like how children learn. Step 1: We feed the computer lots of data - maybe thousands of photos of different animals. Step 2: The computer finds patterns in this data - it notices that dogs usually have floppy ears while cats have pointy ears. Step 3: When shown a new photo, the computer uses these patterns to make an educated guess about what it's seeing. That's the basic idea behind all AI!"\
      \},\
      conversational: \{\
        "How does the internet work?": "You know what? The internet is basically like a huge conversation happening all around us! Your phone or computer is like you sitting in a coffee shop, and when you want to check Instagram or Google something, you're basically shouting across the room 'Hey, can someone grab me that thing?' And boom - someone (actually, special computers called servers) tosses it right back to you. The whole thing works because we've got this massive network of connections - some through cables, some through the air - all chatting back and forth constantly!",\
        "What is artificial intelligence?": "Okay, so AI is basically like having a really smart friend who's read every book in the library and has an amazing memory. Except instead of books, this 'friend' has looked at millions of examples of whatever you're asking about. Like, if you show it a picture and ask 'Is this a cat?', it's thinking 'Hmm, I've seen a million cat photos, and this has pointy ears, whiskers, and that sassy look... yep, definitely a cat!' It's not actually 'thinking' like we do, but it's gotten really good at pattern matching from all that practice."\
      \}\
    \};\
\
    return responses[style][userQuestion] || "That's such an interesting question! While I don't have a specific answer prepared for that one, I'd love to help you think through it. Could you tell me a bit more about what sparked your curiosity about this topic?";\
  \};\
\
  const handleSubmit = async (e) => \{\
    e.preventDefault();\
    if (!question.trim()) return;\
\
    const userMessage = \{ type: 'user', text: question \};\
    setMessages(prev => [...prev, userMessage]);\
    setQuestion('');\
    setIsTyping(true);\
\
    setTimeout(() => \{\
      const aiResponse = \{\
        type: 'ai',\
        text: getAIResponse(question, currentStyle),\
        style: currentStyle\
      \};\
      setMessages(prev => [...prev, aiResponse]);\
      setIsTyping(false);\
    \}, 1500);\
  \};\
\
  const handleSampleQuestion = (sampleQ) => \{\
    setQuestion(sampleQ);\
  \};\
\
  const CurrentIcon = aiStyles[currentStyle].icon;\
\
  return (\
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">\
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">\
        <div className="max-w-4xl mx-auto px-4 py-4">\
          <div className="flex items-center justify-between">\
            <div className="flex items-center space-x-3">\
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">\
                <Sparkles className="w-6 h-6 text-white" />\
              </div>\
              <div>\
                <h1 className="text-2xl font-bold text-gray-800">Explain Like I'm 5</h1>\
                <p className="text-sm text-gray-600">Making complex things simple and friendly</p>\
              </div>\
            </div>\
            \
            <div className="flex space-x-2">\
              \{Object.entries(aiStyles).map(([key, style]) => \{\
                const Icon = style.icon;\
                return (\
                  <button\
                    key=\{key\}\
                    onClick=\{() => setCurrentStyle(key)\}\
                    className=\{`p-3 rounded-xl transition-all duration-200 $\{\
                      currentStyle === key \
                        ? `bg-gradient-to-r $\{style.color\} text-white shadow-lg scale-105` \
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'\
                    \}`\}\
                    title=\{style.description\}\
                  >\
                    <Icon className="w-5 h-5" />\
                  </button>\
                );\
              \})\}\
            </div>\
          </div>\
        </div>\
      </div>\
\
      <div className="max-w-4xl mx-auto px-4 py-6">\
        <div className=\{`mb-6 p-4 rounded-2xl bg-gradient-to-r $\{aiStyles[currentStyle].color\} text-white`\}>\
          <div className="flex items-center space-x-3">\
            <CurrentIcon className="w-6 h-6" />\
            <div>\
              <h3 className="font-semibold">\{aiStyles[currentStyle].name\}</h3>\
              <p className="text-sm opacity-90">\{aiStyles[currentStyle].description\}</p>\
            </div>\
          </div>\
        </div>\
\
        \{messages.length === 1 && (\
          <div className="mb-8">\
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Try asking about:</h3>\
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">\
              \{sampleQuestions.map((q, idx) => (\
                <button\
                  key=\{idx\}\
                  onClick=\{() => handleSampleQuestion(q)\}\
                  className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 text-left group"\
                >\
                  <div className="flex items-center justify-between">\
                    <span className="text-gray-700 group-hover:text-purple-600">\{q\}</span>\
                    <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-purple-500" />\
                  </div>\
                </button>\
              ))\}\
            </div>\
          </div>\
        )\}\
\
        <div className="space-y-6 mb-8">\
          \{messages.map((message, idx) => (\
            <div key=\{idx\} className=\{`flex $\{message.type === 'user' ? 'justify-end' : 'justify-start'\}`\}>\
              <div className=\{`max-w-3xl p-6 rounded-2xl $\{\
                message.type === 'user' \
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' \
                  : 'bg-white border border-gray-200 text-gray-800 shadow-sm'\
              \}`\}>\
                \{message.type === 'ai' && (\
                  <div className="flex items-center space-x-2 mb-3">\
                    <CurrentIcon className="w-5 h-5 text-purple-500" />\
                    <span className="text-sm font-medium text-purple-600">\
                      \{aiStyles[message.style || currentStyle].name\}\
                    </span>\
                  </div>\
                )\}\
                <p className="text-base leading-relaxed">\{message.text\}</p>\
              </div>\
            </div>\
          ))\}\
          \
          \{isTyping && (\
            <div className="flex justify-start">\
              <div className="max-w-3xl p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">\
                <div className="flex items-center space-x-2 mb-3">\
                  <CurrentIcon className="w-5 h-5 text-purple-500" />\
                  <span className="text-sm font-medium text-purple-600">\
                    \{aiStyles[currentStyle].name\}\
                  </span>\
                </div>\
                <div className="flex space-x-2">\
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>\
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style=\{\{animationDelay: '0.1s'\}\}></div>\
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style=\{\{animationDelay: '0.2s'\}\}></div>\
                </div>\
              </div>\
            </div>\
          )\}\
        </div>\
\
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg">\
          <div className="flex space-x-4">\
            <input\
              type="text"\
              value=\{question\}\
              onChange=\{(e) => setQuestion(e.target.value)\}\
              onKeyDown=\{(e) => e.key === 'Enter' && handleSubmit(e)\}\
              placeholder="What would you like me to explain? Ask me anything!"\
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"\
            />\
            <button\
              onClick=\{handleSubmit\}\
              disabled=\{!question.trim() || isTyping\}\
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-medium"\
            >\
              <Send className="w-5 h-5" />\
              <span>Ask</span>\
            </button>\
          </div>\
        </div>\
      </div>\
    </div>\
  );\
\};\
\
export default ExplainLikeImFive;\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 src/index.js\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 import React from 'react';\
import ReactDOM from 'react-dom/client';\
import App from './App';\
\
const root = ReactDOM.createRoot(document.getElementById('root'));\
root.render(\
  <React.StrictMode>\
    <App />\
  </React.StrictMode>\
);\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 src/App.css\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 /* Additional custom styles if needed */\
.App \{\
  text-align: center;\
\}\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 README.md\
\pard\pardeftab720\partightenfactor0

\f1\b0\fs26 \cf0 # Explain Like I'm 5 - AI Made Simple\
\
A friendly AI app that explains complex topics in simple, approachable terms. Perfect for bridging the gap between technical concepts and everyday understanding.\
\
## Features\
\
- \uc0\u55358 \u56598  Three AI personality styles (Friendly Helper, Patient Teacher, Chat Buddy)\
- \uc0\u55356 \u57256  Beautiful, non-intimidating interface\
- \uc0\u55357 \u56561  Mobile-responsive design\
- \uc0\u10024  Smooth animations and interactions\
- \uc0\u55358 \u56800  Simple explanations for complex topics\
\
## Getting Started\
\
1. Clone this repository\
2. Run `npm install`\
3. Run `npm start`\
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser\
\
## Deployment\
\
To deploy to GitHub Pages:\
1. Run `npm run deploy`\
2. Your app will be available at `https://yourusername.github.io/explain-like-im-5-app`\
\
## Built With\
\
- React\
- Tailwind CSS\
- Lucide React Icons\
\
## License\
\
MIT License\
\pard\pardeftab720\partightenfactor0

\f2\fs24 \cf3 \strokec3 \
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 \strokec2 Quick Setup Instructions\
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls1\ilvl0
\fs24 \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	1	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Create a new folder
\f2\b0  on your computer called 
\f1\fs26 explain-like-im-5-app
\f2\fs24 \
\ls1\ilvl0
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	2	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Copy each file
\f2\b0  above into the correct location in your folder\
\ls1\ilvl0
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	3	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Open terminal
\f2\b0  in that folder and run:
\f1\fs26 npm installnpm start\
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls1\ilvl0
\f2\fs24 \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	4	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls1\ilvl0
\f0\b \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	5	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Push to GitHub
\f2\b0  when ready!\
}