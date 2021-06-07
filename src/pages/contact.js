import React from "react"
import Layout from "../components/Layout"

const Tags = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <aritcle className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              dolor error voluptatum quod, praesentium provident consectetur
              illo quidem eligendi similique, molestiae minima ipsum doloremque
              dolorum iure ex fugit unde hic.
            </p>
            <p>
              amet consectetur adipisicing elit. Ipsa dolor error voluptatum
              quod, praesentium provident consectetur
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              blanditiis eum ut ipsum natus est magni numquam quaerat et, fugiat
              hic inventore ipsa, doloribus ducimus explicabo autem maxime nihil
              iusto.
            </p>
          </aritcle>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Tags
