## Object-Relational Mapping (ORM) Challenge: E-commerce Back End

1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Features. ](#features)
5. [ Credits. ](#credits)
6. [ Licenses. ](#licenses)
7. [ Install Command. ](#commandInstall)
8. [ Test Command. ](#commandTest)
9. [ Contributing. ](#contributing)
9. [ Questions. ](#questions)

### For license description, click on the badge to get more information.
[![License](https://img.shields.io/badge/License-MIT%20-blue.svg)](https://opensource.org/licenses/mit)

<a name="desc"></a>
## 1. Description

This application is a backend application servicing front end routes and using MySQL database with Node.Js, Express, Sequelize and dotenv.

### Major tech snapshot

![tech](./assets/images/code-used.JPG?raw=true "code-used.JPG")

<a name="web-address"></a>
## 2. How to Get There

### Open your favorite web browser and enter the following web address to access to the README.md

https://github.com/esroleo/employee-tracker


<a name="usage"></a>
## 3. Usage Tips

For more information - Please visit the following videos on how the application works and some background information on OOP build.

Part 1

https://drive.google.com/file/d/1Zyrp9xGGHMUgavJ0maclr-Fy3khwZhAI/view


Part 2

https://drive.google.com/file/d/1rrdGjDfXXBAhJCULTVtFThZ9iggzaNVh/view

If you want to run locally preform the following:

This application is running under mysql as a local host, you can modify the .env file with your own user/password to start the application.

If you are still intersted in running the application you would need to do the following:
* run mysql terminal at project source location
  source db/schema.sql
* npm i
* npm run seed
* npm start
* use Insomnia (use videos and sample snaphots using Insomnia for Product model.

<a name="features"></a>
## 4. Features

### GET (Select All), GET by id (Select by ID), POST (Create), PUT (Update), DELETE (Destroy)

Functionality of one route as example:

### GET all products.

![step](./assets/images/insomnia_get_all_products.JPG?raw=true "insomnia_get_all_products.JPG")

### GET product by ID.

![step](./assets/images/insomnia_get_all_products_by_id.JPG?raw=true "insomnia_get_all_products_by_id.JPG")

### POST/Create product.

![step](./assets/images/insomnia_post_create_product.JPG?raw=true "insomnia_post_create_product.JPG")

### PUT/Update product by ID.

![step](./assets/images/insomnia_put_update.JPG?raw=true "insomnia_put_update.JPG")

### GET product by ID after update.

![step](./assets/images/insomnia_get_all_products_by_id_updated.JPG?raw=true "insomnia_get_all_products_by_id_updated.JPG")

### DELETE product by ID.

![step](./assets/images/insomnia_delete_by_id.JPG?raw=true "insomnia_delete_by_id.JPG")

### GET product after delete not found.

![step](./assets/images/insomnia_get_all_products_by_id_notfound.JPG?raw=true "insomnia_get_all_products_by_id_notfound.JPG")



<a name="credits"></a>
## 5. Credits

Thank you Esteban Romero for working on this project.

<a name="licenses"></a>
## 6. Licenses

mit

<a name="commandInstall"></a>
## 7. Install Command

### Database dependency is --> mysql Ver 8.0.23 for Win64 on x86_64  
### npm install command will install javascript dependencies

npm i

<a name="commandTest"></a>
## 8. Test Command

You can sync model changes by changing **force: false** to true. This will also remove all data and start fresh.

You can use this for testing or to remove all data.

@ server.js line 14

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


<a name="contributing"></a>
## 9. Contributing

Please email Esteban Romero.

<a name="questions"></a>
## 10. Questions

Please reach out to me

GitHub Url: https://github.com/esroleo

Email address: esroleo@gmail.com

