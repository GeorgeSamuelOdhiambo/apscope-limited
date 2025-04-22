import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const LiveChat = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Check if Tawk.to API is available
    if (window.Tawk_API) {
      if (firstVisit) {
        // Show welcome message only on first visit
        window.Tawk_API.onLoad = function() {
          window.Tawk_API.setAttributes({
            'name': 'Guest',
            'email': '',
          }, function(error){});
          
          setTimeout(() => {
            window.Tawk_API.toggle();
          }, 3000);
        };
        setFirstVisit(false);
      }
    }
  }, [firstVisit]);

  const toggleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
      setChatVisible(!chatVisible);
    }
  };

  return (
    <div className="live-chat-container">
      {!chatVisible ? (
        <IconButton 
          className="chat-toggle-button"
          onClick={toggleChat}
          color="primary"
          aria-label="open chat"
        >
          <ChatIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton 
          className="chat-toggle-button"
          onClick={toggleChat}
          color="secondary"
          aria-label="close chat"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

export default LiveChat;