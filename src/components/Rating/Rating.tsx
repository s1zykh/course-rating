"use client";

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

import StarIcon from "@/assets/star.svg";
import cn from "classnames";
import styles from "./Rating.module.scss";

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}

export const Rating = (props: RatingProps) => {
  const { rating, isEditable = false, setRating, ...ratingProps } = props;

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => onChangeDisplay(i + 1)}
          onMouseLeave={() => onChangeDisplay(rating)}
          onClick={() => onClick(i)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && onHandleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updateArray);
  };
  const onChangeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const onHandleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...ratingProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
