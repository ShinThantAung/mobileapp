const styles = (theme) => ({
  content: {
    height: "calc(100vh - 70px)",
    overflow: "auto",
    padding: "20px",
    marginLeft: "100px",
    marginRight: "10px",
    boxSizing: "border-box",
    // overflowY: 'scroll',
    marginTop: "-100px",
    width: "calc(100% - 300px)",
    position: "absolute",
  },

  userSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#5399F3",
    color: "white",
    width: "300px",
    borderRadius: "0px",
  },

  friendSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#EDF2F3",
    color: "black",
    width: "300px",
    borderRadius: "10px",
  },
});

export default styles;
