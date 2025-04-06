import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const userMessage = message;
    setResponses(prev => [...prev, { type: 'user', text: userMessage }]);
    setMessage('');
    setIsLoading(true);
    
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = await response.text();

      setResponses(prev => [...prev, { type: 'bot', text: text }]);
    } catch (error) {
      console.error('Error while generating content:', error);
      setResponses(prev => [...prev, { type: 'bot', text: 'Sorry, I encountered an error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message) => {
    if (message.type === 'user') {
      return <span>{message.text}</span>;
    } else {
      return <ReactMarkdown>{message.text}</ReactMarkdown>;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 max-h-96 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-sky-300 text-white rounded-t-lg">
            <h3 className="font-medium">Chat Assistant</h3>
            <button onClick={toggleChat} className="text-xl font-bold hover:text-gray-200">×</button>
          </div>
          
          <div className="flex-grow overflow-auto p-3 max-h-72">
            {responses.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-2 rounded-lg ${
                  msg.type === 'user' ? 'bg-sky-300 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {renderMessage(msg)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-center text-gray-500">
                <span>Thinking...</span>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button 
              type="submit" 
              className="bg-sky-300 text-white px-4 py-2 rounded-r-lg hover:bg-sky-400"
              disabled={isLoading}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={toggleChat} 
          className="p-3 rounded-full bg-sky-300 text-white hover:bg-sky-400 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;