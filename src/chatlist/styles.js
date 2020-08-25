const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'auto',
      position: 'absolute',
      left: '0',
      width: 'auto',
      boxShadow: '1px 1px 1px green'
    },
    listItem: {
      cursor: 'pointer'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'green',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;