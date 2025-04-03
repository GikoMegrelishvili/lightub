"use client";

import { ICONS_MAP } from "@/constants/social";
import { NavigationItem } from "@/models/navigation";
import { Social } from "@/models/social";

export default function Footer(navigation: any) {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.pages.map((item: NavigationItem) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item: Social) => {
            console.log(item);
            console.log(ICONS_MAP[item.iconType]);
            const Icon = ICONS_MAP[item.iconType];
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <Icon aria-hidden="true" className="size-6" />
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
