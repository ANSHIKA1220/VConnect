import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import ProfileHeader from '../components/profile/ProfileHeader';
import AboutSection from '../components/profile/AboutSection';
import InterestsSection from '../components/profile/InterestsSection';
import ActivitySection from '../components/profile/ActivitySection';
import SocialLinksSection from '../components/profile/SocialLinksSection';
import EditProfileModal from '../components/profile/EditProfileModal';
import ShareProfileModal from '../components/profile/ShareProfileModal';
import AddSocialLinkModal from '../components/profile/AddSocialLinkModal';
import { useProfileData } from '../hooks/useProfileData';

function Profile() {
  const {
    profileData,
    updateProfile,
    removeInterest,
    addSocialLink,
    removeSocialLink,
  } = useProfileData();

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [addSocialLinkDialogOpen, setAddSocialLinkDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState(profileData);

  const handleSaveProfile = () => {
    updateProfile(editForm);
    setEditDialogOpen(false);
    alert('Profile updated successfully!');
  };

  const handleRemoveInterest = (index) => {
    const removed = profileData.interests[index];
    removeInterest(index);
    alert(`Removed "${removed.name}" from your interests`);
  };

  const handleAddSocialLink = (socialForm) => {
    if (socialForm.url.trim() && socialForm.label.trim()) {
      addSocialLink(socialForm);
      setAddSocialLinkDialogOpen(false);
      alert('Social link added successfully!');
    }
  };

  const handleRemoveSocialLink = (index) => {
    const removed = profileData.socialLinks[index];
    removeSocialLink(index);
    alert(`Removed "${removed.label}" from your social links`);
  };

  useEffect(() => {
    setEditForm(profileData);
  }, [profileData]);

  return (
    <MainLayout>
    <div className="max-w-md lg:max-w-4xl xl:max-w-5xl mx-auto">
      <ProfileHeader
        name={profileData.name}
        email={profileData.email}
        onEditClick={() => setEditDialogOpen(true)}
        onShareClick={() => setShareDialogOpen(true)}
      />

      <div className="px-4 lg:px-8 py-6 lg:py-8 space-y-4 lg:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <AboutSection bio={profileData.bio} />
          <InterestsSection 
            interests={profileData.interests} 
            onRemove={handleRemoveInterest}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <ActivitySection stats={profileData.activity} />
          <SocialLinksSection 
            links={profileData.socialLinks} 
            onAddClick={() => setAddSocialLinkDialogOpen(true)}
            onRemove={handleRemoveSocialLink}
          />
        </div>
      </div>

      <EditProfileModal
        isOpen={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        editForm={editForm}
        setEditForm={setEditForm}
        onSave={handleSaveProfile}
      />

      <ShareProfileModal
        isOpen={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
      />

      <AddSocialLinkModal
        isOpen={addSocialLinkDialogOpen}
        onClose={() => setAddSocialLinkDialogOpen(false)}
        onAdd={handleAddSocialLink}
      />
    </div>
    </MainLayout>
  );
}

export default Profile;
