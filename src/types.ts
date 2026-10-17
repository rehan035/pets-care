export interface VeterinaryService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  inclusions: string[];
  recommendedFor: string;
  preparationTip: string;
}

export interface ClientReview {
  id: string;
  author: string;
  petType: 'dog' | 'cat' | 'bird' | 'other';
  petDescription: string;
  locality: string;
  rating: number;
  date: string;
  text: string;
  serviceReceived: string;
}

export interface SargodhaClimateTip {
  id: string;
  title: string;
  season: 'Summer (Hot & Dry)' | 'Monsoon (Humid & Rain)' | 'Winter (Fog & Cool)';
  iconName: string;
  shortAdvice: string;
  detailedAction: string;
}

export interface ConsultationFormData {
  ownerName: string;
  phone: string;
  petSpecies: 'Dog' | 'Cat' | 'Bird' | 'Other';
  petBreedAge: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
}
