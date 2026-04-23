import GreekFigure from "@/components/ui/greek-figure";

export default function FigurTest() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0960D0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 64,
      padding: 48,
    }}>
      <GreekFigure width={150} />
      <GreekFigure width={220} />
      <GreekFigure width={300} />
    </div>
  );
}
