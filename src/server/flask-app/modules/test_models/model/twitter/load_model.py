
import pickle
   
def datreeINPUT(inputtweet):
#    train_featurestree = vectorizer.fit_transform(x)
    decision_tree_model_pkl = open("decision_tree_classifier_20210713.pkl", 'rb')
    dtree = pickle.load(decision_tree_model_pkl)
    vectorizer_model_pkl = open('vectorizer_model.pkl', 'rb')
    vectorizer = pickle.load(vectorizer_model_pkl)     
    
    inputdtree= vectorizer.transform([inputtweet])
    predictt = dtree.predict(inputdtree)
    
    if predictt == 1:
        predictt = "Positive"
    elif predictt == 0:
        predictt = "Neutral"
    elif predictt == -1:
        predictt = "Negative"
    else:
        print("Nothing")
    
    print("\n*****************")
    print(predictt)
    print("*****************")
  

print("Input your tweet : ")
inputtweet = str(input())
datreeINPUT(inputtweet)