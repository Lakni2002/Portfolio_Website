import React, { useMemo, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MagicBentoCard({ children, className = "" }: Props) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const style = useMemo(() => {
    // ✅ allow CSS variables in inline styles
    return {
      ["--mx"]: `${pos.x}%`,
      ["--my"]: `${pos.y}%`,
    } as React.CSSProperties & Record<string, string>;
  }, [pos]);

  return (
    <div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
      }}
      className={[
        "relative overflow-hidden rounded-3xl",
        "transition-transform duration-300 hover:-translate-y-1",
        // glow layers
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition",
        "before:bg-[radial-gradient(380px_circle_at_var(--mx)_var(--my),rgba(168,85,247,0.30),transparent_60%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition",
        "after:bg-[radial-gradient(260px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.14),transparent_60%)]",
        "hover:before:opacity-100 hover:after:opacity-100",
        className,
      ].join(" ")}
      style={style}
    >
      {/* content on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
