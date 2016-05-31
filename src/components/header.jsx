import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import HeaderAuth from 'header/header-auth';

const activeStyle = { color: '#96f132' };
// ? <Link activeStyle={{ color: activeStyle }} to="/field-book">Field Book</Link>

const Header = ({ active, inactiveWorkflows }) =>
  <div className={ `landing-header ${active === 'landing' ? '' : 'opaque'}` }>
    <div className="header-links">
      <Link className={'first'} activeStyle={ activeStyle } to="/">Get Started</Link>
      <Link activeStyle={ activeStyle } to="/about">About</Link>
      <a href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature-relaunch/talk"
        target="_blank"
      >
        Talk
      </a>
      <a href="https://blog.notesfromnature.org/" target="_blank">Blog</a>
      <a href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature-relaunch/stats"
        target="_blank"
      >
        Statistics
      </a>
      {inactiveWorkflows.length ?
        <Link activeStyle={ activeStyle } to="/completed-expeditions" className="wide">
          Completed Expeditions
        </Link>
        : ''
      }
      <div className="last">&nbsp;</div>
    </div>
  </div>;
  // <HeaderAuth />

Header.propTypes = {
  dispatch: PropTypes.func,
  active: PropTypes.string,
  user: PropTypes.object,
  initialized: PropTypes.bool,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialized: state.login.initialized,
    inactiveWorkflows: state.workflow.inactiveWorkflows,
  };
}
export default connect(mapStateToProps)(Header);