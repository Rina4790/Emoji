import styles from "../Emoji.module.css"

interface IEmoji {
  title: string;
  symbol: string;
  keywords: string;
}

interface IListProps {
  items: IEmoji[];
}

export const List = ({ items }: IListProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className={styles.item}>
            {item.symbol} {item.title}
          </div>
        );
      })}
    </>
  );
};
