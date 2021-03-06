import Screenshot1 from "../../assets/image/saasClassic/screen-1.png";

import AuthorOne from "../../assets/image/saasClassic/author-1.jpg";
import AuthorTwo from "../../assets/image/saasClassic/author-2.jpg";
import AuthorThree from "../../assets/image/saasClassic/author-3.jpg";

import { ic_monetization_on } from "react-icons-kit/md/ic_monetization_on";
import { ic_settings } from "react-icons-kit/md/ic_settings";
import { pieChart } from "react-icons-kit/icomoon/pieChart";
import { briefcase } from "react-icons-kit/fa/briefcase";

export const MENU_ITEMS = [
  {
    label: "Home",
    path: "#banner_section",
    offset: "0"
  },
  {
    label: "Screenshot",
    path: "#screenshot_section",
    offset: "0"
  },
  {
    label: "Feature",
    path: "#feature_section",
    offset: "0"
  },
  {
    label: "Pricing",
    path: "#pricing_section",
    offset: "0"
  },
  {
    label: "Testimonial",
    path: "#testimonial_section",
    offset: "0"
  }
];

export const SERVICE_ITEMS = [
  {
    icon: "flaticon-stopwatch-1",
    title: "Fast Performance"
  },
  {
    icon: "flaticon-prototype",
    title: "Prototyping"
  },
  {
    icon: "flaticon-code",
    title: "Coade Export"
  },
  {
    icon: "flaticon-vectors",
    title: "Vector Editing"
  },
  {
    icon: "flaticon-export",
    title: "Export Presets"
  }
];

export const TYPE_TABLE = [
  {
    id: 1,
    value: "subscription",
    title: "Subscription",
    text: "Pay monthly and get started right away!"
  },
  {
    id: 2,
    value: "purchase",
    title: "One-Time Purchase",
    text: "Pay once and forget about it!"
  }
];

