import { useState } from "react";
import styles from "../Emoji.module.css"


interface IProps {
  onChangeText: (value: string) => void;
}

export const Form = ({ onChangeText }: IProps) => {
  const [value, setValue] = useState("");

  return (
	  <input
		className={styles.input}
      value={value}
      onChange={(event) => {
        onChangeText(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};
