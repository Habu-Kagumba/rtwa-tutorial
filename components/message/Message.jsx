import React, {Component} from 'react';
import fetcha from 'fetcha';

class Message extends Component{
    render() {
        let {message} = this.props;
        let createdAt = fetcha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');
        return (
            <li className="message">
                <div className="author">
                    <strong>{message.author}</strong>
                    <i className="timestamp">{createdAt}</i>
                </div>
                <div className="body">{mesage.body}</div>
            </li>
        )
    }
}

Message.proTypes = {
    message: React.PropTypes.object.isRequired
};

export default Message
