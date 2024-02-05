import React from 'react';

const CommonLayout = ({ children }) => {
  const handleContextMenu = (event) => {
    // Check if the clicked element is an <a> (link) element
    const linkElement = event.target.closest('a');

    if (linkElement) {
      event.preventDefault();

      // Get the href attribute of the link
      const linkUrl = linkElement.getAttribute('href');

      // Open the link in a new tab
      window.open(linkUrl, '_blank');
    }
  };

  return <div onContextMenu={handleContextMenu}>{children}</div>;
};

export default CommonLayout;
