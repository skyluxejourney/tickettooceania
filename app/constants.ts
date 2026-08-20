// Company Information
export const COMPANY = {
  name: "Ticket to Oceania",
  domain: "tickettooceania.com",
  email: "Reservations@tickettooceania.com",
  phone: "+1-8555387343",
  phoneRaw: "18555387343",
  address: "Alexandria, VA 22310",
  year: new Date().getFullYear(),
};



// Contact Information
export const CONTACT = {
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: COMPANY.address,
  supportHours: "24/7 Customer Support",
};

// Brand Assets
export const BRAND = {
  name: COMPANY.name,
  tagline: "Travel & Adventures",
  logo: "/logo/ticketlogo.png", 
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Luxury Travel & Holiday Packages`,
  description: `Book luxury holiday packages, flights, hotels and customized trips with ${COMPANY.name}.`,
  keywords: [
    COMPANY.name,
    "travel agency",
    "holiday packages",
    "flights",
    "hotels",
    "Sydney package",
    "Melbourne package",
    "Auckland package",
    "Queenstown package",
  ],
};

export default {
  COMPANY,
  CONTACT,
  BRAND,
  META,
};