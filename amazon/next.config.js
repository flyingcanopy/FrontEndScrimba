module.exports = {
	 webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
	  config.resolve.fallback.net = false;
	  config.resolve.fallback.dns = false;
	  config.resolve.fallback.child_process = false;
	  config.resolve.fallback.tls = false;
	  config.resolve.fallback.dgram = false;
	  config.resolve.fallback.module = false;	  
    }
    return config;
  },
    images : {
        domains:['links.papareact.com','www.freepnglogos.com','fakestoreapi.com']
    }
}