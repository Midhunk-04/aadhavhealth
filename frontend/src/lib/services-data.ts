

export const services = [
  {
    slug: "elderly-care",
    title: "Elderly Care",
    tamilTitle: "முதியோர் பராமரிப்பு",
    category: "Non-Medical",
    shortDesc: "Compassionate support and assistance for seniors at home.",
    longDesc: "Our elderly care services are designed to help seniors live safely and comfortably at home. We provide assistance with daily activities, medication reminders, companionship, and mobility support. (முதியோர் பராமரிப்பு சேவைகள் - தினசரி உதவி, மருந்து நினைவூட்டல், மற்றும் பாதுகாப்பு).",
    features: [
      "Bathing, dressing, and grooming (குளியல் மற்றும் உடை உதவி)",
      "Medication reminders (மருந்து நினைவூட்டல்)",
      "Mobile assistance (நடக்க / உட்கார உதவி)",
      "Companionship (பேசிக்கொண்டு இருத்தல்)",
      "Light housekeeping (வீட்டு வேலைகளில் உதவி)"
    ],
    pricing: [
      { name: "12 Hours Day/Night (12 மணி நேர சேவை)", price: "₹800 – ₹1,200 / day" },
      { name: "24 Hours Stay (24 மணி நேர சேவை)", price: "₹18,000 – ₹25,000 / month" }
    ],
    image: "/assets/service-elderly.png"
  },
  {
    slug: "patient-care",
    title: "Patient Care",
    tamilTitle: "நோயாளி பராமரிப்பு",
    category: "Non-Medical",
    shortDesc: "Professional monitoring and care for recovering patients.",
    longDesc: "Our patient care services are designed for individuals recovering from surgery, injury, or chronic illness. (நோயாளி பராமரிப்பு - சாப்பாடு கொடுத்தல், குளியல் உதவி, மற்றும் அசைவில் உதவி).",
    features: [
      "Feeding support (சாப்பாடு கொடுத்தல்)",
      "Bathing assistance (குளியல் உதவி)",
      "Bed care (படுக்கை பராமரிப்பு)",
      "Mobility support (அசைவில் உதவி)",
      "Vital monitoring (உடல்நிலை கண்காணிப்பு)"
    ],
    pricing: [
      { name: "12 Hours Day/Night (12 மணி நேர சேவை)", price: "₹900 – ₹1,300 / day" },
      { name: "24 Hours Stay (24 மணி நேர சேவை)", price: "₹20,000 – ₹28,000 / month" }
    ],
    image: "/assets/service-patient.png"
  },
  {
    slug: "postnatal-baby-care",
    title: "Postnatal & Baby Care",
    tamilTitle: "குழந்தை கவனிப்பு / Postnatal Care",
    category: "Non-Medical",
    shortDesc: "Nurturing care for newborns and support for new mothers.",
    longDesc: "We provide specialized care for newborns and postnatal support for mothers. (குழந்தை மற்றும் தாய் பராமரிப்பு - குளியல், உணவு, மற்றும் தூக்கம்).",
    features: [
      "Babysitting (குழந்தை பராமரிப்பு)",
      "Delivery / Postnatal Care (அம்மா பராமரிப்பு)",
      "Baby Feeding Support (குழந்தை உணவு)",
      "Newborn massage (குழந்தை மசாஜ்)",
      "Mother well-being (தாய் ஆரோக்கியம்)"
    ],
    pricing: [
      { name: "12 Hours Babysitting (12 மணி நேர குழந்தை பராமரிப்பு)", price: "₹700 – ₹1,200 / day" },
      { name: "24 Hours Babysitting (24 மணி நேர குழந்தை பராமரிப்பு)", price: "₹18,000 – ₹26,000 / month" },
      { name: "Postnatal Care Mother+Baby (Daily)", price: "₹1,000 – ₹1,500 / day" },
      { name: "Postnatal Care (Monthly Package)", price: "₹25,000 – ₹40,000 / month" }
    ],
    image: "/assets/service-baby.png"
  },
  {
    slug: "nursing-services",
    title: "Nursing Services",
    tamilTitle: "நர்சிங் சேவைகள்",
    category: "Medical",
    shortDesc: "Skilled medical nursing care in the comfort of your home.",
    longDesc: "Our certified home nurses provide professional medical care including injections, IV therapy, and wound dressing. (நர்சிங் சேவைகள் - இன்ஜெக்ஷன், குளுக்கோஸ், மற்றும் டிரஸ்ஸிங்).",
    features: [
      "Injection (இன்ஜெக்ஷன்)",
      "IV Drip (குளுக்கோஸ்)",
      "Wound Dressing (காயம் கட்டுதல்)",
      "BP / Sugar Check (இரத்த அழுத்தம் / சர்க்கரை பரிசோதனை)",
      "Catheter care (கதீட்டர் பராமரிப்பு)"
    ],
    pricing: [
      { name: "Injection (இன்ஜெக்ஷன்)", price: "₹150 – ₹300" },
      { name: "IV Drip (குளுக்கோஸ்)", price: "₹500 – ₹1,000" },
      { name: "Wound Dressing (காயம் கட்டுதல்)", price: "₹300 – ₹800" },
      { name: "BP / Sugar Check (பரிசோதனை)", price: "₹100 – ₹200" },
      { name: "12 Hours Nurse (12 மணி நேர நர்ஸ்)", price: "₹1,200 – ₹2,000 / day" },
      { name: "24 Hours Nurse Stay (24 மணி நேர நர்ஸ்)", price: "₹30,000 – ₹45,000 / month" }
    ],
    image: "/assets/service-nursing.png"
  },
  {
    slug: "physiotherapy-home",
    title: "Physiotherapy at Home",
    tamilTitle: "பிசியோதெரபி இல்ல சேவை",
    category: "Medical",
    shortDesc: "Personalized physical therapy sessions for recovery and mobility.",
    longDesc: "Our qualified physiotherapists help you recover from injuries and mobility issues. (பிசியோதெரபி - பக்கவாதம், அறுவை சிகிச்சை பின் சிகிச்சை).",
    features: [
      "Surgery Post Rehab (அறுவை சிகிச்சை பின் சிகிச்சை)",
      "Pain Relief Exercises (வலி நிவாரண பயிற்சி)",
      "Stroke Patient Recovery (பக்கவாதம் மீட்பு)",
      "Muscle Strengthening (தசை வலிமை)",
      "Mobility training (நடை பயிற்சி)"
    ],
    pricing: [
      { name: "Per Session (ஒரு அமர்வு)", price: "₹500 – ₹1,200" },
      { name: "Monthly Package (மாதாந்திர திட்டம்)", price: "₹10,000 – ₹25,000" }
    ],
    image: "/assets/service-physio.png"
  },
  {
    slug: "doctor-home-visit",
    title: "Doctor Home Visit",
    tamilTitle: "மருத்துவர் இல்ல வருகை",
    category: "Medical",
    shortDesc: "Professional medical consultation at your doorstep.",
    longDesc: "Our qualified doctors visit your home for health check-ups and consultations. (மருத்துவர் இல்ல வருகை - பரிசோதனை மற்றும் ஆலோசனை).",
    features: [
      "General health check-up (பரிசோதனை)",
      "Prescription (மருந்து சீட்டு)",
      "Follow-up Visit (தொடர் சிகிச்சை)",
      "Elderly evaluation (முதியோர் பரிசோதனை)",
      "Lab sample collection (இரத்த பரிசோதனை உதவி)"
    ],
    pricing: [
      { name: "Doctor Home Visit (மருத்துவர் வருகை)", price: "₹500 – ₹1,500 / visit" }
    ],
    image: "/assets/service-doctor.png"
  }
];
