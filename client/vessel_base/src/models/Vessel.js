class Vessel {
  constructor(data) {
    const {
      _id,
      name,
      origin,
      destination,
      type,
      grossTonnage,
    } = (typeof data !== 'undefined' && data) || {};

    this.id = _id;
    this.name = name || '';
    this.origin = origin || '';
    this.destination = destination || '';
    this.type = type || '';
    this.grossTonnage = grossTonnage || '';
  }
}

export default Vessel;