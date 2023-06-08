// "The ever changing ankara: you are a fashion designer known for your unique and vibrant
//  ankara designs. Recently, you've discovered that some of your fabric patterns change their designs
//   based on the temperature and mood of the wearer. you want to create a software application that 
//   can predict the changes in the fabric design given the mood and temperature data. think about the
//    classes you will need to model the changing ankara and how to predict the changes"

class AnkaraFabric {
  constructor() {
    this.defaultDesign = "default"; 
    this.designs = {
      hot: {
        happy: "hot_happy_design",
        sad: "hot_sad_design",
      },
      cold: {
        happy: "cold_happy_design",
        sad: "cold_sad_design",
      },
    };
  }

  // Method to predict the fabric design based on mood and temperature
  predictDesign(mood, temperature) {
    if (temperature > 25) {
      if (mood === "happy") {
        return this.designs.hot.happy;
      } else if (mood === "sad") {
        return this.designs.hot.sad;
      }
    } else {
      if (mood === "happy") {
        return this.designs.cold.happy;
      } else if (mood === "sad") {
        return this.designs.cold.sad;
      }
    }

    return this.defaultDesign; // Return default design if no match found
  }
}

const ankaraFabric = new AnkaraFabric();
const mood = "happy";
const temperature = 30;
const predictedDesign = ankaraFabric.predictDesign(mood, temperature);
console.log("Predicted Design:", predictedDesign);