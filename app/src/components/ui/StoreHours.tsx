import { Clock3 } from "lucide-react";
import type { StoreHoursEntry } from "@/lib/storeInfo";

type StoreHoursProps = {
  hours: readonly StoreHoursEntry[];
};

export function StoreHours({ hours }: StoreHoursProps) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-base font-bold text-text-primary sm:text-lg">
        <Clock3 aria-hidden="true" className="text-text-link" size={20} />
        Store Hours
      </h3>
      <div className="mt-2 overflow-hidden rounded-lg border border-border bg-background-alt px-3 sm:px-4">
        <dl className="grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6">
          {hours.map((entry) => (
            <div
              key={entry.day}
              className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b border-border py-1.5 text-xs last:border-b-0 sm:[&:nth-child(4)]:border-b-0"
            >
              <dt className="font-semibold text-text-primary">{entry.day}</dt>
              <dd
                className={
                  entry.isClosed
                    ? "font-semibold text-warning"
                    : "text-right text-text-secondary"
                }
              >
                {entry.hours}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
