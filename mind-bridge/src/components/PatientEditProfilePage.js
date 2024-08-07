import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
 
// Initialize Firebase services
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
 
function PatientEditProfilePage() {
  const [userEmail, setUserEmail] = useState(null);
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    // Function to handle the authentication state change
    const handleAuthStateChange = (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
        navigate('/login'); // Redirect to login if user is not authenticated
      }
    };
 
    // Subscribe to the auth state change
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
 
    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [navigate]);
 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
 
  const handleUpload = async () => {
    if (file) {
      // Create a unique filename for the file
      const fileRef = ref(storage, `profile_pics/${Date.now()}_${file.name}`);
     
      try {
        // Upload the file
        await uploadBytes(fileRef, file);
        // Get the download URL
        const url = await getDownloadURL(fileRef);
        setProfilePic(url);
        alert('Profile picture uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload profile picture');
      }
    }
  };
 
  const handleContinue = () => {
    navigate('/patientLandingPage');
  };
 
  return (
    <div className="edit-profile">
      <header>
        <button className="profile-pic-button">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <div className="profile-pic-placeholder">Upload Picture</div>
          )}
        </button>
      </header>
      <main>
        <h1>Hello {userEmail || 'Guest'}</h1>
        <textarea
          placeholder="Write your bio here..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className="upload-button" onClick={handleUpload}>
          Upload Picture
        </button>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </main>
    </div>
  );
}
 
export default PatientEditProfilePage;
 