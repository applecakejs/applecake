PM := npm # if you are using yarn instead replace npm with yarn instead
RUN := node
start:
	$(PM) start
	@rm ./dist/applecake.min.js
	@touch ./dist/applecake.min.js
	@$(RUN) .minify.js
	@echo "make has done his job"
