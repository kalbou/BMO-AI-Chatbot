# BMO Chatbot Project

A full-stack chatbot featuring BMO from Adventure Time, built with modern web technologies.

## 🎮 Features

- **BMO Personality**: AI-powered responses with BMO's quirky, helpful personality
- **Real-time Chat**: WebSocket-based instant messaging
- **Conversation History**: Persistent chat history in PostgreSQL
- **Responsive UI**: Beautiful BMO-themed interface
- **REST API**: Well-structured backend API
- **Dockerized**: Complete containerization for easy setup

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database
- **Prisma** ORM
- **Socket.io** for real-time communication
- **OpenAI API** for AI responses

### Frontend
- **React** with TypeScript
- **Tailwind CSS** for styling
- **Socket.io Client** for real-time chat
- **Axios** for API calls

### DevOps
- **Docker** & Docker Compose
- **Environment variables** for configuration

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- OpenAI API key

### Setup

1. **Clone and navigate to the project:**
   ```bash
   cd "C:\Users\rhaque34\Documents\Junior Year Class Files\Cursor\Cursor Project 1"
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   Add your OpenAI API key to `.env`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Start the application:**
   ```bash
   docker-compose up --build
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Database: localhost:5432

## 📁 Project Structure

```
bmo-chatbot/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── prisma/             # Database schema
│   └── Dockerfile
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── utils/          # Helper functions
│   └── Dockerfile
├── database/               # Database initialization
├── docker-compose.yml      # Container orchestration
└── README.md
```

## 🎯 Learning Objectives

This project covers:
- **System Design**: Microservices architecture, API design
- **REST APIs**: CRUD operations, authentication, error handling
- **Backend Frameworks**: Express.js, middleware, routing
- **SQL Databases**: PostgreSQL, Prisma ORM, migrations
- **GenAI**: OpenAI API integration, prompt engineering
- **Full Stack**: Frontend-backend communication, real-time features
- **DevOps**: Docker, containerization, environment management

## 🤖 BMO Personality

BMO responds with:
- Childlike enthusiasm and curiosity
- Gaming references and tech-savvy advice
- Helpful problem-solving attitude
- Occasional Finnish phrases (like in the show)
- Encouragement and positivity

## 🔧 Development

### Backend Development
```bash
cd backend
npm install
npm run dev
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

### Database Management
```bash
# Run migrations
npx prisma migrate dev

# View database
npx prisma studio
```

## 📝 API Endpoints

- `GET /api/health` - Health check
- `POST /api/chat` - Send message to BMO
- `GET /api/conversations` - Get chat history
- `POST /api/conversations` - Start new conversation

## 🎨 Customization

- Modify BMO's personality in `backend/src/services/aiService.js`
- Update UI theme in `frontend/src/styles/`
- Add new features following the established patterns

## 📚 Additional Learning

While this project focuses on JavaScript/TypeScript, you can explore:
- **Ruby**: Build a Ruby version of the backend using Sinatra or Rails
- **Go**: Create a Go backend using Gin or Echo frameworks
- **Python**: Implement with FastAPI or Django
- **Rust**: Build with Actix-web or Axum

## 🤝 Contributing

This is a learning project! Feel free to:
- Add new features
- Improve the UI/UX
- Optimize performance
- Add tests
- Experiment with different AI models

## 📄 License

MIT License - Feel free to use this project for learning and personal use!
