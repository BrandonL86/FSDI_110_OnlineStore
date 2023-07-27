from flask import Flask, request
import json
from config import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # warning: disable CORS check

@app.get('/') #annotation
def home():
    return "Hello Python"


@app.get('/test')
def test():
    return "This is a test page"




############################################ ########################## API Products #########################  ############################################################################## JSON ########################################################
######################################################




catalog = []

def fix_id(record):
    record["_id"] = str(record["_id"])
    return record

@app.get('/api/products')
def get_products():
    results = []
    cursor = db.products.find({})
    for prod in cursor:
        results.append(fix_id(prod))
    
    # TODO: read products from DB and return them
    return json.dumps(results) 


@app.post('/api/products')
def save_product():
    product = request.get_json()
    db.products.insert_one(product)


    return json.dumps(fix_id(product))

products = [
    {
        'title': 'Product 1',
        'category': 'Category 1',
        'price': 10.99
    },
    {
        'title': 'Product 2',
        'category': 'Category 2',
        'price': 19.99
    },
]

@app.get('/api/products/count')
def get_products_count():
    cursor = db.products.find({})
    count = 0
    for prod in cursor:
        count += 1

    return json.dumps(count)


@app.get("/api/products/category/<Flowers>")
def get_products_by_category(Flowers):
    results = []
    cursor = db.products.find({})
    for prod in cursor:
        if prod["category"] == Flowers:
            results.append(fix_id(prod))

    return json.dumps(results)


# get /api/categories

# return the list of categories

# create an empty list

# get the products into a cursor

# travel cursor and get the category of the prod

# append the category to your list

# at the end, return the list

@app.get("/api/categories")
def get_categories():
    cursor = db.products.find({})
    results = []
    for prod in cursor:
        category = prod.get("category","NoCategory")
        if category not in results:
            results.append(category)

    results.sort()
    return json.dumps(results)


@app.get('/api/coupons')
def get_coupons():
    results = []
    cursor = db.coupons.find({})
    for coupon in cursor:
        results.append(fix_id(coupon))
    
    return json.dumps(results) 

@app.post('/api/coupons')
def saveCoupon():
    coupon = request.get_json()
    db.coupons.insert_one(coupon)
    return json.dumps(fix_id(coupon))

# SJC=124388
# Create an endpoint that return the number of products in the catalog
# the endpoint should respond to a get request on /api/products/count
# google - python count elements on a list


# start the server manually
app.run(debug=True)