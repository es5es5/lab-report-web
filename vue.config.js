const webpack = require('webpack')

// vue.config.js
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/_import/variable.scss";`
			}
		}
	}
}
