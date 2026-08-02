export type EventStatus = "attendance" | "availability";

export type StoreEvent = {
  id: string;
  title: string;
  eventType: string;
  month: string;
  day: number;
  dateTime: string;
  displayTime: string;
  status: {
    kind: EventStatus;
    label: string;
  };
};

export const upcomingEvents: readonly StoreEvent[] = [
  {
    id: "commander-night",
    title: "Commander Night",
    eventType: "Trading Card Games",
    month: "Aug",
    day: 7,
    dateTime: "2026-08-07T18:00:00-05:00",
    displayTime: "6:00 PM",
    status: { kind: "attendance", label: "22 Players" },
  },
  {
    id: "pokemon-league",
    title: "Pokemon League",
    eventType: "League Play",
    month: "Aug",
    day: 9,
    dateTime: "2026-08-09T13:00:00-05:00",
    displayTime: "1:00 PM",
    status: { kind: "availability", label: "16 Spots Left" },
  },
  {
    id: "warhammer-40k",
    title: "Warhammer 40K",
    eventType: "Miniatures",
    month: "Aug",
    day: 15,
    dateTime: "2026-08-15T11:00:00-05:00",
    displayTime: "11:00 AM",
    status: { kind: "availability", label: "8 Spots Left" },
  },
  {
    id: "dnd-adventurers-league",
    title: "D&D Adventurers League",
    eventType: "Role Playing Games",
    month: "Aug",
    day: 20,
    dateTime: "2026-08-20T18:30:00-05:00",
    displayTime: "6:30 PM",
    status: { kind: "attendance", label: "18 Players" },
  },
] as const;
