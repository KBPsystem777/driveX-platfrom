// Content Management System - Supports English and Tagalog
// This allows for easy updates and future CMS integration

interface ContentData {
  nav: {
    requirements: string;
    howItWorks: string;
    earnings: string;
    support: string;
    login: string;
    register: string;
    businessRegister: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  benefits: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  requirements: {
    title: string;
    basic: {
      title: string;
      items: string[];
    };
    driving: {
      title: string;
      items: string[];
    };
  };
  vehicleTypes: {
    title: string;
    types: Array<{
      name: string;
      description: string;
      demand: string;
      earning: string;
    }>;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    drivers: {
      title: string;
      links: Array<{ text: string; href: string }>;
    };
    support: {
      title: string;
      links: Array<{ text: string; href: string }>;
    };
    company: {
      title: string;
      links: Array<{ text: string; href: string }>;
    };
    copyright: string;
  };
  driverRegistration: {
    title: string;
    subtitle: string;
    steps: {
      personal: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
      vehicle: {
        title: string;
        description: string;
      };
      documentation: {
        title: string;
        description: string;
      };
      verification: {
        title: string;
        description: string;
      };
    };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      birthdate: string;
      gender: string;
      selectGender: string;
      male: string;
      female: string;
      other: string;
      yearsExperience: string;
      selectExperience: string;
      years: string;
      transmissionTypes: string;
      manual: string;
      manualDesc: string;
      automatic: string;
      automaticDesc: string;
      specialVehicles: string;
      electric: string;
      electricDesc: string;
      motorcycle: string;
      motorcycleDesc: string;
      truck: string;
      truckDesc: string;
      bus: string;
      busDesc: string;
      additionalExperience: string;
      additionalExperienceDesc: string;
      vehicleTypes: string;
      primaryVehicle: string;
      make: string;
      model: string;
      year: string;
      color: string;
      plateNumber: string;
      availability: string;
      availabilityDesc: string;
      documentRequirements: string;
      documentNote: string;
      required: string;
      uploadText: string;
      fileTypes: string;
      chooseFile: string;
      replaceFile: string;
      almostDone: string;
      reviewTerms: string;
      agreeTerms: string;
      termsDesc: string;
      consentBackground: string;
      backgroundDesc: string;
      agreeCommunications: string;
      communicationsDesc: string;
      whatNext: string;
      continue: string;
      back: string;
      submit: string;
    };
    documents: Array<{
      id: string;
      name: string;
      required: boolean;
    }>;
    nextSteps: string[];
  };
  businessOwnerRegistration: {
    title: string;
    subtitle: string;
    steps: {
      personal: {
        title: string;
        description: string;
      };
      business: {
        title: string;
        description: string;
      };
      documentation: {
        title: string;
        description: string;
      };
      verification: {
        title: string;
        description: string;
      };
    };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      birthdate: string;
      gender: string;
      selectGender: string;
      male: string;
      female: string;
      other: string;
      businessName: string;
      businessType: string;
      selectBusinessType: string;
      yearsInBusiness: string;
      selectYearsInBusiness: string;
      documentRequirements: string;
      documentNote: string;
      required: string;
      uploadText: string;
      fileTypes: string;
      chooseFile: string;
      replaceFile: string;
      almostDone: string;
      reviewTerms: string;
      agreeTerms: string;
      termsDesc: string;
      consentBackground: string;
      backgroundDesc: string;
      agreeCommunications: string;
      communicationsDesc: string;
      whatNext: string;
      continue: string;
      back: string;
      submit: string;
    };
    documents: Array<{
      id: string;
      name: string;
      required: boolean;
    }>;
    nextSteps: string[];
  };
}

