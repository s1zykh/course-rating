import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import Image from "next/image";

import cn from "classnames";
import Arrow from "../../../public/assets/arrow.svg";
import styles from "./Button.module.scss";

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
            <Image src={Arrow} alt="arrow" />
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
