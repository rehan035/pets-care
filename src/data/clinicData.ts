import { VeterinaryService, ClientReview, SargodhaClimateTip } from '../types';

export const CLINIC_INFO = {
  name: 'Saad Veterinary Clinic',
  doctorName: 'Dr. Saad Rehman',
  tagline: 'Compassionate Animal Healthcare & Preventive Medicine',
  address: 'Main General Bus Stand Road, opposite ILM College, New Satellite Town, Sargodha, Punjab, Pakistan',
  shortAddress: 'Opposite ILM College, Main General Bus Stand Rd, Sargodha',
  phone: '+92 300 6009997',
  phoneDisplay: '+92 300 6009997',
  whatsappRaw: '923006009997',
  email: 'saadveterinaryclinic9997@gmail.com',
  hoursWeekday: 'Monday – Saturday: 9:00 AM – 9:00 PM',
  hoursSunday: 'Sunday: Urgent triage on WhatsApp / Call',
  googleMapsUrl: 'https://maps.app.goo.gl/na28YXpmxs1hGSC18',
  rating: 4.9,
  totalReviewsDisplay: '5.0 Rating on Google Maps',
};

export const CLINIC_IMAGES = {
  logo: '/src/assets/images/saad_vet_logo_1792262095878.jpg',
  heroVet: '/src/assets/images/hero_vet_consultation_1792262096540.jpg',
  heroBeautifulPets: '/src/assets/images/beautiful_happy_pets_clinic_1792263071568.jpg',
  heroVetJoy: '/src/assets/images/beautiful_hero_vet_clinic_1792263008032.jpg',
  drSaadPortrait: '/src/assets/images/dr_saad_clinic_warm_1792263051938.jpg',
  catCheckup: '/src/assets/images/vet_checking_cat_1792262098624.jpg',
  puppyWellness: '/src/assets/images/vet_puppy_wellness_1792262097511.jpg',
  clinicTour: '/src/assets/images/saad_clinic_tour_facility_1792263400534.jpg',
};

