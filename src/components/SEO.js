import React, { Component } from 'react';
import Helmet from 'react-helmet';
import favicon from "../../content/assets/favicon.ico";

class SEO extends Component {
	render () {
		return (
			<Helmet> 
			  <meta charSet="utf-8" />
			  <title>{this.props.title}</title>
			  <link rel="shortcut icon" href={favicon} />
			  <meta name="description" content={this.props.description} />

			  {/* Schema.org markup for Google+ */}
			  <meta itemprop="name" content={this.props.title} />
			  <meta itemprop="description" content={this.props.description} />
			  <meta itemprop="image" content={"https://www.stuartbalcombe.com" + this.props.img} />

			  {/* Twitter Card Data */}
			  <meta name="twitter:card" content="summary_large_image" />
			  <meta name="twitter:site" content="@stubalcombe" />
			  <meta name="twitter:title" content={this.props.title} />
			  <meta name="twitter:description" content={this.props.description} />
			  <meta name="twitter:creator" content="@stubalcombe" />
			  <meta name="twitter:image" content={"https://www.stuartbalcombe.com" + this.props.img} />

			  {/* Open Graph Data */}
			  <meta property="og:title" content={this.props.title} />
			  <meta property="og:type" content="article" />
			  <meta property="og:url" content="https://www.stuartbalcombe.com/" />
			  <meta property="og:image" content={"https://www.stuartbalcombe.com" + this.props.img} />
			  <meta property="og:description" content={this.props.description} /> 
			  <meta property="og:site_name" content="Stuart Balcombe" />
			</Helmet>
		)
	}
}

export default SEO; 


