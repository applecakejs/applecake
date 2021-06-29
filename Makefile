PM := npm # if you are using yarn instead replace npm with yarn instead

start:
	$(PM) start
	$(PM) run tspack 
	@rm ./dist/applecake.min.js
	@touch ./dist/applecake.min.js
	@minify ./dist/applecake.js > ./dist/applecake.min.js
	@echo "make has done his job"
