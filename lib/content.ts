// All website copy lives here. Edit text, then redeploy.
import type { Service, Faq, Feature, Step } from "./types";

/** Main target locations – shown first and highlighted. */
export const PRIMARY_AREAS: string[] = [
  "RTC Complex, Dwaraka Nagar",
  "NAD Junction",
  "Gajuwaka",
  "Pendurthi",
  "Vepagunta"
];

/** Other localities we also serve. Confirm with the owner and edit freely. */
export const AREAS: string[] = [
  "MVP Colony",
  "Madhurawada",
  "Seethammadhara",
  "Rushikonda",
  "PM Palem",
  "Yendada",
  "Akkayyapalem",
  "Maddilapalem",
  "Kancharapalem",
  "Siripuram",
  "Simhachalam",
  "Marripalem",
  "Arilova",
  "Gopalapatnam",
  "Malkapuram",
  "Kommadi",
  "Beach Road",
  "Lawsons Bay Colony"
];

/** Brand logos shown in the scrolling brands strip (files in public/brands/logos/). */
export const BRANDS: { slug: string; name: string; w: number; h: number }[] = [
  {
    "slug": "lg",
    "name": "LG",
    "w": 216,
    "h": 101
  },
  {
    "slug": "samsung",
    "name": "Samsung",
    "w": 230,
    "h": 46
  },
  {
    "slug": "whirlpool",
    "name": "Whirlpool",
    "w": 232,
    "h": 97
  },
  {
    "slug": "haier",
    "name": "Haier",
    "w": 213,
    "h": 68
  },
  {
    "slug": "godrej",
    "name": "Godrej",
    "w": 216,
    "h": 107
  },
  {
    "slug": "voltas",
    "name": "Voltas",
    "w": 216,
    "h": 55
  },
  {
    "slug": "daikin",
    "name": "Daikin",
    "w": 238,
    "h": 57
  },
  {
    "slug": "bajaj",
    "name": "Bajaj",
    "w": 195,
    "h": 113
  },
  {
    "slug": "carrier",
    "name": "Carrier",
    "w": 222,
    "h": 95
  },
  {
    "slug": "blue-star",
    "name": "Blue Star",
    "w": 247,
    "h": 61
  },
  {
    "slug": "hitachi",
    "name": "Hitachi",
    "w": 234,
    "h": 50
  },
  {
    "slug": "panasonic",
    "name": "Panasonic",
    "w": 235,
    "h": 45
  },
  {
    "slug": "mitsubishi-electric",
    "name": "Mitsubishi Electric",
    "w": 234,
    "h": 76
  },
  {
    "slug": "mitsubishi-heavy-industries",
    "name": "Mitsubishi Heavy Industries",
    "w": 237,
    "h": 117
  },
  {
    "slug": "lloyd",
    "name": "Lloyd",
    "w": 211,
    "h": 92
  },
  {
    "slug": "ifb",
    "name": "IFB",
    "w": 169,
    "h": 67
  },
  {
    "slug": "onida",
    "name": "Onida",
    "w": 229,
    "h": 83
  },
  {
    "slug": "toshiba",
    "name": "Toshiba",
    "w": 234,
    "h": 47
  },
  {
    "slug": "hisense",
    "name": "Hisense",
    "w": 215,
    "h": 42
  },
  {
    "slug": "general",
    "name": "O General",
    "w": 242,
    "h": 45
  },
  {
    "slug": "crompton",
    "name": "Crompton",
    "w": 242,
    "h": 50
  },
  {
    "slug": "havells",
    "name": "Havells",
    "w": 183,
    "h": 106
  },
  {
    "slug": "orient-electric",
    "name": "Orient Electric",
    "w": 222,
    "h": 83
  },
  {
    "slug": "v-guard",
    "name": "V-Guard",
    "w": 205,
    "h": 89
  },
  {
    "slug": "usha",
    "name": "Usha",
    "w": 230,
    "h": 64
  },
  {
    "slug": "philips",
    "name": "Philips",
    "w": 218,
    "h": 51
  },
  {
    "slug": "bosch",
    "name": "Bosch",
    "w": 242,
    "h": 62
  },
  {
    "slug": "kent",
    "name": "Kent",
    "w": 173,
    "h": 79
  }
];

