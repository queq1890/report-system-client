import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListContainer from 'containers/ListContainer';
import FormContainer from 'containers/FormContainer';
import GithubUserContainer from 'containers/GithubUserContainer';
import { addLocaleData, FormattedMessage, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import messages from 'locales/messages';
import MainWrapper from './MainWrapper';

addLocaleData([...en, ...ja]);

class App extends PureComponent {
  setLocale = event => {
    const newLocale = event.target.value;
    const { setLocale } = this.props;
    setLocale(newLocale);
  };

  render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
        <MainWrapper>
          <select onChange={this.setLocale}>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
          </select>
          <div className="col-md-4 offset-md-1">
            <h2>
              <FormattedMessage id="articles.header" />
            </h2>
            <ListContainer />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>
              <FormattedMessage id="article.new" />
            </h2>
            <FormContainer />
            <GithubUserContainer />
          </div>
        </MainWrapper>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  setLocale: PropTypes.func,
  locale: PropTypes.string,
};

export default App;
