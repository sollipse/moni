import React from 'react'
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import GridGallery from './Components/GridGallery'
import AboutPage from './Components/AboutPage'
import DigitalIllustrationImages from './Assets/DigitalIllustrationImages'
import TraditionalImages from './Assets/TraditionalImages'
import TypographyPage from './Components/TypographyPage'
import ContactPage from './Components/ContactPage'
const Upscroller = withRouter(() => {
	window.woopra.track();
	window.scrollTo(0, 0);
	return null
})
const DigitalGallery = GridGallery(DigitalIllustrationImages)
const TraditionalGallery = GridGallery(TraditionalImages)
export default () => <HashRouter>
	<Upscroller />
	<Switch>
		<Route path="/portfolio/traditional" component={TraditionalGallery} />
		<Route path="/portfolio/typography" component={TypographyPage} />
		<Route path="/portfolio/digital" component={DigitalGallery} />
		<Route path="/about" component={AboutPage} />
		<Route path="/contact" component={ContactPage} />
		<Route path="" component={LandingPage} />
	</Switch>
</HashRouter>