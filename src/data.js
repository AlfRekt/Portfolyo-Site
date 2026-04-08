export const data = {
  en: {
    heroSection: {
      greeting: "Hi! 👋",
      intro: "I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!",
      profileImage: "profile-image.jpg",
      socials: [
        {
          logo: "LinkedIn.svg",
          alt_text: "linkedin",
          link: "https://www.linkedin.com/in/alfredalig%C3%BClkan/",
        },
        {
          logo: "github.svg",
          alt_text: "github",
          link: "https://github.com/AlfRekt",
        },
      ],
      ctaHTML:
        "Currently <span style='color: #AF0C48'>Freelancing</span> for <span style='color: #AF0C48'>UX, UI, & Web Design</span> Project. <br> Invite me to join your team → <a href='mailto:pratamaiosi@gmail.com' style='color: #AF0C48'>pratamaiosi@gmail.com</a>",
    },
    skillsSection: {
      title: "Skills",
      skills: [
        { name: "JavaScript", icon: "js-logo.png" },
        { name: "React",      icon: "react-logo.png" },
        { name: "Redux",      icon: "redux-logo.png" },
        { name: "Node",       icon: "node-logo.png" },
        { name: "VS Code",    icon: "vscode.png" },
        { name: "Figma",      icon: "figma-logo.png" },
      ],
    },
    profileSection: {
      title: "Profile",
      personalInformations: {
        title: "Basic Information",
        dateOfBirth: {
          title: "Date of Birth",
          date: "24.03.1996"
        },
        residence: {
          title: "Residence",
          city: "Ankara",
        },
        degree: {
          title: "Lisance Degree",
          city: "Hacettepe Ünv. Biyoloji Lisans, 2016",
        },
        position: {
          title: "Preferred Position",
          position: "Frontend, UI"
        }
      },
      aboutMe: {
        title: "About Me",
        text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! `
      }
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          id: 1,
          name: "Random Jokes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          tags: ["react", "vercel", "axios", "router"],
          github: "View On Github",
          app: {
            title: "Go to app →",
            URL: "/app.api",
          },
          screenshot: "project1.png",
        },
        {
          id: 2,
          name: "Are you bored?",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate?",
          tags: ["react", "redux", "axios", "router", "vercel"],
          github: "View On Github",
          app: {
            title: "Go to app →",
            URL: "/app.api",
          },
          screenshot: "project2.png",
        },
      ],
    },
    footerSection: {
      text: "Let's work together on your next product.",
      socials: [
        {
          title: "Github",
          link: "https://github.com/AlfRekt",
          color: "#1769FF",
        },
        {
          title: "Personal Blog",
          link: "https://alfred-ali-gulkan.super.site/",
          color: "#0A0A14",
        },
        {
          title: "Linkedin",
          link: "https://www.linkedin.com/in/alfredalig%C3%BClkan/",
          color: "#0077B5",
        },
        {
          title: "Email",
          link: "alfredaligulkan@gmail.com",
          color: "#AF0C48",
        },
      ],
    }
  },
  tr: {
    heroSection: {
      greeting: "Merhaba! 👋",
      intro: "Ben Almila. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri üretebiliyorum. Tanışalım!",
      profileImage: "profile-image.jpg",
      socials: [
        {
          logo: "LinkedIn.svg",
          alt_text: "linkedin",
          link: "https://www.linkedin.com/in/alfredalig%C3%BClkan/",
        },
        {
          logo: "github.svg",
          alt_text: "github",
          link: "https://github.com/AlfRekt",
        },
      ],
      ctaHTML:
        "Şu an <span style='color: #AF0C48'>Serbest Çalışıyorum</span>, <span style='color:#AF0C48'>UX, UI ve Web Tasarım</span> projeleri için. <br> Ekibinize katılmamı istiyorsanız → <a href='mailto:pratamaiosi@gmail.com' style='color: #AF0C48'>pratamaiosi@gmail.com</a>",
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        { name: "JavaScript", icon: "js-logo.png" },
        { name: "React",      icon: "react-logo.png" },
        { name: "Redux",      icon: "redux-logo.png" },
        { name: "Node",       icon: "node-logo.png" },
        { name: "VS Code",    icon: "vscode.png" },
        { name: "Figma",      icon: "figma-logo.png" },
      ],
    },
    profileSection: {
      title: "Profil",
      personalInformations: {
        title: "Basit Bilgilendirme",
        dateOfBirth: {
          title: "Doğum Tarihi",
          date: "24.03.1996"
        },
        residence: {
          title: "İkamet Şehri",
          city: "Ankara",
        },
        degree: {
          title: "Eğitim Durumu",
          city: "Hacettepe Ünv. Biyoloji Lisans, 2016",
        },
        position: {
          title: "Tercih Ettiği Rol",
          position: "Frontend, UI"
        }
      },
      aboutMe: {
        title: "Hakkımda",
        text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! `
      }
    },
    projectsSection: {
      title: "Projeler",
      projects: [
        {
          id: 1,
          name: "Rastgele Şakalar",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          tags: ["react", "vercel", "axios", "router"],
          github: "Github'da Göster",
          app: {
            title: "Uygulamaya Git →",
            URL: "/app.api",
          },
          screenshot: "project1.png", 
        },
        {
          id: 2,
          name: "Sıkıldın Mı?",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate?",
          tags: ["react", "redux", "axios", "router", "vercel"],
          github: "Github'da Göster",
          app: {
            title: "Uygulamaya Git →",
            URL: "/app.api",
          },
          screenshot: "project2.png",
        },
      ],
    },
    footerSection: {
      text: "Sonraki projenizde beraber çalışalım.",
      socials: [
        {
          title: "Github",
          link: "https://github.com/AlfRekt",
          color: "#1769FF",
        },
        {
          title: "Kişisel Blog",
          link: "https://alfred-ali-gulkan.super.site/",
          color: "#0A0A14",
        },
        {
          title: "Linkedin",
          link: "https://www.linkedin.com/in/alfredalig%C3%BClkan/",
          color: "#0077B5",
        },
        {
          title: "Email",
          link: "alfredaligulkan@gmail.com",
          color: "#AF0C48",
        },
      ],
    }
  },
};