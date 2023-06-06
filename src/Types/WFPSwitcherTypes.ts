export interface WFPSwitcherProps {
  buttons: ButtonsProps[];
  defaultValue: string;
  setValue: React.Dispatch<React.SetStateAction<ButtonValueProps>>;
}

interface ButtonsProps {
  icon: any;
  value: ButtonValueProps;
}
export type ButtonValueProps = "food" | "hazard" | "climate";
