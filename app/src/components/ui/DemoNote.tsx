import { Sparkles } from "lucide-react";

export function DemoNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="flex gap-3 rounded-xl border border-brand/50 bg-brand/10 p-4 text-sm leading-6 text-text-secondary">
      <Sparkles aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
      <p>{children}</p>
    </aside>
  );
}
