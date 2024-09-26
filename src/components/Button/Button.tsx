import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

import cn from "classnames";
import styles from "./Button.module.scss";
import ArrowSvg from "../../../public/assets/arrow.svg";

type AppearanceType = "primary" | "ghost";
type ArrowType = "right" | "down" | "none";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: AppearanceType;
  arrow?: ArrowType;
}
const clsx = (appearance: AppearanceType) => {
  return cn(styles.button, {
    [styles.primary]: appearance == "primary",
    [styles.ghost]: appearance == "ghost",
  });
};

const ButtonContent = (children: ReactNode, arrow: ArrowType) => {
  if (children) {
    return (
      <>
        {children}
        {arrow !== "none" && (
          <span
            className={cn(styles.arrow, {
              [styles.down]: arrow == "down",
            })}
          >
            <ArrowSvg />
          </span>
        )}
      </>
    );
  }
};

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, appearance, arrow = "none" } = props;
  return (
    <button className={clsx(appearance)}>
      {ButtonContent(children, arrow)}
    </button>
  );
};
