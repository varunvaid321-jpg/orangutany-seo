const styles: Record<string, { bg: string; text: string; label: string }> = {
  edible: { bg: "bg-green-900/50", text: "text-green-300", label: "Edible" },
  "edible-with-caution": { bg: "bg-yellow-900/50", text: "text-yellow-300", label: "Edible with Caution" },
  inedible: { bg: "bg-gray-800/50", text: "text-gray-300", label: "Inedible" },
  toxic: { bg: "bg-orange-900/50", text: "text-orange-300", label: "Toxic" },
  deadly: { bg: "bg-red-900/50", text: "text-red-300", label: "Deadly" },
  psychoactive: { bg: "bg-purple-900/50", text: "text-purple-300", label: "Psychoactive" },
};

export function EdibilityBadge({ edibility, psychoactive }: { edibility: string; psychoactive?: boolean }) {
  const s = styles[edibility] ?? styles.inedible;
  const p = psychoactive ? styles.psychoactive : null;
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${s.bg} ${s.text}`}>
        <span className="inline-block h-2 w-2 rounded-full bg-current" />
        {s.label}
      </span>
      {p && (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${p.bg} ${p.text}`}>
          <span className="inline-block h-2 w-2 rounded-full bg-current" />
          {p.label}
        </span>
      )}
    </span>
  );
}
