/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import normalizeCss from 'normalize.css';
import s from './Layout.scss';
import NavigationAuth from './Navigation/NavigationAuth';
import Link from '../Link';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line react/require-default-props
    title: PropTypes.string,
  };

  render() {
    return (
      <div>
        <div className="main-content">
          <NavigationAuth title={this.props.title} />
          {this.props.children}
        </div>
        <footer className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2019{' '}
                  <Link
                    to="/"
                    className="font-weight-bold ml-1"
                    target="_blank"
                  >
                    SaaStr
                  </Link>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </footer>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
