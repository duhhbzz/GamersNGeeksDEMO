export type StoreHoursEntry = {
  day: string;
  hours: string;
  isClosed?: boolean;
};

export type StoreInformation = {
  name: string;
  address: {
    street: string;
    locality: string;
  };
  phone: {
    display: string;
    href: string;
  };
  hours: readonly StoreHoursEntry[];
  map: {
    embedUrl: string;
    directionsUrl: string;
  };
};

const name = "Gamers N Geeks";
const street = "5701 Moffett Rd Ste N";
const locality = "Mobile, AL 36618";
const mapQuery = encodeURIComponent(`${name}, ${street}, ${locality}`);

export const storeInfo: StoreInformation = {
  name,
  address: {
    street,
    locality,
  },
  phone: {
    display: "251-725-6640",
    href: "tel:+12517256640",
  },
  hours: [
    { day: "Monday", hours: "2:00 PM–10:00 PM" },
    { day: "Tuesday", hours: "Closed", isClosed: true },
    { day: "Wednesday", hours: "2:00 PM–10:00 PM" },
    { day: "Thursday", hours: "2:00 PM–10:00 PM" },
    { day: "Friday", hours: "12:00 PM–11:00 PM" },
    { day: "Saturday", hours: "10:00 AM–11:00 PM" },
    { day: "Sunday", hours: "12:00 PM–9:00 PM" },
  ],
  map: {
    embedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  },
};
