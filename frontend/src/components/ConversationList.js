import React, { useState, useEffect } from 'react';
import { MessageSquare, Plus, Trash2, Clock } from 'lucide-react';
import { conversationAPI } from '../services/api';

const ConversationList = ({ currentConversation, setCurrentConversation }) => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadConversations();
  }, []);

  const loadConversations = async () => {
    try {
      setIsLoading(true);
      const data = await conversationAPI.getAll();
      setConversations(data);
    } catch (error) {
      console.error('Failed to load conversations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createNewConversation = async () => {
    try {
      const newConversation = await conversationAPI.create({
        title: 'New Chat with BMO'
      });
      setConversations(prev => [newConversation, ...prev]);
      setCurrentConversation(newConversation.id);
    } catch (error) {
      console.error('Failed to create conversation:', error);
    }
  };

  const deleteConversation = async (id) => {
    try {
      await conversationAPI.delete(id);
      setConversations(prev => prev.filter(conv => conv.id !== id));
      if (currentConversation === id) {
        setCurrentConversation(null);
      }
    } catch (error) {
      console.error('Failed to delete conversation:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bmo-card h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b-2 border-bmo-green">
        <h3 className="text-lg font-bold text-bmo-green font-bmo">
          Conversations
        </h3>
        <button
          onClick={createNewConversation}
          className="bmo-button flex items-center space-x-1"
        >
          <Plus className="h-4 w-4" />
          <span className="font-bmo">New</span>
        </button>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-bmo-green"></div>
          </div>
        ) : conversations.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-bmo-green" />
            <p className="font-bmo">No conversations yet!</p>
            <p className="text-sm font-pixel">Start chatting with BMO!</p>
          </div>
        ) : (
          <div className="space-y-2 p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-bmo-darker ${
                  currentConversation === conversation.id
                    ? 'bg-bmo-green text-bmo-dark'
                    : 'bg-bmo-darker text-white hover:border-bmo-green'
                }`}
                onClick={() => setCurrentConversation(conversation.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bmo text-sm font-bold truncate">
                      {conversation.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-pixel">
                        {formatDate(conversation.updatedAt)}
                      </span>
                      <span className="text-xs font-pixel">
                        ({conversation._count?.messages || 0} messages)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteConversation(conversation.id);
                    }}
                    className="ml-2 p-1 hover:bg-red-500 rounded transition-colors"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationList;
