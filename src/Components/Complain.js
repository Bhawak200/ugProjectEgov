

const Complain = () => {
  return (
    <section className="section-rai">
      <div className="row">
        <div className="rai">
          <div className="rai_form">

            <form className="form" action="/complain" method="POST">
              <div className="rai_form_header">
                <h2 className="rai_form_h2">Report an issue</h2>
              </div>

              <div className="form_group">



                <label for="report_pic" className="form_label"></label>
                <textarea className="form_input" name="issue" rows="3" cols="40" id="issue"
                  placeholder="report your issue"></textarea>
                <label for="issue" className="form_label"></label>

                <input type="text" name="location" className="form_input" placeholder="location" id="location" required />
                <label for="location" className="form_label">location</label>

                <input type="text" name="image" className="form_input" placeholder="image link" id="image" />
                <label for="name" className="form_label">image link</label>



              </div>

              <div className="form_group">
                <button type="submit" name="button" className="rai_submit_btn">
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Complain;