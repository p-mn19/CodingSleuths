# Load dataset into a dictionary
dataset = {
    "Hi": "Hi how can i help you?",
    "order me a cup of coffee": "placing your order now...",
    "What are your most popular dishes?": "Our top dishes include our signature burgers, vegan salads, and Italian pasta.",
    "Can you recommend something that is frequently ordered by our customers?": "Yes, our chicken parmesan is a crowd favorite.",
    "What are the top-selling items on your menu?": "Burgers, pizzas, and salads are consistently top sellers.",
    "Do you have any customer favorites that we should try?": "Definitely try our BBQ ribs; they're a fan favorite.",
    "What dish do most people order when they come here for the first time?": "Many first-time visitors order our famous cheeseburgers.",
    "Are there any combo meals or deals that are popular among regulars?": "Yes, our lunch combos with sandwiches and fries are very popular.",
    "Can I get a list of best-selling drinks in your cafe?": "Our best-selling drinks include cappuccinos and fruit smoothies.",
    "Is there a particular dessert that customers love ordering after meals?": "Our chocolate lava cake is extremely popular for dessert.",
    "Do you have any vegetarian options that are highly recommended by users?": "Yes, our veggie quinoa bowl is highly recommended by vegetarians."
}

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')
    reply = dataset.get(user_message, "Sorry, I don't understand that.")
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
