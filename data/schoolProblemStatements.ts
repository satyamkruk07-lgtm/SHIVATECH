import { SchoolHackathonCategory, SchoolHackathonProblemStatement } from "./events";

export interface ExtendedSchoolProblemStatement extends SchoolHackathonProblemStatement {
  themeNumber?: number;
  categoryType?: "Software" | "Hardware" | "Open";
  difficulty?: "Standard" | "Advanced" | "Flagship";
}

export const class9And10ProblemStatements: ExtendedSchoolProblemStatement[] = [
  {
    "id": "ps-0910-t1-01",
    "code": "NGH-0910-T1-PS01",
    "title": "Smart School Infrastructure Reporter",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools often face issues such as broken desks, damaged lights, faulty fans, leaking taps, or damaged doors, but reporting and tracking these issues can be difficult.",
    "objective": "Develop a simple system that allows students or teachers to report infrastructure problems by selecting the problem category, location, and description. The system should allow the status of the reported problem to be tracked.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-02",
    "code": "NGH-0910-T1-PS02",
    "title": "Smart Classroom Manager",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools have multiple classrooms with different facilities such as fans, lights, projectors, smart boards, and other equipment. Managing their availability and condition can be difficult.",
    "objective": "Develop a system to maintain information about classroom facilities and report equipment that is unavailable, damaged, or requires maintenance.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-03",
    "code": "NGH-0910-T1-PS03",
    "title": "School Space Optimizer",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "School rooms, laboratories, playgrounds, and other spaces may not always be used efficiently.",
    "objective": "Design a system that helps schools view available spaces and their schedules so that different activities can be planned efficiently.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-04",
    "code": "NGH-0910-T1-PS04",
    "title": "Smart Parking and Traffic Management",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools often experience traffic congestion near their entrances during arrival and departure times.",
    "objective": "Develop a solution that helps manage vehicle movement and parking near the school and reduces unnecessary congestion.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-05",
    "code": "NGH-0910-T1-PS05",
    "title": "Accessible School",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Students with physical disabilities may face difficulties finding accessible routes and facilities within a school.",
    "objective": "Develop a solution that helps students identify accessible routes, ramps, entrances, and other important facilities within the school.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-06",
    "code": "NGH-0910-T1-PS06",
    "title": "School Maintenance Tracker",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Maintenance requests can be difficult to manage when there are many issues across a school.",
    "objective": "Develop a system where users can submit maintenance requests and track whether the issue is pending, in progress, or resolved.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-07",
    "code": "NGH-0910-T1-PS07",
    "title": "Smart School Energy Monitor",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Electricity can be wasted when lights, fans, or other electrical devices are left switched on unnecessarily.",
    "objective": "Develop a system that helps identify unnecessary electricity usage in different areas of a school and encourages energy-saving practices.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-08",
    "code": "NGH-0910-T1-PS08",
    "title": "Smart Classroom Energy Saver",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Lights and fans are often left switched on even when a classroom is empty, resulting in unnecessary energy consumption.",
    "objective": "Build a system that detects whether a classroom is occupied and alerts the user or automatically switches OFF unnecessary electrical devices.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "PIR Sensor",
      "LDR",
      "Relay Module",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-09",
    "code": "NGH-0910-T1-PS09",
    "title": "Smart Water Tank Overflow Protector",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Water is often wasted when a tank overflows because the pump is not switched off on time.",
    "objective": "Build a system that monitors the water level and provides an alert when the tank is full. The system may also automatically switch OFF the water pump.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Water Level Sensor/Ultrasonic Sensor",
      "Relay",
      "Mini Water Pump",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-10",
    "code": "NGH-0910-T1-PS10",
    "title": "Smart Parking Assistant",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Finding an available parking space can be difficult, especially in crowded areas.",
    "objective": "Build a prototype that detects whether a parking space is occupied or available and indicates its status using LEDs.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic Sensor",
      "LEDs",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-11",
    "code": "NGH-0910-T1-PS11",
    "title": "Smart Classroom Noise Monitor",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Excessive noise in classrooms can disturb teaching and learning.",
    "objective": "Build a system that detects high noise levels and provides a visual or audio warning when the noise crosses a predefined level.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Sound Sensor",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-12",
    "code": "NGH-0910-T1-PS12",
    "title": "Smart Dustbin",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Dustbins can become full without anyone noticing, leading to unhygienic surroundings.",
    "objective": "Build a smart dustbin that detects its fill level and indicates when it needs to be emptied.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic Sensor",
      "LEDs",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t1-13",
    "code": "NGH-0910-T1-PS13",
    "title": "Automatic Street Light",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Street lights may remain ON during daylight, wasting electricity.",
    "objective": "Build an automatic lighting system that switches the light ON when it becomes dark and OFF during daylight.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "LDR Sensor",
      "LEDs",
      "Transistor/Relay",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-01",
    "code": "NGH-0910-T2-PS01",
    "title": "Smart Waste Segregation",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "People often find it difficult to identify the correct category for different types of waste.",
    "objective": "Develop a solution that helps users identify whether a waste item belongs to wet, dry, recyclable, or other appropriate waste categories.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-02",
    "code": "NGH-0910-T2-PS02",
    "title": "Waste-to-Value",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Many waste materials that could be reused or recycled are simply thrown away.",
    "objective": "Develop a system that provides creative ideas for reusing or recycling common waste materials.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-03",
    "code": "NGH-0910-T2-PS03",
    "title": "Smart Water Saver",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Water is often wasted at homes and schools due to careless usage or leaks.",
    "objective": "Develop a solution that helps users monitor or estimate water usage and provides simple suggestions for reducing water wastage.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-04",
    "code": "NGH-0910-T2-PS04",
    "title": "Green School Score",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Schools may not have a simple way to measure their environmental practices.",
    "objective": "Develop a system that calculates a Green Score for a school based on activities such as waste management, water conservation, electricity saving, and tree plantation.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-05",
    "code": "NGH-0910-T2-PS05",
    "title": "Plastic Reduction Challenge",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Excessive use of plastic creates environmental problems.",
    "objective": "Develop an interactive challenge where students or classes can track their efforts to reduce plastic usage and compete on a leaderboard.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-06",
    "code": "NGH-0910-T2-PS06",
    "title": "Smart Tree Plantation",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Newly planted trees and plants require regular care and monitoring.",
    "objective": "Develop a system to maintain plant records and track activities such as watering, growth, and general plant care.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-07",
    "code": "NGH-0910-T2-PS07",
    "title": "Eco-Friendly Travel",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Short-distance travel using private vehicles can increase pollution.",
    "objective": "Develop a platform that encourages students and visitors to choose walking, cycling, or public transportation whenever possible.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-08",
    "code": "NGH-0910-T2-PS08",
    "title": "Smart Dustbin with Fill-Level Detection",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "It is difficult to know when a dustbin is nearly full without checking it manually.",
    "objective": "Build a smart dustbin that measures its fill level and displays different levels using LEDs. An alert should be generated when the dustbin becomes full.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic Sensor",
      "LEDs",
      "Buzzer",
      "Arduino/ESP32. Bonus: Add a simple notification or display system"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-09",
    "code": "NGH-0910-T2-PS09",
    "title": "Smart Water Saver",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Water is often wasted when a tap is left running unnecessarily.",
    "objective": "Build a system that detects continuous water flow and provides an alert when water is being wasted.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Water Flow Sensor",
      "Buzzer",
      "LED",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-10",
    "code": "NGH-0910-T2-PS10",
    "title": "Automatic Plant Watering System",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Plants may not receive the right amount of water when they are watered manually.",
    "objective": "Build an automatic watering system that detects soil moisture and waters the plant when the soil becomes too dry.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Soil Moisture Sensor",
      "Mini Water Pump",
      "Relay",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-11",
    "code": "NGH-0910-T2-PS11",
    "title": "Smart Air Quality Indicator",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Poor air quality can affect our health and environment.",
    "objective": "Build a simple system that detects changes in air quality and indicates the condition using different LEDs. (Note: This should be treated as an educational indicator, not a medical-grade air-quality measuring device.)",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Gas/Air Quality Sensor",
      "LEDs",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-12",
    "code": "NGH-0910-T2-PS12",
    "title": "Solar-Powered Smart Light",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Traditional lighting systems consume electricity even when natural or renewable energy could be used.",
    "objective": "Build a small solar-powered lighting system that stores solar energy and automatically turns the light ON at night.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Small Solar Panel",
      "Battery",
      "LDR",
      "LED",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t2-13",
    "code": "NGH-0910-T2-PS13",
    "title": "Smart Waste Segregation Prototype",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Waste is often mixed together, making recycling and proper disposal difficult.",
    "objective": "Build a prototype that demonstrates how waste could be identified and directed toward the appropriate waste category.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Sensors",
      "Servo Motor",
      "LEDs",
      "Arduino/ESP32. Bonus: Add separate compartments for different waste categories"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-01",
    "code": "NGH-0910-T3-PS01",
    "title": "Smart Crop Advisor",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Farmers need basic information about suitable crops and their care requirements.",
    "objective": "Develop a simple application that provides basic crop-care suggestions based on the selected crop and available conditions.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-02",
    "code": "NGH-0910-T3-PS02",
    "title": "Plant Disease Identifier",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Identifying common plant problems can be difficult for beginners and small-scale gardeners.",
    "objective": "Develop a prototype that allows users to select symptoms or provide an image and receive information about possible plant problems and basic care suggestions.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-03",
    "code": "NGH-0910-T3-PS03",
    "title": "Smart Irrigation System",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Plants can be over-watered or under-watered when watering is done manually.",
    "objective": "Develop a system that monitors soil moisture and provides or automatically activates watering when the soil becomes too dry. IoT Option: Soil moisture sensor + Arduino/ESP32 + water pump.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-04",
    "code": "NGH-0910-T3-PS04",
    "title": "Crop Calendar",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Farmers need to remember different activities such as sowing, watering, and harvesting at the appropriate time.",
    "objective": "Develop a simple crop calendar that displays important farming activities for selected crops.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-05",
    "code": "NGH-0910-T3-PS05",
    "title": "Farm Weather Helper",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Weather conditions can affect farming activities.",
    "objective": "Develop a simple system that provides basic weather-related information and suggests suitable farming activities based on the available information.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-06",
    "code": "NGH-0910-T3-PS06",
    "title": "Smart Fertilizer Guide",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Beginners may not know how different crops require different types of nutrients and fertilizers.",
    "objective": "Develop an educational tool that provides basic fertilizer and nutrient information based on the selected crop.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-07",
    "code": "NGH-0910-T3-PS07",
    "title": "Smart Kitchen Garden Assistant",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Beginners often do not know which plants to grow and how to care for them.",
    "objective": "Develop a simple assistant that helps users select suitable vegetables or plants and provides information about planting time, watering, and basic care.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-08",
    "code": "NGH-0910-T3-PS08",
    "title": "Smart Irrigation System",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Overwatering and underwatering can negatively affect plants and waste water.",
    "objective": "Build an irrigation system that checks soil moisture and automatically turns the water pump ON when the soil is dry and OFF when sufficient moisture is detected.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Soil Moisture Sensor",
      "Mini Water Pump",
      "Relay",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-09",
    "code": "NGH-0910-T3-PS09",
    "title": "Smart Greenhouse",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Plants require suitable temperature and humidity conditions for healthy growth.",
    "objective": "Build a small greenhouse prototype that monitors temperature and humidity and automatically activates a fan when the temperature becomes too high.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "DHT11/DHT22 Sensor",
      "Fan",
      "Relay",
      "LED",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-10",
    "code": "NGH-0910-T3-PS10",
    "title": "Plant Health Monitoring System",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "It can be difficult for beginners to know whether plants are receiving suitable environmental conditions.",
    "objective": "Build a system that monitors parameters such as soil moisture, temperature, and humidity and displays the readings.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Soil Moisture Sensor",
      "DHT11/DHT22",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-11",
    "code": "NGH-0910-T3-PS11",
    "title": "Automatic Plant Watering with Water-Level Alert",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "An automatic watering system may stop working if its water tank becomes empty.",
    "objective": "Build a system that automatically waters the plant when the soil is dry and also alerts the user when the water tank is empty.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Soil Moisture Sensor",
      "Water Level Sensor",
      "Mini Pump",
      "Relay",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-12",
    "code": "NGH-0910-T3-PS12",
    "title": "Smart Crop Protection",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Animals or unwanted movement near crops can damage plants.",
    "objective": "Build a small farm-security prototype that detects movement near a crop area and activates an alert.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "PIR Sensor",
      "Buzzer",
      "LED",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t3-13",
    "code": "NGH-0910-T3-PS13",
    "title": "Smart Farming Monitor",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Farmers need to monitor basic environmental conditions to take better care of crops.",
    "objective": "Build a simple monitoring system that collects information such as soil moisture and temperature and displays the current condition.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Soil Moisture Sensor",
      "Temperature Sensor",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-01",
    "code": "NGH-0910-T4-PS01",
    "title": "Smart Tourist Guide",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may find it difficult to discover important attractions and activities at a new destination.",
    "objective": "Develop a simple platform that provides information about tourist attractions, local food, culture, and activities for a selected destination.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-02",
    "code": "NGH-0910-T4-PS02",
    "title": "Smart Trip Planner",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Planning a trip can be difficult when there are multiple places to visit within limited time.",
    "objective": "Develop a system where users can enter a destination, budget, and number of days and receive a simple day-wise travel plan.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-03",
    "code": "NGH-0910-T4-PS03",
    "title": "Local Heritage Explorer",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Many people are unaware of the historical and cultural importance of places around them.",
    "objective": "Develop an interactive platform that provides information, images, interesting facts, and locations of local historical and heritage sites.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-04",
    "code": "NGH-0910-T4-PS04",
    "title": "Budget Travel Planner",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Travellers often struggle to estimate their total expenses before a trip.",
    "objective": "Develop a simple tool that estimates travel, food, and accommodation expenses based on the destination and available budget.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-05",
    "code": "NGH-0910-T4-PS05",
    "title": "Eco-Tourism Planner",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourism can have a negative impact on the environment when not planned responsibly.",
    "objective": "Develop a platform that encourages tourists to choose environmentally friendly destinations, activities, and travel options.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-06",
    "code": "NGH-0910-T4-PS06",
    "title": "Tourist Safety Assistant",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may not know where to find important safety information during a trip.",
    "objective": "Develop a simple application that provides emergency contacts, safety tips, and information about important nearby services.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-07",
    "code": "NGH-0910-T4-PS07",
    "title": "Virtual Destination Explorer",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Students may not have the opportunity to visit different tourist destinations and learn about their culture.",
    "objective": "Develop an interactive digital platform where users can explore different destinations through information about their history, culture, food, and attractions.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-08",
    "code": "NGH-0910-T4-PS08",
    "title": "Smart Tourist Safety Band",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may need a simple way to signal for help during an emergency.",
    "objective": "Build a wearable prototype with an emergency button that activates an alert when pressed.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Push Button",
      "Buzzer",
      "LED",
      "Arduino/ESP32. Bonus: Add GPS or wireless communication if the team is capable of implementing it"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-09",
    "code": "NGH-0910-T4-PS09",
    "title": "Smart Tourist Guide Model",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Visitors may not know important information about different attractions at a tourist destination.",
    "objective": "Build an interactive tourist-guide model where selecting a location provides basic information about that place.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Push Buttons/Touch Sensors",
      "LEDs",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-10",
    "code": "NGH-0910-T4-PS10",
    "title": "Smart Parking at Tourist Places",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists often spend time searching for available parking spaces.",
    "objective": "Build a prototype that detects available and occupied parking spaces and displays their status.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic/IR Sensors",
      "LEDs",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-11",
    "code": "NGH-0910-T4-PS11",
    "title": "Tourist Place Crowd Indicator",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Popular tourist places can become overcrowded, making it difficult to manage visitors.",
    "objective": "Build a prototype that counts people entering and leaving a location and indicates the approximate number of visitors.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "IR Sensors",
      "Display/LEDs",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-12",
    "code": "NGH-0910-T4-PS12",
    "title": "Smart Luggage Safety Alert",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Travellers may worry about their luggage being moved or disturbed without their knowledge.",
    "objective": "Build a luggage-security prototype that detects unusual movement or tilting and activates an alert.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Tilt/Vibration Sensor",
      "Buzzer",
      "LED",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t4-13",
    "code": "NGH-0910-T4-PS13",
    "title": "Smart Museum/Heritage Model",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Visitors may not have easy access to information about historical objects or monuments.",
    "objective": "Build an interactive museum or heritage model where selecting an object displays or plays basic information about it.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Push Buttons/IR Sensors",
      "LEDs",
      "LCD/OLED Display",
      "Buzzer/Speaker",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-01",
    "code": "NGH-0910-T5-PS01",
    "title": "Healthy Lifestyle Tracker",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Students may find it difficult to maintain healthy daily habits.",
    "objective": "Develop a student-friendly application that allows users to track activities such as water intake, exercise, sleep, and other healthy habits.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-02",
    "code": "NGH-0910-T5-PS02",
    "title": "Medicine Reminder",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "People may sometimes forget to take their medicines at the prescribed time.",
    "objective": "Develop a reminder system that provides alerts for scheduled medicine timings.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-03",
    "code": "NGH-0910-T5-PS03",
    "title": "First-Aid Assistant",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "People may not know the basic first-aid steps to follow during common minor emergencies.",
    "objective": "Develop an educational application that provides basic first-aid information and important emergency contact details.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-04",
    "code": "NGH-0910-T5-PS04",
    "title": "Health Awareness Quiz",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Students may not have enough awareness about basic health and hygiene practices.",
    "objective": "Develop an interactive quiz platform that teaches students about health, hygiene, nutrition, and healthy habits.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-05",
    "code": "NGH-0910-T5-PS05",
    "title": "School Health Record",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Maintaining basic student health records and routine check-up information can be difficult.",
    "objective": "Develop a secure prototype for maintaining basic health records and routine check-up information within a school.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-06",
    "code": "NGH-0910-T5-PS06",
    "title": "Healthy Food Guide",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Students may not always know which food choices are healthier.",
    "objective": "Develop a simple application that provides basic nutritional information about food items and encourages healthier choices.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-07",
    "code": "NGH-0910-T5-PS07",
    "title": "Hygiene Awareness System",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Lack of awareness about hygiene and sanitation can lead to unhealthy habits.",
    "objective": "Develop an interactive platform that teaches students about hand hygiene, clean drinking water, sanitation, and healthy habits.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-08",
    "code": "NGH-0910-T5-PS08",
    "title": "Smart Medicine Reminder",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "People may forget to take their medicines at the scheduled time.",
    "objective": "Build a reminder system that provides an alert at a predefined time.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "RTC Module",
      "Buzzer",
      "LED",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-09",
    "code": "NGH-0910-T5-PS09",
    "title": "Smart First-Aid Box",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Finding and using a first-aid kit quickly can be difficult during an emergency.",
    "objective": "Build a smart first-aid box that automatically turns on a light when opened and provides basic first-aid information or emergency instructions.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "IR/Magnetic Sensor",
      "LED",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-10",
    "code": "NGH-0910-T5-PS10",
    "title": "Smart Hand-Washing Timer",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "People may not spend enough time washing their hands properly.",
    "objective": "Build a system that detects the start of hand washing and provides a timer or alert for the recommended washing duration.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "IR Sensor",
      "Timer",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-11",
    "code": "NGH-0910-T5-PS11",
    "title": "Smart Water Bottle Reminder",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Students may forget to drink water regularly during the day.",
    "objective": "Build a smart bottle prototype that provides a reminder when the user has not interacted with the bottle for a predefined period.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Tilt Sensor/Accelerometer",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-12",
    "code": "NGH-0910-T5-PS12",
    "title": "Temperature Monitoring System",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Monitoring temperature can be useful in homes, classrooms, and other environments.",
    "objective": "Build a system that measures temperature, displays the reading, and activates an alert when it crosses a predefined level.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Temperature Sensor",
      "LCD/OLED Display",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t5-13",
    "code": "NGH-0910-T5-PS13",
    "title": "Smart Wheelchair Safety Prototype",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Obstacles can create safety challenges for wheelchair users.",
    "objective": "Build a small wheelchair prototype that detects obstacles in front of it and automatically stops or provides an alert.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic Sensor",
      "DC Motors",
      "Motor Driver",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-01",
    "code": "NGH-0910-T6-PS01",
    "title": "AI Study Assistant",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students sometimes need simple explanations when they find a topic difficult to understand.",
    "objective": "Develop a basic AI-powered study assistant that provides simple explanations, examples, and practice questions for a selected topic.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-02",
    "code": "NGH-0910-T6-PS02",
    "title": "AI Quiz Generator",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Creating practice questions for every topic can take a lot of time.",
    "objective": "Develop a simple AI-based tool where students enter a subject or topic and receive practice multiple-choice questions along with their scores.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-03",
    "code": "NGH-0910-T6-PS03",
    "title": "Suspicious Message Detector",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students may receive suspicious messages containing fake offers, unknown links, or requests for personal information.",
    "objective": "Develop an educational prototype that identifies common warning signs in suspicious messages and alerts the user.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-04",
    "code": "NGH-0910-T6-PS04",
    "title": "Password Strength Checker",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Weak passwords can make online accounts vulnerable.",
    "objective": "Develop a simple tool that checks password strength and teaches users how to create stronger passwords.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-05",
    "code": "NGH-0910-T6-PS05",
    "title": "Cyber Safety Game",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students need an engaging way to learn about online safety.",
    "objective": "Develop an interactive game that teaches students about phishing, fake links, online scams, password safety, and responsible internet use.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-06",
    "code": "NGH-0910-T6-PS06",
    "title": "AI Homework Helper",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students may need additional help understanding difficult academic questions.",
    "objective": "Develop a basic AI-powered educational assistant that helps students understand questions through simple, step-by-step explanations.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-07",
    "code": "NGH-0910-T6-PS07",
    "title": "Online Safety for Kids",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Young users may face risks such as cyberbullying, phishing, fake accounts, and unsafe websites.",
    "objective": "Develop an interactive platform that teaches students how to identify and respond safely to common online risks.",
    "deliverables": [
      "Working software application or interactive digital prototype",
      "Live demonstration showcasing real-time data tracking, usability, and problem resolution"
    ],
    "recommendedTools": [
      "Web / Mobile App",
      "Python / Scratch",
      "Figma / UI Mockup",
      "Local Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-08",
    "code": "NGH-0910-T6-PS08",
    "title": "Smart Medicine Reminder",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "People may forget to take their medicines at the scheduled time.",
    "objective": "Build a reminder system that provides an alert at a predefined time.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "RTC Module",
      "Buzzer",
      "LED",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-09",
    "code": "NGH-0910-T6-PS09",
    "title": "Smart First-Aid Box",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Finding and using a first-aid kit quickly can be difficult during an emergency.",
    "objective": "Build a smart first-aid box that automatically turns on a light when opened and provides basic first-aid information or emergency instructions.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "IR/Magnetic Sensor",
      "LED",
      "LCD/OLED Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-10",
    "code": "NGH-0910-T6-PS10",
    "title": "Smart Hand-Washing Timer",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "People may not spend enough time washing their hands properly.",
    "objective": "Build a system that detects the start of hand washing and provides a timer or alert for the recommended washing duration.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "IR Sensor",
      "Timer",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-11",
    "code": "NGH-0910-T6-PS11",
    "title": "Smart Water Bottle Reminder",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students may forget to drink water regularly during the day.",
    "objective": "Build a smart bottle prototype that provides a reminder when the user has not interacted with the bottle for a predefined period.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Tilt Sensor/Accelerometer",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-12",
    "code": "NGH-0910-T6-PS12",
    "title": "Temperature Monitoring System",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Monitoring temperature can be useful in homes, classrooms, and other environments.",
    "objective": "Build a system that measures temperature, displays the reading, and activates an alert when it crosses a predefined level.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Temperature Sensor",
      "LCD/OLED Display",
      "LED",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t6-13",
    "code": "NGH-0910-T6-PS13",
    "title": "Smart Wheelchair Safety Prototype",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Obstacles can create safety challenges for wheelchair users.",
    "objective": "Build a small wheelchair prototype that detects obstacles in front of it and automatically stops or provides an alert.",
    "deliverables": [
      "Functional hardware prototype demonstrating sensor integration and automated triggers",
      "Live demonstration explaining working circuit, logic, and real-world deployment"
    ],
    "recommendedTools": [
      "Ultrasonic Sensor",
      "DC Motors",
      "Motor Driver",
      "Buzzer",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-0910-t7-open",
    "code": "NGH-0910-T7-OPEN",
    "title": "Student Choice Open Innovation & Creative Challenge",
    "domain": "Open Theme",
    "themeNumber": 7,
    "icon": "💡",
    "description": "Students can select any real-world challenge of their choice from their school, local community, home, or daily life and engineer an innovative software or hardware solution.",
    "objective": "Design, build, and present a functional working prototype solving an authentic student-identified problem not covered in the predefined themes.",
    "deliverables": [
      "Functional working prototype (Hardware circuit model or Software/Mobile application)",
      "Live demonstration showcasing problem statement analysis, architecture, and practical impact"
    ],
    "recommendedTools": [
      "Student Choice (Arduino, ESP32, Python, Web/App, Sensor Modules, Recycled Materials)"
    ],
    "categoryType": "Open",
    "difficulty": "Standard"
  }
];

export const class11And12ProblemStatements: ExtendedSchoolProblemStatement[] = [
  {
    "id": "ps-1112-t1-01",
    "code": "NGH-1112-T1-PS01",
    "title": "Smart Classroom Occupancy System",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools may not have an efficient way to know which classrooms are currently occupied or available.",
    "objective": "Develop a system that detects classroom occupancy and displays room availability in real time.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "IoT Sensors",
      "ESP32",
      "Web Dashboard",
      "Database"
    ],
    "categoryType": "Hardware",
    "difficulty": "Advanced"
  },
  {
    "id": "ps-1112-t1-02",
    "code": "NGH-1112-T1-PS02",
    "title": "Smart School Water Leakage Detection",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Water leakage in schools can remain unnoticed and result in significant water wastage.",
    "objective": "Develop a system that detects unusual water flow or leakage and generates an alert for the concerned authority.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Water Flow Sensor",
      "Moisture Sensor",
      "ESP32",
      "Buzzer",
      "Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Flagship"
  },
  {
    "id": "ps-1112-t1-03",
    "code": "NGH-1112-T1-PS03",
    "title": "Smart Lift/Elevator Monitoring",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Regular monitoring of elevators in large buildings can be difficult.",
    "objective": "Develop a prototype that monitors elevator movement, floor position, and basic operational status.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Ultrasonic/IR Sensors",
      "Motor",
      "Display",
      "Arduino/ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t1-04",
    "code": "NGH-1112-T1-PS04",
    "title": "Smart Building Safety Monitor",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools need to monitor conditions such as excessive temperature, smoke, or unusual activity.",
    "objective": "Develop an IoT-based system that monitors multiple environmental parameters and provides alerts when abnormal conditions are detected.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Temperature Sensor",
      "Smoke/Gas Sensor",
      "PIR",
      "Buzzer",
      "ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Flagship"
  },
  {
    "id": "ps-1112-t1-05",
    "code": "NGH-1112-T1-PS05",
    "title": "Intelligent Classroom Resource Manager",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Teachers may spend time checking whether projectors, computers, laboratory equipment, or other resources are available.",
    "objective": "Develop a system for checking, booking, and managing shared school resources.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Database",
      "QR Code"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t1-06",
    "code": "NGH-1112-T1-PS06",
    "title": "Smart School Footfall Monitor",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Schools may not know how crowded different areas become during breaks or events.",
    "objective": "Develop a system that estimates the number of people entering and leaving selected areas and displays the current crowd level.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "IR Sensors/Computer Vision",
      "ESP32",
      "Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t1-07",
    "code": "NGH-1112-T1-PS07",
    "title": "Smart Classroom Environment Monitor",
    "domain": "Infrastructure",
    "themeNumber": 1,
    "icon": "🏢",
    "description": "Temperature, humidity, and air conditions can affect students' comfort and learning environment.",
    "objective": "Develop a system that continuously monitors classroom environmental conditions and provides alerts when conditions move outside predefined ranges.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "DHT11/DHT22",
      "Air Quality Sensor",
      "ESP32",
      "LCD/Web Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t2-01",
    "code": "NGH-1112-T2-PS01",
    "title": "Smart Waste Collection Optimizer",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Waste collection vehicles may visit bins even when they are not full, wasting time and fuel.",
    "objective": "Develop a system that monitors multiple dustbins and suggests which bins should be collected first.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Ultrasonic Sensors",
      "ESP32",
      "Web Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Flagship"
  },
  {
    "id": "ps-1112-t2-02",
    "code": "NGH-1112-T2-PS02",
    "title": "Carbon Footprint Calculator",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "People often do not understand how their daily activities contribute to carbon emissions.",
    "objective": "Develop a tool that estimates an individual's or school's carbon footprint based on activities such as transportation, electricity, and waste generation.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Database",
      "Basic Calculations"
    ],
    "categoryType": "Software",
    "difficulty": "Advanced"
  },
  {
    "id": "ps-1112-t2-03",
    "code": "NGH-1112-T2-PS03",
    "title": "Smart Compost Monitoring System",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Composting requires suitable moisture and temperature conditions.",
    "objective": "Develop an IoT system that monitors compost conditions and alerts the user when the conditions need attention.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Temperature Sensor",
      "Moisture Sensor",
      "ESP32",
      "Display"
    ],
    "categoryType": "Hardware",
    "difficulty": "Flagship"
  },
  {
    "id": "ps-1112-t2-04",
    "code": "NGH-1112-T2-PS04",
    "title": "Smart Recycling Assistant",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "People often throw recyclable materials into general waste.",
    "objective": "Develop a system that helps users identify recyclable materials and provides information about their proper disposal.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Image Classification/AI",
      "Web/App"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t2-05",
    "code": "NGH-1112-T2-PS05",
    "title": "Energy Consumption Analyzer",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Schools and homes may consume more electricity than necessary without knowing where the energy is being used.",
    "objective": "Develop a system that records electricity consumption and identifies areas or devices with unusually high usage.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Current Sensor",
      "ESP32",
      "Dashboard",
      "Data Visualization"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t2-06",
    "code": "NGH-1112-T2-PS06",
    "title": "Smart Rainwater Harvesting Monitor",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Rainwater harvesting systems can become ineffective if storage tanks are not properly monitored.",
    "objective": "Develop a system that monitors rainfall and tank water levels and provides information about available stored water.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Rain Sensor",
      "Ultrasonic Sensor",
      "ESP32",
      "Display"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t2-07",
    "code": "NGH-1112-T2-PS07",
    "title": "Green Campus Challenge",
    "domain": "Clean & Green Technology",
    "themeNumber": 2,
    "icon": "🌱",
    "description": "Students may lack motivation to participate in environmental activities.",
    "objective": "Develop a platform where students/classes can record activities such as tree plantation, recycling, cycling, and energy saving and earn points.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Database",
      "Leaderboard"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-01",
    "code": "NGH-1112-T3-PS01",
    "title": "Precision Irrigation System",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Applying the same amount of water to all plants can lead to water wastage and poor plant growth.",
    "objective": "Develop an irrigation system that uses soil conditions to control watering for different plant sections.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Multiple Soil Moisture Sensors",
      "Water Pump",
      "Relay",
      "ESP32"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-02",
    "code": "NGH-1112-T3-PS02",
    "title": "Smart Farm Monitoring Station",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Farmers need information about environmental conditions to make better decisions.",
    "objective": "Build an IoT station that monitors parameters such as temperature, humidity, soil moisture, and light intensity and displays the data.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Multiple Sensors",
      "ESP32",
      "LCD/Web Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-03",
    "code": "NGH-1112-T3-PS03",
    "title": "AI-Based Crop Recommendation",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Selecting a suitable crop for a particular soil and environmental condition can be difficult.",
    "objective": "Develop a basic AI/ML model that recommends suitable crops using parameters such as soil type, temperature, humidity, or rainfall.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Python",
      "Basic ML",
      "Dataset",
      "Web Interface"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-04",
    "code": "NGH-1112-T3-PS04",
    "title": "Smart Pest Detection",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Early identification of pests can help protect crops.",
    "objective": "Develop a prototype that identifies common crop pests using images and provides basic awareness information.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Image Classification",
      "Python/AI",
      "Camera"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-05",
    "code": "NGH-1112-T3-PS05",
    "title": "Automated Greenhouse Controller",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Maintaining suitable conditions inside a greenhouse requires continuous monitoring.",
    "objective": "Build a system that automatically controls devices such as fans, lights, or water pumps based on sensor readings.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "ESP32/Arduino",
      "DHT Sensor",
      "LDR",
      "Soil Sensor",
      "Relay"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-06",
    "code": "NGH-1112-T3-PS06",
    "title": "Smart Farm Security System",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Crops and farming equipment can be damaged or accessed by unauthorized people or animals.",
    "objective": "Develop a system that detects unusual movement around a farm area and generates an alert.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "PIR Sensor",
      "Camera",
      "ESP32",
      "Buzzer"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t3-07",
    "code": "NGH-1112-T3-PS07",
    "title": "Farmer's Digital Decision Assistant",
    "domain": "Smart Agriculture",
    "themeNumber": 3,
    "icon": "🌾",
    "description": "Farmers may have to consider multiple factors before deciding when to water, plant, or harvest.",
    "objective": "Develop a simple decision-support tool that uses provided farm conditions to suggest suitable farming actions.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Rule-Based Logic",
      "Optional AI"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-01",
    "code": "NGH-1112-T4-PS01",
    "title": "Smart Tourist Route Optimizer",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may waste time travelling between attractions that are far apart or poorly ordered.",
    "objective": "Develop a system that creates an efficient route for visiting multiple tourist locations.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Maps/API",
      "Web/App",
      "Route Optimization"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-02",
    "code": "NGH-1112-T4-PS02",
    "title": "Tourist Crowd Prediction",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Visitors may arrive at popular tourist attractions during extremely crowded periods.",
    "objective": "Develop a prototype that uses historical or sample data to estimate crowd levels at different times.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Python",
      "Data Analysis",
      "Basic ML",
      "Dashboard"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-03",
    "code": "NGH-1112-T4-PS03",
    "title": "Smart Tourist Expense Tracker",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists can easily lose track of their spending during a trip.",
    "objective": "Develop an application that tracks travel expenses and provides category-wise spending analysis.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Database",
      "Charts"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-04",
    "code": "NGH-1112-T4-PS04",
    "title": "Multilingual Tourist Assistant",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Language differences can make communication difficult for tourists.",
    "objective": "Develop a simple assistant that provides basic tourist information in multiple languages.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Translation API",
      "Web/App",
      "Voice/Text Interface"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-05",
    "code": "NGH-1112-T4-PS05",
    "title": "Smart Tourist Emergency System",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may not know how to quickly access emergency services in an unfamiliar location.",
    "objective": "Develop a system that provides emergency contacts, location information, and quick-access safety features.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "GPS",
      "Web/App",
      "Emergency Button"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-06",
    "code": "NGH-1112-T4-PS06",
    "title": "Heritage Conservation Platform",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Historical places may not receive enough awareness or community participation for their preservation.",
    "objective": "Develop a platform where users can explore heritage sites, report visible issues, and learn about conservation efforts.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Maps",
      "Database",
      "Image Upload"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t4-07",
    "code": "NGH-1112-T4-PS07",
    "title": "Sustainable Tourism Score",
    "domain": "Travel & Tourism",
    "themeNumber": 4,
    "icon": "✈️",
    "description": "Tourists may not know how environmentally friendly their travel choices are.",
    "objective": "Develop a system that calculates a simple sustainability score based on transportation, accommodation, activities, and waste practices.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Basic Calculations",
      "Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-01",
    "code": "NGH-1112-T5-PS01",
    "title": "Smart Hospital/Clinic Queue System",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Patients may spend a long time waiting without knowing their expected turn.",
    "objective": "Develop a digital queue system that provides token numbers and estimated waiting information.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Database",
      "Display"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-02",
    "code": "NGH-1112-T5-PS02",
    "title": "Smart Medicine Storage Monitor",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Some medicines require suitable temperature and storage conditions.",
    "objective": "Develop an IoT prototype that monitors storage temperature and provides an alert when it moves outside a predefined range.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Temperature Sensor",
      "ESP32",
      "Buzzer",
      "Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-03",
    "code": "NGH-1112-T5-PS03",
    "title": "Emergency Response Button",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "In an emergency, quickly communicating the need for help can be difficult.",
    "objective": "Develop a prototype with an emergency button that sends an alert to a connected device or displays an emergency notification.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "ESP32",
      "Push Button",
      "Wi-Fi/Bluetooth",
      "Buzzer"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-04",
    "code": "NGH-1112-T5-PS04",
    "title": "Smart Hospital Bed Availability",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Patients and hospital staff may not have an easy way to know which beds are available.",
    "objective": "Develop a system that displays the availability of beds in different hospital sections.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "Sensors",
      "IoT",
      "Database",
      "Dashboard"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-05",
    "code": "NGH-1112-T5-PS05",
    "title": "Health Habit Recommendation System",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Students may find it difficult to maintain consistent healthy habits.",
    "objective": "Develop a system that analyzes basic lifestyle inputs and provides general wellness suggestions.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Rule-Based Logic",
      "Optional AI"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-06",
    "code": "NGH-1112-T5-PS06",
    "title": "Smart Hand Hygiene Monitor",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "Maintaining proper hand hygiene is important in schools and healthcare environments.",
    "objective": "Develop an IoT prototype that monitors hand-washing activity and provides reminders or feedback.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "IR Sensor",
      "Timer",
      "ESP32",
      "LED/Buzzer"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t5-07",
    "code": "NGH-1112-T5-PS07",
    "title": "Healthcare Awareness Chatbot",
    "domain": "Smart Healthcare",
    "themeNumber": 5,
    "icon": "🏥",
    "description": "People often need basic information about common health and hygiene topics.",
    "objective": "Develop an educational chatbot that answers predefined health-awareness questions and directs users to professional help for medical concerns.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Basic AI/Chatbot",
      "Web/App",
      "Knowledge Base"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-01",
    "code": "NGH-1112-T6-PS01",
    "title": "AI-Based Phishing Detection",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Phishing messages and websites can trick users into sharing sensitive information.",
    "objective": "Develop a prototype that analyzes the text or characteristics of a message/link and identifies common phishing warning signs.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Python",
      "Basic ML/NLP",
      "Web Interface"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-02",
    "code": "NGH-1112-T6-PS02",
    "title": "Fake News Awareness Tool",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Misleading information can spread quickly through social media and messaging platforms.",
    "objective": "Develop an educational prototype that analyzes a piece of text and highlights factors that may indicate potentially misleading information. (Note: The system should present results as an indication, not as proof that a claim is true or false.)",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "NLP",
      "AI/ML",
      "Web/App"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-03",
    "code": "NGH-1112-T6-PS03",
    "title": "AI Study Recommendation System",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Every student has different learning needs and study patterns.",
    "objective": "Develop a system that uses a student's subjects, performance, and available study time to recommend areas that need more practice.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Python",
      "Basic ML/Logic",
      "Web/App"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-04",
    "code": "NGH-1112-T6-PS04",
    "title": "Face Recognition Attendance System",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Manually recording attendance can take significant time.",
    "objective": "Develop a prototype that demonstrates automated attendance using face recognition.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Python",
      "Computer Vision",
      "Camera",
      "Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-05",
    "code": "NGH-1112-T6-PS05",
    "title": "Smart Cybersecurity Awareness Simulator",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students often learn about cybersecurity theoretically but do not get opportunities to practice identifying threats.",
    "objective": "Create an interactive simulation where users identify phishing messages, suspicious links, unsafe passwords, and other cyber threats.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "Web/App",
      "Game Logic",
      "Optional AI"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-06",
    "code": "NGH-1112-T6-PS06",
    "title": "AI Resume/Skill Analyzer",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "Students may not know which skills they need to improve for a particular career or field.",
    "objective": "Develop a basic tool that analyzes a student's skills/interests and compares them with the requirements of a selected career path.",
    "deliverables": [
      "Working software application, AI/ML model, or responsive web/mobile dashboard",
      "Live demonstration showcasing algorithms, data flow, and user experience"
    ],
    "recommendedTools": [
      "NLP/AI",
      "Web/App",
      "Database"
    ],
    "categoryType": "Software",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t6-07",
    "code": "NGH-1112-T6-PS07",
    "title": "Secure Smart Locker with Multi-Factor Authentication",
    "domain": "AI & Cyber Security",
    "themeNumber": 6,
    "icon": "🤖",
    "description": "A single password or key may not provide sufficient security for valuable belongings.",
    "objective": "Build a smart locker that requires two authentication methods, such as RFID + PIN, before granting access.",
    "deliverables": [
      "Functional hardware prototype or IoT device demonstrating sensor data acquisition and automated response",
      "System architecture schematic and live demonstration of working prototype"
    ],
    "recommendedTools": [
      "RFID",
      "Keypad",
      "Servo",
      "Arduino/ESP32",
      "Buzzer"
    ],
    "categoryType": "Hardware",
    "difficulty": "Standard"
  },
  {
    "id": "ps-1112-t7-open",
    "code": "NGH-1112-T7-OPEN",
    "title": "Student Choice Advanced Open Innovation Sprint",
    "domain": "Open Theme",
    "themeNumber": 7,
    "icon": "💡",
    "description": "Class 11 & 12 innovators can identify any high-impact challenge across AI, cybersecurity, IoT, clean tech, robotics, or social entrepreneurship and build an advanced working prototype.",
    "objective": "Architect, develop, and present an advanced working prototype or full-stack software system addressing a student-chosen problem statement.",
    "deliverables": [
      "Functional working prototype (Embedded IoT/Hardware System or Full-Stack/AI Application)",
      "System architecture presentation, code repository/schematic, and live jury demonstration"
    ],
    "recommendedTools": [
      "Student Choice (ESP32, Microcontrollers, Python, AI/ML Libraries, Web/Mobile Frameworks, Cloud/APIs)"
    ],
    "categoryType": "Open",
    "difficulty": "Advanced"
  }
];

