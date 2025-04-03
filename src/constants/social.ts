import { SocialIcon } from "@/models/social";

import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";

export const ICONS_MAP: Record<
  SocialIcon,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  [SocialIcon.Facebook]: FacebookIcon,
  [SocialIcon.Instagram]: InstagramIcon,
  [SocialIcon.TikTok]: TikTokIcon,
};
