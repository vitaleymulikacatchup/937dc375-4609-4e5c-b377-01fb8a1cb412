"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/ThemeProvider";

const assetMap = [
  {"id":"heroImage","url":"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Light bulb laying on chalkboard with drawn thought bubble, symbolizing creative ideas."},
  {"id":"aboutImage","url":"https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professionals in business attire engage in a thoughtful discussion sitting in a stylish, modern room."},
  {"id":"feature1Image","url":"https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Engineers collaborating on a car project in a modern automotive workshop using advanced technology."},
  {"id":"teamMember1","url":"https://images.pexels.com/photos/34302273/pexels-photo-34302273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"smiling business professional - Photo by Sean P. Twomey"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Techify"
          buttonText="Join Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Techify"
            description="Innovative Solutions for Modern Businesses"
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Empowering Digital Transformation at Every Step"
            buttons={[{ text: "Our Story", href: "about" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore the powerful features we offer"
            features={[
              {
                title: "Advanced Analytics",
                description: "Gain insights with comprehensive analytics",
                imageSrc: assetMap.find(a => a.id === "feature1Image")?.url || "/public/images/placeholder.webp"
              },
              {
                title: "Real-Time Collaboration",
                description: "Work together in real-time with peers",
                imageSrc: "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            title="Meet the Team"
            members={[
              {
                id: "1",
                name: "Jane Doe",
                role: "CTO",
                imageSrc: assetMap.find(a => a.id === "teamMember1")?.url || "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "John Smith",
                role: "CEO",
                imageSrc: "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Join our mailing list for the latest updates"
            imageSrc={assetMap.find(a => a.id === "aboutImage")?.url || "/public/images/placeholder.webp"}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 Techify"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
