import Modal from './Modal';

function EditAboutModal({ isOpen, onClose, editForm, setEditForm, onSave }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit About">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Name</label>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">About</label>
          <textarea
            value={editForm.bio}
            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          />
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

export default EditAboutModal;