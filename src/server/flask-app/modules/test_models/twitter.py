import tweepy
import pickle

class twitter:
  def __init__(self) -> None:
      consumer_key = 'yoIwFkjZGYDa49aO16XqSNqcN'
      consumer_secret = 'gl4LQOItV7Z1aFwNrlvaiKJ3t8o8h99blMIAmnmdHxYjzjRAxO'
      access_token = '624310916-E7fDF2IE8P6bfY1oVFglASf6F8RnxMd3vgSXFqnZ'
      access_token_secret ='ID9JcoXHsDcKtvNcnmBGcCQhUlO0wmwAxBJ6LCesiUAas'
      auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
      auth.set_access_token(access_token, access_token_secret)
      self.api = tweepy.API(auth)
      self.tweets = []
      pass

  def get_results(self,username):
    user_tweets = self.api.user_timeline(screen_name=username,count=10)
    tweets = []
    for tweet in user_tweets:
      tweets.append(tweet.text)
    self.tweets = tweets
    self.processData()

  def processData(self):
        decision_tree_model_pkl = open("model/twitter/decision_tree_classifier_20210713.pkl", 'rb')
        dtree = pickle.load(decision_tree_model_pkl)
        vectorizer_model_pkl = open('model/twitter/vectorizer_model.pkl', 'rb')
        vectorizer = pickle.load(vectorizer_model_pkl)

        inputdtree= vectorizer.transform(self.tweets)
        predictt = dtree.predict(inputdtree)
        print(predictt)



tw = twitter()
print(tw.get_results("disguisedtoast"))
