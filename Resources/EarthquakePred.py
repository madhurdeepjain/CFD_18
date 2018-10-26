from copy import deepcopy
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
import tensorflow as tf
from tensorflow import keras
from collections import Counter
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
df1 = pd.read_csv('query.csv')
def distance(a,b,k):
  c = []
  for i in range(0,k):
    d = 0
    for j in range(0,4):
      d = d + (a[i][j]-b[i][j])*(a[i][j]-b[i][j])
    c = c + [d]
  return c   

def equi(a,b):
  for i in range(len(a)):
    if a[i]!=b[i]:
      return True
  return False
  
k = 7 #specify number of cluster groups which is 7 in this case
C_lat = np.random.randint(np.min(df['latitude']), np.max(df['latitude']), size=k)
C_long = np.random.randint(np.min(df['longitude']), np.max(df['longitude']), size=k)
C_dep = np.random.randint(np.min(df['depth']), np.max(df['depth']), size=k)
C_mag = np.random.randint(np.min(df['mag']), np.max(df['mag']), size=k)
C = np.array(list(zip(C_lat, C_long,C_dep,C_mag)), dtype=np.float32)

C_old = np.zeros(C.shape)
C_label = np.zeros(df.shape[0])
error = distance(C,C_old,k)
comp = np.zeros(k)
print(comp)
mean_value_lat = list(np.zeros(k))
mean_value_long = list( np.zeros(k))
mean_value_depth = list(np.zeros(k))
mean_value_mag= list(np.zeros(k))
while equi(error,comp):
  dict_count = {}
  label = []
  for i in range(df.shape[0]):
    d = [list(df.loc[i])]*k
    a = np.array(distance(C,d,k))
    index = np.argmin(a)
    mean_value_lat[index] = mean_value_lat[index] + df.loc[i]['latitude']
    mean_value_long[index] = mean_value_long[index] + df.loc[i]['longitude']
    mean_value_depth[index] = mean_value_depth[index] + df.loc[i]['depth']
    mean_value_mag[index] = mean_value_mag[index] + df.loc[i]['mag']
    label = label + [index]
  C_old = deepcopy(C)
  dict_count = Counter(label)
  L = []
  for i in range(0,k):
    if dict_count[i]!=0:
      mean_value_lat[i] = mean_value_lat[i]/dict_count[i]
      mean_value_long[i] = mean_value_long[i]/dict_count[i]
      mean_value_depth[i] = mean_value_depth[i]/dict_count[i]
      mean_value_mag[i] = mean_value_mag[i]/dict_count[i]
    L = L + [[mean_value_lat[i],mean_value_long[i],mean_value_depth[i],mean_value_mag[i]]]
  C = np.array(L)
  error = distance(C,C_old,k) 
#now we have created labels for each data and this helps us separate data entries with a lot of error as compared to others
df1['label'] = np.array(label)
dict_store = Counter(list(df1['label'])) 
j1 = 0
i1 = 0
for i,j in dict_store.items():
  if j>j1:
    i1 = i
    j1 = j
df = df1[(df1['label']==i1)]#to select entries with a label occuring most times
mag_list = list(df['mag'])
li = []
ri = []
ci = []
for i,j in Counter(mag_list).items():
    li = li + [i]
    ri = ri + [math.log10(j/30)]#j/30 as our dataest is for 30 years
    ci = ci + [j]
print(ci)
print(li)
print(ri)
def best_fit(X, Y):

    xbar = sum(X)/len(X)
    ybar = sum(Y)/len(Y)
    n = len(X) # or len(Y)

    numer = sum([xi*yi for xi,yi in zip(X, Y)]) - n * xbar * ybar
    denum = sum([xi**2 for xi in X]) - n * xbar**2

    b = numer / denum
    a = ybar - b * xbar

    print('best fit line:\ny = {:.2f} + {:.2f}x'.format(a, b))

    return a, b

# solution
a, b = best_fit(li,ri)
print(a,b)
yfit = [a + b * xi for xi in li]
# this gives the best fit line we displayed in our analysis
df1 = df1[['latitude','longitude','depth','mag','time','place','label']]
y = []
m = []
d = []
for i in range(df1.shape[0]):
    y = y + [df1.iloc[i]['time'][:4]]
    m = m + [df1.iloc[i]['time'][5:7]]
    d = d + [df1.iloc[i]['time'][8:10]]
df1['year'] = pd.Series(y)
df1['month'] = pd.Series(m)
df1['day'] = pd.Series(d)

#we train our data for regression case by calculating latitude from year,day,month ,longitude from year,day,month
x = df[['year','month','day']]
z = df['latitude']
x_train,x_test,y_train,y_test = train_test_split(x,z,random_state = 0)
#mean = x_train.mean(axis=0)
#std = x_train.std(axis=0)
#x_train = (x_train - mean) / std
#x_test = (x_test - mean) / std
#print(mean,std)
#mean = y_train.mean(axis=0)
#std = y_train.std(axis=0)
#y_train = (y_train - mean) / std
#y_test = (y_test - mean) / std --------> to normalize data if we need too
#print(mean,std)
def build_model():
  model = keras.Sequential([
    keras.layers.Dense(64, activation=tf.nn.relu,
                       input_shape=(x_train.shape[1],)),
    keras.layers.Dense(64, activation=tf.nn.relu),
    keras.layers.Dense(1)
  ])
  model.compile(loss='mse',
                optimizer='adam',
                metrics=['mae'])
  return model
model = build_model()
model.summary()

EPOCHS = 500
early_stop = keras.callbacks.EarlyStopping(monitor='val_loss', patience=20)
# Store training stats
history = model.fit(x_train,y_train, epochs=EPOCHS,
                    validation_split=0.2, verbose=0,callbacks = [early_stop])
[loss, mae] = model.evaluate(x_test,y_test, verbose=0)
print("Testing set Mean Abs Error: ${:7.2f}".format(mae * 1000))
##similarly we train our longitude like we did for latitude

#after this we would use it to classify the latitude and longitude via the model by providing the year, month and day using the best fit line and year wise as well as month wise plot.
