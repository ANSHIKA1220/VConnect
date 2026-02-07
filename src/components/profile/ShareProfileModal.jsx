import Modal from './Modal';

function ShareProfileModal({ isOpen, onClose }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Profile">
      <div className="space-y-4">
        <p className="text-black">Share your profile with others:</p>
        <div className="p-3 bg-gray-100 rounded-lg">
          <code className="text-sm text-black break-all">{window.location.href}</code>
        </div>
        <button 
          onClick={handleCopyLink}
          className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
        >
          Copy Link
        </button>
      </div>
    </Modal>
  );
}

export default ShareProfileModal;