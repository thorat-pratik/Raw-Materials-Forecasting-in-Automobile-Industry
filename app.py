
from flask import Flask, render_template, request
import pickle


#initialize app
app = Flask(__name__)

steel_model = pickle.load(open('steel_model.pkl', 'rb'))

plastics_model = pickle.load(open('plastics_model.pkl', 'rb'))

iron_model = pickle.load(open('iron_model.pkl', 'rb'))

aluminium_model = pickle.load(open('aluminium_model.pkl', 'rb'))

rubber_model = pickle.load(open('rubber_model.pkl', 'rb'))

glass_model = pickle.load(open('glass_model.pkl', 'rb'))

copper_model = pickle.load(open('copper_model.pkl', 'rb'))


@app.route('/')
def HomePage():
    return render_template("entry.html")

@app.route('/predict')
def home():
       return render_template("index.html")

@app.route('/prediction',methods=['POST','GET'])
def predict():
    if request.method == "POST":
        startYear = request.form['startyear']
        endYear = request.form['endyear']
        difference = int(endYear) - int(startYear)
        
        result = []
        s = "value"
        for i in range(0,difference):
            res = (str(s)+str(i))
            result.append(int(request.form[res]))
        
       
        
        steel_output = []
        plastics_output = []
        iron_output = []
        rubber_output = []
        aluminium_output = []
        glass_output = []
        copper_output = []
        
        years = []
        start = int(startYear)
        end = int(endYear)

        next = (start % 100) + 1
        snext = ""
        while start < end:
            snext = str(start) +'-'+ str(format(next, '02d'))
            years.append(snext)
            start += 1
            next += 1


        for i in result:
            steel = steel_model.predict([[i]])
            steel_output.append(steel[0][0].round(2))
            
            plastics = plastics_model.predict([[i]])
            plastics_output.append(plastics[0][0].round(2))

            iron = iron_model.predict([[i]])
            iron_output.append(iron[0][0].round(2))
            
            rubber = rubber_model.predict([[i]])
            rubber_output.append(rubber[0][0].round(2))

            aluminium = aluminium_model.predict([[i]])
            aluminium_output.append(aluminium[0][0].round(2))

            glass =  glass_model.predict([[i]])
            glass_output.append(glass[0][0].round(2))

            copper = copper_model.predict([[i]])
            copper_output.append(copper[0][0].round(2))


        steel_predict = []
        plastic_predict = []
        iron_predict = []
        rubber_predict = []
        aluminium_predict = []
        glass_predict = []
        copper_predict = [] 


        steel_predict = steel_output
        plastic_predict = plastics_output
        iron_predict = iron_output
        rubber_predict = rubber_output
        aluminium_predict = aluminium_output
        glass_predict = glass_output
        copper_predict = copper_output


        return render_template("result.html", 
                                years = years,
                                steel_table = steel_predict,
                                plastic_table = plastic_predict, 
                                iron_table = iron_predict,
                                rubber_table = rubber_predict,
                                aluminium_table = aluminium_predict,
                                glass_table=glass_predict,
                                copper_table=copper_predict
                            )


if __name__ == '__main__':
   app.run(use_reloader = True,debug=True)
