# API Reset Mi Águila

This API REST was generated with NODE JS and TypeScript

![architecture](https://raw.githubusercontent.com/linuxcarl/mi-.aguila/master/architecture.jpg)

## Installation

Installation

```
npm install
```

Run test

```
npm run test
```

Develop
If you want run mode develop, run the next line:

```
npm run dev
```

Compile app to js
If you want run mode production, first compile app, run the next line:

```
tsc
```

Production
If you want run mode production, run the next line:

```
npm run start
```

## API url

View all documentation
Open in your browser:

```
http://localhost:3000/docs/
```

Allowed routes:

### `/trips`

This route handles trips.

#### POST /trips

Create a trip record.

Data send in body as JSON.

```
{
   "start": {
      "date": "2019-01-25T03:00:00.000+0000",
      "pickup_address": "Cl 52A, México, Jalpa",
      "pickup_location": {
         "type": "Point",
         "coordinates": [
            -74.11872,
            4.683707
         ]
      }
   },
   "country": {
      "name": "México"
   },
   "city": {
      "name": "Jalpa"
   },
   "passenger": {
      "first_name": "Lizette",
      "last_name": "Ruiz"
   },
   "driver": {
      "first_name": "Carlo Enrique",
      "last_name": "Ramírez Flores"
   },
   "car": {
      "plate": "SEW34"
   },
   "status": "started",
   "check_code": "92",
   "createdAt":
       "2019-01-24T23:36:51.363+0000",
   "updatedAt": "2019-01-25T03:55:25.006+0000",
   "price": 34100,
   "driver_location": {
      "type": "Point",
      "coordinates": [
         -74.057076,
         4.6710186
      ]
   }
}
```

Response code 201:

```
{
    "error": false,
    "status": 201,
    "body": {
        "start": {
            "pickup_location": {
                "coordinates": [
                    -74.11872,
                    4.683707
                ],
                "type": "Point"
            },
            "date": "2019-01-25T03:00:00.000Z",
            "pickup_address": "Cl 52A, México, Guadalajara"
        },
        "end": {
            "pickup_location": {
                "coordinates": []
            }
        },
        "driver_location": {
            "coordinates": [
                -74.057076,
                4.6710186
            ],
            "type": "Point"
        },
        "_id": "5f5011204c7f0f542a9fb770",
        "country": {
            "name": "México"
        },
        "city": {
            "name": "Guadalajara"
        },
        "passenger": {
            "first_name": "Transporte",
            "last_name": "Mi Aguila"
        },
        "driver": {
            "first_name": "Ana Maria",
            "last_name": "Rubles Tamayo"
        },
        "car": {
            "plate": "SEW34"
        },
        "status": "started",
        "check_code": 92,
        "createdAt": "2019-01-24T23:36:51.363Z",
        "updatedAt": "2019-01-25T03:55:25.006Z",
        "price": 34100,
        "__v": 0
    }
}
```

#### GET /trips

Retrieve trips.

Response 200:

```
{
    "error": false,
    "status": 200,
    "body": [
        {
            "start": {
                "pickup_location": {
                    "coordinates": [
                        -74.11872,
                        4.683707
                    ],
                    "type": "Point"
                },
                "date": "2019-01-25T03:00:00.000Z",
                "pickup_address": "Cl 52A, México, Guadalajara"
            },
            "end": {
                "pickup_location": {
                    "coordinates": []
                }
            },
            "country": {
                "name": "México"
            },
            "city": {
                "name": "Jalpa"
            },
            "passenger": {
                "first_name": "Sara Lizette",
                "last_name": "Ruiz"
            },
            "driver": {
                "first_name": "Carlos Enrique",
                "last_name": "Ramírez Flores"
            },
            "car": {
                "plate": "SEW34"
            },
            "driver_location": {
                "coordinates": [
                    -74.057076,
                    4.6710186
                ],
                "type": "Point"
            },
            "_id": "5f5011204c7f0f542a9fb770",
            "status": "started",
            "check_code": 92,
            "createdAt": "2019-01-24T23:36:51.363Z",
            "updatedAt": "2020-09-02T23:00:48.260Z",
            "price": 34100,
            "__v": 0
        },
        {...},
        {...}
    ]
}
```

Response code 404:

```
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "Not Found",
}
```

#### GET /trips/total

#### GET /trips/total/?city=Colombia

Retrieve total trips.

Response 200:

```
{
    "error": false,
    "status": 200,
    "body": {
        "trips": 6
    }
}
```

### Tech

This project uses a number of open source package to work properly:

- [TypeScript](https://www.typescriptlang.org/) - extends JavaScript by adding types.
- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](http://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]
- [Cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS
- [Helmet](https://helmetjs.github.io/) - Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!
- [MongoDB](https://www.mongodb.com/es) - This database stores the trips
- [Mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment
- [Joi](https://github.com/hapijs/joi) - @hapi/joi Is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).
- [Boom](https://github.com/hapijs/boom) - @hapi/boom is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).
- [tslint](https://eslint.org/) - Find and fix problems in your TypeScript code.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [Husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [ts-jest](https://www.npmjs.com/package/ts-jest) - is a delightful JavaScript Testing Framework with a focus on simplicity.

### Author

- **Carlos Enrique Ramírez Flores** - _Backend Development_ - [GitHub](https://github.com/linuxcarl), [GitLab](https://gitlab.com/linux-carl), [Web Site](https://www.carlosramirezflores.com), [Linkedin](https://www.linkedin.com/in/carlos-enrique-ram%C3%ADrez-flores/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
