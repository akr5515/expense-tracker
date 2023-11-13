# expense-tracker
Expense tracker developed with react, mui,chartjs, typescript, nestJS, prisma, postgresql, docker etc.

## Deployment
Coming Soon!
## Demo Screenshot

![Homepage](expense-tracker-FE/src/assets/demo.png)

## Setup Guide
Clone the repository in your local computer. Open the project in VScode. Follow the steps to fully setup the project:
### Frontend Setup
Goto terminal on project folder & write the following command: 
```
cd expense-tracker-FE
```
After that install all the necessary dependencies:
```
yarn
```
or
```
npm i
```

Then run the project by:
```
yarn run dev
```
or
```
npm run dev
```
Then access the link provided in the terminal to open your frontend.
### Server Setup
Now open a new terminal & from your root folder goto the backend folder using the command:
```
cd expense-tracker-be
```
Now run the command to setup all the dependencies:
```
yarn
```
#### Database Setup
To use postgres in your system you can use it in your local machine or you can use docker to containerize the database.
For docker setup, run the command:
```
docker compose up dev-db -d
```
for linux: 
```
sudo docker compose up dev-db -d
```
It will containerize the docker image and run it based on the ``docker-compose.yml`` file.

Now we need to migrate the prisma schema with our postgres database container. Run the command to migrate it:
```
npx prisma migrate dev
```
After migration has been completed, you can check the database using prisma studio:
```
npx prisma studio
```

### Finishing Server Setup
Now run the following command to run your backend system:
```
yarn start:dev
```

# Happy Coding!!!