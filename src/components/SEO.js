import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SEO extends Component {
	render () {
		return (
			<Helmet> 
			  {/*<title>{get(this, "props.data.site.siteMetadata.title")}</title>*/}
			  <meta name="description" content="Stuart Balcombe is a product designer from Philadelphia, PA." />

			  <meta name="twitter:card" content="summary" />
			  <meta name="twitter:site" content="@stubalcombe" />
			  <meta name="twitter:title" content="Stuart Balcombe" />
			  <meta name="twitter:description" content="Product Design" />
			  <meta name="twitter:creator" content="@stubalcombe" />
			  <meta name="twitter:image" content="https://www.stuartbalcombe.com/static/profile-pic.9c85a375.jpg" />

			  <meta property="og:title" content="Stuart Balcombe" />
			  <meta property="og:type" content="article" />
			  <meta property="og:url" content="https://www.stuartbalcombe.com/" />
			  <meta property="og:image" content="https://www.stuartbalcombe.com/static/profile-pic.9c85a375.jpg" />
			  <meta property="og:description" content="Product Design" /> 
			  <meta property="og:site_name" content="Stuart Balcombe" />
			</Helmet>
		)
	}
}

export default SEO; 


