/**
 * Build styles
 */
require('./index.css').toString();

/**
 * iFrame Tool for the Editor.js
 *
 * Allows to add an iFrame.
 */
class IFrame {
	/**
	 * Returns true to notify the core that read-only mode is supported
	 *
	 * @return {boolean}
	 */
	static get isReadOnlySupported() {
		return true;
	}

	/**
	 */
	constructor({data, api, block}) {
    this.data = data || {};
    this.api = api;
    this.block = block

    this.CSS = {
      title: "cdx-iframe__title",
      input: "cdx-iframe__input",
    };
	}

  /**
   * Create Input field
   * @param id
   * @param type
   * @param inputLabel
   * @param inputPlaceholder
   * @return {HTMLElement}
   * @private
   */
  createInput(id, type, inputLabel, inputPlaceholder) {
    const inputWrapper = document.createElement('div');
    const label = document.createElement('label')
    const input = document.createElement('input');

    input.type = type;
    input.placeholder = inputPlaceholder;
    input.id = id;
    input.classList.add(this.api.styles.input);
    input.value = this.data && this.data[id] ? this.data[id] : '';
    label.innerText = inputLabel;
    inputWrapper.classList.add(this.CSS.input);
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);

    return inputWrapper;
  }

  /**
	 * Create iframe element for Toolbar
	 *
	 * @return {HTMLElement}
	 */
	render() {
    const title = document.createElement('h4')
    const wrapper = document.createElement('div');
    const urlInput = this.createInput('url', 'text', this.api.i18n.t('Url label'), this.api.i18n.t('Url placeholder'))

    title.innerText = this.api.i18n.t('EditorJs Iframe title')
    title.classList.add(this.CSS.title)

    wrapper.classList.add('cdx-personality', this.api.styles.block)
    wrapper.appendChild(title);
    wrapper.appendChild(urlInput);
    return wrapper;
  }

	/**
	 *
	 * @param block
	 * @returns {{ url: string}}
	 */
	save(block){
    const url = block.querySelector('#url');
    return {
      url: url.value,
    }
	}

	/**
	 * Get Tool toolbox settings
	 * icon - Tool icon's SVG
	 * title - title to show in toolbox
	 *
	 * @return {{icon: string, title: string}}
	 */
	static get toolbox() {
		return {
			icon: '<svg width="19" height="13" viewBox="0 0 19 13"><path d="M18.004 5.794c.24.422.18.968-.18 1.328l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.162-4.162-4.103-4.103A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.104.104.184.223.239.35zm-15.142.547l4.162 4.162a1.105 1.105 0 1 1-1.562 1.562L.519 7.122c-.36-.36-.42-.906-.18-1.328a1.13 1.13 0 0 1 .239-.35L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.862 6.341z"/></svg>',
			title: 'Iframe'
		};
	}
}

module.exports = IFrame;
