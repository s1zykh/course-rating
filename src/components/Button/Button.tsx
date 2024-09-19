import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type AppearanceType = "primary" | "ghost";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  appearance: AppearanceType;
}
const clsx = (appearance: AppearanceType) => {
  return cn(styles.button, {
    [styles.primary]: appearance == "primary",
    [styles.ghost]: appearance == "ghost",
  });
};

export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
  return <button className={clsx(appearance)}>{children}</button>;
};