export const SERVICES: VeterinaryService[] = [
  {
    id: 'consultation',
    title: 'General Health Consultations',
    shortDesc: 'Routine physical checks, vital sign evaluation, coat and ear inspection, and lifestyle recommendations.',
    fullDesc: 'Comprehensive full-body checkup examining heart, lungs, ears, eyes, oral cavity, lymph nodes, and abdominal palpation. Ideal for new pets, annual wellness checkups, or when you notice subtle changes in energy.',
    inclusions: [
      'Comprehensive physical & musculoskeletal exam',
      'Temperature, pulse, and respiration check',
      'Ear canal & dental hygiene assessment',
      'Appetite, hydration, and weight monitoring',
      'Personalized preventative healthcare plan',
    ],
    recommendedFor: 'Puppies, adult dogs, kittens, senior cats, and companion birds.',
    preparationTip: 'Bring your pet in a safe carrier or leash. Note any changes in water intake or stool frequency over the last 48 hours.',
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations & Immunization',
    shortDesc: 'Core and non-core vaccines protecting dogs and cats against life-threatening viral infections.',
    fullDesc: 'Carefully stored, temperature-regulated immunizations for canine parvovirus, distemper, infectious hepatitis, rabies, and feline panleukopenia (feline distemper) and respiratory viruses.',
    inclusions: [
      'Pre-vaccine health and temperature screening',
      'Core puppy & kitten primary schedules',
      'Official vaccination passport / record book update',
      'Annual booster reminder schedule',
      'Post-vaccine observation instructions',
    ],
    recommendedFor: 'Puppies from 6–8 weeks, kittens from 8 weeks, and all adult pets needing annual booster coverage.',
    preparationTip: 'Ensure your pet is healthy and not running a fever on the day of vaccination.',
  },
  {
    id: 'deworming',
    title: 'Deworming & Parasite Control',
    shortDesc: 'Targeted broad-spectrum parasite treatments formulated specifically for your pet’s exact body weight.',
    fullDesc: 'Intestinal parasites (roundworms, hookworms, tapeworms) rob growing animals of nutrition. We administer safe, weight-calibrated oral dewormers and topical spot-on preventatives for ticks, fleas, and mites.',
    inclusions: [
      'Accurate body weight measurement on veterinary scale',
      'Single-dose or multi-stage oral worming tablets/syrups',
      'External tick & flea spot-on treatment (Fipronil / Selamectin)',
      'Ear mite cleaning & topical drops if indicated',
      'Preventative deworming schedule for home hygiene',
    ],
    recommendedFor: 'All puppies, adult outdoor dogs, long-haired Persian cats, and newly adopted rescue animals.',
    preparationTip: 'Do not withhold food prior to deworming unless specifically advised.',
  },
  {
    id: 'diagnostics',
    title: 'Clinical Diagnostics & Acute Care',
    shortDesc: 'Attentive diagnosis and supportive medical therapy for sudden illness, fever, digestive distress, and lethargy.',
    fullDesc: 'When pets suffer from persistent vomiting, bloody stools, respiratory wheezing, fever, or sudden weakness, Dr. Saad Rehman conducts structured differential diagnostics to formulate targeted treatment.',
    inclusions: [
      'Systematic symptom evaluation & vital triage',
      'Dehydration grading & fluid rehydration therapy',
      'Targeted pharmaceutical management & prescription',
      'Gastrointestinal and respiratory supportive protocols',
      'Daily follow-up monitoring via WhatsApp or clinic recheck',
    ],
    recommendedFor: 'Pets showing acute lethargy, refusing food for >24h, experiencing diarrhea, or showing signs of pain.',
    preparationTip: 'Take a clear photo of any vomit or stool if safe to do so, and note when symptoms first began.',
  },
  {
    id: 'nutrition',
    title: 'Pet Nutrition & Sargodha Climate Care',
    shortDesc: 'Nutritional strategies calibrated for growing animals, sensitive stomachs, and Sargodha’s hot summer months.',
    fullDesc: 'Sargodha experiences intense summer temperatures reaching above 45°C. We design practical feeding schedules, hydration strategies, electrolytes, and tailored diets for Persian cats prone to hairballs or active dogs.',
    inclusions: [
      'Body condition score (BCS) & ideal weight assessment',
      'Commercial dry/wet food vs safe home-prepared diet advice',
      'Summer heatwave hydration & electrolyte plans',
      'Digestive sensitivity and coat shedding supplements',
      'Weaning advice for mother pets and orphaned neonates',
    ],
    recommendedFor: 'Underweight or overweight pets, fussy eaters, Persian cats with sensitive digestion, and double-coated breeds.',
    preparationTip: 'Make a list of foods, treats, and home scraps your pet currently eats in a normal week.',
  },
  {
    id: 'wound-care',
    title: 'Wound Dressing & Minor Procedures',
    shortDesc: 'Sterile cleaning, antiseptic treatment, bandaging of cuts, scratch wounds, abscess management, and nail trims.',
    fullDesc: 'Fast hygienic management of superficial bite injuries, thorns, lacerations, skin abscesses, and overgrown painful claws with local antiseptic washes, sterile gauze bandaging, and gentle handling.',
    inclusions: [
      'Sterile saline debridement & antiseptic wash',
      'Protective dressings & non-stick bandages',
      'Pain management & antibiotic ointment application',
      'Safe claw trimming without quick bleeding',
      'Home bandaging maintenance & dressing change guide',
    ],
    recommendedFor: 'Pets with accidental lacerations, fight wounds, torn claws, or localized skin irritations.',
    preparationTip: 'Prevent your pet from licking the wound with an Elizabethan collar or clean cloth wrap during transit.',
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    petType: 'dog',
    petDescription: 'German Shepherd Parent',
    locality: 'Sargodha',
    rating: 5,
    date: 'Verified Visit',
    text: 'Dr. Saad Rehman is the best veterinarian in Sargodha. Brought my German Shepherd when he had sudden high fever and would not eat anything. With Dr. Saad’s prompt diagnosis, injection, and recovery diet, my dog bounced back within two days. Extremely gentle handling and affordable treatment.',
    serviceReceived: 'Clinical Treatment & Recovery Diet',
  },
  {
    id: 'rev-2',
    author: 'Ayesha Malik',
    petType: 'cat',
    petDescription: 'Persian Cat Owner',
    locality: 'New Satellite Town, Sargodha',
    rating: 5,
    date: 'Verified Visit',
    text: 'Got both of my Persian kittens their core vaccinations and deworming courses here. The clinic opposite ILM College is clean and sanitized. Dr. Saad took the time to explain proper kitten nutrition, grooming, and ear hygiene. The best pet clinic in Sargodha hands down!',
    serviceReceived: 'Vaccination & Deworming Protocol',
  },
  {
    id: 'rev-3',
    author: 'Muhammad Usman',
    petType: 'dog',
    petDescription: 'Pet Parent',
    locality: 'Sargodha Cantt',
    rating: 5,
    date: 'Verified Visit',
    text: 'Honest diagnosis and zero commercial push. Whenever I have an urgent query regarding my pets, they answer quickly on WhatsApp (+92 300 6009997) with genuine reassurance. Easy parking right on Main Bus Stand Road.',
    serviceReceived: 'Consultation & Emergency Guidance',
  },
  {
    id: 'rev-4',
    author: 'Bilal Ahmed',
    petType: 'dog',
    petDescription: 'Labrador Retriever Owner',
    locality: 'New Satellite Town',
    rating: 5,
    date: 'Verified Visit',
    text: 'Compassionate veterinary care at its finest. My Labrador had a paw laceration that got inflamed, and Dr. Saad treated the wound with antiseptic dressing and gentle painkillers. Clean premises and very patient staff.',
    serviceReceived: 'Wound Dressing & Antiseptic Care',
  },
];

