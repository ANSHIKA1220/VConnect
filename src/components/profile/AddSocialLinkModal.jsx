import { useState } from 'react';
import Modal from './Modal';

function AddSocialLinkModal({ isOpen, onClose, onAdd }) {
  const [socialForm, setSocialForm] = useState({ 
    type: 'website', 
    url: '', 
    label: '' 
  });

  const handleAdd = () => {
    onAdd(socialForm);
    setSocialForm({ type: 'website', url: '', label: '' });
  };

  const handleClose = () => {
    setSocialForm({ type: 'website', url: '', label: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add Social Link">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Type</label>
          <select
            value={socialForm.type}
            onChange={(e) => setSocialForm({...socialForm, type: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="website">Website</option>
            <option value="github">GitHub</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="telegram">Telegram</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">URL</label>
          <input
            type="url"
            placeholder="https://..."
            value={socialForm.url}
            onChange={(e) => setSocialForm({...socialForm, url: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Display Label</label>
          <input
            type="text"
            placeholder="e.g., My Portfolio"
            value={socialForm.label}
            onChange={(e) => setSocialForm({...socialForm, label: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          />
        </div>
        <div className="flex gap-2 pt-4">
          <button 
            onClick={handleClose} 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
          >
            Cancel
          </button>
          <button 
            onClick={handleAdd} 
            disabled={!socialForm.url.trim() || !socialForm.label.trim()} 
            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Add Link
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddSocialLinkModal;