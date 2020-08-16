import { Component } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent {
  constructor() {}

  LinkedInPhoto: string = "./assets/LinkedInPic.jpg";

  MyEducation: string =
    "I graduated from the University of Wisconsin- Whitewater with a quadruple major on my Bachelor of Business Administration degree. The four majors are: General Business, Human Resource Management, Supply Chain and Operations Management, and Information Technology. Next, I began taking college classes between my junior and senior year of high school. I completed my BBA with the first major just two and a half years after I graduated from high school. Additionally, I have an Associates of Applied Science degree in Accounting.";

  MySkills: String[] = [
    "SQL",
    "Python",
    "Python Pandas",
    "NumPy",
    "MatPlotLib",
    "Seaborn",
    "Tableau",
    "SAS",
    "Crystal Reports",
    "Django",
    "Java",
    "JavaScript (ES6)",
    "ReactJS",
    "Angular",
    "AngularJS",
    "Sass",
    "HTML5",
    "CSS3",
    "XML",
    "JSON",
    "JupiterLab",
    "PHP",
    "Bootstrap 4",
    "ITIL",
    "jQuery",
    "AJAX",
    "VB.Net",
    "TypeScript",
    "RESTful API",
    "Linux",
    "Responsive Web Design",
    "C#",
    "RapidMiner",
    "Visual Studio Code",
    "Microsoft Excel",
    "Microsoft Visio",
    "Agile",
    "Project Management",
    "Scrum",
    "Customer Service",
    "Software Documentation",
    "Salesforce"
  ];

  GithubLogo: string = "./assets/githublogo.png";
  GithubUrl: string = "https://www.github.com/DunnBC22";
  LinkedInLogo: string = "./assets/linkedinlogo.png";
  LinkedInUrl: string = "https://www.linkedin.com/in/DunnBC22";
}
