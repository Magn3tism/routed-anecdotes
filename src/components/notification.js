const Notification = ({ notification }) => {
  const style = {
    color: "green",
    fontSize: "25px",
    border: "3px solid green",
    padding: "5px",
  };

  if (notification) return <div style={style}>{notification}</div>;
  return null;
};

export default Notification;
