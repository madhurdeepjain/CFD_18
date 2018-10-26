## The below code is to use sentimental analysis to retrieve data from twitter for real time analysis of disaster prevaling globally.
## The only change is the lexicon to be created specific for the sentimental analysis of twitter api related to disasters.Which are to be performed in future.
import tensorflow as tf
from tensorflow import keras
import numpy as np
import pandas as pd 
import nltk
nltk.download('punkt')
from  nltk.tokenize import word_tokenize
fopen = open('pos.txt','r')
li = fopen.readlines()
fopen.close()
dict_pos = {}
for item in li:
  item = item[:-1].lower()
  item = item.split(' ')
  for element in item:
    if element in dict_pos:
      dict_pos[element] = dict_pos[element]+1
    else:
      dict_pos[element] = 1
fopen = open('neg.txt','r')
ri = fopen.readlines()
fopen.close()
for item1 in ri:
  item1 = item1[:-1].lower()
  item1 = item1.split(' ')
  for elements in item1:
    if elements in dict_pos:
      dict_pos[elements] = dict_pos[elements]+1
    else:
      dict_pos[elements] = 1
lexicon = []
for i,j in dict_pos.items():
  if 50<j<1000:
    lexicon = lexicon + [i]
print(lexicon)
dict_handler = []
dict_ans = []
fopen = open('pos.txt','r')
li2 = fopen.readlines()
fopen.close()
for item in li2:
  item = item[:-1]
  item = word_tokenize(item.lower())
  features = [0]*(len(lexicon))
  for elements in item:
    if lexicon.count(elements)==1:
      a = lexicon.index(elements)
      features[a] += 1
  dict_handler = dict_handler + [features]
  dict_ans = dict_ans + [[0,1]]
fopen = open('neg.txt','r')
li2 = fopen.readlines()
fopen.close()
for item in li2:
  item = item[:-1]
  item = word_tokenize(item.lower())
  features = [0]*(len(lexicon))
  for elements in item:
    if lexicon.count(elements)==1:
      a = lexicon.index(elements)
      features[a] += 1
  dict_handler = dict_handler + [features]
  dict_ans = dict_ans + [[1,0]]
dict_handler = np.array(dict_handler)
dict_ans = np.array(dict_ans)
def build_model():
    model = keras.Sequential([
        keras.layers.Dense(64,activation = tf.nn.relu,input_shape = (dict_handler.shape[1],)),
        keras.layers.Dense(64,activation = tf.nn.relu),
        keras.layers.Dense(2)
    ])
    model.compile(loss='binary_crossentropy',optimizer = 'rmsprop',metrics = ['accuracy'])
    return model
model = build_model()
#model.summary()
EPOCHS = 500
monitor = keras.callbacks.EarlyStopping(monitor = 'val_loss',min_delta=1e-3,patience = 5,verbose = 0,mode = 'auto')
checkpointer = keras.callbacks.ModelCheckpoint(filepath = 'best_weight_1.hdf5',verbose=0,save_best_only=True)
rev = model.fit(dict_handler,dict_ans,epochs = EPOCHS,validation_split=0.2,verbose = 0,callbacks = [monitor,checkpointer])
print(rev.history['acc'])
print(rev.history['val_acc'])
fopen = open('amazon_cells_labelled.txt','r')
li3 = fopen.readlines()
fopen.close()
dict_handler_test = []
dict_ans_test = []
for item in li3:
  val = item[-2]
  item = item[:-3]
  item = word_tokenize(item.lower())
  features_work = [0]*(len(lexicon))
  for elements in item:
    if lexicon.count(elements)==1:
      a = lexicon.index(elements)
      features_work[a] += 1
  dict_handler_test = dict_handler_test + [features_work]
  if val == '1':
    dict_ans_test = dict_ans_test + [[0,1]]
  else:
    dict_ans_test = dict_ans_test + [[1,0]]
dict_handler_test = np.array(dict_handler_test)
dict_ans_test = np.array(dict_ans_test)
rev = model.fit(dict_handler,dict_ans,epochs = EPOCHS,validation_data=[dict_handler_test,dict_ans_test],verbose = 0,callbacks = [monitor,checkpointer],batch_size=32)
print(rev.history['acc'])
print(rev.history['val_acc'])
dict_handler_predict = []
item = 'this is not a place'
item = word_tokenize(item.lower())
features_work_1 = [0]*(len(lexicon))
for elements in item:
  if lexicon.count(elements)==1:
    a = lexicon.index(elements)
    features_work_1[a] += 1
dict_handler_predict = dict_handler_predict + [features_work_1]
dict_handler_predict = np.array(dict_handler_predict)
print(model.predict(dict_handler_predict))

