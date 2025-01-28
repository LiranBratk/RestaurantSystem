-- \i

-- Populate Categories
INSERT INTO categories (name) VALUES
('Sushi'),
('Wok'),
('Drinks'),
('Desserts');

-- Populate Dishes
INSERT INTO dishes (name, price, category_id, image_url) VALUES
('California Roll', 8.99, 1, 'https://example.com/california-roll.jpg'),
('Spicy Tuna Roll', 9.99, 1, 'https://example.com/spicy-tuna-roll.jpg'),
('Pad Thai', 12.99, 2, 'https://example.com/pad-thai.jpg'),
('Green Tea', 3.50, 3, 'https://example.com/green-tea.jpg'),
('Ice Cream Sundae', 6.99, 4, 'https://example.com/ice-cream-sundae.jpg');

-- Populate Ingredients
INSERT INTO ingredients (name, extra_cost) VALUES
('Avocado', 0.50),
('Spicy Mayo', 0.25),
('Shrimp', 1.00),
('Peanuts', 0.30),
('Chocolate Syrup', 0.40);

-- Populate Dish Ingredients
INSERT INTO dish_ingredients (dish_id, ingredient_id) VALUES
(1, 1), -- California Roll + Avocado
(1, 3), -- California Roll + Shrimp
(2, 2), -- Spicy Tuna Roll + Spicy Mayo
(3, 4), -- Pad Thai + Peanuts
(5, 5); -- Ice Cream Sundae + Chocolate Syrup

-- Populate Staff
INSERT INTO staff (name, role, face_recognition_data) VALUES
('Alice', 'Waitress', 'data1'),
('Bob', 'Chef', 'data2'),
('Charlie', 'Manager', 'data3');

-- Populate Orders
INSERT INTO orders (staff_id, table_number) VALUES
(1, 5),
(2, 2);

-- Populate Order Items
INSERT INTO order_items (order_id, dish_id, quantity, special_instructions) VALUES
(1, 1, 2, '{"1": 3, "3": 3}'), -- California Roll with extra Avocado and Shrimp
(1, 4, 1, '{}'),              -- Green Tea, no instructions
(2, 3, 1, '{"4": 2}');        -- Pad Thai with reduced Peanuts
