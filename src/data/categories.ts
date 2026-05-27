export const CATEGORIES = [
  { key: "dev", label: "Dev" },
  { key: "gaming", label: "Gaming" },
  { key: "cultura", label: "Cultura" },
] as const

export type CategoryKey = (typeof CATEGORIES)[number]["key"]

export const CATEGORY_KEYS = CATEGORIES.map((c) => c.key)

export function getCategoryLabel(key: CategoryKey) {
  const found = CATEGORIES.find((c) => c.key === key)
  return found ? found.label : key
}

export function isValidCategory(key: string): key is CategoryKey {
  return CATEGORY_KEYS.includes(key as CategoryKey)
}
