PM := npm # if you are using yarn instead replace npm with yarn instead
RUN := node
start:
	$(PM) start
	$(PM) run tspack 
	@rm ./dist/applecake.min.js
	@touch ./dist/applecake.min.js
	@$(RUN) .minify.js
	@echo "make has done his job"
