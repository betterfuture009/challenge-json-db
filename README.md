# Teamgrow backend_admin

## How to run
### Dev  
`npm run dev`
### Production
`npm run start`
### Required Env Variables

Files, docs, db, test db are stored in the following paths defined in `config/path`.

```
  module.exports.FILES_PATH = './files/'
```

#### PORT=3000

## Endpoints

### Student API. 
   
#### PUT  `api/student/:id/courses/calculus/quizzes/:scoreId`  
   
  Body: 
  ```
  {
    "email": "user@email.com",
    "user_name": "user",
    "password": "pwd"
    "time_zone": "+08:00"
    "cell_phone": "12345678",
    "email_signature": "",
    "notification": "",
    "picture_profile":"http://localhost:3000/api/file/949b4d70-a48d-11e8-a12f-dd03f72627a4.png"
  }
  ```

  Response:  
  
  HTTP Status: 200
  ```
    {
    "status": true
    }
  ```

  HTTP Status: 500
  ```
    {
        "status": false,
        "error": error
    }
  ```

  #### GET  `api/student/:id`  
   
  Response:
  ```
  {
      "status": true,
      "data": {
          "courses": {
              "calculus": {
                  "quizzes": {
                      "1": {
                          "english": "95",
                          "math": "99"
                      }
                  }
              }
          }
      }
  }
  ```


  HTTP Status: 500
  ```
    {
        "status": false,
        "error": "File Doesn't exist"
    }
  ```

  
  #### DELETE  `api/student/:id`  
   
  Response:
  HTTP Status: 200
  ```
    {
    "status": true
    }
  ```


  HTTP Status: 500
  ```
    {
        "status": false,
        "error": "File Doesn't exist"
    }
  ```

