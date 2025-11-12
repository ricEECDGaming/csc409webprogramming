// content file

console.log("test");

const data = {

    // stuff in the header
    header: [
        {
            id: "navigation_menu",
            navname: [
                "Link to Official Rivals Website",
                "Link to Official Rivals Workshop Page",
                "Home",
                "What is RoA Steam Workshop?",
                "Community",
                "Socials"
            ],
            href: [
                "https://rivalsofaether.com/",
                "https://rivalsofaether.com/workshop/",
                "",
                "#bodytopic1",
                "#bodytopic3",
                "#bodysocials"
            ]
        }
    ],

    // main body sections
    sections: [
        // body topic 1
        {
            id: "bodytopic1",
            title: "An Additional Community-Driven Feature in critically acclaimed indie game Rivals of Aether",
            maintext: "A fan-favorite feature of the critically acclaimed indie platform fighting game Rivals of Aether is the integration of the Steam Workshop, allowing for community members to create their own custom characters, stages, character skins and buddies for anyone to use! Announced a few years after the game's launch, this side addition has proven to be one of the most well-known and discussed parts of the original Rivals of Aether and has garnered a very active following and dedicated community.",
            href: ["https://rivalsofaether.com/workshop/"],
            imgsource: ["images/SteamWorkshopAvailableAnnouncement.png"],
            imgdesc: ["A promotional image for advertising the Steam Workshop capabilities of Rivals of Aether when it initially launched in 2019."],
            imgalttext: ["image of rivals workshop announcement in 2019"]
        }
        ,
        // body topic 2
        {
            id: "bodytopic2",
            title: "Custom Creativity Abound",
            maintext: "Compared to other games which have similar custom content related things, the barrier to entry is very low and easily accessible with various pixel art tools and a relatively simple-to-understand programming language, allowing for anyone of almost any skill level to be able to create and share something. Over 4000 characters (at the time of writing this) have been made available as addons, in addition to a ton of other custom stages and game modes entirely!",
            href: ["https://steamcommunity.com/app/383980/workshop/"],
            imgsource: ["images/roa_ws_steam_front_page.png"],
            imgdesc: ["A screenshot of the front page for the Steam Workshop, which displays the most popular mods uploaded of the current week."],
            imgalttext: ["steam ws front page"]
        }
        ,
        // body topic 3
        {
            id: "bodytopic3",
            title: "An Ongoing Community Effort",
            maintext: "The Rivals of Aether Steam Workshop community has made a conscious effort to keep the scene alive through the efforts of various community events and presentations, in-person and online tournament series, and a gigantic community hub which has cultivated a strong ongoing community for the past few years and with more to come. Some very notable examples include:",
            
            // bodytopic 3 has multiple images so for this it'll be an array
            href: [
                "https://www.youtube.com/watch?v=g6AyHFgym9A",
                "https://www.youtube.com/watch?v=L90N-Gtjma0",
                "https://discord.gg/rp6Ce66mGc"
            ],
            imgsource: [
                "images/roa_ws_riptide_bracket.png",
                "images/vortex2024graphic.png",
                "images/roa_ws_discord_banner.png"
            ],
            imgdesc: [
                "A screenshot of the tournament 'Riptide', which took place in September 2024 in Sandusky Ohio, displaying the grand finals match of the Rivals Workshop side bracket - this tournament featured a large amount of community made characters.",
                "A roster graphic for the 'Vortex Gallery 2024' Rivals of Aether Workshop online tournament in November 2024. As of the time of writing this, this was the biggest workshop bracket in terms of unique entrants to date. ",
                "A screenshot of the 'Rivals of Aether Extended Workshop' Discord server, which serves as the primary community hub for the online Rivals of Aether Workshop scene. It was founded in October 2019 and as of the time of writing this, has over 7000 members."
            ],
            imgalttext: [
                "RoAWS Riptide 2024 Bracket Set",
                "RoAWS Vortex Gallery 2024 Roster Graphic",
                "RoAWS Extended Workshop Discord Server"
            ]

        }
        ,
        // body topic 4
        {
            id: "bodytopic4",
            title: "Content Focus",
            maintext: "Some examples of recent video works about the Rivals of Aether Steam Workshop:",
            
            
            vidlink: [
                "https://www.youtube.com/embed/khWwt3YEyaA",
                "https://www.youtube.com/embed/r6-omgmUkEM",
                "https://www.youtube.com/embed/bFtQ39J4y0o",
                "https://www.youtube.com/embed/vfHW3oPYYV4"
            ],
            vidtitle: [
                "Rivals of Aether Workshop Releases - August 2025",
                "Rivals Workshop at Vortex Gallery 2025",
                "Soma Cruz Trailer - Rivals of Aether Workshop",
                "RoA (from mario) Jam RESULTS!"
            ],
            vidcaption: [
                "Video showcasing all the recent notable releases in August 2025 on the Rivals of Aether Steam Workshop.",
                "Video showcasing the character roster for the Rivals of Aether Workshop 'Vortex Gallery 2025 Online' tournament hosted in September 2025.",
                "Character trailer video for 'Soma Cruz' from Castlevania: Aria of Sorrow. Created as a collaboration between ricE_ECD and VVizard.",
                "Video detailing the results of the 'from mario' Jam (event where developers create a character in under a month) results from April 2025."
            ]
        }
        ,
        // social image stuff
        {
            id: "bodysocials",
            title: "Social Links",
            maintext: "Compared to other games which have similar custom content related things, the barrier to entry is very low and easily accessible with various pixel art tools and a relatively simple-to-understand programming language, allowing for anyone of almost any skill level to be able to create and share something. Over 4000 characters (at the time of writing this) have been made available as addons, in addition to a ton of other custom stages and game modes entirely!",
            href: [
                "https://www.youtube.com/@ROAWC",
                "https://x.com/extendedroa?s=21",
                "https://bsky.app/profile/extendedworkshop.bsky.social",
                "https://discord.gg/rp6Ce66mGc"
            ],
            imgsource: [
                "images/icon_youtube.png",
                "images/icon_twitter.png",
                "images/icon_bluesky.png",
                "images/icon_discord.png"
            ],
            imgalttext: [
                "youtube",
                "twitter dot com",
                "bluesky",
                "discord"
            ]
        }
    ],

    // footer
    footer: [
        // this is the footer
        {
            footertext: ["Note: This website is unofficial and is not officially affiliated with Aether Studios (developers of the original game) or Dan Fornace (lead developer of the original game). Certain characters or properties shown are not comercially available or belong to other IP holders. This website serves as an advertisement for the community and the things it has done. No copyright infringement intended. All rights reserved."]
        }
    ]
}

