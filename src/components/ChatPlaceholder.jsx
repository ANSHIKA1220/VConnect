import { GraduationCap } from 'lucide-react';
import './ChatPlaceholder.css';

const ChatPlaceholder = () => {
    return (
        <div className="chat-placeholder">
            <div className="placeholder-content">
                <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    margin: '0 auto 24px auto'
                }}>
                    <img src="/logo.png" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} alt="Logo" />
                </div>
                <h1 style={{fontSize: '42px', fontWeight: '800', letterSpacing: '-1px', margin: '0 0 8px 0'}}>VConnect</h1>
            </div>
        </div>
    );
};

export default ChatPlaceholder;
