import React from "react";

export interface TagClassNames {
  container?: string;
  text?: string;
  removeButton?: string;
}

interface TagProps {
  text: string;
  remove: any;
  disabled?: boolean;
  classNames?: TagClassNames;
}

export default function Tag({ text, remove, disabled, classNames }: TagProps) {
  const handleOnRemove = (e) => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={classNames?.container}>
      <span className={classNames?.text}>{text}</span>
      {!disabled && (
        <button
          className={classNames?.removeButton}
          type="button"
          onClick={handleOnRemove}
          aria-label={`remove ${text}`}
        >
          &#10005;
        </button>
      )}
    </span>
  );
}
