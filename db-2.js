db.createCollection('users');

db.users.insertMany([
    {
        name: 'John',
        last_names: 'Doe',
        email: 'john.doe@example.com',
        city: 'New York',
        country: 'USA',
        salary: 6000,
        age: 40,
        height: 180,
        weight: 75
    },
    {
        name: 'Alice',
        last_names: 'Smith',
        email: 'alice.smith@example.com',
        city: 'Los Angeles',
        country: 'USA',
        salary: 5500,
        age: 28,
        height: 165,
        weight: 60
    },
    {
        name: 'Mohammed',
        last_names: 'Ali',
        email: 'm.ali@example.com',
        city: 'Dubai',
        country: 'UAE',
        salary: 7000,
        age: 35,
        height: 175,
        weight: 80
    },
    {
        name: 'Juan',
        last_names: 'Perez',
        email: 'ejemplo@correo.com',
        city: 'Jalisco',
        country: 'Mexico',
        salary: 5300,
        age: 32,
        height: 170,
        weight: 70
    },
    // Agrega más usuarios aquí con sus respectivas edades, alturas y pesos
    {
        name: 'Anna',
        last_names: 'Johnson',
        email: 'anna.johnson@example.com',
        city: 'Toronto',
        country: 'Canada',
        salary: 5800,
        age: 23,
        height: 160,
        weight: 55
    },
    {
        name: 'Andrea',
        last_names: 'Martinez',
        email: 'otro@ejemplo.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 5270,
        age: 31,
        height: 170,
        weight: 65
    },
    {
        name: 'Yuki',
        last_names: 'Tanaka',
        email: 'yuki.tanaka@example.com',
        city: 'Tokyo',
        country: 'Japan',
        salary: 6300,
        age: 27,
        height: 155,
        weight: 50
    },
    {
        name: 'Sophie',
        last_names: 'Lefevre',
        email: 'ejemplo@correo.com',
        city: 'Paris',
        country: 'France',
        salary: 4600,
        age: 33,
        height: 168,
        weight: 63
    },
    // Continúa agregando usuarios con sus respectivas edades, alturas y pesos
    {
        name: 'Chen',
        last_names: 'Wei',
        email: 'chen.wei@example.com',
        city: 'Beijing',
        country: 'China',
        salary: 6320,
        age: 29,
        height: 175,
        weight: 70
    },
    {
        name: 'Antonio',
        last_names: 'Russo',
        email: 'antonio.russo@example.com',
        city: 'Rome',
        country: 'Italy',
        salary: 4000,
        age: 34,
        height: 180,
        weight: 78
    },
    {
        name: 'Emma',
        last_names: 'Wilson',
        email: 'emma.wilson@example.com',
        city: 'London',
        country: 'UK',
        salary: 3600,
        age: 31,
        height: 165,
        weight: 55
    },
    {
        name: 'Carlos',
        last_names: 'Gonzalez',
        email: 'carlos.gonzalez@example.com',
        city: 'Guadalajara',
        country: 'Mexico',
        salary: 5400,
        age: 59,
        height: 170,
        weight: 75
    },
    {
        name: 'Hans',
        last_names: 'Schmidt',
        email: 'hans.schmidt@example.com',
        city: 'Berlin',
        country: 'Germany',
        salary: 7200,
        age: 35,
        height: 185,
        weight: 80
    },
    {
        name: 'Anastasia',
        last_names: 'Ivanova',
        email: 'anastasia.ivanova@example.com',
        city: 'Moscow',
        country: 'Russia',
        salary: 8300,
        age: 30,
        height: 170,
        weight: 65
    },
    {
        name: 'David',
        last_names: 'Lee',
        email: 'david.lee@example.com',
        city: 'Bogota',
        country: 'Colombia',
        salary: 7500,
        age: 32,
        height: 175,
        weight: 72
    },
    {
        name: 'Elena',
        last_names: 'Martinez',
        email: 'elena.martinez@example.com',
        city: 'Barcelona',
        country: 'Spain',
        salary: 5800,
        age: 51,
        height: 163,
        weight: 60
    },
    {
        name: 'Luca',
        last_names: 'Conti',
        email: 'luca.conti@example.com',
        city: 'Milan',
        country: 'Italy',
        salary: 9000,
        age: 29,
        height: 175,
        weight: 68
    },
    {
        name: 'Maria',
        last_names: 'Ali',
        email: 'fatima.ali@example.com',
        city: 'Cairo',
        country: 'Egypt',
        salary: 6900,
        age: 33,
        height: 160,
        weight: 65
    },
    {
        name: 'Pedro',
        last_names: 'Lopez',
        email: 'javier.lopez@example.com',
        city: 'Madrid',
        country: 'Spain',
        salary: 2700,
        age: 30,
        height: 170,
        weight: 75
    },
    {
        name: 'Sophia',
        last_names: 'Kim',
        email: 'sophia.kim@example.com',
        city: 'Seoul',
        country: 'South Korea',
        salary: 4720,
        age: 31,
        height: 167,
        weight: 58
    },
    {
        name: 'Mateo',
        last_names: 'Fernandez',
        email: 'mateo.fernandez@example.com',
        city: 'Buenos Aires',
        country: 'Argentina',
        salary: 5900,
        age: 28,
        height: 172,
        weight: 70
    },
    {
        name: 'Nina',
        last_names: 'Smirnova',
        email: 'nina.smirnova@example.com',
        city: 'St. Petersburg',
        country: 'Russia',
        salary: 1700,
        age: 32,
        height: 168,
        weight: 63
    },
    {
        name: 'Oliver',
        last_names: 'Jones',
        email: 'oliver.jones@example.com',
        city: 'Sydney',
        country: 'Australia',
        salary: 6100,
        age: 30,
        height: 180,
        weight: 75
    }
])

