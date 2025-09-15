import React from 'react';
import { Bot, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-bmo-darker border-b-2 border-bmo-green py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-bmo-green animate-bounce-slow" />
            <h1 className="text-3xl font-bold text-bmo-green font-bmo">
              BMO Chatbot
            </h1>
            <Zap className="h-6 w-6 text-bmo-yellow animate-pulse-slow" />
          </div>
        </div>
        <p className="text-center text-bmo-blue mt-2 font-pixel">
          Your friendly neighborhood robot from the Land of Ooo!
        </p>
      </div>
    </header>
  );
};

export default Header;