export const MONTHLY_PRICING_TABLE = [
  {
    id: 1,
    value: "information",
    title: "Informational Website",
    name: "Informational Website",
    category: "information",
    type: "subscription",
    description:
      "Beautiful landing page for small businesses or personal portfolios",
    text: "Beautiful landing page for small businesses or personal portfolios",
    price: "49.99",
    priceLabel: "Per month",
    buttonLabel: "Tell Us More",
    url: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["eCommerce Store & Payment Processing"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Multi-Page Website"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Administrative & User Panel"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  },
  {
    id: 2,
    value: "business",
    title: "Business Website",
    name: "Business Website",
    category: "business",
    type: "subscription",
    description: "Multi-page Website for Small-Large Businesses",
    text: "Multi-page Website for Medium-Large Businesses",
    price: "99.99",
    priceLabel: "Per month",
    buttonLabel: "Tell Us More",
    url: "#",
    trialButtonLabel: "Or Start 14 Days trail",
    trialURL: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["eCommerce Store & Payment Processing"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Administrative & User Panel"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  },
  {
    id: 3,
    value: "ecommerce",
    title: "E-Commerce Website",
    name: "E-Commerce Website",
    category: "ecommerce",
    type: "subscription",
    description: "Online Sale and Payment Processing of Products & Services",
    text: "Online Sale and Payment Processing of Products & Services",
    price: "149.99",
    priceLabel: "Per month",
    buttonLabel: "Tell Us More",
    url: "#",
    trialButtonLabel: "Or Start 14 Days trail",
    trialURL: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Beutiful Landing Page"],
        cost: [49.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Multi-Page Website"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Administrative & User Panel with Dynamic Custom Content"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling for Improved Visitor Engagement"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  }
];

export const YEARLY_PRICING_TABLE = [
  {
    name: "Informational Website",
    category: "information",
    type: "purchase",
    description: "For a single client or team who need to build website ",
    price: "1199.99",
    priceLabel: "One time purchase",
    buttonLabel: "Tell Us More",
    url: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["eCommerce Store & Payment Processing"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Multi-Page Website"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Administrative & User Panel"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  },
  {
    name: "Business Website",
    category: "business",
    type: "purchase",
    description: "For Small teams or group who need to build website ",
    price: "2399.99",
    priceLabel: "One time purchase",
    buttonLabel: "Tell Us More",
    url: "#",
    trialButtonLabel: "Or Start 14 Days trail",
    trialURL: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["eCommerce Store & Payment Processing"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Administrative & User Panel"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  },
  {
    name: "E-Commerce Website",
    category: "ecommerce",
    type: "purchase",
    description: "For Large teams or group who need to build website ",
    price: "3599.99",
    priceLabel: "One time purchase",
    buttonLabel: "Tell Us More",
    url: "#",
    trialButtonLabel: "Or Start 14 Days trail",
    trialURL: "#",
    listItems: [
      {
        service: ["Mobile-ready, Responsive Design"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Dynamic Content (e.g., Blogs / Updates / Notices)"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Collect visitor information (email / phone)"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Beutiful Landing Page"],
        cost: [49.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["SEO Supported - Google Search Crawler Comptabile"],
        cost: [14.99],
        pcost: [14.99 * 24]
      },
      {
        service: ["Soical Media Integration"],
        cost: [4.99],
        pcost: [4.99 * 24]
      },
      {
        service: ['Pay-wall / "registered-users only" Content'],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Dynamic Map Integration"],
        cost: [9.99],
        pcost: [9.99 * 24]
      },
      {
        service: ["Multi-Page Website"],
        cost: [49.99],
        pcost: [49.99 * 24]
      },
      {
        service: ["Administrative & User Panel with Dynamic Custom Content"],
        cost: [99.99],
        pcost: [99.99 * 24]
      },
      {
        service: ["Advanced Form Handling for Improved Visitor Engagement"],
        cost: [24.99],
        pcost: [24.99 * 24]
      },
      {
        service: ["Automated Email Mailer + External Mail Service Integration"],
        cost: [24.99],
        pcost: [24.99 * 24]
      }
    ]
  }
];

export const ServiceType = [
  {
    id: 1,
    title: "Landing Page",
    value: "information",
    text: "One Time donation given"
  },
  {
    id: 2,
    title: "Business",
    value: "business",
    text: "Everymonth donation given"
  },
  {
    id: 3,
    title: "E-Commerce",
    value: "ecommerce",
    text: "Everymonth donation given"
  }
];

export const currencyOptions = [
  {
    id: 1,
    value: "usd",
    title: "$ USD"
  },
  {
    id: 2,
    value: "gbp",
    title: "£ GBP"
  },
  {
    id: 3,
    value: "cny",
    title: "¥ CNY"
  }
];

export const FAQ_DATA = [
  {
    expend: true,
    title: "How to contact with Customer Service?",
    description:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. "
  },
  {
    title: "App installation failed, how to update system information?",
    description:
      "Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . "
  },
  {
    title: "Website reponse taking time, how to improve?",
    description:
      "At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
  },
  {
    title: "New update fixed all bug and issues?",
    description:
      "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
  }
];

export const FOOTER_WIDGET = [
  {
    title: "About Us",
    menuItems: [
      {
        url: "#",
        text: "Support Center"
      },
      {
        url: "#",
        text: "Customer Support"
      },
      {
        url: "#",
        text: "About Us"
      },
      {
        url: "#",
        text: "Copyright"
      },
      {
        url: "#",
        text: "Popular Campaign"
      }
    ]
  },
  {
    title: "Our Information",
    menuItems: [
      {
        url: "#",
        text: "Return Policy"
      },
      {
        url: "#",
        text: "Privacy Policy"
      },
      {
        url: "#",
        text: "Terms & Conditions"
      },
      {
        url: "#",
        text: "Site Map"
      },
      {
        url: "#",
        text: "Store Hours"
      }
    ]
  },
  {
    title: "My Account",
    menuItems: [
      {
        url: "#",
        text: "Press inquiries"
      },
      {
        url: "#",
        text: "Social media directories"
      },
      {
        url: "#",
        text: "Images & B-roll"
      },
      {
        url: "#",
        text: "Permissions"
      },
      {
        url: "#",
        text: "Speaker requests"
      }
    ]
  },
  {
    title: "Policy",
    menuItems: [
      {
        url: "#",
        text: "Application security"
      },
      {
        url: "#",
        text: "Software principles"
      },
      {
        url: "#",
        text: "Unwanted software policy"
      },
      {
        url: "#",
        text: "Responsible supply chain"
      }
    ]
  }
];

export const FEATURES = [
  {
    icon: "flaticon-hourglass",
    title: "App Development",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  },
  {
    icon: "flaticon-trophy-1",
    title: "10 Times Award",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  },
  {
    icon: "flaticon-upload",
    title: "Cloud Storage",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  },
  {
    icon: "flaticon-settings",
    title: "Customization",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  },
  {
    icon: "flaticon-strategy",
    title: "UX Planning",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  },
  {
    icon: "flaticon-conversation",
    title: "Customer Support",
    description:
      "Get your proof tests delivered home collect a sample from the news get design."
  }
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: "Budget Overview",
    image: Screenshot1
  },
  {
    icon: ic_settings,
    title: "Create & Adjust",
    image: Screenshot1
  },
  {
    icon: pieChart,
    title: "View Reports",
    image: Screenshot1
  },
  {
    icon: briefcase,
    title: "Integrations",
    image: Screenshot1
  }
];

export const TESTIMONIALS = [
  {
    title: "Modern look & trending design",
    review:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Jon Doe",
    designation: "CEO of Dell Co.",
    avatar: `${AuthorOne}`
  },
  {
    title: "Modern look & trending design",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.",
    name: "Jon Doe",
    designation: "Co Founder of IBM",
    avatar: `${AuthorTwo}`
  },
  {
    title: "Modern look & trending design",
    review:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Jeny Doe",
    designation: "Manager of Hp co.",
    avatar: `${AuthorThree}`
  }
];
