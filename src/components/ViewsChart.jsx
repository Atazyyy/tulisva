// Grafik batang SVG buatan sendiri — pembaca per artikel (tanpa library chart).
export default function ViewsChart({ data }) {
  // data: [{ id, label, meta, value }] — sudah diurutkan dari terbesar
  const W = 640;
  const rowH = 48;
  const labelW = 250;
  const barX = labelW + 8;
  const barMax = W - barX - 70;
  const max = Math.max(...data.map((d) => d.value), 1);
  const H = Math.max(data.length * rowH + 10, 60);

  const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Jumlah pembaca per artikel"
    >
      {data.map((d, i) => {
        const y = i * rowH + 6;
        const w = Math.max(4, (d.value / max) * barMax);
        const isTop = i === 0;
        return (
          <g key={d.id}>
            <title>{`${d.label}: ${d.value.toLocaleString("id-ID")} pembaca (${d.meta})`}</title>
            <text x={0} y={y + 17} fontSize="12.5" fontWeight="700" fill="#2a2119">
              {truncate(d.label, 34)}
            </text>
            <text x={0} y={y + 32} fontSize="10.5" fill="#716355">
              {d.meta}
            </text>
            <rect x={barX} y={y + 2} width={barMax} height={26} rx={8} fill="#f1e7d7" />
            <rect
              x={barX}
              y={y + 2}
              width={w}
              height={26}
              rx={8}
              fill={isTop ? "#a2541f" : "#d8b68c"}
            />
            <text
              x={W}
              y={y + 20}
              textAnchor="end"
              fontSize="12.5"
              fontWeight="700"
              fill="#2a2119"
            >
              {d.value >= 1000
                ? (d.value / 1000).toFixed(1).replace(".0", "") + "rb"
                : String(d.value)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
