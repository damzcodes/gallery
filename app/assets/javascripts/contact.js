var ContactForm = React.createClass({
	getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="col-md-12">
        <form>
          <div className="form-group">
            <label> Email Address </label>
            <input type="email" className="form-control" placeholder="Email"/>
          </div>

          <div className="form-group">
            <label> Message </label>
            <textarea rows="4" className="form-control" placeholder="Type your message here..."/>
          </div>
          <button type="submit" className="btn btn-default"> submit </button>
        </form>
      </div>
	  )
  }

});



React.render(
  <ContactForm />,
  document.getElementById('contact')
);