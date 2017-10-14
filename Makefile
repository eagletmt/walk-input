WEB_EXT = node_modules/.bin/web-ext

lint:
	$(WEB_EXT) lint
build:
	$(WEB_EXT) build

sign:
	# https://addons.mozilla.org/en-US/developers/addon/api/key/
	$(WEB_EXT) sign --api-key=$(JWT_ISSUER) --api-secret=$(JWT_SECRET)
