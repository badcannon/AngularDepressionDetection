from flask import Flask,jsonify
from .model.test_models.twitter import twitter

app = Flask(__name__)


result = [
  {"prediction":True,"accuracy":78}
]


@app.route("/twitter/fetch/:id")
def hello_world():
  twitter.get_results(id)

@app.route("/audio/result")
def get_audio_result():
  return jsonify(result)



