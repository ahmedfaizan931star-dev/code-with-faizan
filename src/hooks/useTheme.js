import { useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(true);
  return { dark, toggle: () => setDark((d) => !d) };
}
