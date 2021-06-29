/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { CONSTANT } from '../../Constants';
import { useDarkMode } from '../../Hooks';
import { darkTheme, lightTheme } from '../Common/Themes';

import BasicLayout from '../../Layout';
import HomePage from '../../Pages';
import GlobalStyles from '../Common/GlobalStyles';
import LoadingProvider from '../../Context/LoadingProvider';
import { PAGE_ROUTES } from '../../Constants/routes';

const App = () => {
  const [theme, onToggleTheme] = useDarkMode();
  const themeMode = theme === CONSTANT.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <LoadingProvider>
        <React.Suspense fallback={<span>...</span>}>
          <Router>
            <GlobalStyles />
            <BasicLayout theme={theme} onToggleTheme={onToggleTheme}>
              <Switch>
                <Route path="/" component={HomePage} />
                {PAGE_ROUTES.map(({ path, component: Component, ...rest }) => (
                  <Route
                    key={Math.random()}
                    path={path}
                    component={Component}
                    {...rest}
                  />
                ))}
                <Redirect from="*" to="/" />
              </Switch>
            </BasicLayout>
          </Router>
        </React.Suspense>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
