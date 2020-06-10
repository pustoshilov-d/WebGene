import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animations.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import AddedModel from "./Pages/AddedModel";
import Loading from "./Pages/Loading";
import UserManual from "./Pages/UserManual";

import HomeHeader from "./Components/HomeHeader";
import Footer from "./Components/Footer";
import SubHeader from "./Components/SubHeader";
import Description from "./Components/Description";
import {Sticky, StickyContainer} from "react-sticky";
import MainModel from "./Pages/MainModel";
import Testing from "./Pages/Testing";

// onLoad={e => (e.currentTarget.className += ' fadein-on')

function App() {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if  (!loaded){
            setTimeout(() =>
                document.getElementById('header').className += ' fadein-on',
                1000)

            setTimeout(() =>
                    document.getElementById('description').className += ' fadein-on',
                3000)

            setTimeout(() =>
                    document.getElementById('blocks').className += ' fadein-on',
                5000)

            setTimeout(() =>
                    document.getElementById('footer').className += ' fadein-on',
                4500)

            setLoaded(true)
        }
    }, [loaded])


  return (
    <div className={"App bg-main"}>
      <Router>
        <div>
          <Switch>
              <Route path={"/models/main"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <MainModel/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/loading"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <Loading/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/models/:id(\\d+)"} render={(props) =>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>

                      <AddedModel {...props} key={window.location.pathname}/>/>

                      <Footer/>
                  </StickyContainer>
              }/>

              <Route path={"/user-manual"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <UserManual/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/testing"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <Testing/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style} className={'header-fadein' } id={'header'}>
                              <HomeHeader/>
                          </header>)}
                      </Sticky>
                      <div className={'description-fadein'} id={'description'}>
                        <Description/>
                      </div>
                      <div className={'blocks-fadein'} id={'blocks'}>
                        <Home/>
                      </div>
                  </StickyContainer>
                  <div className={'footer-fadein'} id={'footer'}>
                    <Footer/>
                  </div>
              </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