console.log("test 2");


// we need go get figure template

// ================ BODY TOPIC 1 ================

const template_single_section = document.getElementById("topic-single-section-template");
const cloned_template_single_section = template_single_section.content.cloneNode(true); // idk what this does
const section_single_section = cloned_template_single_section.querySelector("section");

section_single_section.setAttribute("id", data.sections[0].id);   // set attribute

// header
const header_bt1 = section_single_section.querySelector("h2");
header_bt1.textContent = data.sections[0].title;
header_bt1.setAttribute("class", "topic1Title");

// paragraph
const paragraph_bt1 = section_single_section.querySelector(".paragraph");
paragraph_bt1.textContent = data.sections[0].maintext;
paragraph_bt1.setAttribute("class", "topic1MainText");

// image
const image_bt1 = section_single_section.querySelector(".image");
image_bt1.setAttribute("src", data.sections[0].imgsource);
image_bt1.setAttribute("class", "workshopAnnouncementImg");
image_bt1.setAttribute("alt", data.sections[0].imgalttext);

// hyperlink
const hyperlink_bt1 = section_single_section.querySelector(".hyperlink");
hyperlink_bt1.setAttribute("href", data.sections[0].href);

// figcaption
const caption_bt1 = section_single_section.querySelector(".figurecaption");
caption_bt1.textContent = data.sections[0].imgdesc;
caption_bt1.setAttribute("class", "topic1ImgCaption");

// finally, add this to the main section
document.getElementById("main").appendChild(cloned_template_single_section);

// ==================================================

// ================ BODY TOPIC 2 ================

const template_single_section_2 = document.getElementById("topic-single-section-template");
const cloned_template_single_section_2 = template_single_section_2.content.cloneNode(true); // idk what this does
const section_single_section_2 = cloned_template_single_section_2.querySelector("section");

section_single_section_2.setAttribute("id", data.sections[1].id);   // set attribute

// header
const header_bt2 = section_single_section_2.querySelector("h2");
header_bt2.textContent = data.sections[1].title;
header_bt2.setAttribute("class", "topic2Title");

// paragraph
const paragraph_bt2 = section_single_section_2.querySelector(".paragraph");
paragraph_bt2.textContent = data.sections[1].maintext;
paragraph_bt2.setAttribute("class", "topic2MainText");

// image
const image_bt2 = section_single_section_2.querySelector(".image");
image_bt2.setAttribute("src", data.sections[1].imgsource);
image_bt2.setAttribute("class", "steamFrontPageImg");
image_bt2.setAttribute("alt", data.sections[1].imgalttext);

// hyperlink
const hyperlink_bt2 = section_single_section_2.querySelector(".hyperlink");
hyperlink_bt2.setAttribute("href", data.sections[1].href);

