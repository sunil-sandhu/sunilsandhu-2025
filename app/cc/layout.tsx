export default function CCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#8384ff] text-black" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {children}
    </div>
  );
}
