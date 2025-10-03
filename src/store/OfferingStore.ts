import { atom } from "nanostores";

import type { Offering } from "@lib/definitions";

export const $items = atom<Offering[]>([]);