export const nextGenHackathonSchoolCategories: SchoolHackathonCategory[] = [
  {
    id: "class-9-10",
    title: "Class 9 & 10 Category (Junior Innovators)",
    gradeBadge: "CLASS 9 & 10",
    eligibility: "Students currently enrolled in Class 9th or 10th",
    tagline: "CREATIVE SCIENCE, SMART LIVING & ECO-SOLUTIONS",
    description:
      "Tailored for junior school students across 7 comprehensive real-world themes: Infrastructure, Clean & Green Technology, Smart Agriculture, Travel & Tourism, Smart Healthcare, AI & Cyber Security, and Open Theme. Essential hardware kits, microcontrollers (Arduino/ESP32), sensors, and lab equipment are provided on-campus by the University.",
    accentColor: "emerald",
    problemStatements: class9And10ProblemStatements,
  },
  {
    id: "class-11-12",
    title: "Class 11 & 12 Category (Senior Innovators)",
    gradeBadge: "CLASS 11 & 12",
    eligibility: "Students currently enrolled in Class 11th or 12th",
    tagline: "ADVANCED IoT, ARTIFICIAL INTELLIGENCE & ENGINEERING",
    description:
      "Engineered for senior secondary innovators across 7 specialized technical domains: Infrastructure, Clean & Green Tech, Smart Agriculture, Travel & Tourism, Smart Healthcare, AI / Cyber Security, and Open Innovation. Advanced microcontrollers, IoT sensor modules, and university lab testing rigs are provided on-campus for high-impact prototype fabrication.",
    accentColor: "purple",
    problemStatements: class11And12ProblemStatements,
  },
];
