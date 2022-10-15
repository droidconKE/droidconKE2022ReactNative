import { ComponentStory } from "@storybook/react";
import React from "react";
import SessionsScreen, { SessionsScreenProps } from "./SessionsScreen";

const DEFAULT_PROPS: SessionsScreenProps = {
  dates: {
    items: [
      { selected: true, date: "16th", day: "Day 1" },
      { selected: false, date: "17th", day: "Day 2" },
      { selected: false, date: "18th", day: "Day 3" },
    ],
  },
  sessions: {
    items: [
      {
        id: 16,
        title: "Software craftmanship - Becoming a better android developer",
        description:
          "This talk is all about becoming a better software engineer/android engineer. It covers some of the basic skills/habits we overlook as we learn coding that might cost us in the long term in our journey to become a solid software engineer. This call will be about calling out mediocrity and finding ways to be better at our craft as software engineers. ",
        slug: "software-craftmanship-becoming-a-better-android-developer-1655727475",
        session_format: "Regular Session",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#7F9337",
        borderColor: "#7F9337",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-10 10:45:00",
        end_time: "10:45:00",
        speakers: [
          {
            name: "Seth Kigen.",
            tagline: "Systems Architect @ Twigafoods. ",
            biography: "Coder, Maker & breaker of things.\r\n",
            avatar:
              "https://sessionize.com/image/be82-400o400o2-1a-8b84-4c47-b0e6-1fcc5595ec6f.c213136b-8252-4310-a0ff-a2d30881049f.jpg",
            twitter: "http://twitter.com/kigen",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "http://sekiki.wordpress.com/",
            company_website: null,
          },
        ],
        rooms: [
          {
            title: "Room B",
            id: 2,
          },
        ],
      },
      {
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
      },
    ],
  },
};

export default {
  title: "DroidconKe/Screens/SessionsScreen",
  component: SessionsScreen,
  args: DEFAULT_PROPS,
};

const Template: ComponentStory<typeof SessionsScreen> = (args) => (
  <SessionsScreen {...args} />
);

export const SessionsScreenStory = Template.bind({});
