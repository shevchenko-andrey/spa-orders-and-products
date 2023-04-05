export const SessionCounter = () => {
  const sessionCount = 100;

  return (
    <div>
      <p>Active sessions:</p>
      <span>{sessionCount > 1000000 ? "1000000+" : sessionCount}</span>
    </div>
  );
};
