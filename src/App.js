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
                    <div className="topSectionTxt1">תן תנשמה בכותרת</div>
                    <div className="topSectionTxt2 mt-3">נמאס לכם מבלהבלהלבלה?! אז בואו גם ובלבלבלבלב! אפשר להוסיף פה עוד טקסט למטה</div>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col md="7" xs="12">
                <div className="formWithInfo column md-7 xs-12">
                
                  <div className="middleSection">
                    <div className="middleSectionTxt1">תן תנשמה גם בכותרת הזאת</div>
                    <div className="middleSectionTxt2 mt-3">מלאו את פרטיכם ונדאג לכם למחיר הזול והמשתלם ביותר</div>
                    <div className="middleSectionTxt3">כמובן שאפשר לשפר את העיצוב עוד הרבה שיראה פחות ילדותי אבל בינתיים לפחות נעלה עם משהו</div>

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
                      <div className="infoAndButtonWrapperTxt1 mt-3">תנאים</div>
                      <div className="infoAndButtonWrapperTxt2 mt-2">An Orange!</div>
                      <div className="infoAndButtonWrapperTxt3"> לכתוב פה בקטן את האותיות הקטנות למרות שנראה לי עדיף להסתיר את זה בכללי</div>
                      <Button className="btn mt-3">!שלח</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="5" xs="12">
                <div className="descriptionWrapper">
                        <img className="descriptionWrapperImg" alt="" src="https://lh3.googleusercontent.com/BFz-F0dAqvcnS2kgQdv7qk_eTfXFhVATJqwpq3l3gO9ml-NzZjbfm-TtpOo4jvYaqVTjsxhWSi0cYXJcPkBGVA=w1024"/>
                        <div className="descriptionWrapperTxt1">SociApp Unlimited Account</div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">אפשר להחליף את כל הV הזה עם טקטסט רגיל אבל נראה איך זה הולך קודם</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">לזיין תמוח2</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">לזיין תמוח3</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">לזיין תמוח4</div>
                        </div>
                        <div className="descWithV">
                          <img src={require('./imgs/V.png')} className="descWithVImg" alt=""/>
                          <div className="descWithVTxt">לזיין תמוח5</div>
                        </div>
                </div>
              </Col>
            </Row>

            <footer className="footer"> 
                  © 2019
            </footer>


          </Container>
        </main>

      </div>
    );
  }
}

export default App;
