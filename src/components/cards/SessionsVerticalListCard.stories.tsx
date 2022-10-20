import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import Session from "../../types/Session";
import SessionsVerticalListCard from "./SessionsVerticalListCard";

const DEFAULT_PROPS: Session = {
  id: 13,
  title: "Cloud Firestore - Getting Started",
  description:
    "Cloud Firestore, Firebase's new flagship NoSQL database for mobile app development improves on the successes of the Realtime Database with a new, more intuitive data model. Cloud Firestore also features richer, faster queries and scales better than the Realtime Database. This session discusses how you can integrate it into mobile apps and benefit from these improvements.",
  slug: "cloud-firestore-getting-started-1655727475",
  session_format: "Codelab / Workshop",
  session_level: "Intermediate",
  session_image: null,
  backgroundColor: "#BE5E9B",
  borderColor: "#BE5E9B",
  is_serviceSession: false,
  is_keynote: false,
  is_bookmarked: false,
  start_date_time: "2022-11-10 10:00:00",
  start_time: "10:00:00",
  end_date_time: "2022-11-10 10:45:00",
  end_time: "10:45:00",
  speakers: [
    {
      name: "Otieno Rowland",
      tagline: "Android Hoax Slayer",
      biography:
        "Rowland is an Software Engineer and mentor. He has been crafting apps for 5 years now and has gathered a lot of experience in those years. In his free time, he likes riding a bike around his hood, and occasionally takes his dog pet for a stroll.",
      avatar:
        "https://sessionize.com/image/0333-400o400o2-45-6488-47f0-b262-7ce4085d0b5d.8ddd355b-125c-48ae-9bb1-090819b39a0a.jpg",
      twitter: "https://twitter.com/rowlandoti",
      facebook: null,
      linkedin: null,
      instagram: null,
      blog: "https://www.linkedin.com/in/rowlandoti/",
      company_website: null,
    },
  ],
  rooms: [
    {
      title: "Room A",
      id: 1,
    },
  ],
};

export default {
  title: "DroidconKe/cards/SessionsVerticalListCard",
  component: SessionsVerticalListCard,
  args: DEFAULT_PROPS,
} as ComponentMeta<typeof SessionsVerticalListCard>;

const Template: ComponentStory<typeof SessionsVerticalListCard> = (args) => (
  <SessionsVerticalListCard {...args} />
);

export const SessionsVerticalListCardStory = Template.bind({});
