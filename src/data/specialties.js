import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Eye,
  Activity,
  Scissors,
  Droplet,
  Ear,
  Smile,
  Ribbon,
} from "lucide-react"

export const specialties = [
  { id: "cardiology", name: "Cardiology", icon: Heart, desc: "Heart & vascular care, bypass, angioplasty and valve surgeries.", procedures: 24 },
  { id: "neurology", name: "Neurology", icon: Brain, desc: "Brain, spine and nervous system diagnosis and surgery.", procedures: 18 },
  { id: "orthopedics", name: "Orthopedics", icon: Bone, desc: "Joint replacement, arthroscopy and spine surgery.", procedures: 30 },
  { id: "pediatrics", name: "Pediatrics", icon: Baby, desc: "Complete child health, immunization and neonatal care.", procedures: 15 },
  { id: "general-surgery", name: "General Surgery", icon: Scissors, desc: "Laparoscopic, hernia, appendix and gallbladder surgeries.", procedures: 28 },
  { id: "gastroenterology", name: "Gastroenterology", icon: Activity, desc: "Digestive system, liver and endoscopic procedures.", procedures: 20 },
  { id: "ophthalmology", name: "Ophthalmology", icon: Eye, desc: "Cataract, LASIK and retina care with advanced imaging.", procedures: 12 },
  { id: "nephrology", name: "Nephrology", icon: Droplet, desc: "Kidney care, dialysis and transplant support.", procedures: 10 },
  { id: "ent", name: "ENT", icon: Ear, desc: "Ear, nose and throat surgeries and hearing care.", procedures: 16 },
  { id: "dermatology", name: "Dermatology", icon: Smile, desc: "Skin, hair and cosmetic dermatology treatments.", procedures: 14 },
  { id: "oncology", name: "Oncology", icon: Ribbon, desc: "Cancer screening, chemotherapy and surgical oncology.", procedures: 22 },
  { id: "general-medicine", name: "General Medicine", icon: Stethoscope, desc: "Primary care, chronic disease and preventive medicine.", procedures: 26 },
]