// figcaption
const caption_bt2 = section_single_section_2.querySelector(".figurecaption");
caption_bt2.textContent = data.sections[1].imgdesc;
caption_bt2.setAttribute("class", "topic2ImgCaption");

// finally, add this to the main section
document.getElementById("main").appendChild(cloned_template_single_section_2);

// ==================================================

// ================ BODY TOPIC 3 ================

const template_single_section_3 = document.getElementById("topic-multi-section-template");
const cloned_template_single_section_3 = template_single_section_3.content.cloneNode(true); // idk what this does
const section_single_section_3 = cloned_template_single_section_3.querySelector("section");

section_single_section_3.setAttribute("id", data.sections[2].id);   // set attribute

// header
const header_bt3 = section_single_section_3.querySelector("h2");
header_bt3.textContent = data.sections[2].title;
header_bt3.setAttribute("class", "topic3Title");

// main paragraph
const paragraph_bt3 = section_single_section_3.querySelector(".paragraph");
paragraph_bt3.textContent = data.sections[2].maintext;
paragraph_bt3.setAttribute("class", "topic3MainText");

// all the images
const image_bt3_1 = section_single_section_3.querySelector(".image_1");
image_bt3_1.setAttribute("src", data.sections[2].imgsource[0]);
image_bt3_1.setAttribute("class", "workshopBracketImg");
image_bt3_1.setAttribute("alt", data.sections[2].imgalttext[0]);

const image_bt3_2 = section_single_section_3.querySelector(".image_2");
image_bt3_2.setAttribute("src", data.sections[2].imgsource[1]);
image_bt3_2.setAttribute("class", "workshopVortexGalleryImg");
image_bt3_2.setAttribute("alt", data.sections[2].imgalttext[1]);

const image_bt3_3 = section_single_section_3.querySelector(".image_3");
image_bt3_3.setAttribute("src", data.sections[2].imgsource[2]);
image_bt3_3.setAttribute("class", "workshopDiscordImg");
image_bt3_3.setAttribute("alt", data.sections[2].imgalttext[2]);

// all the hyperlinks
const hyperlink_bt3_1 = section_single_section_3.querySelector(".hyperlink_1");
hyperlink_bt3_1.setAttribute("href", data.sections[2].href[0]);

const hyperlink_bt3_2 = section_single_section_3.querySelector(".hyperlink_2");
hyperlink_bt3_2.setAttribute("href", data.sections[2].href[1]);

const hyperlink_bt3_3 = section_single_section_3.querySelector(".hyperlink_3");
hyperlink_bt3_3.setAttribute("href", data.sections[2].href[2]);

// all the figcaptions
const caption_bt3_1 = section_single_section_3.querySelector(".figurecaption_1");
caption_bt3_1.textContent = data.sections[2].imgdesc[0];
caption_bt3_1.setAttribute("class", "topic3ImgCaption1");

const caption_bt3_2 = section_single_section_3.querySelector(".figurecaption_2");
caption_bt3_2.textContent = data.sections[2].imgdesc[1];
caption_bt3_2.setAttribute("class", "topic3ImgCaption2");

const caption_bt3_3 = section_single_section_3.querySelector(".figurecaption_3");
caption_bt3_3.textContent = data.sections[2].imgdesc[2];
caption_bt3_3.setAttribute("class", "topic3ImgCaption3");

// finally, add this to the main section
document.getElementById("main").appendChild(cloned_template_single_section_3);

// ==================================================

// ================ BODY TOPIC 4 ================

const template_single_section_4 = document.getElementById("topic-video-template");
const cloned_template_single_section_4 = template_single_section_4.content.cloneNode(true); // idk what this does
const section_single_section_4 = cloned_template_single_section_4.querySelector("section");

section_single_section_4.setAttribute("id", data.sections[3].id);   // set attribute

// header
const header_bt4 = section_single_section_4.querySelector("h2");
header_bt4.textContent = data.sections[3].title;
header_bt4.setAttribute("class", "topic4Title");

// paragraph
const paragraph_bt4 = section_single_section_4.querySelector(".paragraph");
paragraph_bt4.textContent = data.sections[3].maintext;
paragraph_bt4.setAttribute("class", "topic4MainText");

// so formatting doesnt broken
const figure_1 = section_single_section_4.querySelector(".figure_1");
figure_1.setAttribute("class", "topic4VideoFigure1");
const figure_2 = section_single_section_4.querySelector(".figure_2");
figure_2.setAttribute("class", "topic4VideoFigure2");
const figure_3 = section_single_section_4.querySelector(".figure_3");
figure_3.setAttribute("class", "topic4VideoFigure3");
const figure_4 = section_single_section_4.querySelector(".figure_4");
figure_4.setAttribute("class", "topic4VideoFigure4");

