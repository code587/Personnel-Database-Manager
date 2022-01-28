INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Marketing'),
    ('Legal');

INSERT INTO roles   
    (title, salary, department_id)
VALUES
    ('Sales Manager', 90000, 1),
    ('Jr Software Engineer', 61000, 2),
    ('Controller', 110000, 3),
    ('Social Media Coordinator', 48000, 4),
    ('Accountant', 57500, 3),
    ('Legal Aanalyst', 65000, 5),
    ('General Counsel', 132000, 5),
    ('Sales Assistant', 40000, 1);


INSERT INTO employee
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('Dean', 'Winchester', 1, 200),
    ('Bruno', 'Mars', 4, 201),
    ('Dojo', 'Cat', 7, 203),
    ('Kerry', 'Washington', 2, 204),
    ('KeKe', 'Palmer', 8, 205),
    ('Queen', 'Latifah', 5, 206),
    ('Tim', 'McGraw', 3, 207);



