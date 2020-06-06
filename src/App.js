import React from 'react';
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

function App() {
  return (
    <div className={"App"}>
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
                          <header style={style}>
                              <HomeHeader/>
                          </header>)}
                      </Sticky>
                      <Description/>
                      <Home/>
                  </StickyContainer>
                  <Footer/>
              </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
