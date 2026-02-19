import { useState, useRef } from 'react';

function ProfileHeader({ name, email, onEditClick, onShareClick }) {
  const [avatar, setAvatar] = useState('/placeholder.svg');
  const fileInputRef = useRef(null);
  const initials = name.split(' ').map(n => n[0]).join('');

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target?.result);
        alert("Profile picture updated!");
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="gradient-header rounded-b-3xl px-6 lg:px-10 py-8 lg:py-10 relative">
      <div className="flex items-start gap-6 lg:gap-8">
        <div className="relative group">
          <div 
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-card border-4 border-card cursor-pointer"
            onClick={handleAvatarClick}
          >
            {avatar === '/placeholder.svg' ? (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl lg:text-3xl font-bold">
                {initials}
              </div>
            ) : (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1 left-1 lg:bottom-2 lg:left-2 w-4 h-4 lg:w-5 lg:h-5 bg-green-500 rounded-full border-2 border-card"></div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="flex-1 pt-2 lg:pt-4">
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">{name}</h1>
          <p className="text-muted-foreground text-sm lg:text-base mt-1">{email}</p>
          
          <div className="flex gap-3 mt-4 lg:mt-5">
            <button 
              className="px-4 py-2 lg:px-5 lg:py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm lg:text-sm"
              onClick={onEditClick}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </button>
            <button 
              className="px-4 py-2 lg:px-5 lg:py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors flex items-center gap-2 text-sm lg:text-sm"
              onClick={onShareClick}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share Profile
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default ProfileHeader;