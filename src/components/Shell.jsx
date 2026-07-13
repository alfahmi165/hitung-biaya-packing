export default function Shell({ children }) {
  return (
    <div className="app-shell">
      <div className="ledger flex flex-col gap-4">{children}</div>
    </div>
  );
}
