
# CloudTales

## The Art of Storytelling In The Clouds

![Logo of the project](https://user-images.githubusercontent.com/101753940/212770475-f84e8018-cb77-4896-b04f-d4728b6a966e.png)

We all have stories to tell, whether they’re personal memories or experiences we want to share with others. CloudTales is a new app that allows you to do just that. With CloudTales, you can create both public and private stories from your life and share them with the world.

### **Live Demo**

Visit our open demo: [Demo Home Page](http://restfulapp1-env.eba-k7cyv2pb.us-east-1.elasticbeanstalk.com/)

### **Installing / Getting started**

First of all, you need to install the node dependencies

```shell
npm install
```

For the correct operation of the project you must setup in a `config.env` file located in the `config` folder some environment variables.

To obtain the value of these environment variables, you must create a MongoDB database in Atlas, and create a project in the Google Cloud Console to then create OAuth credentials

#### **Google OAuth Configuration**

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.

2. Once the project is created, navigate to the "Credentials" page.

3. On the Credentials page, click on the "Create credentials" button and select "OAuth client ID".

4. Select "Web application" as the application type and give it a name.

5. In the "Authorized JavaScript origins" field, enter the URL of your app's origin. For example, [http://localhost:3000](http://localhost:3000/).

6. In the "Authorized redirect URIs" field, enter the callback URL that will handle the response from the Google OAuth server. For example, [http://localhost:3000/auth/google/callback](http://localhost:3000/auth/google/callback).

7. Click the "Create" button.

8. Once the OAuth client ID is created, you will be able to see the client ID and client secret on the "Credentials" page.

#### **Atlas MongoDB Configuration**

1. Next, you will need to set up a MongoDB URI to connect to your MongoDB database.

2. You can sign up for a free [MongoDB Atlas](https://www.mongodb.com/) account.

3. Once logged you can create a new Shared Cluster that is cost free.

4. Select your Cloud Provider and Region, select a free Cluster Tier and give your cluster a name.

5. Once your Cluster is created you can get the connection url clicking in the connect button and selecting Connect Your App as your connection method

Once you have your Google OAuth client ID, client secret, and MongoDB URI, you can create a `config.env` file in your `config` directory to store these values. The file should contain the following:

```env
PORT = 3000
GOOGLE_CLIENT_ID=<your_client_id>
GOOGLE_CLIENT_SECRET=<your_client_secret>
GOOGLE_CALLBACK_URL=<your_callback_url>
MONGODB_URI=<your_mongodb_uri>
MONGODB_URI_TEST=<your_mongodb_uri> #it could be the same that MONGO_URI if you are just locally testing
```

#### **Warnings and Advices**

1. Make sure to add **`config.env`** to your **`.gitignore`** file so that you don't accidentally commit sensitive information to your repository.

2. In your project, you can use **`process.env`** to access the values stored in the **`config.env`** file. For example, you can use **`process.env.GOOGLE_CLIENT_ID`** to access the Google OAuth client ID.

3. When your app is ready to be deployed, you can set the environment variables on the hosting platform.

It's important to note that you should never share your OAuth credentials with anyone and it should be protected in your server and never exposed to the client side.

### **Developing**

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/strategio-tech/fp-sim6-cloudcrowd/

cd fp-sim6-cloudcrowd/

npm install
```

### **Architecture Diagram**

![Architecture Diagram](https://user-images.githubusercontent.com/44050391/213292281-d5e959b3-7976-45a1-a580-eab308ecfcd4.png)


### **Building**

The process for creating, designing, and monitoring the software application.

### **Deploying / Publishing**

- AWS CodeDeploy is used to automate our applications deployments and set AWS Elastic Beanstalk as the deploy provider. For a step-by-step tutorial on how to use Beanstalk follow [this guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html)

- AWS CloudWatch iss used to continue monitoring our application after it is successfully deployed. With CloudWatch we’re able to collect and track metrics, as well as, access log files for our application. For a step-by-step tutorial on how to use Cloudwatch follow [this guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html)

### **Features**

- User Authentication with Google OAuth

- Users can create as many personal stories to CloudTales privately for themselves to view or publicly for other users to view

- Users are able to view other users' accounts to see their stories

- Users can edit their personal stories

- Users can delete their personal stories

### **Contributing**

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

### **Links**

- Repository: <https://github.com/strategio-tech/fp-sim6-cloudcrowd/>

- Issue tracker: <https://github.com/strategio-tech/fp-sim6-cloudcrowd/issues>

  - In case of sensitive bugs like security vulnerabilities, please contact sarahalcodes@email.com directly instead of using issue tracker. We value your effort to improve the security and privacy of this project!

- Project Blog: <https://medium.com/@Matthew_Alvarez/1445a9c81a72>

<!--Author -->
### **Authors**

- [@Nafisa-Huda](https://github.com/Nafisa-Huda)

- [@SarahAlCodes](https://github.com/SarahAlCodes)

- [@C0ding-K1D](https://github.com/C0ding-K1D)

- [@alejandroklever](https://github.com/alejandroklever)

- [@avrahamMayerfeld](https://github.com/avrahamMayerfeld)

### **Licensing**

The code in this project is licensed under MIT license.
