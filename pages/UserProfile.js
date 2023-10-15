// Import React hooks and the main React object
import React, { useState, useEffect } from 'react';
// Import the profile stylesheet
import '../src/styles/profile.css';

// Import icons from react-icons library
import { FaShareAlt, FaUserPlus, FaCopy } from 'react-icons/fa';

const UserProfile = () => {
  // State for controlling whether the gallery is expanded
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(true);

  // State to hold copy success message
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    // Copy the LinkedIn link to the clipboard
    navigator.clipboard.writeText("https://www.linkedin.com/in/priti-yadavml/")
      .then(() => {
        setCopySuccess('Link Copied!');
        // Clear the success message after 2 seconds
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => {
        setCopySuccess('Failed to copy!');
      });
  };

  // State to hold fetched NFTs
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs from the given API
    fetch('https://api.unstoppabledomains.com/profile/public/sandy.x/nfts?symbols=MATIC')
      .then(response => response.json())
      .then(data => setNfts(data.MATIC.nfts.slice(0, 6)));
  }, []);

  // Add a state to control which gallery to display (the API-driven one or the hardcoded one).
  const [showHardcodedGallery, setShowHardcodedGallery] = useState(false);
  // Determine which gallery items to display
  const galleryItems = showHardcodedGallery
    ? Array(6).fill({
      link: '#',
      image_url: 'https://shorturl.at/DES29',
      name: 'random',
      collection: 'Unsplash art',
    })
    : nfts;


  return (
    <div>
      {/* Navbar */}
      <nav className="navbar ">
        <div className="navbar-container container mx-auto">
          {/* Logo and Company Name */}
          <div className="logo-container">
            <img src="/logo.png" alt="ProfileX Logo" className="logo" />
            <span className="company-name">AI People</span>
          </div>
          {/* Search Bar */}
          <div className="relative search-container">
            <input type="text" placeholder="Search Profiles" className="search-bar" />
            <img src="/search.svg" alt="Search Icon" className="search-icon" />
          </div>
          {/* Login and Button Group */}
          <div className="flex items-center">
            <button className="login-button flex items-center">
              <img src="/logo.png" alt="Logo" className="logo-small mr-2" />
              AI Login
            </button>
            <div className="button-group flex align-bottom">
              <button className="button share-button" style={{ float: 'right' }}>
                <FaShareAlt color="white" size="1.5em" />
                Share
              </button>
              <button className="button follow-button">
                <FaUserPlus color="white" size="1.5em" />
                Follow
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-photo">
          <img src="/profile_photo.jpg" alt="Profile" />
        </div>
        <img src="/logo.png" alt="Company Logo" className="logo-overlay" />
        <div className="name" style={{ fontWeight: 'bold' }}>priti.y</div>
        <div className="clipboard">
          <a href="https://www.linkedin.com/in/priti-yadavml/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '25px', marginTop: '10px', textDecoration: 'none' }}>
            <span>priti.y</span>
          </a>
          {/* Copy to Clipboard icon */}
          <FaCopy color="#a8a8a8" style={{ marginLeft: '10px' }} onClick={copyToClipboard} title="Copy link" />
          {copySuccess && <span style={{ color: 'green' }}>{copySuccess}</span>}
        </div>
      </div>

      {/* Profile Content */}
      <p id="TokenGalley">
        Token Gallery <span className="item-count">{nfts.length}</span>
      </p>
      {/* Button to toggle the gallery expansion */}
      <button
        id="collapseButton"
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
      >
        {isGalleryExpanded ? "Collapse" : "Expand"}
      </button>

      {/* NFTs Gallery */}
      {isGalleryExpanded && (
        <div className="gallery-container">
          {galleryItems.map((nft, index) => (
            <div key={index} className="gallery-item">
              <a href={nft.link} target="_blank" rel="noopener noreferrer">
                <div className="item-content">
                  <img src={nft.image_url} alt={nft.name} className="item-image" />
                  <div className="text-container">
                    <img src="/logo.png" alt="Logo" />
                    <div className="nft-details">
                      <h3>{nft.name}</h3>
                      <h3>{nft.collection}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: '700px', backgroundColor: "transparent", display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
        <button style={{ backgroundColor: "transparent", borderColor: 'transparent', color: 'blue' }} onClick={() => setShowHardcodedGallery(!showHardcodedGallery)}>
          Toggle Gallery
        </button>
      </div>



    </div>
  );
};

// Export the UserProfile component for use in other modules
export default UserProfile;
