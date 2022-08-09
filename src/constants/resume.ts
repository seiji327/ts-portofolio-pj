// Defining a custom type for resume object
type Resume = {
  readonly name: string;
  relevant_skills: readonly string[];
  education_list: readonly {
    readonly level: string;
    readonly school: string;
    readonly duration: string;
  }[];
  employment_list: readonly {
    readonly position: string;
    readonly employer: string;
    readonly location: string;
    readonly duration: string;
    readonly skills: string[];
  }[];
  volunteer_activities: readonly {
    readonly title: string;
    readonly duration: string;
    readonly skills: string[];
  }[];
};

export const resume: Resume = {
  name: "Seiji Sagawa",
  relevant_skills: [
    `Maintaining A average grade most courses including Java,
      HTML, CSS, JavaScript`,
    `Developing skills of how to write clean code and best practice of development`,
    `Creating responsive website using HTML, CSS and JavaScript`,
  ],
  education_list: [
    {
      level: "Diploma of Information and Computer Systems Technology",
      school: "Camosun College, Canada",
      duration: "Sep. 2019 - Aug. 2021",
    },
    {
      level: "English as Second Language",
      school: "Camosun College, Canada",
      duration: "May. 2017 - Dec. 2018",
    },
    {
      level: "Bachelor of Economics",
      school: "Kyoto Sangyo University, Japan",
      duration: "Apr. 2012 - Mar. 2016",
    },
  ],
  employment_list: [
    {
      position: "Deli Department",
      employer: "Fairway Market",
      location: "Victoria",
      duration: "Dec. 2018 - Oct. 2021",
      skills: [
        "Cooperating with colleagues and get all necessary tasks done on time",
        "Providing great customer service to increase customer's satisfaction and loyalty",
      ],
    },
    {
      position: "Bank Teller",
      employer: "Japan Post",
      location: "Kyoto",
      duration: "Apr. 2016 - Jan. 2017",
      skills: [
        `Provided outstanding customer service resulting in increasing a number of 
        customers who decided to deposit their funds into their savings account`,
      ],
    },
  ],
  volunteer_activities: [
    {
      title: "Renovation of an abandoned house",
      duration: "Jul. 2015 - Jul. 2015",
      skills: [
        `Renovated an old house for victims of a tremendously 
              devastation earthquake and tsunami that occurred in Fukushima in 2011.`,
        `Planned how effectively we could get all necessary works done within limited time.`,
      ],
    },
  ],
};
