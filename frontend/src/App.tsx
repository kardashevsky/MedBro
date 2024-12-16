import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import ChatPage from './pages/chatPage/ChatPage';
import HeaderNavBar from './components/headerNavBar/HeaderNavBar';

export default function App() {
  return (
    <div className="app">
      <HeaderNavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
    </div>
  );
}
