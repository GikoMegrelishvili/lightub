import { SocialIcon } from "@/models/social";

export const NAVIGATION = {
  pages: [
    { name: "About Us", href: "about-us" },
    { name: "Contact Us", href: "contact-us" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      iconType: SocialIcon.Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      iconType: SocialIcon.Instagram,
    },
    {
      name: "TikTok",
      href: "#",
      iconType: SocialIcon.TikTok,
    },
  ],
};
