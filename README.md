## School Manager

School Manager is a simple Web REST API and web pages to simulate a process school and management information about operation process. I made it as a project as part of my graduate in Software Engineering.

## Features
- [x] CRUD on Students
- [x] CRUD on Subjects
- [x] CRUD on Rooms
- [x] CRUD on Professors
- [x] CRUD on Classes
- [x] CRUD on Rolls
- [x] CRUD on reserve

## Getting Started

First, we need clone the repository.

```
  # clone the repository
  $ git clone http://github.com/costajvsc/gerenciador_sala.git && cd gerenciador_sala
```

### Start API 

Second, we need install the dependency on application.

```
  # install dependecy
  $ cd server
  $ comporser install  
```

Before, run those commmand to install migrations.

```
  php artisan migrate
```

To finish, start the REST API service.

```
  php -S localhost:8000 -t public
```

## License

Distributed under the MIT License.
 
 ## Contact

João Victor - [LinkedIn](https://www.linkedin.com/in/victor-costa-jvsc/) - costa.jvsc@gmail.com

Project Link: [https://github.com/costajvsc/dailytasks](https://github.com/costajvsc/crud_java_oo)
