import React, { Component } from 'react';
import './App.css';
import { Button, Input, Container, Row, Col } from 'reactstrap';
let logo = 'https://www.logolynx.com/images/logolynx/ad/ad0eb0cfc1afa21d427b5bae775fe536.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="header">
          <img src={logo} className="logo"  alt=""/>
        </header>
        <main className="main">
          <Container>
            <Row>
              <Col>
              <div className="topSection">
                    <div className="topSectionTxt1">בדיקת כפל ביטוחים, בחינם!</div>
                    <div className="topSectionTxt2 mt-3">נמאס לכם לא לדעת על מה אתם משלמים?! בואו תעשו סדר, ותחסכו מאות שקלים בחודש</div>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col md="7" xs="12">
                <div className="formWithInfo column md-7 xs-12">
                  <div className="middleSection">
                    <div className="middleSectionTxt1">מה זה אומר בכלל כפל ביטוחים?</div>
                    <div className="middleSectionTxt2 mt-3">מלאו את פרטיכם ונדאג לכם למחיר הזול והמשתלם ביותר</div>
                    <div className="middleSectionTxt3">כשזה מגיע ל ביטוח אתה כמו כולם פחות מבין, </div>
                    <div className="middleSectionTxt3">  אבל דבר אחד אתה יודע מכרו לך הרבה ביטוחים שכנראה חופפים</div>
                    <div className="middleSectionTxt3"> ואז במקום כפל מבצעים יש לך כפל תשלומים ואת זה אתה יודע שאתה לא רוצה!</div>
                  </div>
                    
                  <div className="bottomSection">
                    <form>
                      <label>אימייל</label>
                      <Input className="form-control-sm" type="email" />
                      <label>שם מלא</label>
                      <Input className="form-control-sm" type="text" />
                      <label>טלפון</label>
                      <Input className="form-control-sm" type="tel" />
                    </form>
                    <div className="infoAndButtonWrapper">
                      <div className="infoAndButtonWrapperTxt3"> בעת השליחה את/ה מאשר שאנו נשלח את הפרטים לסוכנויות מקצועניות שאנו עובדים איתם</div>
                      <Button className="btn mt-3">!שלח</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="5" xs="12">
                <div className="descriptionWrapper">
                        <img className="descriptionWrapperImg" alt="" src="https://lh3.googleusercontent.com/BFz-F0dAqvcnS2kgQdv7qk_eTfXFhVATJqwpq3l3gO9ml-NzZjbfm-TtpOo4jvYaqVTjsxhWSi0cYXJcPkBGVA=w1024"/>
                        <div className="descriptionWrapperTxt1">למה לי להשאיר את הפרטים דווקא כאן?</div>
                        <div className="descWithV">
                            <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                            <div className="descWithVTxt">כי את העבודה הקשה אנחנו נעשה בשבילכם, בחינם!</div>
                        </div>
                        <div className="descWithV">
                            <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                            <div className="descWithVTxt">כי אנחנו נאמנים ללקוחות ולא מתפשרים על מה שמגיע להם</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">כי אנחנו עובדים עם כל הסוכנויות הגדולות במדינה</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">כי אתה לא הלקוח הראשון שלנו, שיחסוך מאות שקלים בחודש</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">כי אנחנו יודעים לאתר לך את המחירים הנמוכים ביותר</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">כי אנחנו עובדים רק עם מקצוענים, שידאגו לך</div>
                        </div>
                </div>
              </Col>
            </Row>

            <footer className="footer"> 
                  © 2019 - בזתר, כאן בשבילך!
            </footer>


          </Container>
        </main>

      </div>
    );
  }
}

export default App;
