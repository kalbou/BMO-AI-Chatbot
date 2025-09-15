import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import ConversationList from './components/ConversationList';
import Header from './components/Header';
import { SocketProvider } from './contexts/SocketContext';
import './App.css';

function App() {
  const [currentConversation, setCurrentConversation] = useState(null);

  return (
    <SocketProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-bmo-dark via-bmo-darker to-bmo-dark">
          <Header />
          
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <ConversationList 
                        currentConversation={currentConversation}
                        setCurrentConversation={setCurrentConversation}
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <ChatInterface 
                        conversationId={currentConversation}
                        setCurrentConversation={setCurrentConversation}
                      />
                    </div>
                  </div>
                } 
              />
              <Route 
                path="/chat/:conversationId" 
                element={
                  <ChatInterface 
                    conversationId={currentConversation}
                    setCurrentConversation={setCurrentConversation}
                  />
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </SocketProvider>
  );
}

export default App;
