/*
    **** About Section ****
*/
const Name = "Lohitaksha Malhotra"
const Bio = "I am a second year Mechanical Engineering student at BIT Mesra. I am interested in tech, anime/manga, custom keyboards and linux (i use arch btw 😁)."
/*
    **** Projects ****
  the photos are in public folder as project1.png ... project3.png
  about and github are reqd. link is optional (Put NULL all caps as a string to exclude link)
*/
const Project1 ={
  about: "My previous personal website built using react",
  github: "https://github.com/Lohit244/4/tree/master",
  link: "https://lohit244.github.io/4"
}
const Project2 ={
  about: "A webscraper for google searches and job finding on likedin and other websites, built using python",
  github: "https://github.com/Lohit244/IEEE-Webscraper",
  link: "NULL",
}
//  *** This is the flagship project *** 
const Project3 ={
  about: "A project to connect developers and college students with similar intersts and a VSCode extension for the same",
  github: "https://github.com/Lohit244/VSBuddies-website",
  link: "https://vsbuddies.netlify.app"
}

/*
  **** Links *****
*/
const instagram = "https://www.instagram.com/lohitakshamalhotra/"
const linkedIn = "https://www.linkedin.com/in/lohitaksha-malhotra-b84392201/"
const github = "https://www.github.com/lohit244"

module.exports = {name: Name, bio: Bio, projects: [Project1, Project2, Project3], links: {
  linkedIn: linkedIn,
  insta: instagram,
  github: github
}};