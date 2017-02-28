class DeckBuilderController {
  public title: string;
  public formData: FormData;
  public phonePattern: string = '\\d+';
  constructor(
    DECK_BUILDER_CONFIG
  ) {
    this.title = DECK_BUILDER_CONFIG.title;

  }

  public submit() {
    console.log(this.formData);
    console.log('submitted');
  }

  public isPhone() {
    console.log('isPhone');
    return false;
  }
}

DeckBuilderController.$inject = ['DECK_BUILDER_CONFIG'];

export default DeckBuilderController;
