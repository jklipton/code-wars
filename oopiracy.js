function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }

Ship.prototype.crewWeight = function () {
    return this.crew * 1.5;
}

Ship.prototype.isWorthIst = function () {
    const gold = this.draft - this.crewWeight();
    if (gold > 20){
        return true;
    } else {
        return false;
    }
}