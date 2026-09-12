import { Logo } from "~/shared/ui/Logo";
import { FooterNavigations } from "~/widgets/footer/ui/FooterNavigations";
import { NewsSubscriptionForm } from "~/widgets/footer/ui/NewsSubscriptionForm";
import { SocialList } from "~/widgets/footer/ui/SocialList";
import {
  NAVIGATIONS_LINKS,
  STATIC_LINKS
} from "~/widgets/footer/model/constants/footerLinks";

export const Footer = () => {
  return (
    <footer className="border-t border-gold/25 custom-bg-gold text-black">
      <div className="inline-padding grid gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">

        <div className="flex flex-col gap-6">
          <Logo style={"dark"} />

          <p className="max-w-xs text-sm leading-relaxed text-black/60">
            Jewelry that whispers your story.
          </p>

          <SocialList />
        </div>

        <FooterNavigations title="Navigation" links={NAVIGATIONS_LINKS} />

        <FooterNavigations title="Company" links={STATIC_LINKS} />

        <NewsSubscriptionForm />
      </div>

      <div className="border-t border-black/10 py-6">
        <p className="mx-auto max-w-7xl px-4 text-center text-[11px] tracking-[0.2em] text-black/40 uppercase sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Lune Fine Jewelry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};