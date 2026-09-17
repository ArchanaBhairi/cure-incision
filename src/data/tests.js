export const tests = [
  { id: "cbc", name: "Complete Blood Count (CBC)", category: "Blood", price: 299, mrp: 500, reportTime: "6 hrs", homeCollection: true, parameters: 24 },
  { id: "lipid", name: "Lipid Profile", category: "Blood", price: 449, mrp: 800, reportTime: "12 hrs", homeCollection: true, parameters: 8 },
  { id: "thyroid", name: "Thyroid Profile (T3 T4 TSH)", category: "Hormone", price: 399, mrp: 700, reportTime: "12 hrs", homeCollection: true, parameters: 3 },
  { id: "hba1c", name: "HbA1c (Glycated Hemoglobin)", category: "Diabetes", price: 349, mrp: 600, reportTime: "6 hrs", homeCollection: true, parameters: 1 },
  { id: "vitd", name: "Vitamin D (25-OH)", category: "Vitamin", price: 899, mrp: 1600, reportTime: "24 hrs", homeCollection: true, parameters: 1 },
  { id: "vitb12", name: "Vitamin B12", category: "Vitamin", price: 649, mrp: 1200, reportTime: "24 hrs", homeCollection: true, parameters: 1 },
  { id: "lft", name: "Liver Function Test (LFT)", category: "Blood", price: 549, mrp: 950, reportTime: "12 hrs", homeCollection: true, parameters: 11 },
  { id: "kft", name: "Kidney Function Test (KFT)", category: "Blood", price: 549, mrp: 950, reportTime: "12 hrs", homeCollection: true, parameters: 10 },
  { id: "crp", name: "C-Reactive Protein (CRP)", category: "Blood", price: 499, mrp: 900, reportTime: "12 hrs", homeCollection: true, parameters: 1 },
  { id: "urine", name: "Urine Routine & Microscopy", category: "Urine", price: 199, mrp: 350, reportTime: "6 hrs", homeCollection: true, parameters: 15 },
  { id: "iron", name: "Iron Studies", category: "Blood", price: 799, mrp: 1400, reportTime: "24 hrs", homeCollection: true, parameters: 4 },
  { id: "covid", name: "COVID-19 RT-PCR", category: "Infection", price: 599, mrp: 1000, reportTime: "24 hrs", homeCollection: true, parameters: 1 },
]

export const testCategories = ["All", "Blood", "Hormone", "Diabetes", "Vitamin", "Urine", "Infection"]
