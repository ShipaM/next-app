type CardProps = {
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  const cardStyle = {
    padding: 30,
    margin: 10,
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #cdcdcd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
