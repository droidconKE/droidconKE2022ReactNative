import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakersScreen from "./SpeakersScreen";

export default {
  title: "DroidconKe/Screens/SpeakersScreen",
  component: SpeakersScreen,
} as ComponentMeta<typeof SpeakersScreen>;

const placeholder = require("../assets/img/DummySpeakerProfilePicture.jpeg")

  const DATA = [
    {
      id: '1',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '2',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '3',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '4',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '5',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '6',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '7',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '8',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '9',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '10',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
  ];

const Template: ComponentStory<typeof SpeakersScreen> = () => <SpeakersScreen SpeakersData={DATA} />;

export const SpeakersScreenStory = Template.bind({});