interface SearchProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}

export const Search = ({
  primary = false,
  size = "medium",
  label,
}: SearchProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <input
      className="h-10 w-full rounded-full border bg-white pl-4 pr-10 text-sm shadow-xl"
      id="search"
      type="search"
      placeholder="Search District..."
    />
  );
};
