type TextWithErrorProps = {
  text: string;
  error: string | null;
};

export const TextWithError: React.FC<TextWithErrorProps> = ({
  text,
  error,
}) => (
  <div className="text__container">
    <span>{text}</span>
    {error && <span className="error">{error}</span>}
  </div>
);