export const SARGODHA_CLIMATE_TIPS: SargodhaClimateTip[] = [
  {
    id: 'tip-summer',
    title: 'Managing Punjab Heatwaves (May – August)',
    season: 'Summer (Hot & Dry)',
    iconName: 'Sun',
    shortAdvice: 'Never walk dogs on hot asphalt between 11:00 AM and 5:00 PM.',
    detailedAction: 'Sargodha summer temperatures routinely exceed 43°C. Asphalt absorbs immense heat, burning canine paw pads in seconds. Walk pets strictly at dawn or late dusk. Keep multiple clay or ceramic bowls of shaded, cool water across your house and courtyard.',
  },
  {
    id: 'tip-monsoon',
    title: 'Monsoon Tick & Flea Flare-ups (July – September)',
    season: 'Monsoon (Humid & Rain)',
    iconName: 'CloudRain',
    shortAdvice: 'High humidity triggers rapid flea egg hatching and tick infestations.',
    detailedAction: 'Check between paw toes, ear flaps, and under the collar after outdoor walks. If you spot ticks or flea dirt, administer a veterinary-approved spot-on preventative rather than harsh household chemical sprays which can be toxic to cats and puppies.',
  },
  {
    id: 'tip-winter',
    title: 'Winter & Smog Season Respiratory Care (December – February)',
    season: 'Winter (Fog & Cool)',
    iconName: 'Wind',
    shortAdvice: 'Cold drafts and smog can aggravate respiratory passages in kittens and birds.',
    detailedAction: 'Provide elevated bedding away from cold floor tiles. Persian cats with flat faces (brachycephalic) and caged companion birds are sensitive to seasonal dust and fog; ensure well-ventilated draft-free indoor spaces.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Central New Satellite Town Landmark',
    desc: 'Conveniently situated on Main General Bus Stand Road directly opposite ILM College, with straightforward road access and hassle-free parking for pet carriers.',
  },
  {
    title: 'Direct WhatsApp Accessibility',
    desc: 'Reach Dr. Saad directly on +92 300 6009997. Send photos of symptoms, ask quick recovery questions, or get pre-arrival instructions without automated phone trees.',
  },
  {
    title: 'Low-Stress, Gentle Handling',
    desc: 'We never rush examinations. Anxious cats, nervous puppies, and distressed birds are handled with patience and calm reassurance to avoid trauma.',
  },
  {
    title: 'Ethical & Transparent Advice',
    desc: 'Clear explanations of diagnoses and medication needs. We never prescribe unnecessary pharmaceutical products or recommend redundant tests.',
  },
  {
    title: 'Six Days a Week (9 AM – 9 PM)',
    desc: 'Extended clinic hours from morning to evening allow working pet parents and students to visit without taking time off during the workday.',
  },
  {
    title: 'Locally Grounded Expertise',
    desc: 'Veterinary care adapted specifically to local feeding habits, regional parasite prevalence, and Punjab’s weather challenges.',
  },
];

export const NEW_CLIENT_STEPS = [
  {
    step: '01',
    title: 'Low-Stress Arrival',
    desc: 'Easy street parking right opposite ILM College. A welcoming entrance designed to keep cats in carriers and dogs on leashes calm and separated.',
  },
  {
    step: '02',
    title: 'Nose-to-Tail Examination',
    desc: 'Dr. Saad Rehman conducts a systematic check: weight, heart & lung auscultation, dental inspection, eye/ear otoscopy, and joint mobility.',
  },
  {
    step: '03',
    title: 'Transparent Care Plan',
    desc: 'We explain diagnostic findings clearly in Urdu or English, outline necessary medication or vaccine schedules, and give upfront pricing with zero surprises.',
  },
  {
    step: '04',
    title: 'Direct WhatsApp Follow-up',
    desc: 'Leave with your pet’s official health card and direct access to Dr. Saad on WhatsApp (+92 300 6009997) for post-visit monitoring.',
  },
];

export const CLINIC_TOUR_AREAS = [
  {
    title: 'Sanitized Examination Room',
    desc: 'Stainless steel examination tables disinfected between every patient, equipped with veterinary otoscopes, digital thermometers, and stethoscopes.',
  },
  {
    title: 'Temperature-Controlled Pharmacy',
    desc: 'Refrigerated cold-chain storage for vital viral vaccines (DHPP, Rabies, FPV) and authentic broad-spectrum veterinary pharmaceuticals.',
  },
  {
    title: 'Sterile Minor Procedure Suite',
    desc: 'Dedicated hygienic zone for sterile wound debridement, abscess drainage, antiseptic bandaging, and routine claw trimming.',
  },
  {
    title: 'Comfortable Consultation Bay',
    desc: 'Quiet seating where pet owners can discuss dietary management, behavioral quirks, and long-term senior pet care at a calm pace.',
  },
];

