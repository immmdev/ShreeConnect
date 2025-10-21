// src/components/ChatbotIcon.jsx
import React, { useState } from 'react';
import { MessageSquareText, X, Mic, Send, Bot } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Included in case the chatbot opens a dedicated route

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  
  // Color palette definitions
  const primaryText = 'text-[#013220]'; // Dark Green
  const primaryAccent = 'text-[#547C3E]'; // Medium Green
  const accentBackground = 'bg-[#B3CF8C]'; // Light Green
  const mainBackground = 'bg-[#FFFDA1]'; // Light Yellow

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (chatInput.trim() !== '') {
      // Logic to send to AI (Gemini/ChatGPT-4) goes here
      console.log("Sending to AI Chatbot:", chatInput);
      // Mock response or update chat history state here
      setChatInput('');
    }
  };

  const handleVoiceInput = () => {
    // Mocking voice input functionality (Speech-to-Text)
    alert("Voice input enabled! Speak your query for schemes, pricing, or guidance.");
    // In a real app: Integrate Web Speech API here
  };

  // --- Mock Chat Window Component ---
  const ChatWindow = () => (
    <div className={`fixed bottom-24 right-4 w-80 h-96 bg-white rounded-xl shadow-2xl border-2 border-[#547C3E] flex flex-col transition-all duration-300 transform ${primaryText}`}>
      
      {/* Chat Header */}
      <div className={`p-3 flex items-center justify-between ${primaryAccent} text-white rounded-t-lg shadow-md`}>
        <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-[#FFFDA1]"/>
            <span className="font-bold text-lg text-[#FFFDA1]">ShreeBot AI</span>
        </div>
        <button onClick={handleToggle} className="text-[#FFFDA1] hover:text-white p-1 rounded-full hover:bg-black/10">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Body (Conversation Area) */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-[#FFFDA1]/50">
        {/* Mock Bot Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] p-3 rounded-lg rounded-bl-none bg-[#B3CF8C] shadow-sm text-sm">
            Hello! I'm ShreeBot, your **Multilingual AI Assistant**. Ask me about schemes, crop guidance, or price trends!
          </div>
        </div>
        {/* Mock User Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] p-3 rounded-lg rounded-br-none bg-[#547C3E] text-white shadow-sm text-sm">
            What is the AI suggested price for Ragi in Pune?
          </div>
        </div>
        {/* Mock Bot Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] p-3 rounded-lg rounded-bl-none bg-[#B3CF8C] shadow-sm text-sm">
            The predicted wholesale price for Ragi (Finger Millet) in Pune is **₹36.50/kg**. This is based on current demand and regional data.
          </div>
        </div>
      </div>

      {/* Chat Footer (Input Area) */}
      <div className="p-3 border-t border-[#B3CF8C] flex items-center gap-2 bg-white">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type or use voice..."
          className={`flex-grow p-2 border border-gray-300 rounded-lg focus:ring-[#547C3E] focus:border-[#547C3E] text-sm ${primaryText} transition duration-150`}
        />
        <button onClick={handleVoiceInput} className={`p-2 rounded-full ${accentBackground} hover:bg-[#547C3E] hover:text-white transition-colors`} title="Voice Input (Multilingual)">
          <Mic className="w-5 h-5" />
        </button>
        <button onClick={handleSend} className="p-2 bg-[#547C3E] text-white rounded-full hover:bg-[#013220] transition-colors" title="Send">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // --- Main Icon Render ---
  return (
    <>
      {/* Fixed Chat Window (Hidden or Visible) */}
      {isOpen && <ChatWindow />}
      
      {/* Fixed Chat Icon */}
      <button
        onClick={handleToggle}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-2xl z-50 transition-transform duration-300 ${isOpen ? accentBackground : 'bg-[#547C3E] hover:bg-[#013220]'} text-white hover:scale-110`}
        title={isOpen ? "Close Chatbot" : "Open ShreeBot AI Assistant"}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-[#013220]" />
        ) : (
          <MessageSquareText className="w-7 h-7" />
        )}
      </button>
    </>
  );
};

export default ChatbotIcon;