// all the video links
const video_bt4_1 = section_single_section_4.querySelector(".video_1");
video_bt4_1.setAttribute("id", "video");
video_bt4_1.setAttribute("src", data.sections[3].vidlink[0]);
video_bt4_1.setAttribute("title", data.sections[3].vidtitle[0]);

const video_bt4_2 = section_single_section_4.querySelector(".video_2");
video_bt4_2.setAttribute("id", "video");
video_bt4_2.setAttribute("src", data.sections[3].vidlink[1]);
video_bt4_2.setAttribute("title", data.sections[3].vidtitle[1]);

const video_bt4_3 = section_single_section_4.querySelector(".video_3");
video_bt4_3.setAttribute("id", "video");
video_bt4_3.setAttribute("src", data.sections[3].vidlink[2]);
video_bt4_3.setAttribute("title", data.sections[3].vidtitle[2]);

const video_bt4_4 = section_single_section_4.querySelector(".video_4");
video_bt4_4.setAttribute("id", "video");
video_bt4_4.setAttribute("src", data.sections[3].vidlink[3]);
video_bt4_4.setAttribute("title", data.sections[3].vidtitle[3]);

// all the video captions
const caption_bt4_1 = section_single_section_4.querySelector(".vidcaption_1");
caption_bt4_1.textContent = data.sections[3].vidcaption[0];
caption_bt4_1.setAttribute("class", "topic4Vid1Caption");

const caption_bt4_2 = section_single_section_4.querySelector(".vidcaption_2");
caption_bt4_2.textContent = data.sections[3].vidcaption[1];
caption_bt4_2.setAttribute("class", "topic4Vid2Caption");

const caption_bt4_3 = section_single_section_4.querySelector(".vidcaption_3");
caption_bt4_3.textContent = data.sections[3].vidcaption[2];
caption_bt4_3.setAttribute("class", "topic4Vid3Caption");

const caption_bt4_4 = section_single_section_4.querySelector(".vidcaption_4");
caption_bt4_4.textContent = data.sections[3].vidcaption[3];
caption_bt4_4.setAttribute("class", "topic4Vid4Caption");

// finally, add this to the main section
document.getElementById("main").appendChild(cloned_template_single_section_4);

// ==================================================

// ================ SOCIALS  ================

const template_single_section_5 = document.getElementById("topic-socials-template");
const cloned_template_single_section_5 = template_single_section_5.content.cloneNode(true); // idk what this does
const section_single_section_5 = cloned_template_single_section_5.querySelector("section");

section_single_section_5.setAttribute("id", data.sections[4].id);   // set attribute

// header
const header_bt5 = section_single_section_5.querySelector("h2");
header_bt5.textContent = data.sections[4].title;
header_bt5.setAttribute("class", "socialsTitle");

// socials
const image_bt5_1 = section_single_section_5.querySelector(".image_1");
image_bt5_1.setAttribute("src", data.sections[4].imgsource[0]);
image_bt5_1.setAttribute("class", "socialimagelink.socialimagelink");
image_bt5_1.setAttribute("alt", data.sections[4].imgalttext[0]);

const image_bt5_2 = section_single_section_5.querySelector(".image_2");
image_bt5_2.setAttribute("src", data.sections[4].imgsource[1]);
image_bt5_2.setAttribute("class", "socialimagelink.socialimagelink");
image_bt5_2.setAttribute("alt", data.sections[4].imgalttext[1]);

const image_bt5_3 = section_single_section_5.querySelector(".image_3");
image_bt5_3.setAttribute("src", data.sections[4].imgsource[2]);
image_bt5_3.setAttribute("class", "socialimagelink.socialimagelink");
image_bt5_3.setAttribute("alt", data.sections[4].imgalttext[2]);

const image_bt5_4 = section_single_section_5.querySelector(".image_4");
image_bt5_4.setAttribute("src", data.sections[4].imgsource[3]);
image_bt5_4.setAttribute("class", "socialimagelink.socialimagelink");
image_bt5_4.setAttribute("alt", data.sections[4].imgalttext[3]);

// hyperlinks
const hyperlink_bt5_1 = section_single_section_5.querySelector(".hyperlink_1");
hyperlink_bt5_1.setAttribute("href", data.sections[4].href[0]);

const hyperlink_bt5_2 = section_single_section_5.querySelector(".hyperlink_1");
hyperlink_bt5_2.setAttribute("href", data.sections[4].href[1]);

const hyperlink_bt5_3 = section_single_section_5.querySelector(".hyperlink_1");
hyperlink_bt5_3.setAttribute("href", data.sections[4].href[2]);

const hyperlink_bt5_4 = section_single_section_5.querySelector(".hyperlink_1");
hyperlink_bt5_4.setAttribute("href", data.sections[4].href[3]);

// finally, add this to the main section
document.getElementById("main").appendChild(cloned_template_single_section_5);

// ==================================================