export const SERVICES: Service[] = [
  {
    "slug": "ac-repair-service-vizag",
    "icon": "snow",
    "cat": "AC Services",
    "short": "AC Repair",
    "chips": [
      "Split AC Repair",
      "Window AC Repair",
      "AC Installation",
      "AC Uninstallation",
      "AC General Service",
      "AC Gas Filling",
      "AC Cooling Problems",
      "AC Maintenance"
    ],
    "title": "AC Repair in Vizag | Split & Window AC | AC Service Vizag",
    "desc": "AC repair service in Vizag for split and window ACs – gas filling, general service, cooling and water leakage problems. Doorstep visit. Call 9000626018.",
    "h1": "AC Repair Service in Vizag – Split & Window AC Experts",
    "lead": "AC not cooling, leaking water or making noise? AC Service Vizag repairs and services split and window air conditioners at homes and offices across Visakhapatnam.",
    "alt": "Split AC with cool airflow – AC repair service in Vizag",
    "about": [
      "Visakhapatnam's coastal humidity and long summers make air conditioners work harder than in most cities. Salt-laden air settles on outdoor units, filters clog faster and cooling coils lose efficiency. The result is an AC that runs all day but never feels cold enough, or a bill that keeps rising.",
      "Our technicians diagnose the actual cause – a dirty coil, low refrigerant, a weak capacitor, a faulty sensor or a blocked drain line – and explain it to you before any work begins. Whether you have an inverter split AC in an NAD Junction apartment or an older window AC in Gajuwaka, we bring the tools needed to service and repair it properly at your doorstep."
    ],
    "offers": [
      {
        "title": "Split AC Repair",
        "text": "Indoor and outdoor unit faults, PCB and sensor issues, fan motor and capacitor replacement for inverter and non-inverter split ACs."
      },
      {
        "title": "Window AC Repair",
        "text": "Compressor, thermostat, fan and noise problems diagnosed and repaired for all window AC models."
      },
      {
        "title": "AC General Service",
        "text": "Deep cleaning of filters, cooling coil and blower with water jet, plus drain-line flushing to restore airflow and cooling."
      },
      {
        "title": "AC Gas Filling",
        "text": "Leak detection, leak repair and refrigerant top-up or full charge using pressure gauges to the correct level."
      },
      {
        "title": "AC Cooling Problems",
        "text": "AC running but not cooling? We check gas pressure, coil condition, fan speed and thermostat to find the root cause."
      },
      {
        "title": "AC Maintenance",
        "text": "Periodic preventive maintenance to keep your AC efficient through Vizag's summer and reduce sudden breakdowns."
      }
    ],
    "problems": [
      {
        "title": "AC not cooling",
        "text": "Usually caused by low gas, a clogged coil or filters, or a failing capacitor."
      },
      {
        "title": "Water leaking from indoor unit",
        "text": "A blocked drain pipe or a tilted indoor unit makes water drip onto walls."
      },
      {
        "title": "Bad smell from the AC",
        "text": "Mould and dust build-up on the coil and blower in humid weather."
      },
      {
        "title": "Outdoor unit not starting",
        "text": "Capacitor, contactor, wiring or compressor issues in the outdoor unit."
      },
      {
        "title": "Loud noise or vibration",
        "text": "Loose panels, worn fan bearings or debris in the fan blades."
      },
      {
        "title": "Error code on display",
        "text": "Sensor, PCB or communication faults common in inverter split ACs."
      }
    ],
    "faqs": [
      {
        "q": "How much does AC repair cost in Vizag?",
        "a": "The cost depends on the AC type and the actual fault. A general service costs less than a gas charge or a part replacement. Our technician inspects the AC first and tells you the charges before starting any work. Call 9000626018 for details."
      },
      {
        "q": "How often should I service my AC in Visakhapatnam?",
        "a": "Because of Vizag's coastal humidity and long summers, most homes benefit from a general AC service before summer and another during the season if the AC is used daily."
      },
      {
        "q": "Do you repair inverter ACs?",
        "a": "Yes. We service and repair both inverter and non-inverter split ACs as well as window ACs from all major brands."
      },
      {
        "q": "My AC is running but not cooling. Does it need gas filling?",
        "a": "Not always. Low cooling can also come from dirty coils, clogged filters or a weak capacitor. We check gas pressure with gauges before recommending gas filling."
      },
      {
        "q": "Which areas in Vizag do you cover for AC repair?",
        "a": "Our main location is RTC Complex, Dwaraka Nagar. We mainly serve Dwaraka Nagar, NAD Junction, Gajuwaka, Pendurthi and Vepagunta, and also cover the rest of Visakhapatnam city and nearby localities. Call or WhatsApp to confirm a visit to your area."
      }
    ],
    "image": "/images/services/ac.webp",
    "waMessage": "Hi AC Service Vizag, I need AC repair service in Vizag.",
    "cardTitle": "Air conditioning",
    "cardText": "Cool, comfortable rooms start with AC care you can count on.",
    "aboutHeading": "Reliable AC repair for Vizag's hot and humid climate"
  },
  {
    "slug": "ac-installation-vizag",
    "icon": "tool",
    "cat": "AC Services",
    "short": "AC Installation",
    "chips": [
      "Split AC Installation",
      "Window AC Installation",
      "AC Uninstallation",
      "AC Shifting",
      "Copper Piping",
      "Stand & Bracket Fitting"
    ],
    "title": "AC Installation in Vizag | Split & Window | AC Service Vizag",
    "desc": "AC installation in Vizag for split and window ACs. Neat copper piping, secure outdoor unit mounting, uninstallation and shifting. Call 9000626018.",
    "h1": "AC Installation in Vizag – Neat, Safe & Correctly Fitted",
    "lead": "Bought a new AC or moving house? We install, uninstall and shift split and window ACs across Visakhapatnam so they cool efficiently from day one.",
    "alt": "AC Service Vizag technician installing and checking an air conditioner in a Vizag home",
    "about": [
      "A poorly installed AC can lose cooling, leak water and fail early – even if the unit is brand new. Common installation mistakes include incorrect indoor unit levelling, long or kinked copper pipes, poor insulation, loose flare joints and outdoor units mounted where hot air cannot escape.",
      "AC Service Vizag plans each installation around your room and building. We choose the right position for the indoor unit, mount the outdoor unit securely on a stand or bracket, route the piping neatly, check for gas leaks and test the cooling before we leave. In high-rise apartments along Beach Road, Rushikonda or Madhurawada we also take care to fix outdoor units safely for coastal wind."
    ],
    "offers": [
      {
        "title": "Split AC Installation",
        "text": "Indoor unit mounting, copper piping, drain pipe, electrical connection, leak check and cooling test for new split ACs."
      },
      {
        "title": "Window AC Installation",
        "text": "Frame and support fitting, proper tilt for drainage and sealing of gaps around the unit."
      },
      {
        "title": "AC Uninstallation",
        "text": "Safe removal with gas pump-down so refrigerant is saved inside the outdoor unit for reinstallation."
      },
      {
        "title": "AC Shifting",
        "text": "Uninstall from your old home and reinstall at the new location anywhere in Vizag."
      },
      {
        "title": "Copper Piping & Extension",
        "text": "Pipe extension, insulation and concealed or neat surface routing as per site conditions."
      },
      {
        "title": "Outdoor Unit Stand & Bracket",
        "text": "Strong wall bracket or floor stand fitting for safe mounting and good airflow."
      }
    ],
    "problems": [
      {
        "title": "Weak cooling after installation",
        "text": "Often caused by long piping, a leaking flare joint or air left in the lines."
      },
      {
        "title": "Water dripping inside the room",
        "text": "Indoor unit not levelled correctly or drain pipe sloped the wrong way."
      },
      {
        "title": "Outdoor unit vibrating",
        "text": "Loose bracket, missing rubber pads or an uneven stand."
      },
      {
        "title": "Gas loss after shifting",
        "text": "Uninstallation done without a proper pump-down."
      },
      {
        "title": "Tripping MCB on start",
        "text": "Wrong cable size or no dedicated circuit for the AC."
      },
      {
        "title": "Noise inside the room",
        "text": "Indoor unit not firmly fixed to the wall plate."
      }
    ],
    "faqs": [
      {
        "q": "Do you install new ACs bought online or from a showroom?",
        "a": "Yes. We install split and window ACs of all major brands, whether you bought them online or from a local store in Vizag."
      },
      {
        "q": "Is copper piping included in AC installation?",
        "a": "Standard installation uses the pipe supplied with the AC. If your location needs extra length, we will tell you the requirement and the cost before fitting."
      },
      {
        "q": "Can you shift my AC to a new house in Vizag?",
        "a": "Yes. We uninstall the AC with a proper gas pump-down, and reinstall it at your new address with a leak check and cooling test."
      },
      {
        "q": "Do I need a separate electrical point for the AC?",
        "a": "A dedicated socket and suitable MCB are recommended. Our electrical team can install the AC point and MCB if your home does not have one."
      },
      {
        "q": "How long does a split AC installation take?",
        "a": "Most standard split AC installations are completed within a few hours, depending on wall type, pipe length and outdoor unit position."
      }
    ],
    "image": "/images/rk-hero.jpg",
    "waMessage": "Hi AC Service Vizag, I need AC installation in Vizag.",
    "cardTitle": "AC installation",
    "cardText": "Neat, safe split and window AC fitting, uninstallation and shifting.",
    "aboutHeading": "Why correct AC installation matters"
  },
  {
    "slug": "refrigerator-repair-vizag",
    "icon": "fridge",
    "cat": "Refrigerator Services",
    "short": "Refrigerator Repair",
    "chips": [
      "Refrigerator Repair",
      "Single Door Refrigerator",
      "Double Door Refrigerator",
      "Cooling Problems",
      "Compressor Problems",
      "Gas Filling",
      "Maintenance"
    ],
    "title": "Refrigerator Repair in Vizag | Gas Filling & Compressor",
    "desc": "Refrigerator repair in Vizag for single door, double door and frost-free fridges. Cooling, compressor and gas filling problems fixed. Call 9000626018.",
    "h1": "Refrigerator Repair in Vizag – Single & Double Door Fridges",
    "lead": "Fridge not cooling, freezer icing up or compressor not starting? We repair single door, double door and frost-free refrigerators at your home in Visakhapatnam.",
    "alt": "Double door refrigerator – refrigerator repair in Vizag",
    "about": [
      "A refrigerator that stops cooling is an urgent problem – food and medicines can spoil within hours in Vizag's warm weather. Many fridge faults are caused by simple parts such as a thermostat, defrost heater, timer, relay or door gasket, while others involve the compressor or a refrigerant leak.",
      "Our technician tests the cooling system step by step to find the real fault rather than guessing. We repair direct-cool single door fridges and frost-free double door models, including inverter compressor refrigerators, and we explain the repair and charges before starting."
    ],
    "offers": [
      {
        "title": "Single Door Refrigerator Repair",
        "text": "Thermostat, relay, overload protector and cooling issues in direct-cool single door fridges."
      },
      {
        "title": "Double Door Refrigerator Repair",
        "text": "Frost-free system faults – defrost heater, timer, sensor and fan motor problems."
      },
      {
        "title": "Cooling Problems",
        "text": "Diagnosis of weak cooling, freezer cooling but not the lower section, and uneven temperature."
      },
      {
        "title": "Compressor Problems",
        "text": "Compressor not starting, tripping or overheating – checked and repaired or replaced."
      },
      {
        "title": "Refrigerator Gas Filling",
        "text": "Leak detection, brazing and refrigerant recharge to the correct pressure."
      },
      {
        "title": "Refrigerator Maintenance",
        "text": "Condenser cleaning, gasket check and drain cleaning to keep the fridge efficient."
      }
    ],
    "problems": [
      {
        "title": "Fridge not cooling",
        "text": "Thermostat, relay, compressor or gas leakage issues."
      },
      {
        "title": "Ice building up in freezer",
        "text": "Defrost heater, timer or sensor failure in frost-free fridges."
      },
      {
        "title": "Water collecting under the fridge",
        "text": "Blocked defrost drain or damaged drain tray."
      },
      {
        "title": "Compressor clicking on and off",
        "text": "Faulty relay or overload protector, or low voltage."
      },
      {
        "title": "Door not closing tightly",
        "text": "Worn door gasket letting warm air in."
      },
      {
        "title": "Unusual noise",
        "text": "Fan motor or compressor mounting problems."
      }
    ],
    "faqs": [
      {
        "q": "Do you repair refrigerators at home in Vizag?",
        "a": "Yes. Most refrigerator repairs, including gas filling and part replacement, are done at your home anywhere in Visakhapatnam and surrounding areas."
      },
      {
        "q": "Why is my fridge freezer cold but the bottom section warm?",
        "a": "In frost-free fridges this usually means the defrost system has failed and ice is blocking airflow. A defrost heater, timer, sensor or fan check is needed."
      },
      {
        "q": "How do I know if my refrigerator needs gas filling?",
        "a": "If the compressor runs but the fridge does not cool, and the cooling coil stays warm, there may be a gas leak. We confirm with a pressure test before refilling."
      },
      {
        "q": "Do you repair inverter refrigerators?",
        "a": "Yes. We diagnose and repair inverter compressor refrigerators from major brands."
      },
      {
        "q": "Which refrigerator brands do you service?",
        "a": "We service LG, Samsung, Whirlpool, Haier, Godrej and other common refrigerator brands."
      }
    ],
    "image": "/images/services/fridge.webp",
    "waMessage": "Hi AC Service Vizag, I need refrigerator repair in Vizag.",
    "cardTitle": "Refrigerators",
    "cardText": "Reliable fixes for cooling problems, compressors and more.",
    "aboutHeading": "Fast fridge repair to protect your food"
  },
  {
    "slug": "washing-machine-repair-vizag",
    "icon": "washer",
    "cat": "Washing Machine Services",
    "short": "Washing Machine Repair",
    "chips": [
      "Front Load Repair",
      "Top Load Repair",
      "Drum Repair",
      "Motor Problems",
      "Drainage Problems",
      "Installation",
      "Maintenance"
    ],
    "title": "Washing Machine Repair in Vizag | Front & Top Load",
    "desc": "Washing machine repair in Vizag for front load, top load and semi-automatic machines. Drum, motor, drainage and spin problems fixed. Call 9000626018.",
    "h1": "Washing Machine Repair in Vizag – Front Load & Top Load",
    "lead": "Machine not spinning, not draining or showing an error? We repair fully automatic front load, top load and semi-automatic washing machines at your doorstep in Visakhapatnam.",
    "alt": "Front load washing machine – washing machine repair in Vizag",
    "about": [
      "A washing machine breakdown disrupts the whole household. Modern machines combine motors, pumps, sensors and control boards, so the same symptom – for example, a machine that stops mid-cycle – can have several different causes.",
      "Our technicians check the door lock, water inlet, drain pump, motor, belt, drum bearings and control board to pinpoint the fault. Hard water and lint in Vizag homes often lead to blocked filters and drainage problems, which we clean as part of the repair. We also install new machines and set up inlet and drain connections correctly."
    ],
    "offers": [
      {
        "title": "Front Load Repair",
        "text": "Door lock, drum bearing, drain pump, heater and PCB faults in front load machines."
      },
      {
        "title": "Top Load Repair",
        "text": "Spin, agitation, gearbox, belt and lid switch problems in top load and semi-automatic machines."
      },
      {
        "title": "Drum Repair",
        "text": "Drum noise, bearing wear, spider arm and drum alignment problems."
      },
      {
        "title": "Motor Problems",
        "text": "Washing machine motor not running, overheating or making noise – tested and repaired."
      },
      {
        "title": "Drainage Problems",
        "text": "Blocked drain pump, filter or hose cleared so water drains fully."
      },
      {
        "title": "Installation & Maintenance",
        "text": "New machine installation, inlet and drain setup, and periodic drum and filter cleaning."
      }
    ],
    "problems": [
      {
        "title": "Machine not spinning",
        "text": "Belt, motor, lid or door switch, or unbalanced load sensor issues."
      },
      {
        "title": "Water not draining",
        "text": "Blocked drain filter, pump or hose."
      },
      {
        "title": "Loud noise during spin",
        "text": "Worn drum bearings or loose counterweights."
      },
      {
        "title": "Water leaking",
        "text": "Damaged door seal, hose or inlet valve."
      },
      {
        "title": "Error code on display",
        "text": "Sensor, door lock or control board faults."
      },
      {
        "title": "Machine not starting",
        "text": "Power supply, door lock or PCB problems."
      }
    ],
    "faqs": [
      {
        "q": "Do you repair both front load and top load washing machines?",
        "a": "Yes. We repair fully automatic front load and top load machines as well as semi-automatic washing machines."
      },
      {
        "q": "Why is my washing machine not draining water?",
        "a": "The most common causes are a blocked drain filter, a choked drain hose or a faulty drain pump. We clean or replace the part as needed."
      },
      {
        "q": "My front load machine is very noisy during spin. What is wrong?",
        "a": "Loud rumbling during spin usually points to worn drum bearings, loose counterweights or an unbalanced load. A technician check is recommended before it causes more damage."
      },
      {
        "q": "Do you install new washing machines?",
        "a": "Yes. We install new washing machines, connect the inlet and drain properly and run a test cycle."
      },
      {
        "q": "Which washing machine brands do you repair in Vizag?",
        "a": "We repair LG, Samsung, Whirlpool, Haier, Godrej and other popular washing machine brands."
      }
    ],
    "image": "/images/services/washer.webp",
    "waMessage": "Hi AC Service Vizag, I need washing machine repair in Vizag.",
    "cardTitle": "Washing machines",
    "cardText": "Get laundry day moving again with careful, capable repairs.",
    "aboutHeading": "Doorstep washing machine repair you can rely on"
  },
  {
    "slug": "ro-service-vizag",
    "icon": "drop",
    "cat": "RO Water Purifier Services",
    "short": "RO Service",
    "chips": [
      "RO Repair",
      "Filter Replacement",
      "RO Installation",
      "Water Leakage Repair",
      "RO Maintenance"
    ],
    "title": "RO Service in Vizag | Water Purifier Repair & Filter Change",
    "desc": "RO service in Vizag – water purifier repair, filter and membrane replacement, RO installation and leakage repair at your home. Call 9000626018.",
    "h1": "RO Water Purifier Service in Vizag – Repair, Filters & Installation",
    "lead": "Purifier not giving water, tasting different or leaking? We repair and service RO, RO+UV and UV water purifiers at homes and offices across Visakhapatnam.",
    "alt": "RO water purifier with filters – RO service in Vizag",
    "about": [
      "An RO water purifier only works as well as its filters. Over time sediment and carbon filters get choked and the RO membrane loses efficiency – especially where the incoming water is hard or has high dissolved solids. The purifier may still run, but water flow drops and taste changes.",
      "AC Service Vizag checks pump pressure, filters, membrane, UV lamp, float valve and solenoid valve to keep your purifier working properly. We also install new purifiers on the wall with correct inlet and drain connections, and fix leaks that can damage kitchen cabinets."
    ],
    "offers": [
      {
        "title": "RO Repair",
        "text": "Pump, solenoid valve, SMPS adaptor, float switch and UV lamp faults repaired."
      },
      {
        "title": "Filter Replacement",
        "text": "Sediment, pre-carbon and post-carbon filter replacement at the right intervals."
      },
      {
        "title": "RO Membrane Replacement",
        "text": "Membrane change when output reduces or water quality drops."
      },
      {
        "title": "RO Installation",
        "text": "Wall mounting, inlet valve, drain line and first-flush setup for new purifiers."
      },
      {
        "title": "Water Leakage Repair",
        "text": "Leaking pipes, connectors, filter housings and tanks fixed."
      },
      {
        "title": "RO Maintenance",
        "text": "Periodic cleaning, sanitisation of the storage tank and filter health check."
      }
    ],
    "problems": [
      {
        "title": "No water from the purifier",
        "text": "Pump, solenoid valve, low input pressure or a choked filter."
      },
      {
        "title": "Very slow water flow",
        "text": "Blocked filters or an exhausted RO membrane."
      },
      {
        "title": "Change in water taste or smell",
        "text": "Carbon filters or membrane due for replacement."
      },
      {
        "title": "Water leaking from the unit",
        "text": "Loose connectors, cracked pipes or filter housing leaks."
      },
      {
        "title": "Purifier keeps running non-stop",
        "text": "Float valve or pressure switch failure."
      },
      {
        "title": "UV light indicator off",
        "text": "UV lamp or its power supply needs replacement."
      }
    ],
    "faqs": [
      {
        "q": "How often should RO filters be changed?",
        "a": "It depends on your water quality and daily usage. In many Vizag homes, sediment and carbon filters need replacement more often than the RO membrane. Our technician can check and advise."
      },
      {
        "q": "Why is my RO purifier giving very little water?",
        "a": "Low output is usually due to choked pre-filters or an exhausted membrane, and sometimes a weak pump or low input pressure."
      },
      {
        "q": "Do you service all RO purifier brands?",
        "a": "Yes. We service RO, RO+UV and UV purifiers of commonly used brands in Visakhapatnam."
      },
      {
        "q": "Can you install a new RO purifier?",
        "a": "Yes. We wall-mount the purifier, connect the inlet and drain lines and check the output before handing it over."
      },
      {
        "q": "Do you fix RO water leakage?",
        "a": "Yes. We identify the leaking connector, pipe or housing and repair or replace it."
      }
    ],
    "image": "/images/services/ro.webp",
    "waMessage": "Hi AC Service Vizag, I need RO water purifier service in Vizag.",
    "cardTitle": "RO water purifiers",
    "cardText": "Keep clean water flowing with dependable purifier care.",
    "aboutHeading": "Keep your drinking water safe and fresh"
  },
  {
    "slug": "geyser-repair-vizag",
    "icon": "flame",
    "cat": "Geyser Services",
    "short": "Geyser Repair",
    "chips": [
      "Geyser Repair",
      "Installation",
      "Heating Element Replacement",
      "Heating Problems",
      "Maintenance"
    ],
    "title": "Geyser Repair in Vizag | Water Heater Repair & Installation",
    "desc": "Geyser repair in Vizag – heating element replacement, thermostat repair, geyser installation and maintenance for storage and instant geysers. Call 9000626018.",
    "h1": "Geyser Repair in Vizag – Water Heater Repair & Installation",
    "lead": "No hot water, MCB tripping or water leaking from the geyser? We repair and install storage and instant geysers safely across Visakhapatnam.",
    "alt": "Electric storage geyser – geyser repair in Vizag",
    "about": [
      "A geyser combines water, pressure and high electrical load, so repairs must be done carefully. Hard water causes scale to build up on the heating element, which slows heating and eventually burns the element out. Faulty thermostats can cause water that is too hot or not hot at all, and a damaged safety valve can be dangerous.",
      "We test the element, thermostat, safety valve, wiring and earthing, and replace parts with suitable spares. We also install new geysers with proper mounting, inlet and outlet connections and electrical points, and we descale tanks during maintenance to improve heating."
    ],
    "offers": [
      {
        "title": "Geyser Repair",
        "text": "Diagnosis and repair of storage and instant electric geysers."
      },
      {
        "title": "Heating Element Replacement",
        "text": "Burnt or scaled heating elements replaced to restore fast heating."
      },
      {
        "title": "Thermostat Repair",
        "text": "Thermostat and indicator light faults fixed for correct water temperature."
      },
      {
        "title": "Heating Problems",
        "text": "No hot water, slow heating or water getting too hot – checked and resolved."
      },
      {
        "title": "Geyser Installation",
        "text": "Wall mounting, inlet and outlet plumbing connections and electrical point."
      },
      {
        "title": "Geyser Maintenance",
        "text": "Tank descaling, safety valve check and earthing check."
      }
    ],
    "problems": [
      {
        "title": "No hot water",
        "text": "Burnt heating element, thermostat failure or loose wiring."
      },
      {
        "title": "Water heats very slowly",
        "text": "Scale deposits on the heating element."
      },
      {
        "title": "MCB or RCCB trips",
        "text": "Earth leakage from a damaged element or wiring."
      },
      {
        "title": "Water leaking from the geyser",
        "text": "Faulty safety valve, loose joints or tank damage."
      },
      {
        "title": "Water too hot or steam",
        "text": "Thermostat stuck – needs urgent attention."
      },
      {
        "title": "Indicator light not working",
        "text": "Lamp or thermostat circuit fault."
      }
    ],
    "faqs": [
      {
        "q": "Why is my geyser not heating water?",
        "a": "The most common reasons are a burnt heating element, a faulty thermostat or a loose electrical connection. We test each part to find the fault."
      },
      {
        "q": "Why does my geyser trip the MCB?",
        "a": "Tripping usually means earth leakage from a damaged heating element or wiring. Switch off the geyser and get it checked before using it again."
      },
      {
        "q": "Do you install new geysers in Vizag?",
        "a": "Yes. We install storage and instant geysers with wall mounting, plumbing connections and a suitable electrical point."
      },
      {
        "q": "How often should a geyser be serviced?",
        "a": "In areas with hard water, a periodic descaling and safety check helps the geyser heat faster and last longer."
      },
      {
        "q": "Which geyser brands do you repair?",
        "a": "We repair Bajaj and other commonly used storage and instant geyser brands."
      }
    ],
    "image": "/images/services/geyser.webp",
    "waMessage": "Hi AC Service Vizag, I need geyser repair in Vizag.",
    "cardTitle": "Geysers",
    "cardText": "Restore dependable hot water with a safe, timely repair.",
    "aboutHeading": "Safe, careful geyser repair"
  },
  {
    "slug": "electrical-services-vizag",
    "icon": "bolt",
    "cat": "Electrical Services",
    "short": "Electrical Services",
    "chips": [
      "Home Electrical Wiring",
      "Switch Board Installation",
      "MCB Installation",
      "DB Installation",
      "Electrical Repair",
      "Electrical Maintenance"
    ],
    "title": "Electrical Services in Vizag | Electrician for Wiring & MCB",
    "desc": "Electrical services in Vizag – home wiring, switch board, MCB and DB installation, electrical repair and maintenance for homes and shops. Call 9000626018.",
    "h1": "Electrical Services in Vizag – Wiring, MCB & DB Installation",
    "lead": "Need a reliable electrician in Vizag? We handle home wiring, switch boards, MCB and distribution board installation, and electrical repairs for homes and shops.",
    "alt": "Switch board, MCB panel, wiring and bulb – electrical services in Vizag",
    "about": [
      "Electrical problems are not just inconvenient – they can be dangerous. Loose connections, overloaded circuits and old wiring can cause sparking, burning smells and frequent tripping. Heavy appliances like ACs and geysers also need correctly rated cables and dedicated MCBs.",
      "Our electricians handle new wiring and rewiring, switch board and socket installation, MCB and distribution board (DB) setup, and fault finding. Because we also service ACs, geysers and appliances, we make sure the electrical supply to each appliance is safe and suitable."
    ],
    "offers": [
      {
        "title": "Home Electrical Wiring",
        "text": "New wiring, rewiring and extension for homes, flats and shops."
      },
      {
        "title": "Switch Board Installation",
        "text": "Modular switch boards, sockets and appliance points installed neatly."
      },
      {
        "title": "MCB Installation",
        "text": "Correctly rated MCBs for lighting, power and AC or geyser circuits."
      },
      {
        "title": "DB Installation",
        "text": "Distribution board installation and circuit organisation for safer power."
      },
      {
        "title": "Electrical Repair",
        "text": "Tripping, sparking, short circuits and dead points traced and repaired."
      },
      {
        "title": "Electrical Maintenance",
        "text": "Periodic checks of connections, earthing and load to prevent faults."
      }
    ],
    "problems": [
      {
        "title": "MCB tripping frequently",
        "text": "Overloaded circuit, short circuit or earth leakage."
      },
      {
        "title": "Sparking switch or socket",
        "text": "Loose or burnt connections that need replacement."
      },
      {
        "title": "Power not coming to a point",
        "text": "Broken wire, loose joint or tripped circuit."
      },
      {
        "title": "Burning smell from wiring",
        "text": "Overheating cable – switch off and call an electrician."
      },
      {
        "title": "Lights flickering",
        "text": "Loose neutral or connection issues."
      },
      {
        "title": "No dedicated AC point",
        "text": "AC running on a normal socket and overheating it."
      }
    ],
    "faqs": [
      {
        "q": "Do you provide electrician service at home in Vizag?",
        "a": "Yes. Our electricians visit homes, flats and shops across Visakhapatnam and surrounding areas for wiring, installation and repair work."
      },
      {
        "q": "Can you install a separate MCB and point for my AC?",
        "a": "Yes. We install a dedicated socket and suitably rated MCB for ACs, geysers and other heavy appliances."
      },
      {
        "q": "Why does my MCB keep tripping?",
        "a": "Common causes are an overloaded circuit, a short circuit or earth leakage from an appliance or wiring. We trace the cause and fix it."
      },
      {
        "q": "Do you do complete house wiring?",
        "a": "Yes. We handle new wiring and rewiring work. Contact us with your requirement for an inspection and estimate."
      },
      {
        "q": "Do you install distribution boards (DB)?",
        "a": "Yes. We install and organise distribution boards with MCBs for each circuit."
      }
    ],
    "image": "/images/services/electrical.webp",
    "waMessage": "Hi AC Service Vizag, I need an electrician in Vizag.",
    "cardTitle": "Electrical works",
    "cardText": "Thoughtful home electrical work, completed with care.",
    "aboutHeading": "Safe electrical work for homes and shops"
  }
];

