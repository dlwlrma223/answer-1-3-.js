class TokenCollection {
  constructor() {
    this.tokens = [];
  }

  ingest(string) {
    this.tokens.push(string);
  }

  appearance(prefix) {
    let count = 0;
    for (let i = 0; i < this.tokens.length; i++) {
      if (this.tokens[i].startsWith(prefix)) {
        count++;
      }
    }
    return count / this.tokens.length;
  }
}

const collection = new TokenCollection();
collection.ingest("oursky:uk:dev");
collection.ingest("oursky:hk:design");
collection.ingest("oursky:hk:pm");
collection.ingest("oursky:hk:dev");
collection.ingest("skymaker");
console.log(collection.appearance("oursky"));
console.log(collection.appearance("oursky:hk"));
collection.ingest("skymaker:london:ealing:dev");
collection.ingest("skymaker:london:design");
collection.ingest("skymaker:london:design");
collection.ingest("skymaker:man:pm");
collection.ingest("skymaker:man:pm");
console.log(collection.appearance("skymaker:man"));
console.log(collection.appearance("skymaker:lon"));
console.log(collection.appearance("london:skymaker"));
