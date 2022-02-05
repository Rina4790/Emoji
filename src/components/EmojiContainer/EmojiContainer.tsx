import { emojies } from "../EmojiRow/EmojiConstans";
import { useState } from "react";
import { Form } from "../Form/Form";
import { List } from "../EmojiRow/EmojiRow";

export const Container = () => {
  const [emojiesList, setEmojiesList] = useState(emojies);

  const onChangeText = (value: string) => {
    const filteredEmojies = emojies.filter((item) => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      if (item.keywords.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      return false;
    });

    setEmojiesList(filteredEmojies);
  };

  return (
    <>
      <Form onChangeText={onChangeText} />
      <List items={emojiesList} />
    </>
  );
};
