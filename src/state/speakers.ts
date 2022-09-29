//Holds the speaker object and defines a method for getting a single speaker which accepts the speakerid as a parameter

import Speakers from "../types/Speaker";

export const Speaker = [
    {
        speakerid: 1,
        speakername: "Frank Tamre",
        speakerimg: require("../assets/img/johndoe.png"),
        speakeroccupation: "Kenya Partner Lead at doridcon Berlin",
        speakerskill: ["Android", "Kotlin", "Flutter", "C++"],
        speakerbio: "Worked at Intel, co-Founded Moringa School, then started @earlycamp to train young children from 5-16 on how to solve problems with technology.Started @interactive to tell African stories with Games to a global audience.Community wise I organize Android & Kotlin developers every month for a meetUp to chat about technology.I Lead a cool team in organizing droidConKE the largest android developer focussed event in Sub Saharan Africa.I train people,mentor them, build things, am highly experimental, read alot and socialize vertically.",
        speakerhandle: "PriestTamzi"
    },
    {
        speakerid: 2,
        speakername: "Mathew Momanyi",
        speakerimg: require("../assets/img/johndoe.png"),
        speakeroccupation: "Kenya Partner Lead at doridcon Berlin",
        speakerskill: ["Android", "Kotlin", "Flutter", "C++"],
        speakerbio: "Worked at Intel, co-Founded Moringa School, then started @earlycamp to train young children from 5-16 on how to solve problems with technology.Started @interactive to tell African stories with Games to a global audience.Community wise I organize Android & Kotlin developers every month for a meetUp to chat about technology.I Lead a cool team in organizing droidConKE the largest android developer focussed event in Sub Saharan Africa.I train people,mentor them, build things, am highly experimental, read alot and socialize vertically.",
        speakerhandle: "MomanyiMathew"
    },
    {
        speakerid: 3,
        speakername: "John Doe",
        speakerimg: require("../assets/img/johndoe.png"),
        speakeroccupation: "Kenya Partner Lead at doridcon Berlin",
        speakerskill: ["Android", "Kotlin", "Flutter", "C++"],
        speakerbio: "Workesdfdd at Intel, co-Founded Moringa School, then started @earlycamp to train young children from 5-16 on how to solve problems with technology.Started @interactive to tell African stories with Games to a global audience.Community wise I organize Android & Kotlin developers every month for a meetUp to chat about technology.I Lead a cool team in organizing droidConKE the largest android developer focussed event in Sub Saharan Africa.I train people,mentor them, build things, am highly experimental, read alot and socialize vertically.",
        speakerhandle: "PriestTamzi"
    }
];

export const getSpeaker = (d: Speakers["speakerid"]) => {
    let s = Speaker.filter(x => x.speakerid == d);
    return s;
}