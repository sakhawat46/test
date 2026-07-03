export type MedicationId = "semaglutide" | "tirzepatide";
export type PlanId = "m2m" | "3mo" | "6mo";

export interface PlanPricing {
  pricePerMonth: number;
  total: number | null;
}

export const plansByMedication: Record<string, PlanPricing[]> = {
  semaglutide: [
    { pricePerMonth: 229, total: null },
    { pricePerMonth: 209, total: 627 },
    { pricePerMonth: 199, total: 1194 },
  ],
  tirzepatide: [
    { pricePerMonth: 289, total: null },
    { pricePerMonth: 279, total: 837 },
    { pricePerMonth: 259, total: 1554 },
  ],
};

export const medicationLabels: Record<string, { name: string; color: string }> = {
  semaglutide: { name: "Semaglutide", color: "#4EB7C0" },
  tirzepatide: { name: "Tirzepatide", color: "#F0327A" },
};

export const planLabels: { id: PlanId; label: string; badge: string | null; months: number }[] = [
  { id: "m2m", label: "Month-to-Month", badge: "Most Flexible", months: 1 },
  { id: "3mo", label: "3-Month Supply", badge: "Most Popular", months: 3 },
  { id: "6mo", label: "6-Month Supply", badge: "Most Savings", months: 6 },
];

export const DEFAULT_MEDICATION: MedicationId = "semaglutide";
export const DEFAULT_PLAN: PlanId = "m2m";

export interface ResolvedSelection {
  medicationId: string;
  medication: { name: string; color: string };
  plan: { id: PlanId; label: string; badge: string | null; months: number };
  price: PlanPricing;
  index: number;
  monthlySavings: number;
}

export function resolveSelection(
  medicationId: string | null | undefined,
  planId: string | null | undefined,
): ResolvedSelection {
  const medKey = medicationId && plansByMedication[medicationId] ? medicationId : DEFAULT_MEDICATION;
  const prices = plansByMedication[medKey];
  const medication = medicationLabels[medKey];

  const foundIndex = planLabels.findIndex((p) => p.id === planId);
  const index = foundIndex >= 0 ? foundIndex : 0;
  const plan = planLabels[index];
  const price = prices[index];

  const monthlySavings =
    index > 0 ? (prices[0].pricePerMonth - price.pricePerMonth) * plan.months : 0;

  return { medicationId: medKey, medication, plan, price, index, monthlySavings };
}
