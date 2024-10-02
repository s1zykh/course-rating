import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";
import styles from "./Text.module.scss";

type SizeType = "s" | "m" | "l";

interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  className?: string;
  size?: SizeType;
  children: ReactNode;
}

const clsx = (size: SizeType) => {
  return cn(styles.p, {
    [styles.s]: size == "s",
    [styles.m]: size == "m",
    [styles.l]: size == "l",
  });
};

export const Text = (props: TextProps): JSX.Element => {
  const { size = "m", children, ...textProps } = props;

  return (
    <p className={clsx(size)} {...textProps}>
      {children}
    </p>
  );
};
