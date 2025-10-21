import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Globe, X, Volume2, User, Cpu, Smile } from 'lucide-react';

// Color Palette:
// Primary: #547C3E (Medium Green) - Buttons, Send Icon, Chatbot Icon
// Accent: #B3CF8C (Light Green) - User Chat Bubbles, Highlights
// Background: #FFFDA1 (Light Yellow) - Page Background
// Dark Text: #013220 (Dark Green) - Text, Headers

// Mock Multilingual Data (to show the selector's presence)
const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'mr', name: 'मराठी' },
];

// Mock Chat History Data
const mockChatHistory = [
    {
        id: 1,
        sender: 'ai',
        text: "Hello! I am your ShreeConnect AI Assistant. How can I assist you with your millet and pulses trading today?",
        voiceEnabled: true,
    },
    {
        id: 2,
        sender: 'user',
        text: "नमस्ते, क्या आप मुझे बाजरे के लिए नवीनतम सरकारी योजनाओं के बारे में बता सकते हैं?",
        voiceEnabled: false,
    },
    {
        id: 3,
        sender: 'ai',
        text: "Certainly! The PM-FME scheme and FPO benefits are currently available for millet processing. Please select a language to hear the full details, or tell me your user type (Farmer/Processor) for tailored information.",
        voiceEnabled: true,
    },
    {
        id: 4,
        sender: 'user',
        text: "I am a Farmer. Also, what is the predicted market price for Ragi this month?",
        voiceEnabled: false,
    },
];

const Chatbot = () => {
    const [messages, setMessages] = useState(mockChatHistory);
    const [input, setInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0].code);

    const chatContainerRef = useRef(null);

    // Scroll to the bottom of the chat when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Mock function to handle message sending
    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const newMessage = {
            id: Date.now(),
            sender: 'user',
            text: input.trim(),
            voiceEnabled: false,
        };
        
        // Mock AI response for simulation
        const aiResponse = {
            id: Date.now() + 1,
            sender: 'ai',
            text: `(AI processing for: "${input}"). I estimate the Ragi price prediction is 12% higher than last quarter.`,
            voiceEnabled: true,
        };

        setMessages([...messages, newMessage, aiResponse]);
        setInput('');
    };

    // Mock function for voice recording
    const toggleRecording = () => {
        setIsRecording(!isRecording);
        if (isRecording) {
            // Stop recording logic, possibly send audio file
            setInput('');
        } else {
            // Start recording logic
            setInput('Recording voice...');
        }
    };

    const ChatBubble = ({ message }) => {
        const isUser = message.sender === 'user';
        
        const bubbleClasses = isUser
            ? 'bg-[#B3CF8C] text-[#013220] rounded-tl-xl rounded-tr-xl rounded-bl-xl ml-auto'
            : 'bg-white text-[#013220] rounded-tr-xl rounded-br-xl rounded-bl-xl mr-auto shadow-md';
        
        const avatar = isUser ? (
            <div className="p-1 rounded-full bg-[#547C3E] text-white flex-shrink-0 self-start">
                <User className="w-5 h-5" />
            </div>
        ) : (
            <div className="p-1 rounded-full bg-[#547C3E] text-[#FFFDA1] flex-shrink-0 self-start">
                <Cpu className="w-5 h-5" />
            </div>
        );

        return (
            <div className={`flex mb-4 max-w-3/4 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && avatar}
                <div className={`mx-3 p-4 max-w-xl ${bubbleClasses}`}>
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    {message.voiceEnabled && (
                        <button className="flex items-center text-xs mt-2 text-[#547C3E] hover:text-[#013220] transition-colors duration-200">
                            <Volume2 className="w-4 h-4 mr-1" />
                            Listen (Audio Response)
                        </button>
                    )}
                </div>
                {isUser && avatar}
            </div>
        );
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#FFFDA1] p-4 sm:p-6 lg:p-8 flex justify-center items-stretch">
            <div className="w-full max-w-4xl flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#547C3E]">
                
                {/* Chat Header */}
                <div className="p-4 sm:p-6 bg-[#B3CF8C] flex justify-between items-center border-b border-[#547C3E]/50">
                    <div className="flex items-center">
                        <Smile className="w-8 h-8 text-[#013220] mr-3"/>
                        <h1 className="text-xl sm:text-2xl font-extrabold text-[#013220]">
                            Shree Anna AI Assistant
                        </h1>
                    </div>
                    
                    {/* Language Selector */}
                    <div className="relative">
                        <select 
                            onChange={(e) => setSelectedLang(e.target.value)} 
                            value={selectedLang}
                            className="py-2 px-4 border border-[#547C3E] rounded-xl bg-[#FFFDA1] text-[#013220] font-semibold text-sm focus:ring-[#547C3E] appearance-none pr-8 cursor-pointer"
                        >
                            {languages.map(l => (
                                <option key={l.code} value={l.code}>{l.name}</option>
                            ))}
                        </select>
                        <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#013220] pointer-events-none"/>
                    </div>
                </div>

                {/* Chat History Area */}
                <div 
                    ref={chatContainerRef} 
                    className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-4"
                    style={{ minHeight: '300px' }}
                >
                    {messages.map(msg => (
                        <ChatBubble key={msg.id} message={msg} />
                    ))}
                </div>

                {/* Chat Input Footer */}
                <form onSubmit={handleSend} className="p-4 sm:p-6 bg-[#B3CF8C] border-t border-[#547C3E]/50 flex items-center gap-3">
                    
                    {/* Voice Mic Button */}
                    <button
                        type="button"
                        onClick={toggleRecording}
                        className={`p-3 rounded-full transition-colors duration-300 shadow-lg flex-shrink-0 
                            ${isRecording ? 'bg-red-600 text-white animate-pulse' : 'bg-[#FFFDA1] text-[#547C3E] hover:bg-red-500 hover:text-white'}`}
                    >
                        {isRecording ? <X className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>

                    {/* Text Input */}
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isRecording ? 'Listening for voice input...' : 'Type your query or tap the mic for voice input...'}
                        className="flex-1 p-3 border-2 border-[#547C3E] rounded-xl focus:outline-none focus:border-[#013220] text-[#013220] placeholder-[#547C3E]/70 transition-all duration-200"
                        disabled={isRecording}
                    />
                    
                    {/* Send Button */}
                    <button
                        type="submit"
                        className="p-3 bg-[#547C3E] text-white rounded-full transition-all duration-300 shadow-lg hover:bg-[#013220] flex-shrink-0 disabled:opacity-50"
                        disabled={input.trim() === '' || isRecording}
                    >
                        <Send className="w-6 h-6" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
