
import "./footer.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div id='footer_head_top'>
        <span id='back_to_top' onClick={() => window.location.reload()}>Back to top</span>
      </div>
    <div id="footer_top">
      <span id='nomzaa_about_text'>Nomzaa.com is a clone of Amazon.com developed by Jason Vien using the following technologies:</span>
      <div id='nomzaa_tech_block'>
        <span className='nomzaa_about_techs'>Express</span>
        <span className='nomzaa_about_techs'>Git</span>
        <span className='nomzaa_about_techs'>Heroku</span>
        <span className='nomzaa_about_techs'>Javascript</span>
        <span className='nomzaa_about_techs'>NodeJs</span>
        <span className='nomzaa_about_techs'>PostgresQL</span>
        <span className='nomzaa_about_techs'>React</span>
        <span className='nomzaa_about_techs'>Python</span>
        </div>
      <div id='nomzaa_tech_i_block'>

        {/* <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/git.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/react.svg' alt="" />
        <img className='tech_icons' src='https://github.com/Workshape/tech-icons/blob/master/icons/python.svg' alt="" /> */}
      </div>

      {/* <span id='nomzaa_visit_text'>Visit my GitHub page to learn more about Nomzaa</span> */}

      <div id='footer_top_logo_banner'>
      <div id='nom_nav_logo'>
              <img id='nomzaa_logo_main_sm' src="/static/images/nomza_logo_main_lg.png"
                   alt="nomzaa logo"
                   width="120"
                   height="auto"
              />
            </div>
      </div>
    </div>

    <div id='footer_bottom'>
      <div className='bottom_about_row'>

      <span className='bottom_about_tag'>© 2022, Nomzaa.com, Inc. or its affiliates</span>


      <span className='bottom_about_tag_jdv'>
      <a className='subnav_jd_github_a' href='https://jdvien.github.io/'>Jason Vien</a>
      <a className='subnav_jd_github_a' href='https://github.com/JDVien/nomzaa'> - Github - </a>
      <a className='subnav_jd_github_a' href='https://www.linkedin.com/in/jason-v-52a595237?trk=people-guest_people_search-card'> LinkedIn</a>
      </span>
      </div>
    </div>
    </div>
  );
};

export default Footer;
