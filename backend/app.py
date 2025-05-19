from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your CSV file once when the server starts
df = pd.read_csv('predicted_crop_prices_fixed.csv')

@app.route('/options', methods=['GET'])
def get_options():
    places = df['AmcName'].unique().tolist()
    yards = df['YardName'].unique().tolist()
    crops = df['CommName'].unique().tolist()
    varieties = df['VarityName'].unique().tolist()
    
    return jsonify({
        'places': places,
        'yards': yards,
        'crops': crops,
        'varieties': varieties
    })

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Extracting input data from the request
    Year = data['Year']
    Month = data['Month']
    Day = data['Day']
    AmcName = data['AmcName']
    YardName = data['YardName']
    CommName = data['CommName']
    VarityName = data['VarityName']

    # Filter the dataframe based on the request data
    result = df[
        (df['Year'] == Year) &
        (df['Month'] == Month) &
        (df['Day'] == Day) &
        (df['AmcName'] == AmcName) &
        (df['YardName'] == YardName) &
        (df['CommName'] == CommName) &
        (df['VarityName'] == VarityName)
    ]

    if result.empty:
        return jsonify({"error": "No data found for the selected inputs"})
    
    prediction = result.iloc[0][['MinPrice', 'MaxPrice', 'AvgPrice']].to_dict()
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
