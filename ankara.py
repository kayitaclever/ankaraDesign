#  "The ever changing ankara: you are a fashion designer known for your unique and vibrant
#  ankara designs. Recently, you've discovered that some of your fabric patterns change their designs
#    based on the temperature and mood of the wearer. you want to create a software application that 
#    can predict the changes in the fabric design given the mood and temperature data. think about the
#    classes you will need to model the changing ankara and how to predict the changes"
class AnkaraFabric:
    def __init__(self):
        self.default_design = "default"  
        self.designs = {
            "hot": {
                "happy": "hot_happy_design",
                "sad": "hot_sad_design"
            },
            "cold": {
                "happy": "cold_happy_design",
                "sad": "cold_sad_design"
            }
        }

    # Method to predict the fabric design based on mood and temperature
    def predict_design(self, mood, temperature):
        if temperature > 25:
            if mood == "happy":
                return self.designs["hot"]["happy"]
            elif mood == "sad":
                return self.designs["hot"]["sad"]
        else:
            if mood == "happy":
                return self.designs["cold"]["happy"]
            elif mood == "sad":
                return self.designs["cold"]["sad"]

        return self.default_design  