export const HOME_FAQS: Faq[] = [
  {
    "q": "What services does AC Service Vizag offer in Vizag?",
    "a": "We offer AC repair, AC installation, AC gas filling and general service, refrigerator repair, washing machine repair, RO water purifier service, geyser repair and home electrical services in Visakhapatnam."
  },
  {
    "q": "Which areas of Visakhapatnam do you cover?",
    "a": "Our main location is RTC Complex, Dwaraka Nagar, Visakhapatnam. From there we serve NAD Junction, Gajuwaka, Pendurthi, Vepagunta and the rest of Vizag city and nearby localities. Call or WhatsApp to confirm your area."
  },
  {
    "q": "How do I book a service?",
    "a": "Call 9000626018 or send a WhatsApp message with your appliance, the problem and your area. We will confirm a convenient visit time."
  },
  {
    "q": "Which brands do you service?",
    "a": "We service all major brands including LG, Samsung, Whirlpool, Haier, Godrej, Voltas, Daikin and Bajaj."
  },
  {
    "q": "Will I know the charges before the repair starts?",
    "a": "Yes. Our technician inspects the appliance, explains the problem and tells you the charges before starting any work."
  },
  {
    "q": "Do you provide doorstep service?",
    "a": "Yes. All our services are provided at your home or office in Visakhapatnam."
  }
];

