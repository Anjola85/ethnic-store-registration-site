import { HashMap } from "./HashMap";

export class CountriesMap {
  private countriesHashMap = new HashMap<string>();

  countries: { countryCode: string; isoCode: string; country: string }[] = [
    {
      countryCode: "93",
      isoCode: "AF",
      country: "Afghanistan",
    },
    {
      countryCode: "355",
      isoCode: "AL",
      country: "Albania",
    },
    {
      countryCode: "213",
      isoCode: "DZ",
      country: "Algeria",
    },
    {
      countryCode: "376",
      isoCode: "AD",
      country: "Andorra",
    },
    {
      countryCode: "244",
      isoCode: "AO",
      country: "Angola",
    },
    {
      countryCode: "54",
      isoCode: "AR",
      country: "Argentina",
    },
    {
      countryCode: "374",
      isoCode: "AM",
      country: "Armenia",
    },
    {
      countryCode: "61",
      isoCode: "AU",
      country: "Australia",
    },
    {
      countryCode: "43",
      isoCode: "AT",
      country: "Austria",
    },
    {
      countryCode: "994",
      isoCode: "AZ",
      country: "Azerbaijan",
    },
    {
      countryCode: "973",
      isoCode: "BH",
      country: "Bahrain",
    },
    {
      countryCode: "880",
      isoCode: "BD",
      country: "Bangladesh",
    },
    {
      countryCode: "375",
      isoCode: "BY",
      country: "Belarus",
    },
    {
      countryCode: "32",
      isoCode: "BE",
      country: "Belgium",
    },
    {
      countryCode: "501",
      isoCode: "BZ",
      country: "Belize",
    },
    {
      countryCode: "229",
      isoCode: "BJ",
      country: "Benin",
    },
    {
      countryCode: "975",
      isoCode: "BT",
      country: "Bhutan",
    },
    {
      countryCode: "591",
      isoCode: "BO",
      country: "Bolivia",
    },
    {
      countryCode: "387",
      isoCode: "BA",
      country: "Bosnia and Herzegovina",
    },
    {
      countryCode: "267",
      isoCode: "BW",
      country: "Botswana",
    },
    {
      countryCode: "55",
      isoCode: "BR",
      country: "Brazil",
    },
    {
      countryCode: "673",
      isoCode: "BN",
      country: "Brunei",
    },
    {
      countryCode: "359",
      isoCode: "BG",
      country: "Bulgaria",
    },
    {
      countryCode: "226",
      isoCode: "BF",
      country: "Burkina Faso",
    },
    {
      countryCode: "257",
      isoCode: "BI",
      country: "Burundi",
    },
    {
      countryCode: "855",
      isoCode: "KH",
      country: "Cambodia",
    },
    {
      countryCode: "237",
      isoCode: "CM",
      country: "Cameroon",
    },
    {
      countryCode: "1204",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1236",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1249",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1250",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1289",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1306",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1343",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1365",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1387",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1403",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1416",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1418",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1431",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1437",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1438",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1450",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1506",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1514",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1519",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1548",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1579",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1581",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1587",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1604",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1613",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1639",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1647",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1672",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1705",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1709",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1742",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1778",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1780",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1782",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1807",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1819",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1825",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1867",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1873",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1902",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "1905",
      isoCode: "CA",
      country: "Canada",
    },
    {
      countryCode: "238",
      isoCode: "CV",
      country: "Cape Verde",
    },
    {
      countryCode: "236",
      isoCode: "CF",
      country: "Central African Republic",
    },
    {
      countryCode: "235",
      isoCode: "TD",
      country: "Chad",
    },
    {
      countryCode: "56",
      isoCode: "CL",
      country: "Chile",
    },
    {
      countryCode: "86",
      isoCode: "CN",
      country: "China",
    },
    {
      countryCode: "57",
      isoCode: "CO",
      country: "Colombia",
    },
    {
      countryCode: "269",
      isoCode: "KM",
      country: "Comoros",
    },
    {
      countryCode: "242",
      isoCode: "cg",
      country: "Congo",
    },

    {
      countryCode: "506",
      isoCode: "CR",
      country: "Costa Rica",
    },
    {
      countryCode: "385",
      isoCode: "HR",
      country: "Croatia",
    },
    {
      countryCode: "53",
      isoCode: "CU",
      country: "Cuba",
    },
    {
      countryCode: "357",
      isoCode: "CY",
      country: "Cyprus",
    },
    {
      countryCode: "420",
      isoCode: "CZ",
      country: "Czech Republic",
    },
    {
      countryCode: "243",
      isoCode: "CD",
      country: "Democratic Republic of the Congo",
    },
    {
      countryCode: "45",
      isoCode: "DK",
      country: "Denmark",
    },
    {
      countryCode: "1809",
      isoCode: "DO",
      country: "Dominican Republic",
    },
    {
      countryCode: "1829",
      isoCode: "DO",
      country: "Dominican Republic",
    },
    {
      countryCode: "1849",
      isoCode: "DO",
      country: "Dominican Republic",
    },

    {
      countryCode: "253",
      isoCode: "DJ",
      country: "Djibouti",
    },
    {
      countryCode: "670",
      isoCode: "TL",
      country: "East Timor",
    },
    {
      countryCode: "593",
      isoCode: "EC",
      country: "Ecuador",
    },
    {
      countryCode: "20",
      isoCode: "EG",
      country: "Egypt",
    },
    {
      countryCode: "503",
      isoCode: "SV",
      country: "El Salvador",
    },
    {
      countryCode: "240",
      isoCode: "GQ",
      country: "Equatorial Guinea",
    },
    {
      countryCode: "291",
      isoCode: "ER",
      country: "Eritrea",
    },
    {
      countryCode: "372",
      isoCode: "EE",
      country: "Estonia",
    },
    {
      countryCode: "251",
      isoCode: "ET",
      country: "Ethiopia",
    },
    {
      countryCode: "679",
      isoCode: "FJ",
      country: "Fiji",
    },
    {
      countryCode: "358",
      isoCode: "FI",
      country: "Finland",
    },
    {
      countryCode: "33",
      isoCode: "FR",
      country: "France",
    },
    {
      countryCode: "241",
      isoCode: "GA",
      country: "Gabon",
    },
    {
      countryCode: "220",
      isoCode: "GM",
      country: "Gambia",
    },
    {
      countryCode: "995",
      isoCode: "GE",
      country: "Georgia",
    },
    {
      countryCode: "49",
      isoCode: "DE",
      country: "Germany",
    },
    {
      countryCode: "233",
      isoCode: "GH",
      country: "Ghana",
    },
    {
      countryCode: "30",
      isoCode: "GR",
      country: "Greece",
    },
    {
      countryCode: "502",
      isoCode: "GT",
      country: "Guatemala",
    },
    {
      countryCode: "224",
      isoCode: "GN",
      country: "Guinea",
    },
    {
      countryCode: "245",
      isoCode: "GW",
      country: "Guinea-Bissau",
    },
    {
      countryCode: "592",
      isoCode: "GY",
      country: "Guyana",
    },
    {
      countryCode: "509",
      isoCode: "HT",
      country: "Haiti",
    },
    {
      countryCode: "504",
      isoCode: "HN",
      country: "Honduras",
    },
    {
      countryCode: "36",
      isoCode: "HU",
      country: "Hungary",
    },
    {
      countryCode: "354",
      isoCode: "IS",
      country: "Iceland",
    },
    {
      countryCode: "91",
      isoCode: "IN",
      country: "India",
    },
    {
      countryCode: "62",
      isoCode: "ID",
      country: "Indonesia",
    },
    {
      countryCode: "98",
      isoCode: "IR",
      country: "Iran",
    },
    {
      countryCode: "964",
      isoCode: "IQ",
      country: "Iraq",
    },
    {
      countryCode: "353",
      isoCode: "IE",
      country: "Ireland",
    },
    {
      countryCode: "972",
      isoCode: "IL",
      country: "Israel",
    },
    {
      countryCode: "39",
      isoCode: "IT",
      country: "Italy",
    },
    {
      countryCode: "225",
      isoCode: "CI",
      country: "Ivory Coast",
    },
    {
      countryCode: "81",
      isoCode: "JP",
      country: "Japan",
    },
    {
      countryCode: "962",
      isoCode: "JO",
      country: "Jordan",
    },
    {
      countryCode: "7313",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7327",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "77172",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7312",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "773622",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7321",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7324",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7336",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7318",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7315",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7325",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7311",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7326",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "7310",
      isoCode: "KZ",
      country: "Kazakhstan",
    },
    {
      countryCode: "254",
      isoCode: "KE",
      country: "Kenya",
    },
    {
      countryCode: "686",
      isoCode: "KI",
      country: "Kiribati",
    },
    {
      countryCode: "965",
      isoCode: "KW",
      country: "Kuwait",
    },
    {
      countryCode: "996",
      isoCode: "KG",
      country: "Kyrgyzstan",
    },
    {
      countryCode: "856",
      isoCode: "LA",
      country: "Laos",
    },
    {
      countryCode: "371",
      isoCode: "LV",
      country: "Latvia",
    },
    {
      countryCode: "961",
      isoCode: "LB",
      country: "Lebanon",
    },
    {
      countryCode: "266",
      isoCode: "LS",
      country: "Lesotho",
    },
    {
      countryCode: "231",
      isoCode: "LR",
      country: "Liberia",
    },
    {
      countryCode: "218",
      isoCode: "LY",
      country: "Libya",
    },
    {
      countryCode: "423",
      isoCode: "LI",
      country: "Liechtenstein",
    },
    {
      countryCode: "370",
      isoCode: "LT",
      country: "Lithuania",
    },
    {
      countryCode: "352",
      isoCode: "LU",
      country: "Luxembourg",
    },
    {
      countryCode: "389",
      isoCode: "MK",
      country: "Macedonia",
    },
    {
      countryCode: "261",
      isoCode: "MG",
      country: "Madagascar",
    },
    {
      countryCode: "265",
      isoCode: "MW",
      country: "Malawi",
    },
    {
      countryCode: "60",
      isoCode: "MY",
      country: "Malaysia",
    },
    {
      countryCode: "960",
      isoCode: "MV",
      country: "Maldives",
    },
    {
      countryCode: "223",
      isoCode: "ML",
      country: "Mali",
    },
    {
      countryCode: "356",
      isoCode: "MT",
      country: "Malta",
    },
    {
      countryCode: "692",
      isoCode: "MH",
      country: "Marshall Islands",
    },
    {
      countryCode: "222",
      isoCode: "MR",
      country: "Mauritania",
    },
    {
      countryCode: "230",
      isoCode: "MU",
      country: "Mauritius",
    },
    {
      countryCode: "52",
      isoCode: "MX",
      country: "Mexico",
    },
    {
      countryCode: "691",
      isoCode: "FM",
      country: "Micronesia",
    },
    {
      countryCode: "373",
      isoCode: "MD",
      country: "Moldova",
    },
    {
      countryCode: "377",
      isoCode: "MC",
      country: "Monaco",
    },
    {
      countryCode: "976",
      isoCode: "MN",
      country: "Mongolia",
    },
    {
      countryCode: "382",
      isoCode: "ME",
      country: "Montenegro",
    },
    {
      countryCode: "212",
      isoCode: "MA",
      country: "Morocco",
    },
    {
      countryCode: "258",
      isoCode: "MZ",
      country: "Mozambique",
    },
    {
      countryCode: "95",
      isoCode: "MM",
      country: "Myanmar",
    },
    {
      countryCode: "264",
      isoCode: "NA",
      country: "Namibia",
    },
    {
      countryCode: "674",
      isoCode: "NR",
      country: "Nauru",
    },
    {
      countryCode: "977",
      isoCode: "NP",
      country: "Nepal",
    },
    {
      countryCode: "31",
      isoCode: "NL",
      country: "Netherlands",
    },
    {
      countryCode: "64",
      isoCode: "NZ",
      country: "New Zealand",
    },
    {
      countryCode: "505",
      isoCode: "NI",
      country: "Nicaragua",
    },
    {
      countryCode: "227",
      isoCode: "NE",
      country: "Niger",
    },
    {
      countryCode: "234",
      isoCode: "NG",
      country: "Nigeria",
    },
    {
      countryCode: "47",
      isoCode: "NO",
      country: "Norway",
    },
    {
      countryCode: "968",
      isoCode: "OM",
      country: "Oman",
    },
    {
      countryCode: "92",
      isoCode: "PK",
      country: "Pakistan",
    },
    {
      countryCode: "680",
      isoCode: "PW",
      country: "Palau",
    },
    {
      countryCode: "507",
      isoCode: "PA",
      country: "Panama",
    },
    {
      countryCode: "675",
      isoCode: "PG",
      country: "Papua New Guinea",
    },
    {
      countryCode: "595",
      isoCode: "PY",
      country: "Paraguay",
    },
    {
      countryCode: "51",
      isoCode: "PE",
      country: "Peru",
    },
    {
      countryCode: "63",
      isoCode: "PH",
      country: "Philippines",
    },
    {
      countryCode: "48",
      isoCode: "PL",
      country: "Poland",
    },
    {
      countryCode: "351",
      isoCode: "PT",
      country: "Portugal",
    },
    {
      countryCode: "1787",
      isoCode: "PR",
      country: "Puerto Rico",
    },
    {
      countryCode: "1939",
      isoCode: "PR",
      country: "Puerto Rico",
    },
    {
      countryCode: "974",
      isoCode: "QA",
      country: "Qatar",
    },
    {
      countryCode: "242",
      isoCode: "CG",
      country: "Republic of the Congo",
    },
    {
      countryCode: "40",
      isoCode: "RO",
      country: "Romania",
    },
    {
      countryCode: "7",
      isoCode: "RU",
      country: "Russia",
    },
    {
      countryCode: "250",
      isoCode: "RW",
      country: "Rwanda",
    },
    {
      countryCode: "290",
      isoCode: "SH",
      country: "Saint Helena",
    },
    {
      countryCode: "508",
      isoCode: "PM",
      country: "Saint Pierre and Miquelon",
    },
    {
      countryCode: "685",
      isoCode: "WS",
      country: "Samoa",
    },
    {
      countryCode: "378",
      isoCode: "SM",
      country: "San Marino",
    },
    {
      countryCode: "239",
      isoCode: "ST",
      country: "Sao Tome and Principe",
    },
    {
      countryCode: "966",
      isoCode: "SA",
      country: "Saudi Arabia",
    },
    {
      countryCode: "221",
      isoCode: "SN",
      country: "Senegal",
    },
    {
      countryCode: "381",
      isoCode: "RS",
      country: "Serbia",
    },
    {
      countryCode: "248",
      isoCode: "SC",
      country: "Seychelles",
    },
    {
      countryCode: "232",
      isoCode: "SL",
      country: "Sierra Leone",
    },
    {
      countryCode: "65",
      isoCode: "SG",
      country: "Singapore",
    },
    {
      countryCode: "421",
      isoCode: "SK",
      country: "Slovakia",
    },
    {
      countryCode: "386",
      isoCode: "SI",
      country: "Slovenia",
    },
    {
      countryCode: "677",
      isoCode: "SB",
      country: "Solomon Islands",
    },
    {
      countryCode: "252",
      isoCode: "SO",
      country: "Somalia",
    },
    {
      countryCode: "27",
      isoCode: "ZA",
      country: "South Africa",
    },
    {
      countryCode: "82",
      isoCode: "KR",
      country: "South Korea",
    },
    {
      countryCode: "211",
      isoCode: "SS",
      country: "South Sudan",
    },
    {
      countryCode: "34",
      isoCode: "ES",
      country: "Spain",
    },
    {
      countryCode: "94",
      isoCode: "LK",
      country: "Sri Lanka",
    },
    {
      countryCode: "249",
      isoCode: "SD",
      country: "Sudan",
    },
    {
      countryCode: "597",
      isoCode: "SR",
      country: "Suriname",
    },
    {
      countryCode: "268",
      isoCode: "SZ",
      country: "Swaziland",
    },
    {
      countryCode: "46",
      isoCode: "SE",
      country: "Sweden",
    },
    {
      countryCode: "41",
      isoCode: "CH",
      country: "Switzerland",
    },
    {
      countryCode: "963",
      isoCode: "SY",
      country: "Syria",
    },
    {
      countryCode: "886",
      isoCode: "TW",
      country: "Taiwan",
    },
    {
      countryCode: "992",
      isoCode: "TJ",
      country: "Tajikistan",
    },
    {
      countryCode: "255",
      isoCode: "TZ",
      country: "Tanzania",
    },
    {
      countryCode: "66",
      isoCode: "TH",
      country: "Thailand",
    },
    {
      countryCode: "228",
      isoCode: "TG",
      country: "Togo",
    },
    {
      countryCode: "676",
      isoCode: "TO",
      country: "Tonga",
    },
    {
      countryCode: "1868",
      isoCode: "TT",
      country: "Trinidad and Tobago",
    },
    {
      countryCode: "216",
      isoCode: "TN",
      country: "Tunisia",
    },
    {
      countryCode: "90",
      isoCode: "TR",
      country: "Turkey",
    },
    {
      countryCode: "993",
      isoCode: "TM",
      country: "Turkmenistan",
    },
    {
      countryCode: "688",
      isoCode: "TV",
      country: "Tuvalu",
    },
    {
      countryCode: "256",
      isoCode: "UG",
      country: "Uganda",
    },
    {
      countryCode: "380",
      isoCode: "UA",
      country: "Ukraine",
    },
    {
      countryCode: "971",
      isoCode: "AE",
      country: "United Arab Emirates",
    },
    {
      countryCode: "44",
      isoCode: "GB",
      country: "United Kingdom",
    },
    {
      countryCode: "1907",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1205",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1251",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1256",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1334",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1479",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1501",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1870",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1480",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1520",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1602",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1623",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1928",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1209",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1213",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1310",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1323",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1408",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1415",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1510",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1530",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1559",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1562",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1619",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1626",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1650",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1661",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1707",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1714",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1760",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1805",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1818",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1831",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1858",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1909",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1916",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1925",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1949",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1951",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1303",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1719",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1970",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1203",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1860",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1202",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1302",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1239",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1305",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1321",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1352",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1386",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1407",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1561",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1727",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1772",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1813",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1850",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1863",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1904",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1941",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1954",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1229",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1404",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1478",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1706",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1770",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1912",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1808",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1319",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1515",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1563",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1641",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1712",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1208",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1217",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1309",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1312",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1618",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1630",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1708",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1773",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1815",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1847",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1219",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1260",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1317",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1574",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1765",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1812",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1316",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1620",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1785",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1913",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1270",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1502",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1606",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1859",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1225",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1318",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1337",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1504",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1985",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1413",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1508",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1617",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1781",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1978",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1301",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1410",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1207",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1231",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1248",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1269",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1313",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1517",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1586",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1616",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1734",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1810",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1906",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1989",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1218",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1320",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1507",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1612",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1651",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1763",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1952",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1314",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1417",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1573",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1636",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1660",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1816",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1228",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1601",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1662",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1406",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1252",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1336",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1704",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1828",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1910",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1919",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1701",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1308",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1402",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1603",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1201",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1609",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1732",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1856",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1908",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1973",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1505",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1575",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1702",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1775",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1212",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1315",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1516",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1518",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1585",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1607",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1631",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1716",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1718",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1845",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1914",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1216",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1330",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1419",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1440",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1513",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1614",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1740",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1937",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1405",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1580",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1918",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1503",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1541",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1215",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1412",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1570",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1610",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1717",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1724",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1814",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1401",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1803",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1843",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1864",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1605",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1423",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1615",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1731",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1865",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1901",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1931",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1210",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1214",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1254",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1281",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1325",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1361",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1409",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1432",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1512",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1713",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1806",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1817",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1830",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1903",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1915",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1936",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1940",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1956",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1972",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1979",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1435",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1801",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1276",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1434",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1540",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1703",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1757",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1804",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1802",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1206",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1253",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1360",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1425",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1509",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1262",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1414",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1608",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1715",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1920",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1304",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "1307",
      isoCode: "US",
      country: "United States",
    },
    {
      countryCode: "598",
      isoCode: "UY",
      country: "Uruguay",
    },
    {
      countryCode: "998",
      isoCode: "UZ",
      country: "Uzbekistan",
    },
    {
      countryCode: "678",
      isoCode: "VU",
      country: "Vanuatu",
    },
    {
      countryCode: "58",
      isoCode: "VE",
      country: "Venezuela",
    },
    {
      countryCode: "84",
      isoCode: "VN",
      country: "Vietnam",
    },
    {
      countryCode: "967",
      isoCode: "YE",
      country: "Yemen",
    },
    {
      countryCode: "260",
      isoCode: "ZM",
      country: "Zambia",
    },
    {
      countryCode: "263",
      isoCode: "ZW",
      country: "Zimbabwe",
    },
  ];

  constructor() {
    this.countries.forEach((country) => {
      this.countriesHashMap.addToHashMap(country.countryCode, country.isoCode);
    });
  }

  public getCountriesMap() {
    return this.countriesHashMap;
  }

  public getMatchingIsoCode(
    phoneNumber: string
  ): { phoneNumber: string; isoCode: string; countryCode: string } | null {
    for (let i = 1; i <= 4; i++) {
      const potentialCountryCode = phoneNumber.substring(1, 1 + i); // Skip '+' and take up to 3 digits

      const isoCode = this.countriesHashMap.getValueFromHashMap(potentialCountryCode);

      if (isoCode) {
        return {
          phoneNumber: phoneNumber.substring(1 + i),
          isoCode,
          countryCode: `+${potentialCountryCode}`,
        };
      }
    }
    return null; // No matching country code found
  }
}
