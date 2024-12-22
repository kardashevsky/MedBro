import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import ChatPage from './pages/chatPage/ChatPage';
import Header from './components/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
    </div>
  );
}