// Incrementar el salario de todos los usuarios en un 10%.

db.users.updateMany({},
     { $mul: { salary: 1.1 } 
});

// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

db.users.updateMany(
    { city: "New York" }, 
    { $set: { city: "Los Angeles" } 
});

// Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez"

db.users.updateOne(
    { name: "Juan", last_names: "Perez" },
     { $addToSet: { emails: "nuevo@correo.com" } 
});

// Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

db.users.updateOne(
    { email: "ejemplo@correo.com" },
     { $set: { age: 35 } 
});

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users.updateMany(
    { country: 'Mexico'}, 
    { $set: { country: 'Canada' } 
});

// Aumentar la altura de todos los usuarios en 5 centímetros.

db.users.updateMany(
    {},
    { $inc: { height: 5}}
);

// Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

db.users.updateMany(
    { email: "otro@ejemplo.com"},
    { $set: { last_names: 'Gonzales'}
});

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.users.updateMany(
    { name: 'Maria' },
    { $set: { weight: 140}}
);

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

db.users.updateMany(
    { country: 'USA'},
    { $mul: { salary: 1.5}}
);

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

db.users.updateMany(
    { name: 'Pedro'},
    { $set: { email: 'nuevo_correo@riwi.co'}}
);

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.users.updateMany(
    { age: {$lte: 30}},
    { $set: {age: 30}}
);


// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

db.users.updateMany(
    { salary: {$lt: 3000}},
    { $mul: { salary: 2.0}}
);

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

db.users.updateMany(
    { city: 'Bogota'},
    { $set: {city: 'Medellin'}}
);

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

db.users.updateMany(
    { salary: {$gt: 5000}},
    { $set: { country: 'Australia'}}
);

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

db.users.updateMany(
    { age: {$gt: 50}},
    { $inc: {age: -5}}
);

// Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

db.users.updateMany(
    { weight: {$gt: 200}},
    { $set: {weight: 180}}
);

// Incrementar el salario de los usuarios que viven en "London" en un 25%.

db.users.updateMany(
    { city: 'London'},
    { $mul: { salary: 2.5}}
);

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

db.users.updateMany(
    { salary: {$gt: 4000}},
    { $set: {last_names: 'Smith'}}
);

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

db.users.updateMany(
    { nombre: {$regex: /^A/ } },
    { $set: { email: 'nuevo@riwi.es'}}
);

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

db.users.updateMany(
    { height: {$lt: 160}},
    { $set: { city: 'Paris'}}
);


///////////ELIMINAR///////////


// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares. 

db.users.deleteMany(
    { salary: {$lt: 2000}}
);

// Eliminar usuarios que tienen una edad menor que 25 años.

db.users.deleteMany(
    { age: {$lt: 25}}
);

// Borrar todos los usuarios que viven en "París".

db.users.deleteMany(
    { city: {$eq: 'Paris'}}
);

// Eliminar usuarios que tienen un peso superior a 180 libras.

db.users.deleteMany(
    { weight: {$gt: 180}}
);

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.

db.users.deleteMany(
    { height: {$lt: 160}}
);

// Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

db.users.deleteMany({
    $and: [
        { nombre: 'John' },
        { last_names: 'Doe' }
    ]
});

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

db.users.deleteMany(
    { email: {$eq: 'riwi.io'}}
);

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.users.delteMany(
    { email: {$exists: false}}
);

// Eliminar usuarios que viven en "Tokyo".

db.users.deleteMany(
    { city: {$eq: 'Tokyo'}}
);

// Borrar todos los usuarios que son menores de 18 años.

db.users.deleteMany(
    { age: {$lt: 18} }
);

// Eliminar usuarios que tienen un salario igual a 0.

db.users.deleteMany(
    { salary: {$eq: 0} }
);

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users.deleteMany({
    $and: [
        { city: 'New York' },
        { salary: {$gt: 5000}}
    ]
});

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users.deleteMany(
    { email: {$regex: /spam/}}
);

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.

db.users.deleteMany({
    $and: [
        { city: 'Bello'},
        { age: {$gt: 50}}
    ]
});


// Eliminar todos los usuarios que tienen el apellido "González".

db.users.deleteMany(
    { last_names: {$eq: 'González'}}
);

// Borrar usuarios que tienen una edad superior a 70 años.

db.users.deleteMany(
    { age: {$gt: 70}}
);

// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.


db.users.deleteMany({
    $and: [
        { country: {$eq: 'Canada'}},
        { salary: {$lt: 4000}}
    ]
});

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.users.deleteMany(
    { salary: {$gte: 1000, $lte: 2000}}
);

// Eliminar usuarios que tienen una edad igual a 30 años.

db.users.deleteMany(
    { age: {$eq: 30}}
);

// Borrar usuarios que tienen una altura superior a 190 centímetros.

db.users.deleteMany(
    { height: {$gt: 190}}
);
