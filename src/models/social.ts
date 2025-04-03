export enum SocialIcon {
  Facebook = "Facebook",
  Instagram = "Instagram",
  TikTok = "TikTok",
}

export type Social = {
  name: string;
  href: string;
  iconType: SocialIcon;
};
