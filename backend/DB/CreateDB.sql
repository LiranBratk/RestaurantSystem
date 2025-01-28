-- \i

-- DROP TABLES IF THEY ALREADY EXIST (FOR CLEAN SETUP)
DROP TABLE IF EXISTS orders, order_items, dishes, categories, dishes_ingredients, ingredients, staff CASCADE;

-- CREATE TABLE: Categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- CREATE TABLE: Dishes
CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT REFERENCES categories(id),
    image_url TEXT
);

-- CREATE TABLE: Ingredients
CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    extra_cost DECIMAL(10, 2) DEFAULT 0
);

-- CREATE TABLE: Dish Ingredients (Many-to-Many Relationship)
CREATE TABLE dish_ingredients (
    dish_id INT REFERENCES dishes(id) ON DELETE CASCADE,
    ingredient_id INT REFERENCES ingredients(id) ON DELETE CASCADE,
    PRIMARY KEY (dish_id, ingredient_id)
);

-- CREATE TABLE: Staff
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50),
    face_recognition_data TEXT
);

-- CREATE TABLE: Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(id),
    table_number INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE: Order Items
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    dish_id INT REFERENCES dishes(id),
    quantity INT NOT NULL DEFAULT 1,
    special_instructions JSONB DEFAULT '{}'
);
