import { ThemeProvider, CssBaseline, Toolbar, AppBar, Link } from '@material-ui/core';
import React from 'react';
import { theme, useStyles } from '../utils/styles';
import Head from 'next/head';
import link from 'next/link';



export default function Layout({
  children,
  commercePublicKey,
  title = 'CoolShop',
}) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} - CoolShop`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link variant="h6" color="inherit" noWrap href="/"
              className={classes.toolbarTitle}>
              CoolShop
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}

// 42 minute pr tha..