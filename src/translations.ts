interface Translation {
  nav: {
    about: string;
    features: string;
    contact: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    getStarted: string;
    learnMore: string;
    stats: {
      projects: string;
      team: string;
      satisfaction: string;
    };
  };
  about: {
    title: string;
    description: string;
    passion: {
      title: string;
      description: string;
    };
    collaboration: {
      title: string;
      description: string;
    };
    excellence: {
      title: string;
      description: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    mainTitle: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  whyTeamstar: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  aiFeatures: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      about: "About",
      features: "Features",
      contact: "Contact",
    },
    hero: { 
      tagline: "Innovating the Future",
      title: "THE ULTIMATE TASK MANAGEMENT SOLUTION",
      subtitle: "Join Teamstar and be part of a revolution in task management. We’re redefining productivity and building solutions that empower teams to achieve more, today and tomorrow.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      stats: {
        projects: "Tasks Delivered with Excellent Impact",
        team: "Highly Skilled and Efficient Team Members",
        satisfaction: "Satisfaction Rate from Happy Clients",
      },
    },
    about: {
      title: "About Us",
      description: "TEAMSTAR is a task management app designed for Android and iOS, where AI controls the team and tasks, assigning and monitoring progress. It offers seamless offline access, allowing users to create, track, and update tasks without an internet connection, syncing automatically when back online. Key features include real-time member monitoring, offline-first functionality, and cross-platform support. TEAMSTAR enhances team productivity and task visibility, ensuring smooth collaboration and progress tracking. 🚀",
      passion: {
        title: "Passion",
        description: "Fueled by a passion for creating impactful solutions.",
      },
      collaboration: {
        title: "Collaboration",
        description: " United by a shared commitment to teamwork and progress",
      },
      excellence: {
        title: "Excellence",
        description: " Dedicated to delivering excellence in everything we do.",
      },
    },
    features: {
      title: "Key Features",
      subtitle: "that Drive Productivity",
      mainTitle: "Maximize team efficiency and collaboration with TEAMSTAR, the offline-first task management solution.",
      description: "Transform the way your team works—maximize efficiency and collaboration with TEAMSTAR!",
      items: [
        {
          title: "Effortless Task Management",
          description: "Create, assign, and track tasks with ease."
        },
        {
          title: "Real-Time Team Visibility",
          description: "Monitor task progress instantly."
        },
        {
          title: "Offline-First Technology",
          description: "Stay productive anytime, anywhere."
        },
        {
          title: "Cross-Platform Compatibility",
          description: "Seamless experience on Android & iOS."
        }
      ]
    },
    whyTeamstar: {
      title: "Why TEAMSTAR?",
      subtitle: "The ultimate offline-first task management solution engineered for teams of all sizes.",
      items: [
        {
          title: "API-first",
          description: "All data is accessible via API, and events can trigger webhooks."
        },
        {
          title: "Offline-Ready",
          description: "Stay productive even without an internet connection — your tasks are always accessible."
        },
        {
          title: "Effortless Sync",
          description: "Your changes sync automatically once you're back online again."
        },
        {
          title: "Optimized Workflows",
          description: "Boost collaboration and keep every team member in the loop."
        }
      ]
    },
    aiFeatures: {
      title: "AI-Powered Excellence",
      items: [
        {
          title: "API-First Approach",
          description: "Every TEAMSTAR function is available via API, making it easy to integrate into AI flows and automate everything end-to-end."
         
        },
        {
          title: "AI-Managed Tasks",
          description: "Submitted reports are analyzed by AI and instantly turned into actionable tasks — so teams practically manage themselves."
        },
        {
          title: "Smart Integrations",
          description: "Tap into external sources like order books, ERP, or CRM systems to create tasks automatically and stay ahead of the curve."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
      },
    },
  },
  de: {
    nav: {
      about: "Über uns",
      features: "Funktionen",
      contact: "Kontakt",
    },
    hero: {
      tagline: "Innovation der Zukunft",
      title: "DIE ULTIMATIVE LÖSUNG FÜR DAS AUFGABENMANAGEMENT",
      subtitle: "Werden Sie Mitglied bei TEAMSTAR und werden Sie Teil einer Revolution im Aufgabenmanagement. Wir definieren Produktivität neu und entwickeln Lösungen, die es Teams ermöglichen, heute und morgen mehr zu erreichen.",
      getStarted: "Loslegen",
      learnMore: "Mehr erfahren",
      stats: {
        projects: "Aufgaben mit Exzellentem Impact geliefert",
        team: "Hochqualifizierte und effiziente Teammitglieder",
        satisfaction: "Kundenzufriedenheit",
      },
    },
    about: {
      title: "Über uns",
      description: "TEAMSTAR ist eine Aufgabenmanagement-App, die für Android und iOS entwickelt wurde und mit React Native und MongoDB Realm erstellt wurde. Es bietet einen nahtlosen Offline-Zugriff, der es Benutzern ermöglicht, Aufgaben ohne Internetverbindung zu erstellen, zu verfolgen und zu aktualisieren und automatisch zu synchronisieren, wenn sie wieder online sind. Zu den wichtigsten Funktionen gehören die Überwachung der Mitglieder in Echtzeit, die Offline-First-Funktionalität und die plattformübergreifende Unterstützung. TEAMSTAR verbessert die Teamproduktivität und die Sichtbarkeit von Aufgaben und sorgt für eine reibungslose Zusammenarbeit und Fortschrittsverfolgung. 🚀",
      passion: {
        title: "Leidenschaft",
        description: "Angetrieben von der Leidenschaft, wirkungsvolle Lösungen zu schaffen.",
      },
      collaboration: {
        title: "Zusammenarbeit",
        description: "Vereint durch ein gemeinsames Engagement für Teamwork und Fortschritt.",
      },
      excellence: {
        title: "Exzellenz",
        description: "Wir sind bestrebt, bei allem, was wir tun, Spitzenleistungen zu erbringen",
      },
    },
    features: {
      title: "Hauptfunktionen",
      subtitle: "die die Produktivität steigern",
      mainTitle: "Maximieren Sie die Effizienz und Zusammenarbeit Ihres Teams mit TEAMSTAR, der Offline-first Aufgabenverwaltungslösung.",
      description: "Transformieren Sie die Arbeitsweise Ihres Teams—maximieren Sie Effizienz und Zusammenarbeit mit TEAMSTAR!",
      items: [
        {
          title: "Mühelose Aufgabenverwaltung",
          description: "Erstellen, zuweisen und verfolgen Sie Aufgaben mit Leichtigkeit."
        },
        {
          title: "Echtzeit-Team-Sichtbarkeit",
          description: "Überwachen Sie den Aufgabenfortschritt sofort."
        },
        {
          title: "Offline-First-Technologie",
          description: "Bleiben Sie jederzeit und überall produktiv."
        },
        {
          title: "Plattformübergreifende Kompatibilität",
          description: "Nahtlose Erfahrung auf Android & iOS."
        }
      ]
    },
    whyTeamstar: {
      title: "Warum TEAMSTAR?",
      subtitle: "Die ultimative Offline-first Aufgabenverwaltungslösung, entwickelt für Teams jeder Größe.",
      items: [
        {
          title: "API-first",
          description: "Alle Daten sind über API zugänglich und Ereignisse können Webhooks auslösen."
        },
        {
          title: "Offline-Bereit",
          description: "Bleiben Sie produktiv auch ohne Internetverbindung — Ihre Aufgaben sind immer zugänglich."
        },
        {
          title: "Mühelose Synchronisation",
          description: "Ihre Arbeit synchronisiert sich automatisch, wenn Sie wieder online sind."
        },
        {
          title: "Optimierte Arbeitsabläufe",
          description: "Steigern Sie die Zusammenarbeit und halten Sie jedes Teammitglied auf dem Laufenden."
        }
      ]
    },
    aiFeatures: {
      title: "KI-gesteuerte Exzellenz",
      items: [
        {
          title: "KI-verwaltete Aufgaben",
          description: "Eingereichte Berichte werden von KI analysiert und sofort in umsetzbare Aufgaben umgewandelt — Teams verwalten sich praktisch selbst."
        },
        {
          title: "Intelligente Integrationen",
          description: "Greifen Sie auf externe Quellen wie Auftragsbücher, ERP- oder CRM-Systeme zu, um automatisch Aufgaben zu erstellen und der Konkurrenz einen Schritt voraus zu sein."
        }
      ]
    },
    contact: {
      title: "Kontakt",
      subtitle: "Nehmen Sie Kontakt mit unserem Team auf",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden",
      },
    },
  },
};