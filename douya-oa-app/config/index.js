const getConfig = () => {
	const config = {}
	console.log("当前启动环境为：", process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'development') {
		config.url = "http://dev"
	} else {
		config.url = "http://prod"
	}
	return config
}

export default {
	getConfig
}
