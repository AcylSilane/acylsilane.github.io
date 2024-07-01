# Directory map
INCLUDES_DIR := includes
PAGES_DIR := pages
SITE_DIR := site

# Files to include everywhere
FOOTER_FILE := $(INCLUDES_DIR)/footer.html
HEADER_FILE := $(INCLUDES_DIR)/header.html
NAV_FILE := $(INCLUDES_DIR)/nav.html

# Pulls every pages we want to render, puts them into the /site directory
HTML_FILES := $(shell find $(PAGES_DIR) -type f -name '*.html')
TARGETS := $(patsubst $(PAGES_DIR)/%.html,$(SITE_DIR)/%.html,$(HTML_FILES))

all: $(TARGETS) index

# Render the actual website
$(SITE_DIR)/%.html: $(PAGES_DIR)/%.html $(FOOTER_FILE) $(HEADER_FILE) $(NAV_FILE)
	@mkdir -p $(SITE_DIR)
	@TEMP_FILE=`mktemp`
	@cp $< $$TEMP_FILE.html
	@sed -e 's/^/    /' $(HEADER_FILE) | sed -i -e "/<body>/r /dev/stdin"  $$TEMP_FILE.html
	@sed -e 's/^/    /' $(NAV_FILE) | sed -i -e "/<body>/r /dev/stdin"  $$TEMP_FILE.html
	@sed -e 's/^/    /' $(FOOTER_FILE) | sed -i -e "/<\/body>/{" -e "r /dev/stdin" -e "a </body>" -e "d}" $$TEMP_FILE.html
	@sed -i 's/<\/body>/  <\/body>/' $$TEMP_FILE.html
	@mv $$TEMP_FILE.html $@

index: $(PAGES_DIR)/index.html $(FOOTER_FILE) $(HEADER_FILE) $(NAV_FILE)
	@TEMP_FILE=`mktemp`
	@cp $< $$TEMP_FILE.html
	@sed -e 's/^/    /' $(HEADER_FILE) | sed -i -e "/<body>/r /dev/stdin"  $$TEMP_FILE.html
	@sed -e 's/^/    /' $(NAV_FILE) | sed -i -e "/<body>/r /dev/stdin"  $$TEMP_FILE.html
	@sed -e 's/^/    /' $(FOOTER_FILE) | sed -i -e "/<\/body>/{" -e "r /dev/stdin" -e "a </body>" -e "d}" $$TEMP_FILE.html
	@sed -i 's/<\/body>/  <\/body>/' $$TEMP_FILE.html
	@mv $$TEMP_FILE.html ./index.html
	
clean:
	@rm -rf $(SITE_DIR)/*

.PHONY: all clean