const englishContent: ContentData = {
  nav: {
    requirements: "Requirements",
    howItWorks: "How It Works",
    earnings: "Earnings",
    support: "Support",
    login: "Login",
    register: "Become a Driver",
    businessRegister: "Register as Business Owner",
  },
  hero: {
    title: "Drive Your Way to Success",
    subtitle:
      "Join DriveConnect as a professional driver. Earn money with flexible schedules while serving clients across the Philippines.",
    primaryCta: "Start Driving Today",
    secondaryCta: "Driver Login",
  },
  benefits: {
    title: "Why Drive with DriveConnect?",
    items: [
      {
        icon: "dollar",
        title: "Competitive Earnings",
        description:
          "Earn ₱15,000 - ₱50,000+ monthly with our competitive rates and bonus incentives.",
      },
      {
        icon: "clock",
        title: "Flexible Schedule",
        description:
          "Work when you want. Set your own hours and maintain work-life balance.",
      },
      {
        icon: "shield",
        title: "Insurance Coverage",
        description:
          "Comprehensive insurance coverage for you and your vehicle while on duty.",
      },
      {
        icon: "star",
        title: "Professional Growth",
        description:
          "Access to training programs and opportunities to upgrade your driving skills.",
      },
    ],
  },
  requirements: {
    title: "Driver Requirements",
    basic: {
      title: "Basic Requirements",
      items: [
        "Valid Professional Driver's License",
        "Age between 21-65 years old",
        "Clean driving record (no major violations in past 3 years)",
        "NBI Clearance (not older than 6 months)",
        "Medical Certificate from DOH-accredited clinic",
        "Basic English communication skills",
        "Own smartphone with internet connection",
      ],
    },
    driving: {
      title: "Driving Experience",
      items: [
        "Minimum 2 years of driving experience",
        "Experience with manual or automatic transmission",
        "Knowledge of Metro Manila and major highways",
        "Defensive driving skills",
        "Customer service orientation",
        "Electric vehicle experience (preferred but not required)",
      ],
    },
  },
  vehicleTypes: {
    title: "Vehicle Categories We Need",
    types: [
      {
        name: "Sedan",
        description: "City trips and airport transfers",
        demand: "High Demand",
        earning: "₱15K-25K/month",
      },
      {
        name: "SUV",
        description: "Family transportation and group travel",
        demand: "Very High Demand",
        earning: "₱20K-35K/month",
      },
      {
        name: "Van",
        description: "Group transport and cargo delivery",
        demand: "High Demand",
        earning: "₱25K-40K/month",
      },
      {
        name: "Pickup Truck",
        description: "Cargo transport and moving services",
        demand: "Medium Demand",
        earning: "₱20K-30K/month",
      },
      {
        name: "Delivery Truck",
        description: "Commercial deliveries and logistics",
        demand: "High Demand",
        earning: "₱30K-45K/month",
      },
      {
        name: "Electric Vehicle",
        description: "Eco-friendly transportation",
        demand: "Growing Demand",
        earning: "₱25K-40K/month",
      },
    ],
  },
  stats: [
    { value: "100+", label: "Active Drivers" },
    { value: "₱35K", label: "Average Monthly Earnings" },
    { value: "50+", label: "Cities Covered" },
    { value: "99.8%", label: "Driver Satisfaction" },
  ],
  cta: {
    title: "Ready to Start Earning?",
    description:
      "Join thousands of professional drivers who have found financial freedom with DriveConnect.",
    button: "Apply Now",
  },
  footer: {
    description:
      "Empowering professional drivers across the Philippines with flexible earning opportunities.",
    drivers: {
      title: "For Drivers",
      links: [
        { text: "Become a Driver", href: "/driver/register" },
        { text: "Driver Login", href: "/driver/login" },
        { text: "Requirements", href: "/requirements" },
        { text: "Earnings Calculator", href: "/earnings" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Contact Us", href: "/contact" },
        { text: "Driver Support", href: "/driver-support" },
        { text: "Safety", href: "/safety" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
      ],
    },
    copyright: "© 2024 DriveConnect. All rights reserved.",
  },
  driverRegistration: {
    title: "Become a Professional Driver",
    subtitle:
      "Join our network of verified drivers and start earning with flexible schedules",
    steps: {
      personal: {
        title: "Personal Information",
        description:
          "Please provide your personal details as they appear on your government ID",
      },
      experience: {
        title: "Driving Experience",
        description:
          "Tell us about your driving skills and experience with different vehicle types",
      },
      vehicle: {
        title: "Vehicle Information",
        description:
          "Specify what types of vehicles you can drive professionally",
      },
      documentation: {
        title: "Required Documentation",
        description: "Upload clear photos or scans of the following documents",
      },
      verification: {
        title: "Identity Verification",
        description:
          "Final step to verify your identity and complete registration",
      },
    },
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Complete Address",
      birthdate: "Date of Birth",
      gender: "Gender",
      selectGender: "Select gender",
      male: "Male",
      female: "Female",
      other: "Other",
      yearsExperience: "Years of Driving Experience",
      selectExperience: "Select experience",
      years: "years",
      transmissionTypes: "Transmission Types You Can Drive",
      manual: "Manual Transmission",
      manualDesc: "Traditional stick shift vehicles",
      automatic: "Automatic Transmission",
      automaticDesc: "Automatic gear shifting vehicles",
      specialVehicles: "Special Vehicle Experience",
      electric: "Electric Vehicles",
      electricDesc: "Battery-powered eco-friendly vehicles",
      motorcycle: "Motorcycle",
      motorcycleDesc: "Two-wheeled motor vehicles",
      truck: "Heavy Trucks",
      truckDesc: "Large commercial vehicles",
      bus: "Buses",
      busDesc: "Public transportation vehicles",
      additionalExperience: "Additional Driving Experience",
      additionalExperienceDesc:
        "Describe any other driving experience, special skills, or certifications...",
      vehicleTypes: "Vehicle Types You Can Drive (Select all that apply)",
      primaryVehicle: "Primary Vehicle Details",
      make: "Make",
      model: "Model",
      year: "Year",
      color: "Color",
      plateNumber: "Plate Number",
      availability: "Availability",
      availabilityDesc:
        "Describe your typical availability (days, hours, etc.)",
      documentRequirements: "Document Requirements",
      documentNote:
        "All documents must be valid and clearly readable. Documents will be verified by our team.",
      required: "Required",
      uploadText: "Click to upload or drag and drop",
      fileTypes: "PNG, JPG, PDF up to 10MB",
      chooseFile: "Choose File",
      replaceFile: "Replace File",
      almostDone: "Almost Done!",
      reviewTerms:
        "Your application is almost complete. Please review and agree to our terms.",
      agreeTerms: "I agree to the Terms and Conditions",
      termsDesc:
        "By checking this box, you agree to our driver terms, privacy policy, and service agreement.",
      consentBackground: "I consent to background verification",
      backgroundDesc:
        "I authorize DriveConnect to verify my background, driving record, and submitted documents.",
      agreeCommunications: "I agree to receive communications",
      communicationsDesc:
        "Receive booking notifications, updates, and important information via SMS and email.",
      whatNext: "What happens next?",
      continue: "Continue",
      back: "Back",
      submit: "Submit Application",
    },
    documents: [
      { id: "license", name: "Professional Driver's License", required: true },
      { id: "nbi", name: "NBI Clearance", required: true },
      { id: "medical", name: "Medical Certificate", required: true },
      { id: "ltfrb", name: "LTFRB Permit (if applicable)", required: false },
    ],
    nextSteps: [
      "Your application will be reviewed within 2-3 business days",
      "We'll verify your documents and conduct a background check",
      "You'll receive an email notification once approved",
      "Complete driver onboarding and start accepting bookings",
    ],
  },
  businessOwnerRegistration: {
    title: "Register as Business Owner",
    subtitle:
      "Join our network of business owners and start booking drivers for your vehicles",
    steps: {
      personal: {
        title: "Personal Information",
        description:
          "Please provide your personal details as they appear on your government ID",
      },
      business: {
        title: "Business Information",
        description:
          "Tell us about your business and the types of vehicles you need",
      },
      documentation: {
        title: "Required Documentation",
        description: "Upload clear photos or scans of the following documents",
      },
      verification: {
        title: "Identity Verification",
        description:
          "Final step to verify your identity and complete registration",
      },
    },
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Complete Address",
      birthdate: "Date of Birth",
      gender: "Gender",
      selectGender: "Select gender",
      male: "Male",
      female: "Female",
      other: "Other",
      businessName: "Business Name",
      businessType: "Business Type",
      selectBusinessType: "Select business type",
      yearsInBusiness: "Years in Business",
      selectYearsInBusiness: "Select years in business",
      documentRequirements: "Document Requirements",
      documentNote:
        "All documents must be valid and clearly readable. Documents will be verified by our team.",
      required: "Required",
      uploadText: "Click to upload or drag and drop",
      fileTypes: "PNG, JPG, PDF up to 10MB",
      chooseFile: "Choose File",
      replaceFile: "Replace File",
      almostDone: "Almost Done!",
      reviewTerms:
        "Your application is almost complete. Please review and agree to our terms.",
      agreeTerms: "I agree to the Terms and Conditions",
      termsDesc:
        "By checking this box, you agree to our business owner terms, privacy policy, and service agreement.",
      consentBackground: "I consent to background verification",
      backgroundDesc:
        "I authorize DriveConnect to verify my background, business record, and submitted documents.",
      agreeCommunications: "I agree to receive communications",
      communicationsDesc:
        "Receive booking notifications, updates, and important information via SMS and email.",
      whatNext: "What happens next?",
      continue: "Continue",
      back: "Back",
      submit: "Submit Application",
    },
    documents: [
      { id: "license", name: "Professional Driver's License", required: true },
      { id: "nbi", name: "NBI Clearance", required: true },
      { id: "medical", name: "Medical Certificate", required: true },
      {
        id: "business",
        name: "Business Registration Certificate",
        required: true,
      },
      { id: "ltfrb", name: "LTFRB Permit (if applicable)", required: false },
    ],
    nextSteps: [
      "Your application will be reviewed within 2-3 business days",
      "We'll verify your documents and conduct a background check",
      "You'll receive an email notification once approved",
      "Complete business owner onboarding and start booking drivers",
    ],
  },
};

