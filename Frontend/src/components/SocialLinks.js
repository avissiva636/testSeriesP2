const SocialLinks = () => {
    const socialLinks = [
      { platform: "WhatsApp", link: "https://wa.me/9345813146" }, // Replace with your actual WhatsApp number
      { platform: "Facebook", link: "https://www.facebook.com/yourpage" }, // Replace with your actual Facebook page URL
      { platform: "Instagram", link: "https://www.instagram.com/yourusername" }, // Replace with your actual Instagram username
      { platform: "YouTube", link: "https://www.youtube.com/yourchannel" }, // Replace with your actual YouTube channel URL
      { platform: "Twitter", link: "https://twitter.com/yourhandle" }, // Replace with your actual Twitter handle
    ];
  
    return (
      <div className="social-links">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.platform}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Follow us on ${socialLink.platform}`}
          </a>
        ))}
      </div>
    );
  };
  
  export default SocialLinks;