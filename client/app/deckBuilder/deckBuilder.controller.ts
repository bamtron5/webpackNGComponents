class DeckBuilderController {
  title:string;
  formData:FormData;
  phonePattern:string = '\\d+';
  constructor(
    DECK_BUILDER_CONFIG
  ) {
    this.title = DECK_BUILDER_CONFIG.title;

  }

  submit() {
    console.log(this.formData);
    console.log('submitted');
  }

  isPhone() {
    console.log('isPhone');
    return false;
  }
}

DeckBuilderController.$inject = ['DECK_BUILDER_CONFIG'];

export default DeckBuilderController;