export const WHY: Feature[] = [
  {
    "icon": "badge",
    "title": "Experienced technicians",
    "text": "Hands-on experience with ACs and home appliances of all major brands."
  },
  {
    "icon": "tool",
    "title": "Quality workmanship",
    "text": "Careful repairs, neat installations and a proper test before we leave."
  },
  {
    "icon": "clock",
    "title": "On-time response",
    "text": "We confirm a visit time and keep you informed."
  },
  {
    "icon": "check",
    "title": "Affordable charges",
    "text": "The fault and the charges are explained before any work starts."
  },
  {
    "icon": "shield",
    "title": "Genuine spare parts",
    "text": "Suitable, good-quality spares used for replacements."
  },
  {
    "icon": "chat",
    "title": "Customer satisfaction",
    "text": "Easy booking on call or WhatsApp, and follow-up if you need us."
  }
];

export const STEPS: Step[] = [
  {
    "title": "Contact us",
    "text": "Call or WhatsApp 90006 26018 – we reply quickly and confirm a visit time.",
    "icon": "phone"
  },
  {
    "title": "Explain the problem",
    "text": "Share the appliance, brand, the issue and your area in Vizag. A photo helps.",
    "icon": "chat"
  },
  {
    "title": "Technician visit",
    "text": "Our technician inspects, finds the real fault and explains the fix and charges first.",
    "icon": "tool"
  },
  {
    "title": "Service completed",
    "text": "Repaired, tested in front of you, and your home back to its routine.",
    "icon": "check"
  }
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
