from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    dataset = pd.read_csv("datasets/building_dataset.csv")
    return dataset.to_html()

if __name__ == '__main__':
    app.run(debug=True)
