export default function Category({
  categoryIcon,
  categoryName,
  categoryScore,
  totalScore = 100,
  categoryBgColor,
  categoryFontColor,
}) {
  return (
    <div
      className="summaryCategory col-summarycategory"
      style={{ backgroundColor: categoryBgColor }}
    >
      <p style={{ width: "50px" }}>{categoryIcon}</p>
      <p style={{ color: categoryFontColor, fontWeight: 500 }}>
        {categoryName}
      </p>
      <p style={{ fontWeight: 500 }}>
        {categoryScore}
        <span style={{ color: " hsl(224, 30%, 67%)" }}>/{totalScore}</span>
      </p>
    </div>
  );
}
