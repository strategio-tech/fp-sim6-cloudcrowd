![Logo of the project](https://user-images.githubusercontent.com/101753940/212770475-f84e8018-cb77-4896-b04f-d4728b6a966e.png)

# CloudTales 
> The Art of Storytelling In The Clouds

We all have stories to tell, whether they’re personal memories or experiences we want to share with others. CloudTales is a new app that allows you to do just that. With CloudTales, you can create both public and private stories from your life and share them with the world.

## Installing / Getting started

```shell
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```
Run these commands in your terminal to set up the website on your local machine. 

### Initial Configuration 
#### Google OAuth 
1. Go to the Google Cloud Console (**[https://console.cloud.google.com/](https://console.cloud.google.com/)**) and create a new project.
2. Once the project is created, navigate to the "Credentials" page.
3. On the Credentials page, click on the "Create credentials" button and select "OAuth client ID".
4. Select "Web application" as the application type and give it a name.
5. In the "Authorized JavaScript origins" field, enter the URL of your app's origin. For example, **[http://localhost:3000](http://localhost:3000/)**.
6. In the "Authorized redirect URIs" field, enter the callback URL that will handle the response from the Google OAuth server. For example, **[http://localhost:3000/auth/google/callback](http://localhost:3000/auth/google/callback)**.
7. Click the "Create" button.
8. Once the OAuth client ID is created, you will be able to see the client ID and client secret on the "Credentials" page.
9. Next, you will need to set up a MongoDB URI to connect to your MongoDB database. You can sign up for a free MongoDB Atlas account, which will give you a MongoDB URI that you can use in your project.
10. Once you have your Google OAuth client ID, client secret, and MongoDB URI, you can create a **`config.env`** file in your project's root directory to store these values. The file should contain the following:

```shell
GOOGLE_CLIENT_ID=<your_client_id>
GOOGLE_CLIENT_SECRET=<your_client_secret>
GOOGLE_CALLBACK_URL=<your_callback_url>
MONGODB_URI=<your_mongodb_uri>
```
1. Make sure to add **`config.env`** to your .gitignore file so that you don't accidentally commit sensitive information to your repository.
2. In your project, you can use **`process.env`** to access the values stored in the **`config.env`** file. For example, you can use **`process.env.GOOGLE_CLIENT_ID`** to access the Google OAuth client ID.
3. When your app is ready to be deployed, you can set the environment variables on the hosting platform.

It's important to note that you should never share your OAuth credentials with anyone and it should be protected in your server and never exposed to the client side.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/strategio-tech/fp-sim6-cloudcrowd/
cd fp-sim6-cloudcrowd/
npm install
```

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing

In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy awesome-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Features

What's all the bells and whistles this project can perform?
* What's the main functionality
* You can also do another thing
* If you get really randy, you can even do this

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

#### Argument 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Example:
```bash
awesome-project "Some other value"  # Prints "You're nailing this readme!"
```

#### Argument 2
Type: `Number|Boolean`  
Default: 100

Copy-paste as many of these as you need.

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Links

- Project homepage: http://restfulapp1-env.eba-k7cyv2pb.us-east-1.elasticbeanstalk.com/
- Repository: https://github.com/strategio-tech/fp-sim6-cloudcrowd/
- Issue tracker: https://github.com/strategio-tech/fp-sim6-cloudcrowd/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    sarahalcodes@email.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Project Blog: https://medium.com/@Matthew_Alvarez/1445a9c81a72


<!--Author -->
## Authors
- [@Nafisa-Huda](https://github.com/Nafisa-Huda)
- [@SarahAlCodes](https://github.com/SarahAlCodes)
- [@C0ding-K1D](https://github.com/C0ding-K1D)
- [@alejandroklever](https://github.com/alejandroklever)
- [@avrahamMayerfeld](https://github.com/avrahamMayerfeld)

## Licensing
The code in this project is licensed under MIT license.
