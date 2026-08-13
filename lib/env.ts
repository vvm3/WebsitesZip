/**
 * Shared env helpers (server + middleware safe).
 */
export const parseEnvFlag = (value: string | undefined): boolean => {
  const normalized = value?.trim().toLowerCase();
  return normalized === "true" || normalized === "1";
};
