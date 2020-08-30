const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height:'100%',
      position: 'absolute',
      left: '0',
      width: 'auto',
      // boxShadow: '1px 1px 1px gray',
      flexGrow: 1
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing(1),
    },
    menuroot: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    listItem: {
      
      // marginBottom: theme.spacing(2),
      cursor: 'pointer',
      // backgroundColor:'#DADEE5'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'green',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    margin: {
      margin: theme.spacing(1),
      // paddingleft:"30px;
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -5,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  });
  
  export default styles;