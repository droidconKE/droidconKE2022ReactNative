import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { fonts } from "../assets/fonts/fonts";
import SessionsVerticalList, {
  SessionsVerticalListProps,
} from "../components/cards/SessionsVerticalList";
import DateToggleList, {
  DateToggleListProps,
} from "../components/dateToggle/DateToggleList";
import SwitchWithIcons from "../components/iconSwitch/IconSwitch";
import MainHeader from "../components/layouts/MainHeader";
import { screen_names } from "../constants/ScreenNames";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedRedux";
import { setSchedule, setSelectedDay } from "../state/schedule";
import Session from "../types/Session";

export type SessionsScreenProps = {
  navigation?: NativeStackScreenProps<
    ParamListBase,
    screen_names.SESSIONS,
    undefined
  >["navigation"];
};

const SessionsScreen = (_: SessionsScreenProps) => {
  const { schedule } = useAppSelector((state) => state.schedule);
  const [dates, setDates] =
    useState<Pick<DateToggleListProps, "items"> | undefined>();
  const [mySessions, setMySessions] = useState<boolean>(false);
  const [sessions, setSessions] = useState<{ items: Session[] } | undefined>();
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  // const { selectedDay } = useAppSelector((state) => state.schedule.selectedDay);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSchedule(sampleScheduleData));
  }, []);

  useEffect(() => {
    extractDatesFromSchedule();
  }, [schedule, selectedDate]);

  useEffect(() => {
    if (selectedDate && schedule) {
      setSessions({ items: schedule.data[selectedDate] });
    }
  }, [selectedDate]);

  function extractDatesFromSchedule() {
    if (schedule) {
      const keys = Object.keys(schedule.data);
      const dates = keys.map((key, index) => {
        return {
          date: `${new Date(key).getDate()}th`,
          day: `Day ${index + 1}`,
          fullDate: key,
          selected: key === selectedDate,
        };
      });
      setDates({ items: dates });
      if (!selectedDate) {
        setSelectedDate(keys[0]);
      }
    }
  }

  function onValueChange(value: boolean) {
    setMySessions(value);
  }

  function onDayChange(day: string) {
    setSelectedDate(day);
  }

  return (
    <View>
      <SafeAreaView style={styles.paddingVertical}>
        <MainHeader />
        <ScrollView>
          <View style={{ paddingBottom: 20 }}>
            <View style={styles.belowHeader}>
              {dates && <DateToggleList {...dates} onChange={onDayChange} />}
              <View style={styles.switchHolder}>
                <SwitchWithIcons
                  value={mySessions}
                  onValueChange={onValueChange}
                  trackColor={{ true: "#FF6E4D", false: "#20201E" }}
                  thumbColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                  iconColors={{ true: "#20201E", false: "#FF6E4D" }}
                />
                <Text style={styles.belowSwitch}>My Sessions</Text>
              </View>
            </View>
            <Text style={styles.title}>All Sessions</Text>
            {sessions && <SessionsVerticalList {...sessions} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  paddingVertical: {
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontSize: 18,
    color: "rgba(0, 12, 235, 1)",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  belowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  belowSwitch: {
    fontFamily: fonts.MONTSERRAT_LIGHT,
    fontSize: 9,
    marginTop: 10,
  },
  switchHolder: { justifyContent: "center", alignContent: "center" },
});

export default SessionsScreen;

// we will remove this when we intergrate with the backend
const sampleScheduleData = {
  data: {
    "2022-11-10": [
      {
        id: 1,
        title: "Break",
        description: "Break",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 09:00:00",
        start_time: "09:00:00",
        end_date_time: "2022-11-10 09:45:00",
        end_time: "09:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
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
      {
        id: 28,
        title: "Community Day",
        description: "Community Day",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-10 12:45:00",
        end_time: "12:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 22,
        title: "React Native for Android",
        description:
          "W̶r̶i̶t̶e̶ O̶n̶c̶e̶, ̶R̶u̶n̶ ̶E̶v̶e̶r̶y̶w̶h̶e̶r̶e̶.\r\nLearn once, Write Everywhere",
        slug: "react-native-for-android-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#2F65CB",
        borderColor: "#2F65CB",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-10 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Kitavi Joseph",
            tagline: "Software Engineer, Andela",
            biography:
              "Dandiest Developer.\r\nSoftware Developer at Andela Kenya. Changing the world using Python and JavaScript.\r\nDabbling in Machine Learning along the way.",
            avatar:
              "https://sessionize.com/image/b51b-400o400o2-91-f4c1-4f58-9608-7efc2abfbe00.740ae8ed-bb9b-472d-8548-31ba62535784.jpg",
            twitter: "https://twitter.com/sirjmkitavi",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://sirjmkitavi.ml/gui/",
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
      {
        id: 25,
        title: "GraphQL on Android",
        description: "RESTful APIs vs GraphQL for data loading architecture ",
        slug: "graphql-on-android-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#9B9B9B",
        borderColor: "#9B9B9B",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-10 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Emmanuel Mutua",
            tagline: "manuh.__",
            biography:
              "Emmanuel Mutua is a student at the Jomo Kenyatta University of Agriculture and Technology, an Open Source Enthusiast and a big time Android Lover! ",
            avatar:
              "https://sessionize.com/image/1f5c-400o400o2-28-1f4c-43bf-9baa-ad7735ef2f1c.702e7eb2-2eb4-4a2c-92c8-bd52f9c78bfa.jpg",
            twitter: "https://twitter.com/manuh_254",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
            company_website: "http://www.lishabora.com/",
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
        id: 20,
        title: "Creating Machine Learning On Android",
        description: "Showing how to integrate machine learning witj android",
        slug: "creating-machine-learning-on-android-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#9B9B9B",
        borderColor: "#9B9B9B",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-10 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "Felicity Mecha",
            tagline: "Community lead: AI Saturdays",
            biography:
              "https://docs.google.com/document/d/1pK_Uc9e198XpWciHpIGTJGQPmrxWvFqcXhnycbEV4JQ/edit?usp=sharing",
            avatar:
              "https://sessionize.com/image/588b-400o400o2-31238721-9237-4151-b9a4-f8bdcabdcd82.jpg",
            twitter: "https://twitter.com/fliquestarr",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://medium.com/@felicitymecha",
            company_website: "https://nurture.ai/ai-saturdays",
          },
        ],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
        ],
      },
      {
        id: 4,
        title: "judys session",
        description:
          "The season will be about penetration testing and android aaplication",
        slug: "judys-session-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#D16935",
        borderColor: "#D16935",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-10 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "judy Ngure",
            tagline: "Lets break and rebuild what we don't like",
            biography:
              "I am the good kind of hacker. i hack to break and make it better.\r\nI am an application security specialist",
            avatar:
              "https://sessionize.com/image/b21a-400o400o2-ad-f447-4820-834c-cbbafc3dd892.08ee9bda-838d-4f11-8486-bba424a56c19.png",
            twitter: "https://twitter.com/Judy_infosec",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://twitter.com/Judy_infosec",
            company_website: "https://000read.wordpress.com/",
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
        id: 2,
        title: "Lunch",
        description: "Lunch",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 13:00:00",
        start_time: "13:00:00",
        end_date_time: "2022-11-10 13:45:00",
        end_time: "13:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 31,
        title: "Integrating Mpesa Payments on Android Apps",
        description:
          "I will use the session to demonstrate how one can leverage the Mpesa api while developing commercial/subscription apps .",
        slug: "integrating-mpesa-payments-on-android-apps-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#161A14",
        borderColor: "#161A14",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 14:00:00",
        start_time: "14:00:00",
        end_date_time: "2022-11-10 14:45:00",
        end_time: "14:45:00",
        speakers: [
          {
            name: "Kevin Mulugu",
            tagline: "Software developer at Homepesa Sacco",
            biography:
              "I am a full stack developer with more focus on Android Development, API Development and Mpesa integration. I am also a Kaspersky system engineer.",
            avatar:
              "https://sessionize.com/image/5840-400o400o2-48-fe49-4ac2-9aca-d097f500b186.af24353d-16f4-48a5-86dc-58117beffaa0.png",
            twitter: "https://twitter.com/kevvoh_",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://mlg.co.ke",
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
      {
        id: 3,
        title: "Coffee",
        description: "Coffee",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-10 15:00:00",
        start_time: "15:00:00",
        end_date_time: "2022-11-10 15:45:00",
        end_time: "15:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
    ],
    "2022-11-11": [
      {
        id: 9,
        title: "Break",
        description: "Break",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 09:00:00",
        start_time: "09:00:00",
        end_date_time: "2022-11-11 09:45:00",
        end_time: "09:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 29,
        title: "Community Day",
        description: "Community Day",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-11 12:45:00",
        end_time: "12:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 14,
        title: "Data Binding and Kotlin",
        description:
          "In this session, I will go through the fundamentals of Android Data Binding that helps developers bind UI components to data sources and more. This session will also be in Kotlin where I will briefly show some nice features about the language which can be adopted when using the Data Binding Library. The talk will show how Data Binding fits as a library in Android Jetpack architecture component. This session will also show developers how Data Binding plays nicely with other Android Architecture Components to design robust apps. It will also cover bits of how to keep your UI code separate from the business logic code.",
        slug: "data-binding-and-kotlin-1655727475",
        session_format: "Regular Session",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#68C3DB",
        borderColor: "#68C3DB",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-11 10:45:00",
        end_time: "10:45:00",
        speakers: [
          {
            name: "Eton Otieno",
            tagline: "Code Zilla",
            biography:
              "I am currently a student at Kenyatta University pursuing a degree in Telecommunication and Information Technology. I have a one year experience in Android app development and the journey has been great so far. from the many meetups I have attended, I have gained knowledge and I believe that the best way to give back to the community is to share what I have learnt. My interests lie in learning new tools and libraries that helps developers increase their productivity and make work easier and more fun.",
            avatar:
              "https://sessionize.com/image/7a4c-400o400o2-f8-2bc7-4db2-9b5e-09e1bcb7ba2a.03b3abeb-d6e0-482c-8262-863edf6122c9.jpg",
            twitter: "https://twitter.com/etonotieno",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "http://etonotieno.hashnode.dev",
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
      {
        id: 17,
        title:
          "To Inject or not inject - Dependency injection in a Kotlin world",
        description:
          "Dependency Injection via frameworks like Dagger were present in most modern Android projects.\r\nBut then Kotlin happened. And since then a bunch of new libraries like Koin or Kodein appeared. Developers are even writing articles how to do DI without any framework.\r\nSome argue that those don’t even offer real dependency injection. Let’s look at that argument and compare the approaches.\r\nSo, is there something wrong with Dagger & co. in Kotlin? Are they obsolete? What are the alternatives? Let’s dive in.",
        slug: "to-inject-or-not-inject-dependency-injection-in-a-kotlin-world-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#316718",
        borderColor: "#316718",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-11 10:45:00",
        end_time: "10:45:00",
        speakers: [
          {
            name: "Danny Preussler",
            tagline: "Head of Mobile, sporttotal.tv",
            biography:
              "Danny built mobile applications for companies like Viacom, Groupon, eBay and Alcatel. He is a Google Developer Expert for Android Kotlin. Before Android he was part of the Blackberry developer community, teaching unit testing for java mobile platforms\r\n",
            avatar:
              "https://sessionize.com/image/e5a4-400o400o2-b1-61e5-4a26-9ca3-c9f30e3eaa08.3e7b5602-cf0d-4f47-b510-f789a00b4cbf.png",
            twitter: "https://twitter.com/PreusslerBerlin",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://medium.com/@dpreussler",
            company_website: "http://www.sporttotal.tv/",
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
        id: 23,
        title: "Android Architecture",
        description:
          "This session will explain the various Android Architecture Patterns available, their difference, how to choose the best and which one works for us at Twiga Foods.",
        slug: "android-architecture-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Beginner",
        session_image:
          "http://droidcon-erp.herokuapp.com/upload/sessions/4IUDxED2zy. png",
        backgroundColor: "#7F9337",
        borderColor: "#7F9337",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-11 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Juma Allan",
            tagline: "Android Engineer at Twiga Foods",
            biography:
              "I am an Android Lover and Ninja! I love attending Android Meetups, engage other Android Developers and also love working and contributing to Open Source Projects.",
            avatar:
              "https://sessionize.com/image/f994-400o400o2-b3-8e33-4b25-8ed8-b80accb63f83.3529eb1f-7907-4c70-a394-d7f4242058dc.JPG",
            twitter: "https://twitter.com/_jumaallan",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://androidstudy.com/",
            company_website: "https://apolloagriculture.com",
          },
          {
            name: "Remy Mumoh",
            tagline: null,
            biography: null,
            avatar:
              "https://sessionize.com/image/fc6e-400o400o2-5217acef-f766-4a0c-9372-8e8e2a21443b.jpg",
            twitter: null,
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
      {
        id: 26,
        title: "Android Things",
        description:
          "Beginner codelab on Android Things to introduce developers to IoT through Android Things. The codelab will focus on getting started with Android Things. Developers will learn how to get set up with Android Things and create simple project on Android Things.\r\nDuring the codelab we will have a talk and Q & A session.\r\n",
        slug: "android-things-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#9B9B9B",
        borderColor: "#9B9B9B",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-11 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Harun Wangereka",
            tagline: "Android Developer @ Apps:Lab",
            biography: "Android Developer @ Apps:Lab",
            avatar:
              "https://sessionize.com/image/09c1-400o400o2-cf-9587-423b-bd2e-415e6757286c.b33d8d6e-1f94-4765-a797-255efc34390d.jpg",
            twitter: "https://twitter.com/wangerekaharun",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
            company_website: null,
          },
          {
            name: "Marvin Collins",
            tagline: "Apps:Lab KE",
            biography:
              "Computer scientist. Founder, Android and Web developer @AppsLab_KE. Passionate about impacting tech communities.",
            avatar:
              "https://sessionize.com/image/00eb-400o400o2-4e-6670-4c7d-a3e6-34016679ec69.36f5d972-015d-40c3-8e6e-83087fd6dd3f.jpg",
            twitter: "https://twitter.com/marvin_hosea",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
        id: 6,
        title: "Code Build Ship",
        description:
          "DevOps has been a buzzword since a 2008. But how does it apply to Android development?",
        slug: "code-build-ship-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Advanced",
        session_image: null,
        backgroundColor: "#316718",
        borderColor: "#316718",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-11 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "Michael Bukachi",
            tagline: "'Movement in the shadows'",
            biography:
              "4th year student pursuing Applied Computer Science at Daystar University.",
            avatar:
              "https://sessionize.com/image/1d52-400o400o2-85-112f-40a4-9839-9974f6b11a67.e1832d1f-9443-4995-bb09-1d5eb1913427.JPG",
            twitter: "https://twitter.com/michaelbukachi",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
            company_website: "https://marketforce360.com/",
          },
          {
            name: "Nathanael Mkaya",
            tagline: "Novice:Order of the Green Droid",
            biography:
              "Aspiring Software Engineer with a passion for Android, Kotlin, Rust, Golang. ",
            avatar:
              "https://sessionize.com/image/2773-400o400o2-c96eac54-f222-4bf6-b873-8f55fb18e7ca.jpg",
            twitter: "https://twitter.com/nathanmkaya",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://medium.com/@nathanmkaya",
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
        id: 21,
        title: "Async Operations with Kotlin Coroutines",
        description:
          "In Android application development, we live in an asynchronous world, operations such as API calls, DB queries and heavy background computation are prevalent in most applications.\r\nThe UI thread, which is responsible for UI updates and receiving user input events cannot be used to perform these operations.\r\n\r\nThe android framework has bundled with it different options for performing such long running operation in a background thread, some of which include AsyncTask, IntentService and plain old java Thread. Each of these above listed approaches come with their own drawbacks and as a result, third party approaches have also been tried. RxJava, which is the most popular of these libraries, while it does a good job in scheduling operations in the background, switching threads and composing operations, it comes with a major drawback which is its steep learning curve.\r\n\r\nThe advent of Kotlin and its increase popularity in Android application development, provides us with yet another option for running background operations with coroutines.  In this talk, we will be learning about what coroutines are, why coroutines and how to use them in android applications.\r\n",
        slug: "async-operations-with-kotlin-coroutines-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#7F9337",
        borderColor: "#7F9337",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-11 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "Mayowa Adegeye",
            tagline: "Member of Technical Staff at Careem Networks GmbH",
            biography:
              "Mayowa Adegeye is a Computer Science graduate, with 4 years experience developing Android applications. I have worked with companies in Nigeria and Bangkok. Currently, I work with acompany called Careem Networks GmbH in Berlin, which is a car hailing company headquartered in Dubai. ",
            avatar:
              "https://sessionize.com/image/554b-400o400o2-de-e676-42a7-93cd-729761d39d28.6d2d18cb-0180-4dc5-b986-32382e50dc99.jpg",
            twitter: "http://twitter.com/mayojava",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
      {
        id: 7,
        title: "Lunch",
        description: "Lunch",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 13:00:00",
        start_time: "13:00:00",
        end_date_time: "2022-11-11 13:45:00",
        end_time: "13:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 32,
        title: "Android UI Testing",
        description:
          "UI Testing is  crucial . It helps the developer build reliable user interfaces. I'll use Robolectric tool for local testing",
        slug: "android-ui-testing-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#D16935",
        borderColor: "#D16935",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 14:00:00",
        start_time: "14:00:00",
        end_date_time: "2022-11-11 14:45:00",
        end_time: "14:45:00",
        speakers: [
          {
            name: "Clare Mburu",
            tagline: "CTO,BabyPie",
            biography:
              "A passionate technology enthusiast, Android Web applications developer, community lover",
            avatar:
              "https://sessionize.com/image/df15-400o400o2-1f-e683-41e9-9310-ad43170d265c.2e3da599-e070-4753-a169-cd35f5577464.jpg",
            twitter: "https://twitter.com/Mburuclare?s=09",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
      {
        id: 34,
        title: "Transforming Ideas With Flutter",
        description:
          "With billions of apps on the Playstore, a new standard from users on how a good app should look like and feel like is taking shape. How can we transform traditional UI/UX requirements into amazing tangible experiences using flutter?",
        slug: "transforming-ideas-with-flutter-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#D16935",
        borderColor: "#D16935",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 14:00:00",
        start_time: "14:00:00",
        end_date_time: "2022-11-11 14:45:00",
        end_time: "14:45:00",
        speakers: [
          {
            name: "Dennis Riungu",
            tagline: "Google Developer Group Kenya, Country mentor",
            biography:
              "Dennis Riungu is a full stack software engineer consulting for eShare Ltd, UK, developing some of the world's most critical Entity Management software. Most of his time is spent on Angular, Node.js and .NET core.\r\n\r\nDennis also serves as the country mentor for Google Developer Groups in Kenya, helping developers get their hands on the best tools from Google to use in the development like Firebase, Flutter, GCP, etc.\r\n\r\nDennis loves to shine at Go Karting ☺️",
            avatar:
              "https://sessionize.com/image/b56c-400o400o2-c4e7a808-6e3f-4cdf-a06e-a6ac70a0a9c8.jpg",
            twitter: "https://twitter.com/denpalrius",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
            company_website: null,
          },
          {
            name: "Roina Ochieng",
            tagline: "Developer Relations Associate at Africa's Talking",
            biography:
              "Roina Ochieng is a 23 year old woman in tech based in Nairobi, Kenya. Having studied Computer Science and Informatics in Strathmore University, she’s a programmer with experience with developer communities. She’s the lead of the Nairobi chapter of the Google Developer Group. With exposure to the local start-up dynamics in Kenya and Eastern Africa. Her stack is a cocktail of everything Android and Angular JS, Ruby, Python, ASP .NET. Having worked with startups for years now, she is passionate about the power of collaboration to change communities. She is currently working with the leading Pan-African developer company, Africa’s Talking as a developer success advocate  where she oversees how the company supports African developer ecosystem through innovative connective technology.\r\n",
            avatar:
              "https://sessionize.com/image/86d1-400o400o2-b5-f726-4b2f-bea5-3df868d2e105.a72446bd-b13f-4d1f-9795-56ebc4bcd027.jpg",
            twitter: "https://twitter.com/roinochieng",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://roinaochieng.wordpress.com/",
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
        id: 11,
        title: "Coffee",
        description: "Coffee",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-11 15:00:00",
        start_time: "15:00:00",
        end_date_time: "2022-11-11 15:45:00",
        end_time: "15:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
    ],
    "2022-11-12": [
      {
        id: 10,
        title: "Break",
        description: "Break",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 09:00:00",
        start_time: "09:00:00",
        end_date_time: "2022-11-12 09:45:00",
        end_time: "09:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 30,
        title: "Community Day",
        description: "Community Day",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-12 12:45:00",
        end_time: "12:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 15,
        title: "Constraint Layout 2.0",
        description:
          "This session will cover the new features in ConstraintLayout 2.0, as well as the latest functionality added in Android Studio design tools, highlighting how to effectively take advantage of them for designing, prototyping, and building a graphical user interface application.",
        slug: "constraint-layout-20-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#D16935",
        borderColor: "#D16935",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-12 10:45:00",
        end_time: "10:45:00",
        speakers: [
          {
            name: "Thomas Kioko",
            tagline: "Introverted Coder turned stand-up chameleon",
            biography:
              "I tend to think of myself as a simple guy who loves what he does. I’ve specialized in Mobile Application Development, and I mostly focus on simplicity, ergonomics, responsive design. UX and problem solving are central to everything I do.",
            avatar:
              "https://sessionize.com/image/14aa-400o400o2-9a-d3a1-4614-b3cb-5ce9a835b3dc.4f5f6633-3705-4227-b974-0a8cbc45216a.JPG",
            twitter: "https://twitter.com/code_wizard",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "http://thomaskioko.com/",
            company_website: "https://www.thomaskioko.com/",
          },
        ],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
        ],
      },
      {
        id: 18,
        title: "Continuous Integration on Android",
        description:
          "This talk will cover a foundational skill important to every Android developer and project, continuous integration. Building software at every change is an important principle in the delivery of high quality software. Great CI does more than just testing if software builds. Automatically running tests, checking for lint issues and code style conformance are additional pipeline steps that insure the quality of your work product. And why stop there? Distribute your app to a small group of testers and to the masses through the Play store, automatically, on every code change. How? Come to this session to learn the tools and tricks that allow continuous integration to guarantee quality in your Android work, no matter how small or large your audience might be.",
        slug: "continuous-integration-on-android-1655727475",
        session_format: "Regular Session",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#D16935",
        borderColor: "#D16935",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 10:00:00",
        start_time: "10:00:00",
        end_date_time: "2022-11-12 10:45:00",
        end_time: "10:45:00",
        speakers: [
          {
            name: "Stephen Ebichondo",
            tagline: "I see dead code",
            biography:
              "Over 10 years of software development experience including high transactional enterprise banking applications, with team leadership and mentoring experience. Expert in full System Development Life Cycle (SDLC). Has the ability to understand and transform complex business requirements into software, ensuring applications are delivered on time, to specification, are scalable, performance optimised and maintainable. A highly motivated individual who is always learning, able to work to tight deadlines, and who can communicate effectively with technical peers as well as business users. Someone who encourages learning and the sharing of ideas and is always open to new ways of working.",
            avatar:
              "https://sessionize.com/image/d8d4-400o400o2-2207c70b-605d-4144-91ec-705452a97945.jpg",
            twitter: "https://twitter.com/sebichondo",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
        id: 24,
        title: "Jetpack: An Overview",
        description:
          "During Google IO 2018, the Android team announced Jetpack, a set of libraries, tools and architectural guidance to help make it quick and easy to build great Android apps. Jetpack includes the previously existing Architecture Components and adds many libraries and tools that make development easier across a wide range of areas. In this session, we'll go through the available libraries and APIs and discuss how they can make development easier, faster and more intuitive.",
        slug: "jetpack-an-overview-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#9B9B9B",
        borderColor: "#9B9B9B",
        is_serviceSession: false,
        is_keynote: true,
        is_bookmarked: false,
        start_date_time: "2022-11-12 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-12 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Eston Karumbi",
            tagline: "Android Developer",
            biography: "Developer, learner, wanderer, DIY auto mechanic.",
            avatar:
              "https://sessionize.com/image/f0a2-400o400o2-a3-ce70-41a6-b987-2afe691f0864.0311c9f2-10e0-41af-82f4-c660e307c405.jpg",
            twitter: "https://twitter.com/doc2dev",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
      {
        id: 27,
        title: "Retrofiti: A Pragmatic Approach to using Retrofit in Android",
        description:
          "This session is codelab covering some of the best practices and recommended approaches to building an application using the retrofit library.",
        slug: "retrofiti-a-pragmatic-approach-to-using-retrofit-in-android-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#9B9B9B",
        borderColor: "#9B9B9B",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 11:00:00",
        start_time: "11:00:00",
        end_date_time: "2022-11-12 11:45:00",
        end_time: "11:45:00",
        speakers: [
          {
            name: "Roger Taracha",
            tagline: "TheDancerCodes",
            biography:
              "Roger Taracha is a Software Engineer by profession who also loves the Arts. \r\n\r\nWhen he isn't writing code or mentoring software developers, you can find him throwing down on the dance floor.\r\nHence his alias, TheDancerCodes.\r\n\r\nHe is currently a Learning Facilitator and Lead Android Engineer at Andela Kenya where he drives teams of software developers (junior and senior) to rapidly develop great software products. \r\n\r\nHe also supports the learning and professional development of dozens of Africa's most talented software developers every day.",
            avatar:
              "https://sessionize.com/image/b365-400o400o2-aa-600e-4800-bfee-afe74104c8e8.6708c35c-8578-40f1-aa56-d8991598d826.jpg",
            twitter: "https://twitter.com/TheDancerCodes",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://medium.com/@thedancercodes",
            company_website: "https://andela.com/",
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
        id: 5,
        title: "No Internet? No Problem!",
        description:
          "At Off Grid Electric our mission is to power homes across rural Africa with affordable, solar energy. In order to do that we need to provide our employees with tools that work both on and offline. So how did we do it? In this talk, learn about the techniques we employed to provide a unique online-offline experience in our Android applications. We’ll discuss the overall architecture, third party libraries used, and some of the challenges that we faced. As more and more users come online in various parts of the world it makes sense for companies to begin exploring how they can modify their applications to be more network-friendly. This talk will get you headed in the right direction!",
        slug: "no-internet-no-problem-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#68C3DB",
        borderColor: "#68C3DB",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-12 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "Moyinoluwa Adeyemi",
            tagline: "Android Developer at Offgrid Electric",
            biography:
              "Moyinoluwa is an Android Developer who enjoys exploring the latest technologies in Android Development. She loves sharing her knowledge by writing on Medium. She also cares a lot about building apps that look good and work well on all devices.",
            avatar:
              "https://sessionize.com/image/231b-400o400o2-6b-241d-4d1b-a67d-b5c89ef258e1.557c848a-271b-45dd-8020-e77fbc7dbcb1.jpg",
            twitter: "https://twitter.com/moyheen",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://moyinoluwa.dev/",
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
        id: 19,
        title: "Android Jetpack",
        description: "Deep dive into android Jetpack",
        slug: "android-jetpack-1655727475",
        session_format: "Codelab / Workshop",
        session_level: "Beginner",
        session_image: null,
        backgroundColor: "#68C3DB",
        borderColor: "#68C3DB",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 12:00:00",
        start_time: "12:00:00",
        end_date_time: "2022-11-12 12:45:00",
        end_time: "12:45:00",
        speakers: [
          {
            name: "Valentine Rutto",
            tagline: "Android developer ,Sendy",
            biography: "Android developer | fashion model |paperback Reader. ",
            avatar:
              "https://sessionize.com/image/5d71-400o400o2-ef-1877-483c-91da-970cd6c8faf1.d7115fc4-84cd-4f92-8851-25991c8ac86b.jpg",
            twitter: "http://twitter.com/valentinerutto",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: null,
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
      {
        id: 8,
        title: "Lunch",
        description: "Lunch",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 13:00:00",
        start_time: "13:00:00",
        end_date_time: "2022-11-12 13:45:00",
        end_time: "13:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
      {
        id: 33,
        title: "Android City:On the walls of Kotlin Street",
        description:
          "Using Kotlin for Android development has grown in popularity over the last year. Even to those who are not currently using it, the value proposition of the language immediately resonates. There already are a lot of introductory talks to the language and its extensions for use on Android. This talk will cover advancing the usage and design patterns of the language for Android development to solve larger problems. While the content is targeted at mobile development, there will be value for all Java developers interested in Kotlin.\r\nPrior knowledge or use of Kotlin is not required to attend this talk. Some concepts of the language will be used without introduction but they are intuitive and/or quickly learned. Even if you don’t fully understand every language concept on which each example is built, the resulting functionality will be clear.\r\n\r\nSections\r\n- Signs on Kotlin Street(What is Kotlin all about?)\r\n- Why we need Kotlin\r\n- Examples(using code snippets)\r\n- Demo of apps running on kotlin\r\n-The future of Kotlin(in mobile, web and machine learning)\r\n-Short Quiz\r\n-Q/A\r\n",
        slug: "android-cityon-the-walls-of-kotlin-street-1655727475",
        session_format: "Regular Session",
        session_level: "Intermediate",
        session_image: null,
        backgroundColor: "#BE5E9B",
        borderColor: "#BE5E9B",
        is_serviceSession: false,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 14:00:00",
        start_time: "14:00:00",
        end_date_time: "2022-11-12 14:45:00",
        end_time: "14:45:00",
        speakers: [
          {
            name: "Temidayo Adefioye",
            tagline: "geekofthrones",
            biography:
              "Temidayo is a software engineer and an open source advocate with a keen interest in mobile app development, web applications and data science. He is currently a Local Community Ambassador at Andela Learning Community with Google.\r\n\r\nHe maintains diylaw.ng and babymigo and contributes to many more open source projects. In 2014 he had the opportunity to represent his country and Africa as a whole at Microsoft Headquarters for a software contest. In 2015, He was invited by Microsoft to be a Judge at break into code challenge for students across the world.\r\n\r\nTemidayo currently enjoys working full-time for DIYLaw Technologies, the makers of diylaw.ng. He started writing software for fun and friends in 2011 after his mum bought him his first computer, an Hp 620 laptop, and he's been delivering commerical software since 2015.",
            avatar:
              "https://sessionize.com/image/0497-400o400o2-8c-c53c-4553-9e9f-7d22ff55e350.1aa5442f-c7ac-45a2-8a85-d810958f700b.jpg",
            twitter: "http://twitter.com/temidjoy",
            facebook: null,
            linkedin: null,
            instagram: null,
            blog: "https://medium.com/@temidjoy",
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
      {
        id: 12,
        title: "Coffee",
        description: "Coffee",
        slug: "",
        session_format: "",
        session_level: "",
        session_image: null,
        backgroundColor: "#89609E",
        borderColor: "#89609E",
        is_serviceSession: true,
        is_keynote: false,
        is_bookmarked: false,
        start_date_time: "2022-11-12 15:00:00",
        start_time: "15:00:00",
        end_date_time: "2022-11-12 15:45:00",
        end_time: "15:45:00",
        speakers: [],
        rooms: [
          {
            title: "Room A",
            id: 1,
          },
          {
            title: "Room B",
            id: 2,
          },
          {
            title: "Room C",
            id: 3,
          },
        ],
      },
    ],
  },
};
