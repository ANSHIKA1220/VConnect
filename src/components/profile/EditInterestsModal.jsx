import { useState } from 'react';
import Modal from './Modal';

function EditInterestsModal({ isOpen, onClose, editForm, setEditForm, onSave }) {
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      setEditForm({ ...editForm, interests: [...editForm.interests, { name: newInterest.trim() }] });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (index) => {
    setEditForm({ ...editForm, interests: editForm.interests.filter((_, i) => i !== index) });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Interests">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {editForm.interests.map((interest, index) => (
            <span key={index} className="group inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              {interest.name}
              <button onClick={() => handleRemoveInterest(index)} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new interest"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
            className="flex-1 p-2 border border-gray-300 rounded-lg text-black"
          />
          <button onClick={handleAddInterest} disabled={!newInterest.trim()} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 pt-2">
          <button onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black">
            Cancel
          </button>
          <button onClick={onSave} className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditInterestsModal; 