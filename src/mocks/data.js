export const lakes = [
  {
    lake_name: "Lake Erie",
    abbrev: "ER",
    extent: [-83.14, 41.67, -78.91, 42.89],
  },
  {
    lake_name: "Lake Huron",
    abbrev: "HU",
    extent: [-83.98, 43.0, -79.65, 46.33],
  },
  {
    lake_name: "Lake Ontario",
    abbrev: "ON",
    extent: [-79.93, 43.16, -76.39, 44.24],
  },
  {
    lake_name: "Lake St. Clair",
    abbrev: "SC",
    extent: [-82.93, 42.28, -82.4, 42.6],
  },
  {
    lake_name: "Lake Superior",
    abbrev: "SU",
    extent: [-89.56, 46.45, -84.35, 49.015],
  },
];

export const users = [
  {
    username: "homersi",
    first_name: "Homer",
    last_name: "Simpson",
  },
  {
    username: "gumbleba",
    first_name: "Barney",
    last_name: "Gumble",
  },

  {
    username: "burnsmo",
    first_name: "Monty",
    last_name: "Burns",
  },
  {
    username: "smitherswa",
    first_name: "Waylon",
    last_name: "Smithers",
  },
];

export const protocols = [
  {
    abbrev: "BSM",
    label: "Broad Scale Monitoring",
  },
  {
    abbrev: "ESTN",
    label: "Early Spring Trap Netting",
  },
];

export const gear = [
  {
    gr_label: "Bottle Trap",
    grtp: "BO",
    gr_code: "BOT",
    effcnt: 1,
    effdst: 1.0,
    gr_des: "Bottle traps deployed...",
    confirmed: true,
    depreciated: false,
    process_types: [
      {
        process_type: "1",
        label: "By Sample",
        eff: "001",
      },
    ],
  },
  {
    gr_label: "Fyke Net (large)",
    grtp: "FY",
    gr_code: "FY03",
    effcnt: 1,
    effdst: 1.0,
    gr_des: "Fyke Nets used in small fish ...",
    confirmed: true,
    depreciated: false,
    process_types: [
      {
        process_type: "1",
        label: "By Sample",
        eff: "001",
      },
    ],
  },
];
