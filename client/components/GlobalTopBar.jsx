var React = require('react');
var ReactDOM = require('react-dom');

var GlobalTopBar = React.createClass({
	handleClick: function(){
		$(".invitepop").fadeToggle('fast');
	},
	// getInitialState: function(){
	//    return {
	//      open: false,
	//    }
	// },
	render: function(){
		return (
			<div>
				<div className="darkgray">
				  <div className="container">
				    <div className="row">
				      <div className="three columns offset-by-nine">
				        <p><i className="fa fa-plus-circle" onClick={this.handleClick}></i> Invite trip participants</p>
				      </div>
				    </div>
				  </div>
				</div>
				<div className='invitepop'>
	    			<input type="text" value="" className="tags"/>
	    			<div className="jq_tags_editor">
		    			<div className="jq_tags_tokens">
		    			</div>
	    			<input type="text" className="jq_tags_editor_input"/>
	    			</div>
	    			<button className="inviteUsers">Invite Users</button>
				</div>
			</div>
		);
	}
});

module.exports = GlobalTopBar;
