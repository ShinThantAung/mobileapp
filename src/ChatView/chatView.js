import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import './ChatView.scss';
import './chatView.css';


// import Container from '@material-ui/core/Container';
class ChatViewComponent extends React.Component {

  componentDidMount = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
  componentDidUpdate = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }

  render() {

    const { classes } = this.props;

    if(this.props.chat === undefined) {
      return(<main className={classes.content}></main>);
    } else if(this.props.chat !== undefined) {
      return(
        
        <div >
          <div id='chat-title'>
            Your conversation with {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}
          </div>
      
          <main id='chatview-container' className={classes.content}>

            {
              this.props.chat.messages.map((_msg, _index) => {
                return(
              
                <div key={_index} className={_msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                <div>{_msg.message}</div> 
                <div className={classes.Conversationtime}> 
                
                <span >{ new Date(parseInt(_msg.timestamp)).toUTCString()}</span>
                </div>
                <div className={classes.Conversationtime}> <span>{_msg.receiverHasRead === true ?'yrdy':'seen'}</span></div>
                </div>
                )
              })
            }
           </main>
        </div>
      );
    } else {
      return (<div className='root'>Loading...</div>);
    }
  }
}

export default withStyles(styles)(ChatViewComponent);