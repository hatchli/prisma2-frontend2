/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from "common/src/assets/image/cryptoModern/logo.png";

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: "Home",
      path: "#home",
      offset: "84"
    },
    {
      id: 2,
      label: "Key Features",
      path: "#key-features",
      offset: "81"
    },
    {
      id: 3,
      label: "Fund Raising",
      path: "#fund",
      offset: "81"
    },
    {
      id: 4,
      label: "Locations",
      path: "#map",
      offset: "81"
    },
    {
      id: 5,
      label: "FAQ",
      path: "#faqSection",
      offset: "81"
    }
  ]
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from "common/src/assets/image/cryptoModern/feature-1.png";
import featureIcon2 from "common/src/assets/image/cryptoModern/feature-2.png";
import featureIcon3 from "common/src/assets/image/cryptoModern/feature-3.png";
import featureIcon4 from "common/src/assets/image/cryptoModern/feature-4.png";

export const Features = [
  {
    id: 1,
    // icon: featureIcon1,
    title: "In Person Coaching",
    description:
      "The leading digital currency by market capitalization, has grown in value by more than 10 times.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vel risus commodo viverra maecenas. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac."
  },
  {
    id: 2,
    // icon: featureIcon2,
    title: "Remote Coaching",
    description:
      "Your mining rigs are already set up and running. As soon as you set up your account.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis. Etiam tempor orci eu lobortis elementum. Donec massa sapien faucibus et molestie ac feugiat."
  }
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from "common/src/assets/image/cryptoModern/wallet1.png";
import walletIcon2 from "common/src/assets/image/cryptoModern/wallet2.png";
import walletIcon3 from "common/src/assets/image/cryptoModern/wallet3.png";

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: "Secure transfers with verified Casinos."
  },
  {
    id: 2,
    icon: walletIcon2,
    title: "Easily buy and sell CLV within the wallet"
  },
  {
    id: 3,
    icon: walletIcon3,
    title: "Pay as many as you want"
  }
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: "How to contact with Customer Service?",
    description:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. "
  },
  {
    id: 2,
    title: "App installation failed, how to update system information?",
    description:
      "Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . "
  },
  {
    id: 3,
    title: "Website reponse taking time, how to improve?",
    description:
      "At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
  },
  {
    id: 4,
    title: "New update fixed all bug and issues?",
    description:
      "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
  }
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const Footer_Data = [
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
