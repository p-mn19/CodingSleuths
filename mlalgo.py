import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Step 1: Import the dataset
df = pd.read_csv('orders_data.csv')

# Step 2: Data Preprocessing
# Ensure 'Order_Date' is in datetime format
df['Order_Date'] = pd.to_datetime(df['Order_Date'])

# Extract day of the week (0=Monday, 6=Sunday) and whether it's a weekend (1 if weekend)
df['Day_of_week'] = df['Order_Date'].dt.dayofweek
df['Is_weekend'] = df['Day_of_week'].apply(lambda x: 1 if x >= 5 else 0)

# Step 3: Aggregating Data for Recommendation
# Calculate average preparation time and frequency for each item
item_stats = df.groupby('Order_Items').agg(
    avg_prep_time=('Preparation_Time_min', 'mean'),  # average preparation time per item
    order_frequency=('Order_Items', 'count')        # frequency of each item
).reset_index()

# Step 4: Merge aggregated stats back into the original dataset
df = df.merge(item_stats, on='Order_Items', how='left')

# Step 5: Feature Engineering for the model
# We'll use 'avg_prep_time', 'order_frequency', 'Is_weekend', and 'Day_of_week' as features.
X = df[['avg_prep_time', 'order_frequency', 'Is_weekend', 'Day_of_week']]

# Our target variable (what we're trying to predict) will be the 'Order_Items'
y = df['Order_Items']

# Step 6: Train-Test Split
# Split data into train and test sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 7: Model Training
# Train a RandomForestClassifier model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Step 8: Predict the best item(s) (for new customer or order)
best_item_predictions = model.predict(X_test)

# You can now display or process the predictions
print("Predicted best order items:", best_item_predictions)

# Optionally, you can calculate the accuracy or other metrics on the test set:
accuracy = model.score(X_test, y_test)
print(f"Model accuracy: {accuracy:.2f}")

# Step 9: Generate Recommendation (for a given context)
# You could create a function to recommend the best item based on input features like time of day or weekend status
def recommend_best_order(time_of_day, order_day):
    # Prepare the input features (you might need to convert time_of_day into categories or numeric values)
    is_weekend = 1 if order_day >= 5 else 0  # Assume order_day is an integer (0-6)
    
    # Make the prediction
    input_features = pd.DataFrame([[time_of_day, is_weekend]], columns=['avg_prep_time', 'order_frequency', 'Is_weekend', 'Day_of_week'])
    recommended_item = model.predict(input_features)
    return recommended_item

# Example of using the recommendation function
recommended_order = recommend_best_order(time_of_day=12, order_day=3)  # Example input
print("Recommended best order item:", recommended_order)


