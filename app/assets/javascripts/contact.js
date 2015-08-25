var ContactForm = React.createClass({
	getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
        <form>
          <div className="form-group">
            <label> Name </label>
            <input className="form-control" placeholder="Your name here..." required=true/>
          </div>

          <div className="form-group">
            <label> Email Address </label>
            <input type="email" className="form-control" placeholder="Email" required=true/>
          </div>

          <div className="form-group">
            <label> Message </label>
            <textarea rows="4" className="form-control" placeholder="Type your message here..." required=true/>
          </div>
          <button type="submit" className="btn btn-default"> submit </button>
        </form>
	  )
  }

});



React.render(
  <ContactForm />,
  document.getElementById('contact')
);