const tagalogContent: ContentData = {
  nav: {
    requirements: "Mga Kinakailangan",
    howItWorks: "Paano Gumagana",
    earnings: "Kita",
    support: "Suporta",
    login: "Mag-login",
    register: "Maging Driver",
    businessRegister: "Mag-register bilang Business Owner",
  },
  hero: {
    title: "Magmaneho Tungo sa Tagumpay",
    subtitle:
      "Sumali sa DriveConnect bilang propesyonal na driver. Kumita ng pera sa flexible na schedule habang naglilingkod sa mga kliyente sa buong Pilipinas.",
    primaryCta: "Magsimulang Magmaneho Ngayon",
    secondaryCta: "Driver Login",
  },
  benefits: {
    title: "Bakit Magmaneho sa DriveConnect?",
    items: [
      {
        icon: "dollar",
        title: "Mataas na Kita",
        description:
          "Kumita ng ₱15,000 - ₱50,000+ buwanly sa aming competitive rates at bonus incentives.",
      },
      {
        icon: "clock",
        title: "Flexible na Schedule",
        description:
          "Magtrabaho kung kailan mo gusto. Itakda ang inyong sariling oras at panatilihin ang work-life balance.",
      },
      {
        icon: "shield",
        title: "Insurance Coverage",
        description:
          "Komprehensibong insurance coverage para sa inyo at sa inyong sasakyan habang on duty.",
      },
      {
        icon: "star",
        title: "Propesyonal na Paglago",
        description:
          "Access sa mga training programs at pagkakataon na mag-upgrade ng inyong driving skills.",
      },
    ],
  },
  requirements: {
    title: "Mga Kinakailangan para sa Driver",
    basic: {
      title: "Pangunahing Kinakailangan",
      items: [
        "Valid na Professional Driver's License",
        "Edad na 21-65 taong gulang",
        "Malinis na driving record (walang major violations sa nakaraang 3 taon)",
        "NBI Clearance (hindi hihigit sa 6 na buwan)",
        "Medical Certificate mula sa DOH-accredited clinic",
        "Basic English communication skills",
        "Sariling smartphone na may internet connection",
      ],
    },
    driving: {
      title: "Karanasan sa Pagmamaneho",
      items: [
        "Minimum na 2 taong karanasan sa pagmamaneho",
        "Karanasan sa manual o automatic transmission",
        "Kaalaman sa Metro Manila at mga pangunahing highway",
        "Defensive driving skills",
        "Customer service orientation",
        "Electric vehicle experience (preferred pero hindi required)",
      ],
    },
  },
  vehicleTypes: {
    title: "Mga Uri ng Sasakyan na Kailangan Namin",
    types: [
      {
        name: "Sedan",
        description: "City trips at airport transfers",
        demand: "Mataas na Demand",
        earning: "₱15K-25K/buwan",
      },
      {
        name: "SUV",
        description: "Family transportation at group travel",
        demand: "Napakataas na Demand",
        earning: "₱20K-35K/buwan",
      },
      {
        name: "Van",
        description: "Group transport at cargo delivery",
        demand: "Mataas na Demand",
        earning: "₱25K-40K/buwan",
      },
      {
        name: "Pickup Truck",
        description: "Cargo transport at moving services",
        demand: "Katamtamang Demand",
        earning: "₱20K-30K/buwan",
      },
      {
        name: "Delivery Truck",
        description: "Commercial deliveries at logistics",
        demand: "Mataas na Demand",
        earning: "₱30K-45K/buwan",
      },
      {
        name: "Electric Vehicle",
        description: "Eco-friendly transportation",
        demand: "Lumalaking Demand",
        earning: "₱25K-40K/buwan",
      },
    ],
  },
  stats: [
    { value: "100+", label: "Active Drivers" },
    { value: "₱35K", label: "Average Monthly Earnings" },
    { value: "50+", label: "Mga Lungsod na Covered" },
    { value: "99.8%", label: "Driver Satisfaction" },
  ],
  cta: {
    title: "Handa na Bang Magsimulang Kumita?",
    description:
      "Sumali sa libu-libong propesyonal na drivers na nakahanap ng financial freedom sa DriveConnect.",
    button: "Mag-apply Ngayon",
  },
  footer: {
    description:
      "Nagbibigay ng kapangyarihan sa mga propesyonal na drivers sa buong Pilipinas na may flexible earning opportunities.",
    drivers: {
      title: "Para sa mga Driver",
      links: [
        { text: "Maging Driver", href: "/driver/register" },
        { text: "Driver Login", href: "/driver/login" },
        { text: "Mga Kinakailangan", href: "/requirements" },
        { text: "Earnings Calculator", href: "/earnings" },
      ],
    },
    support: {
      title: "Suporta",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Makipag-ugnayan", href: "/contact" },
        { text: "Driver Support", href: "/driver-support" },
        { text: "Kaligtasan", href: "/safety" },
      ],
    },
    company: {
      title: "Kumpanya",
      links: [
        { text: "Tungkol sa Amin", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
      ],
    },
    copyright: "© 2024 DriveConnect. Lahat ng karapatan ay nakalaan.",
  },
  driverRegistration: {
    title: "Maging Propesyonal na Driver",
    subtitle:
      "Sumali sa aming network ng verified drivers at magsimulang kumita sa flexible schedules",
    steps: {
      personal: {
        title: "Personal na Impormasyon",
        description:
          "Pakibigay ang inyong personal details tulad ng nakalagay sa inyong government ID",
      },
      experience: {
        title: "Karanasan sa Pagmamaneho",
        description:
          "Sabihin sa amin ang tungkol sa inyong driving skills at karanasan sa iba't ibang uri ng sasakyan",
      },
      vehicle: {
        title: "Impormasyon ng Sasakyan",
        description:
          "Piliin ang mga uri ng sasakyan na kaya ninyong i-drive nang propesyonal",
      },
      documentation: {
        title: "Kinakailangang Dokumentasyon",
        description:
          "Mag-upload ng malinaw na larawan o scan ng mga sumusunod na dokumento",
      },
      verification: {
        title: "Identity Verification",
        description:
          "Huling hakbang para ma-verify ang inyong identity at makumpleto ang registration",
      },
    },
    form: {
      firstName: "Unang Pangalan",
      lastName: "Apelyido",
      email: "Email Address",
      phone: "Numero ng Telepono",
      address: "Kumpletong Address",
      birthdate: "Petsa ng Kapanganakan",
      gender: "Kasarian",
      selectGender: "Piliin ang kasarian",
      male: "Lalaki",
      female: "Babae",
      other: "Iba pa",
      yearsExperience: "Taon ng Karanasan sa Pagmamaneho",
      selectExperience: "Piliin ang karanasan",
      years: "taon",
      transmissionTypes: "Mga Uri ng Transmission na Kaya Ninyong I-drive",
      manual: "Manual Transmission",
      manualDesc: "Traditional stick shift vehicles",
      automatic: "Automatic Transmission",
      automaticDesc: "Automatic gear shifting vehicles",
      specialVehicles: "Special Vehicle Experience",
      electric: "Electric Vehicles",
      electricDesc: "Battery-powered eco-friendly vehicles",
      motorcycle: "Motorsiklo",
      motorcycleDesc: "Dalawang gulong na motor vehicles",
      truck: "Mabibigat na Truck",
      truckDesc: "Malalaking commercial vehicles",
      bus: "Bus",
      busDesc: "Public transportation vehicles",
      additionalExperience: "Karagdagang Karanasan sa Pagmamaneho",
      additionalExperienceDesc:
        "Ilarawan ang iba pang driving experience, special skills, o certifications...",
      vehicleTypes:
        "Mga Uri ng Sasakyan na Kaya Ninyong I-drive (Piliin lahat ng applicable)",
      primaryVehicle: "Primary Vehicle Details",
      make: "Make",
      model: "Model",
      year: "Taon",
      color: "Kulay",
      plateNumber: "Plate Number",
      availability: "Availability",
      availabilityDesc:
        "Ilarawan ang inyong typical availability (mga araw, oras, atbp.)",
      documentRequirements: "Mga Kinakailangang Dokumento",
      documentNote:
        "Lahat ng dokumento ay dapat valid at malinaw na mabasa. Ang mga dokumento ay ive-verify ng aming team.",
      required: "Kinakailangan",
      uploadText: "I-click para mag-upload o i-drag and drop",
      fileTypes: "PNG, JPG, PDF hanggang 10MB",
      chooseFile: "Piliin ang File",
      replaceFile: "Palitan ang File",
      almostDone: "Halos Tapos Na!",
      reviewTerms:
        "Halos kumpleto na ang inyong application. Pakireview at sumang-ayon sa aming mga terms.",
      agreeTerms: "Sumasang-ayon ako sa Terms and Conditions",
      termsDesc:
        "Sa pag-check ng box na ito, sumasang-ayon kayo sa aming driver terms, privacy policy, at service agreement.",
      consentBackground: "Pumapayag ako sa background verification",
      backgroundDesc:
        "Pinapahintulutan ko ang DriveConnect na i-verify ang aking background, driving record, at mga na-submit na dokumento.",
      agreeCommunications: "Sumasang-ayon ako na makatanggap ng communications",
      communicationsDesc:
        "Makatanggap ng booking notifications, updates, at mahalagang impormasyon via SMS at email.",
      whatNext: "Ano ang susunod na mangyayari?",
      continue: "Magpatuloy",
      back: "Bumalik",
      submit: "I-submit ang Application",
    },
    documents: [
      { id: "license", name: "Professional Driver's License", required: true },
      { id: "nbi", name: "NBI Clearance", required: true },
      { id: "medical", name: "Medical Certificate", required: true },
      { id: "ltfrb", name: "LTFRB Permit (kung applicable)", required: false },
    ],
    nextSteps: [
      "Ang inyong application ay ire-review sa loob ng 2-3 business days",
      "Ive-verify namin ang inyong mga dokumento at magsasagawa ng background check",
      "Makatanggap kayo ng email notification kapag na-approve na",
      "Kumpletuhin ang driver onboarding at magsimulang tumanggap ng mga booking",
    ],
  },
  businessOwnerRegistration: {
    title: "Mag-register bilang Business Owner",
    subtitle:
      "Sumali sa aming network ng business owners at magsimulang booking drivers para sa inyong mga sasakyan",
    steps: {
      personal: {
        title: "Personal Information",
        description:
          "Pakibigay ang inyong personal details tulad ng nakalagay sa inyong government ID",
      },
      business: {
        title: "Business Information",
        description:
          "Sabihin sa amin ang tungkol sa inyong business at ang mga uri ng sasakyan na kailangan ninyong i-book",
      },
      documentation: {
        title: "Kinakailangang Dokumentasyon",
        description:
          "Mag-upload ng malinaw na larawan o scan ng mga sumusunod na dokumento",
      },
      verification: {
        title: "Identity Verification",
        description:
          "Huling hakbang para ma-verify ang inyong identity at makumpleto ang registration",
      },
    },
    form: {
      firstName: "Unang Pangalan",
      lastName: "Apelyido",
      email: "Email Address",
      phone: "Numero ng Telepono",
      address: "Kumpletong Address",
      birthdate: "Petsa ng Kapanganakan",
      gender: "Kasarian",
      selectGender: "Piliin ang kasarian",
      male: "Lalaki",
      female: "Babae",
      other: "Iba pa",
      businessName: "Business Name",
      businessType: "Business Type",
      selectBusinessType: "Piliin ang business type",
      yearsInBusiness: "Years in Business",
      selectYearsInBusiness: "Piliin ang years in business",
      documentRequirements: "Mga Kinakailangang Dokumento",
      documentNote:
        "Lahat ng dokumento ay dapat valid at malinaw na mabasa. Ang mga dokumento ay ive-verify ng aming team.",
      required: "Kinakailangan",
      uploadText: "I-click para mag-upload o i-drag and drop",
      fileTypes: "PNG, JPG, PDF hanggang 10MB",
      chooseFile: "Piliin ang File",
      replaceFile: "Palitan ang File",
      almostDone: "Halos Tapos Na!",
      reviewTerms:
        "Halos kumpleto na ang inyong application. Pakireview at sumang-ayon sa aming mga terms.",
      agreeTerms: "Sumasang-ayon ako sa Terms and Conditions",
      termsDesc:
        "Sa pag-check ng box na ito, sumasang-ayon kayo sa aming business owner terms, privacy policy, at service agreement.",
      consentBackground: "Pumapayag ako sa background verification",
      backgroundDesc:
        "Pinapahintulutan ko ang DriveConnect na i-verify ang aking background, business record, at mga na-submit na dokumento.",
      agreeCommunications: "Sumasang-ayon ako na makatanggap ng communications",
      communicationsDesc:
        "Makatanggap ng booking notifications, updates, at mahalagang impormasyon via SMS at email.",
      whatNext: "Ano ang susunod na mangyayari?",
      continue: "Magpatuloy",
      back: "Bumalik",
      submit: "I-submit ang Application",
    },
    documents: [
      { id: "license", name: "Professional Driver's License", required: true },
      { id: "nbi", name: "NBI Clearance", required: true },
      { id: "medical", name: "Medical Certificate", required: true },
      {
        id: "business",
        name: "Business Registration Certificate",
        required: true,
      },
      { id: "ltfrb", name: "LTFRB Permit (kung applicable)", required: false },
    ],
    nextSteps: [
      "Ang inyong application ay ire-review sa loob ng 2-3 business days",
      "Ive-verify namin ang inyong mga dokumento at magsasagawa ng background check",
      "Makatanggap kayo ng email notification kapag na-approve na",
      "Kumpletuhin ang business owner onboarding at magsimulang booking drivers",
    ],
  },
};

export function getContent(language: "en" | "tl" = "en"): ContentData {
  return language === "tl" ? tagalogContent : englishContent;
}

// Function to update content (for future CMS integration)
export function updateContent(
  language: "en" | "tl",
  newContent: Partial<ContentData>
): void {
  // In a real application, this would update the CMS or database
  const targetContent = language === "tl" ? tagalogContent : englishContent;
  Object.assign(targetContent, newContent);
}

// Function to get content by key (for dynamic content loading)
export function getContentByKey(
  language: "en" | "tl",
  key: keyof ContentData
): any {
  const content = getContent(language);
  return content[key];
}
