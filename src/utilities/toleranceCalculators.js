export const toleranceCalculators = {
  psychedelics(lastDose, desiredDose, days, isLSD) {
    var estimatedDosage = (lastDose / 100) * 280.059565 * (Math.pow(days, -0.412565956)) + (desiredDose - lastDose);
    var newAmount = ((estimatedDosage < desiredDose) ? desiredDose : estimatedDosage);
    return Math.round(newAmount * 10) / 10;;
  }
}