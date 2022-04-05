import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import '../styles/globals.css'
import store from '../components/store';
import { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '.';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider attribute="class"  enableSystem={false} >
      <Layout>
       <Component {...pageProps}/>  
      </Layout>
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
