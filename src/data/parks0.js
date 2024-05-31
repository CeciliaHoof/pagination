const parks0 = [
    {
      id: 1,
      name: "Acadia",
      location: "Maine",
      founded_year: 1919,
      area_acres: 49052.8,
      visitors_2022: 3918992
    },
    {
      id: 2,
      name: "American Samoa",
      location: "American Samoa",
      founded_year: 1988,
      area_acres: 8200,
      visitors_2022: 8903
    },
    {
      id: 3,
      name: "Arches",
      location: "Utah",
      founded_year: 1971,
      area_acres: 76679,
      visitors_2022: 1585224
    },
    {
      id: 4,
      name: "Badlands",
      location: "South Dakota",
      founded_year: 1978,
      area_acres: 242756,
      visitors_2022: 916932
    },
    {
      id: 5,
      name: "Big Bend",
      location: "Texas",
      founded_year: 1944,
      area_acres: 801163,
      visitors_2022: 514914
    },
    {
      id: 6,
      name: "Biscayne",
      location: "Florida",
      founded_year: 1980,
      area_acres: 172924,
      visitors_2022: 705655
    },
    {
      id: 7,
      name: "Black Canyon of the Gunnison",
      location: "Colorado",
      founded_year: 1999,
      area_acres: 32950,
      visitors_2022: 308962
    },
    {
      id: 8,
      name: "Bryce Canyon",
      location: "Utah",
      founded_year: 1928,
      area_acres: 35835,
      visitors_2022: 2384721
    },
    {
      id: 9,
      name: "Canyonlands",
      location: "Utah",
      founded_year: 1964,
      area_acres: 337597,
      visitors_2022: 733996
    },
    {
      id: 10,
      name: "Capitol Reef",
      location: "Utah",
      founded_year: 1971,
      area_acres: 241904,
      visitors_2022: 1227621
    },
    {
      id: 21,
      name: "Gateway Arch",
      location: "Missouri",
      founded_year: 2018,
      area_acres: 91,
      visitors_2022: 2147225
    },
    {
      id: 22,
      name: "Glacier",
      location: "Montana",
      founded_year: 1910,
      area_acres: 1013572,
      visitors_2022: 2949140
    },
    {
      id: 23,
      name: "Glacier Bay",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 3224840,
      visitors_2022: 633265
    },
    {
      id: 24,
      name: "Grand Canyon",
      location: "Arizona",
      founded_year: 1919,
      area_acres: 1217403,
      visitors_2022: 4459057
    },
    {
      id: 25,
      name: "Grand Teton",
      location: "Wyoming",
      founded_year: 1929,
      area_acres: 310044,
      visitors_2022: 3045620
    },
    {
      id: 26,
      name: "Great Basin",
      location: "Nevada",
      founded_year: 1986,
      area_acres: 77180,
      visitors_2022: 144875
    },
    {
      id: 27,
      name: "Great Sand Dunes",
      location: "Colorado",
      founded_year: 2004,
      area_acres: 149028,
      visitors_2022: 602613
    },
    {
      id: 28,
      name: "Great Smoky Mountains",
      location: "North Carolina, Tennessee",
      founded_year: 1934,
      area_acres: 522427,
      visitors_2022: 12893326
    },
    {
      id: 29,
      name: "Guadalupe Mountains",
      location: "Texas",
      founded_year: 1966,
      area_acres: 86416,
      visitors_2022: 243291
    },
    {
      id: 30,
      name: "Haleakalā",
      location: "Hawaii",
      founded_year: 1961,
      area_acres: 33264,
      visitors_2022: 1028568
    },
    {
      id: 31,
      name: "Hawaiʻi Volcanoes",
      location: "Hawaii",
      founded_year: 1916,
      area_acres: 335259,
      visitors_2022: 1194621
    },
    {
      id: 32,
      name: "Hot Springs",
      location: "Arkansas",
      founded_year: 1921,
      area_acres: 5549,
      visitors_2022: 1426476
    },
    {
      id: 33,
      name: "Indiana Dunes",
      location: "Indiana",
      founded_year: 2019,
      area_acres: 15407,
      visitors_2022: 2544563
    },
    {
      id: 34,
      name: "Isle Royale",
      location: "Michigan",
      founded_year: 1940,
      area_acres: 571790,
      visitors_2022: 26282
    },
    {
      id: 35,
      name: "Joshua Tree",
      location: "California",
      founded_year: 1994,
      area_acres: 795155,
      visitors_2022: 3060113
    },
    {
      id: 36,
      name: "Katmai",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 3674529,
      visitors_2022: 39453
    },
    {
      id: 37,
      name: "Kenai Fjords",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 669650,
      visitors_2022: 321596
    },
    {
      id: 38,
      name: "Kings Canyon",
      location: "California",
      founded_year: 1940,
      area_acres: 461901,
      visitors_2022: 562918
    },
    {
      id: 39,
      name: "Kobuk Valley",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 1750717,
      visitors_2022: 15923
    },
    {
      id: 40,
      name: "Lake Clark",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 2619816,
      visitors_2022: 168684
    },
    {
      id: 41,
      name: "Lassen Volcanic",
      location: "California",
      founded_year: 1916,
      area_acres: 106589,
      visitors_2022: 499435
    },
    {
      id: 42,
      name: "Mammoth Cave",
      location: "Kentucky",
      founded_year: 1941,
      area_acres: 54016,
      visitors_2022: 515774
    },
    {
      id: 43,
      name: "Mesa Verde",
      location: "Colorado",
      founded_year: 1906,
      area_acres: 52122,
      visitors_2022: 499257
    },
    {
      id: 44,
      name: "Mount Rainier",
      location: "Washington",
      founded_year: 1899,
      area_acres: 236381,
      visitors_2022: 1432960
    },
    {
      id: 45,
      name: "New River Gorge",
      location: "West Virginia",
      founded_year: 2020,
      area_acres: 7291,
      visitors_2022: 1079928
    },
    {
      id: 46,
      name: "North Cascades",
      location: "Washington",
      founded_year: 1968,
      area_acres: 504781,
      visitors_2022: 207996
    },
    {
      id: 47,
      name: "Olympic",
      location: "Washington",
      founded_year: 1938,
      area_acres: 922651,
      visitors_2022: 2767718
    },
    {
      id: 48,
      name: "Petrified Forest",
      location: "Arizona",
      founded_year: 1962,
      area_acres: 221390,
      visitors_2022: 627757
    },
    {
      id: 49,
      name: "Pinnacles",
      location: "California",
      founded_year: 2013,
      area_acres: 26606,
      visitors_2022: 221556
    },
    {
      id: 50,
      name: "Redwood",
      location: "California",
      founded_year: 1968,
      area_acres: 138999,
      visitors_2022: 435879
    },
    {
      id: 51,
      name: "Rocky Mountain",
      location: "Colorado",
      founded_year: 1915,
      area_acres: 265807,
      visitors_2022: 4155474
    },
    {
      id: 52,
      name: "Saguaro",
      location: "Arizona",
      founded_year: 1994,
      area_acres: 91742,
      visitors_2022: 919486
    },
    {
      id: 53,
      name: "Sequoia",
      location: "California",
      founded_year: 1890,
      area_acres: 404062,
      visitors_2022: 1566762
    },
    {
      id: 54,
      name: "Shenandoah",
      location: "Virginia",
      founded_year: 1935,
      area_acres: 199223,
      visitors_2022: 1474691
    },
    {
      id: 55,
      name: "Theodore Roosevelt",
      location: "North Dakota",
      founded_year: 1978,
      area_acres: 70446,
      visitors_2022: 614454
    },
    {
      id: 56,
      name: "Virgin Islands",
      location: "U.S. Virgin Islands",
      founded_year: 1956,
      area_acres: 14688,
      visitors_2022: 287287
    },
    {
      id: 57,
      name: "Voyageurs",
      location: "Minnesota",
      founded_year: 1975,
      area_acres: 218200,
      visitors_2022: 243042
    },
    {
      id: 58,
      name: "White Sands",
      location: "New Mexico",
      founded_year: 2019,
      area_acres: 146344,
      visitors_2022: 680656
    },
    {
      id: 59,
      name: "Wind Cave",
      location: "South Dakota",
      founded_year: 1903,
      area_acres: 33970,
      visitors_2022: 634730
    },
    {
      id: 60,
      name: "Wrangell–St. Elias",
      location: "Alaska",
      founded_year: 1980,
      area_acres: 8323146,
      visitors_2022: 78992
    },
    {
      id: 61,
      name: "Yellowstone",
      location: "Wyoming, Montana, Idaho",
      founded_year: 1872,
      area_acres: 2219790,
      visitors_2022: 3947965
    },
    {
      id: 62,
      name: "Yosemite",
      location: "California",
      founded_year: 1890,
      area_acres: 761748,
      visitors_2022: 4232100
    },
    {
      id: 63,
      name: "Zion",
      location: "Utah",
      founded_year: 1919,
      area_acres: 147242,
      visitors_2022: 4911236
    }
  ];
  
  export default parks0;  